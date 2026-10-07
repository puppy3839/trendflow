// ==========================================================================
// TrendFlow - High Performance Visual Charting Engine
// Provides standalone Canvas rendering + Chart.js bridge (Zero-dependency guarantee)
// ==========================================================================

const TrendFlowCharts = (function() {
  // Color palette helpers
  const PALETTE = {
    violet: '#8b5cf6',
    cyan: '#06b6d4',
    pink: '#ec4899',
    amber: '#f59e0b',
    emerald: '#10b981',
    blue: '#3b82f6',
    rose: '#ef4444',
    slate: '#64748b',
    darkBg: '#111827',
    glassBg: 'rgba(255, 255, 255, 0.04)',
    border: 'rgba(255, 255, 255, 0.08)'
  };

  /**
   * Render a sleek curved Line Chart for Trend Growth over Time
   */
  function renderGrowthChart(canvasId, timelineData, domainColor = PALETTE.violet) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Resize for crisp high-DPI displays
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || 600;
    const height = rect.height || 260;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const labels = timelineData.labels;
    const data = timelineData.mentions;
    const maxVal = Math.max(...data) * 1.15;
    const minVal = 0;

    const padLeft = 55;
    const padRight = 30;
    const padTop = 30;
    const padBottom = 40;
    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Draw horizontal grid lines & labels
    const gridSteps = 4;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
    ctx.lineWidth = 1;
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px Outfit, Inter, sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    for (let i = 0; i <= gridSteps; i++) {
      const yVal = minVal + (maxVal - minVal) * (i / gridSteps);
      const yPos = padTop + chartH - (i / gridSteps) * chartH;
      
      // Line
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.moveTo(padLeft, yPos);
      ctx.lineTo(width - padRight, yPos);
      ctx.stroke();
      ctx.setLineDash([]);

      // Label (format e.g. 15k)
      const labelText = yVal >= 1000 ? (yVal / 1000).toFixed(0) + 'k' : Math.round(yVal);
      ctx.fillText(labelText, padLeft - 10, yPos);
    }

    // Calculate coordinate points
    const points = data.map((val, idx) => {
      const x = padLeft + (idx / (data.length - 1)) * chartW;
      const y = padTop + chartH - ((val - minVal) / (maxVal - minVal)) * chartH;
      return { x, y, val, label: labels[idx] };
    });

    // Draw X-axis labels
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    points.forEach(pt => {
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(pt.label, pt.x, height - padBottom + 12);
    });

    if (points.length < 2) return;

    // Gradient fill under the curve
    const grad = ctx.createLinearGradient(0, padTop, 0, padTop + chartH);
    grad.addColorStop(0, hexToRgba(domainColor, 0.35));
    grad.addColorStop(0.7, hexToRgba(domainColor, 0.08));
    grad.addColorStop(1, hexToRgba(domainColor, 0.0));

    // Draw Smooth Area Curve using Bezier
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cx = (p0.x + p1.x) / 2;
      ctx.bezierCurveTo(cx, p0.y, cx, p1.y, p1.x, p1.y);
    }
    // Complete closed path for fill
    ctx.lineTo(points[points.length - 1].x, padTop + chartH);
    ctx.lineTo(points[0].x, padTop + chartH);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Draw Glowing Line Stroke
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cx = (p0.x + p1.x) / 2;
      ctx.bezierCurveTo(cx, p0.y, cx, p1.y, p1.x, p1.y);
    }
    ctx.strokeStyle = domainColor;
    ctx.lineWidth = 3;
    ctx.shadowColor = domainColor;
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.shadowBlur = 0; // reset

    // Draw Points with glowing circles
    points.forEach((pt, index) => {
      // Outer glow circle
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = domainColor;
      ctx.fill();

      // Inner white center
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // Value pill over peak point
      if (index === points.length - 1 || index === Math.floor(points.length / 2)) {
        drawValuePill(ctx, pt.x, pt.y - 14, pt.val.toLocaleString() + ' mentions', domainColor);
      }
    });
  }

  /**
   * Draw stylish value pill tooltip above peak nodes
   */
  function drawValuePill(ctx, x, y, text, color) {
    ctx.font = 'bold 10px Outfit, Inter, sans-serif';
    const textW = ctx.measureText(text).width;
    const pW = textW + 14;
    const pH = 20;
    const rx = Math.max(10, Math.min(x - pW / 2, ctx.canvas.width / (window.devicePixelRatio || 1) - pW - 10));
    const ry = y - pH;

    ctx.save();
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    
    // Rounded rect
    roundRect(ctx, rx, ry, pW, pH, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, rx + pW / 2, ry + pH / 2);
    ctx.restore();
  }

  /**
   * Render an interactive Donut / Pie Chart for Sector Analysis & Community
   */
  function renderDonutChart(canvasId, chartData, options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width || 300;
    const height = rect.height || 260;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const labels = chartData.labels;
    const values = chartData.values;
    const colors = chartData.colors || [PALETTE.violet, PALETTE.cyan, PALETTE.pink, PALETTE.amber, PALETTE.emerald];
    const total = values.reduce((a, b) => a + b, 0);

    const centerX = width / 2;
    const centerY = height / 2 - 10;
    const outerRadius = Math.min(centerX, centerY) * 0.78;
    const innerRadius = options.isPie ? 0 : outerRadius * 0.62;

    ctx.clearRect(0, 0, width, height);

    let startAngle = -Math.PI / 2;

    values.forEach((val, i) => {
      const sliceAngle = (val / total) * Math.PI * 2;
      const endAngle = startAngle + sliceAngle;
      const color = colors[i % colors.length];

      // Draw Donut segment
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
      if (!options.isPie) {
        ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
      } else {
        ctx.lineTo(centerX, centerY);
      }
      ctx.closePath();

      ctx.fillStyle = color;
      ctx.shadowColor = hexToRgba(color, 0.4);
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Slice border line
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      startAngle = endAngle;
    });

    // Center display for Donut
    if (!options.isPie) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, innerRadius - 2, 0, Math.PI * 2);
      ctx.fillStyle = '#0f172a';
      ctx.fill();

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 16px Outfit, Inter, sans-serif';
      ctx.fillText(options.centerTitle || '100%', centerX, centerY - 6);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px Outfit, Inter, sans-serif';
      ctx.fillText(options.centerSub || 'Distribution', centerX, centerY + 12);
    }
  }

  /**
   * Helper: Rounded rectangle
   */
  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  /**
   * Convert Hex to RGBA
   */
  function hexToRgba(hex, alpha = 1) {
    let c = hex.replace('#', '');
    if (c.length === 3) {
      c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
    }
    const num = parseInt(c, 16);
    return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
  }

  return {
    renderGrowthChart,
    renderDonutChart,
    hexToRgba
  };
})();
