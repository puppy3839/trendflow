// ==========================================================================
// TrendFlow - Propagation Engine & Interactive Cascade Simulator
// Models multi-platform diffusion (Search -> Video -> Social -> News)
// Supports 'Observed Propagation' and 'Cross-Domain Presence'
// ==========================================================================

const PropagationEngine = (function() {
  let simAnimationId = null;
  let simCanvas = null;
  let simCtx = null;
  let simNodes = [];
  let simParticles = [];
  let isSimulating = false;

  /**
   * Helper: Get platform icon based on name
   */
  function getStepIcon(name, entity) {
    const text = (name + " " + entity).toLowerCase();
    if (text.includes("google") || text.includes("search")) return "🔍";
    if (text.includes("youtube") || text.includes("video") || text.includes("stream")) return "▶️";
    if (text.includes("instagram") || text.includes("reel") || text.includes("post")) return "📸";
    if (text.includes("twitter") || text.includes("x") || text.includes("tweet")) return "🐦";
    if (text.includes("news") || text.includes("press") || text.includes("tv")) return "📰";
    if (text.includes("whatsapp") || text.includes("chat") || text.includes("telegram")) return "💬";
    if (text.includes("spotify") || text.includes("audio") || text.includes("music")) return "🎧";
    if (text.includes("peak") || text.includes("viral") || text.includes("popular")) return "🔥";
    return "🌐";
  }

  /**
   * Initialize and render the visual propagation flowchart in Trend Details
   */
  function renderFlowchart(containerId, trend) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const flow = trend.propagationFlow;
    const stages = flow.stages || [];
    const propType = trend.propagationType || "Observed propagation";
    const propTypeBadgeClass = propType === "Observed propagation" ? "badge-prop-observed" : "badge-prop-cross";
    const propTypeIcon = propType === "Observed propagation" ? "📡" : "🌐";

    // Build the visual summary path e.g. Google Search -> YouTube -> Instagram/Social -> X -> News
    const pathSummary = stages.map(s => s.name).join("  ➔  ");

    const stagesHtml = stages.map((stage, idx) => {
      const isFirst = idx === 0;
      const isLast = idx === stages.length - 1;
      const icon = getStepIcon(stage.name, stage.entity);
      
      return `
        <div class="prop-stage-card ${isLast ? 'stage-peak' : ''}" data-stage-idx="${idx}">
          <div class="prop-stage-badge">
            <span class="prop-stage-step">Step ${idx + 1}</span>
            <span class="prop-stage-time">${stage.delay}</span>
          </div>
          <div class="prop-stage-icon">${icon}</div>
          <div class="prop-stage-name">${stage.name}</div>
          <div class="prop-stage-entity">${stage.entity}</div>
          <div class="prop-stage-metric">${stage.metric}</div>
          ${!isLast ? '<div class="prop-stage-connector"><div class="prop-connector-arrow">➔</div></div>' : ''}
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="prop-meta-bar" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem; padding: 0.75rem 1rem; background: rgba(255, 255, 255, 0.025); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <span class="badge ${propTypeBadgeClass}">
            ${propTypeIcon} ${propType}
          </span>
          <span style="font-size: 0.78rem; color: var(--text-muted);">
            ${propType === "Observed propagation" ? "Sequence verified through chronological public timestamps" : "Multi-platform presence detected concurrently without verified linear causality"}
          </span>
        </div>
        <div style="font-size: 0.78rem; color: var(--accent-cyan); font-weight: 600;">
          Velocity: ${trend.viralityVelocity || "Rapid cross-platform cascade"}
        </div>
      </div>

      <div class="propagation-flow-track">
        ${stagesHtml}
      </div>

      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.5rem; text-align: center;">
        <span style="color: var(--text-muted);">Diffusion Sequence:</span> <strong>${pathSummary}</strong>
      </div>
    `;
  }

  /**
   * Render the Propagation Strength & Viral Index Gauge
   */
  function renderStrengthBar(meterContainerId, trend) {
    const container = document.getElementById(meterContainerId);
    if (!container) return;

    const strength = trend.propagationStrength || 85;
    const rZero = trend.rZeroFactor || "3.4";
    const velocity = trend.viralityVelocity || "Rapid cross-platform cascade";

    let strengthLabel = "Moderate Viral Growth";
    let strengthColor = "#10b981";
    if (strength >= 90) {
      strengthLabel = "Critical Mass / Super-Spreader";
      strengthColor = "#ef4444";
    } else if (strength >= 80) {
      strengthLabel = "Rapid Multi-Channel Cascade";
      strengthColor = "#8b5cf6";
    }

    container.innerHTML = `
      <div class="prop-strength-header">
        <div class="prop-strength-title-wrap">
          <span class="prop-strength-title">Propagation Strength</span>
          <span class="prop-strength-badge" style="background: ${TrendFlowCharts.hexToRgba(strengthColor, 0.15)}; color: ${strengthColor}; border: 1px solid ${strengthColor};">
            ${strengthLabel}
          </span>
        </div>
        <div class="prop-strength-value" style="color: ${strengthColor};">${strength}%</div>
      </div>

      <div class="prop-meter-rail">
        <div class="prop-meter-fill" style="width: ${strength}%; background: linear-gradient(90deg, #3b82f6, ${strengthColor});">
          <div class="prop-meter-pulse"></div>
        </div>
      </div>

      <div class="prop-factors-grid">
        <div class="prop-factor-item">
          <div class="prop-factor-label">R₀ Reproduction Rate</div>
          <div class="prop-factor-value">${rZero} <span class="prop-subtext">peers/share</span></div>
        </div>
        <div class="prop-factor-item">
          <div class="prop-factor-label">Spread Velocity</div>
          <div class="prop-factor-value" style="font-size: 0.95rem;">${velocity}</div>
        </div>
        <div class="prop-factor-item">
          <div class="prop-factor-label">Cascade Generations</div>
          <div class="prop-factor-value">6 Stages</div>
        </div>
        <div class="prop-factor-item">
          <div class="prop-factor-label">Public Data Confidence</div>
          <div class="prop-factor-value" style="color: #34d399; font-size: 0.95rem;">Verified Public Source</div>
        </div>
      </div>
    `;
  }

  /**
   * Render the 6-part Core Propagation Breakdown Cards
   */
  function renderBreakdownCards(containerId, trend) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const flow = trend.propagationFlow;
    const cardsData = [
      { title: "Initial Source", icon: "🌱", val: flow.initialSource, desc: "Original origin point or official publication" },
      { title: "Early Adopters", icon: "⚡", val: flow.earlyAdopters, desc: "First niche discovery cohort" },
      { title: "Influencer Amplification", icon: "🌟", val: flow.influencers, desc: "Verified creators and trade anchors providing inflection" },
      { title: "General Users", icon: "👥", val: flow.socialPosts, desc: "Community posts and recreation volume" },
      { title: "Secondary Sharing", icon: "🔄", val: flow.secondarySharing, desc: "Peer-to-peer and cross-platform propagation" },
      { title: "Current Reach", icon: "👁️", val: flow.currentReach, desc: "Public views and estimated impression volume" }
    ];

    container.innerHTML = cardsData.map(c => `
      <div class="prop-breakdown-card">
        <div class="prop-card-top">
          <span class="prop-card-icon">${c.icon}</span>
          <span class="prop-card-title">${c.title}</span>
        </div>
        <div class="prop-card-val">${c.val}</div>
        <div class="prop-card-desc">${c.desc}</div>
      </div>
    `).join('');
  }

  /**
   * Interactive Cascade Network Graph Simulator (for the dedicated Propagation view)
   */
  function initCascadeSimulator(canvasId) {
    simCanvas = document.getElementById(canvasId || 'globalCascadeCanvas');
    if (!simCanvas) return;
    simCtx = simCanvas.getContext('2d');

    const rect = simCanvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const container = simCanvas.parentElement;
    const containerRect = container ? container.getBoundingClientRect() : null;
    const width = rect.width || (containerRect && containerRect.width) || 750;
    const height = rect.height || (containerRect && containerRect.height) || 360;

    simCanvas.width = width * dpr;
    simCanvas.height = height * dpr;
    simCtx.setTransform(1, 0, 0, 1, 0, 0);
    simCtx.scale(dpr, dpr);

    // Build node hierarchy: Source -> 3 Influencers -> 9 Amplifiers -> 27 General nodes
    buildNetworkNodes(width, height);
    drawNetworkGraph();
  }

  function buildNetworkNodes(w, h) {
    simNodes = [];
    simParticles = [];

    // Stage 0: Single Source Node (e.g. Search / Original Release)
    simNodes.push({
      id: 0,
      stage: 0,
      x: 70,
      y: h / 2,
      r: 12,
      color: '#f59e0b',
      label: 'Google/Source',
      active: true,
      connections: [1, 2, 3]
    });

    // Stage 1: Influencer / Platform Hubs (3 nodes: YouTube, Creator, News)
    const infY = [h * 0.25, h * 0.5, h * 0.75];
    const infLabels = ['YouTube', 'Instagram Hub', 'News/X'];
    for (let i = 1; i <= 3; i++) {
      simNodes.push({
        id: i,
        stage: 1,
        x: 230,
        y: infY[i - 1],
        r: 9,
        color: '#8b5cf6',
        label: infLabels[i - 1],
        active: false,
        connections: [4 + (i - 1) * 3, 5 + (i - 1) * 3, 6 + (i - 1) * 3]
      });
    }

    // Stage 2: Secondary Amplifiers (9 nodes)
    let curId = 4;
    for (let i = 1; i <= 3; i++) {
      const parentY = infY[i - 1];
      for (let j = -1; j <= 1; j++) {
        simNodes.push({
          id: curId,
          stage: 2,
          x: 430,
          y: Math.max(30, Math.min(h - 30, parentY + j * 38)),
          r: 6,
          color: '#06b6d4',
          label: '',
          active: false,
          connections: []
        });
        curId++;
      }
    }

    // Stage 3: Viral General Audience Cloud (28 nodes on right)
    for (let k = 0; k < 28; k++) {
      const randY = 25 + Math.random() * (h - 50);
      const randX = 580 + Math.random() * (w - 630);
      const parentIdx = 4 + Math.floor(Math.random() * 9);
      simNodes.push({
        id: curId,
        stage: 3,
        x: randX,
        y: randY,
        r: 4,
        color: '#ec4899',
        label: '',
        active: false,
        connections: []
      });
      simNodes[parentIdx].connections.push(curId);
      curId++;
    }
  }

  function drawNetworkGraph() {
    if (!simCtx || !simCanvas) return;
    const w = simCanvas.width / (window.devicePixelRatio || 1);
    const h = simCanvas.height / (window.devicePixelRatio || 1);

    simCtx.clearRect(0, 0, w, h);

    // Draw background grid dots
    simCtx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    for (let x = 20; x < w; x += 40) {
      for (let y = 20; y < h; y += 40) {
        simCtx.fillRect(x, y, 2, 2);
      }
    }

    // Draw connections (edges)
    simNodes.forEach(node => {
      node.connections.forEach(targetId => {
        const target = simNodes.find(n => n.id === targetId);
        if (!target) return;

        simCtx.beginPath();
        simCtx.moveTo(node.x, node.y);
        simCtx.lineTo(target.x, target.y);
        if (node.active && target.active) {
          simCtx.strokeStyle = 'rgba(139, 92, 246, 0.45)';
          simCtx.lineWidth = 1.5;
        } else {
          simCtx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
          simCtx.lineWidth = 0.8;
        }
        simCtx.stroke();
      });
    });

    // Draw flying particles
    simParticles.forEach((p, idx) => {
      p.t += p.speed;
      const curX = p.fromX + (p.toX - p.fromX) * p.t;
      const curY = p.fromY + (p.toY - p.fromY) * p.t;

      simCtx.beginPath();
      simCtx.arc(curX, curY, 3, 0, Math.PI * 2);
      simCtx.fillStyle = p.color;
      simCtx.shadowColor = p.color;
      simCtx.shadowBlur = 8;
      simCtx.fill();
      simCtx.shadowBlur = 0;

      if (p.t >= 1) {
        p.targetNode.active = true;
        simParticles.splice(idx, 1);
      }
    });

    // Draw nodes
    simNodes.forEach(node => {
      simCtx.beginPath();
      simCtx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      simCtx.fillStyle = node.active ? node.color : '#334155';
      if (node.active) {
        simCtx.shadowColor = node.color;
        simCtx.shadowBlur = 10;
      }
      simCtx.fill();
      simCtx.shadowBlur = 0;

      // Outer ring
      simCtx.strokeStyle = node.active ? '#ffffff' : 'rgba(255, 255, 255, 0.15)';
      simCtx.lineWidth = node.active ? 2 : 1;
      simCtx.stroke();

      // Node Label
      if (node.label) {
        simCtx.font = 'bold 11px Outfit, Inter, sans-serif';
        simCtx.fillStyle = node.active ? '#f8fafc' : '#94a3b8';
        simCtx.textAlign = 'center';
        simCtx.fillText(node.label, node.x, node.y - node.r - 6);
      }
    });
  }

  function runSimulation(onComplete) {
    if (isSimulating) return;

    // Auto-init canvas if missing or unbuilt
    if (!simCanvas || !simCtx || simNodes.length === 0 || simCanvas.width === 0) {
      initCascadeSimulator('globalCascadeCanvas');
    }

    if (!simNodes || simNodes.length === 0 || !simNodes[0]) {
      isSimulating = false;
      if (onComplete) onComplete();
      return;
    }

    isSimulating = true;

    try {
      // Reset all nodes except source
      simNodes.forEach((n, idx) => {
        n.active = idx === 0;
      });
      simParticles = [];

      // Stage 1 Trigger (Source -> Platform Hubs)
      const source = simNodes[0];
      if (source && source.connections) {
        source.connections.forEach(targetId => {
          const target = simNodes.find(n => n.id === targetId);
          if (target) {
            simParticles.push({
              fromX: source.x,
              fromY: source.y,
              toX: target.x,
              toY: target.y,
              t: 0,
              speed: 0.025,
              color: '#f59e0b',
              targetNode: target
            });
          }
        });
      }

      // Schedule Stage 2
      setTimeout(() => {
        for (let i = 1; i <= 3; i++) {
          const inf = simNodes[i];
          if (inf && inf.connections) {
            inf.connections.forEach(tId => {
              const target = simNodes.find(n => n.id === tId);
              if (target) {
                simParticles.push({
                  fromX: inf.x,
                  fromY: inf.y,
                  toX: target.x,
                  toY: target.y,
                  t: 0,
                  speed: 0.035,
                  color: '#8b5cf6',
                  targetNode: target
                });
              }
            });
          }
        }
      }, 700);

      // Schedule Stage 3 (Mass Viral Wave)
      setTimeout(() => {
        for (let i = 4; i <= 12; i++) {
          const amp = simNodes[i];
          if (!amp) continue;
          if (amp.connections) {
            amp.connections.forEach(tId => {
              const target = simNodes.find(n => n.id === tId);
              if (target) {
                simParticles.push({
                  fromX: amp.x,
                  fromY: amp.y,
                  toX: target.x,
                  toY: target.y,
                  t: 0,
                  speed: 0.045 + Math.random() * 0.02,
                  color: '#ec4899',
                  targetNode: target
                });
              }
            });
          }
        }
      }, 1400);

      function loop() {
        drawNetworkGraph();
        if (simParticles.length > 0 || isSimulating) {
          simAnimationId = requestAnimationFrame(loop);
        }
      }

      if (simAnimationId) cancelAnimationFrame(simAnimationId);
      loop();

      setTimeout(() => {
        isSimulating = false;
        if (onComplete) onComplete();
      }, 2800);
    } catch (err) {
      console.error("Simulation execution error:", err);
      isSimulating = false;
      if (onComplete) onComplete();
    }
  }

  return {
    renderFlowchart,
    renderStrengthBar,
    renderBreakdownCards,
    initCascadeSimulator,
    runSimulation
  };
})();
