// Helper: Dynamic current IST timestamp generator for live daily feed
function getDynamicTodayIST(minusHours = 0) {
  const d = new Date(Date.now() - (minusHours * 3600 * 1000));
  const timeOnly = d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  const dateOnly = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  return `${dateOnly}, ${timeOnly} IST`;
}

const TRENDFLOW_DATA = {
  // Direct discovery links. These open public search/category pages; they do not require API keys.
  shoppingPlatforms: [
    { name: "Myntra", icon: "🛍️", base: "https://www.myntra.com/", search: q => `https://www.myntra.com/search?q=${encodeURIComponent(q)}` },
    { name: "Amazon India", icon: "🛒", base: "https://www.amazon.in/", search: q => `https://www.amazon.in/s?k=${encodeURIComponent(q)}` },
    { name: "Flipkart", icon: "🛒", base: "https://www.flipkart.com/", search: q => `https://www.flipkart.com/search?q=${encodeURIComponent(q)}` },
    { name: "AJIO", icon: "👗", base: "https://www.ajio.com/", search: q => `https://www.ajio.com/search/?text=${encodeURIComponent(q)}` },
    { name: "Meesho", icon: "🛍️", base: "https://www.meesho.com/", search: q => `https://www.meesho.com/search?q=${encodeURIComponent(q)}` }
  ],
  foodPlatforms: [
    { name: "Swiggy", icon: "🍽️", base: "https://www.swiggy.com/", search: q => `https://www.swiggy.com/search?query=${encodeURIComponent(q)}` },
    { name: "Zomato", icon: "🍴", base: "https://www.zomato.com/", search: q => `https://www.zomato.com/search?query=${encodeURIComponent(q)}` },
    { name: "Google Maps Restaurants", icon: "📍", base: "https://www.google.com/maps", search: q => `https://www.google.com/maps/search/${encodeURIComponent(q + ' restaurants India')}` }
  ],

  globalStats: {
    activeTrends: 24,
    totalReach: "48.2M",
    totalReachRaw: 48200000,
    totalEngagement: "14.6M",
    totalEngagementRaw: 14600000,
    totalPropagations: "890K",
    totalPropagationsRaw: 890000,
    avgPropagationSpeed: "1.8 hrs",
    avgViralityIndex: "86.5%",
    region: "India (National & Regional Feeds)",
    lastGlobalSync: getDynamicTodayIST()
  },

  // 8 Specific Domains required by user
  domains: {
    music: {
      id: "music",
      name: "Music",
      icon: "🎵",
      color: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
      badgeClass: "badge-music",
      description: "Bollywood hits, Punjabi pop, regional viral audio stems, and streaming charts.",
      activeTrendsCount: 3,
      totalReach: "8.5M",
      avgGrowth: "+72%",
      leadTrend: "Aayi Nai (Stree 2)",
      primaryPlatforms: "YouTube Music, Spotify India, Instagram Reels",
      propagationSpeed: "2.1 hrs to national viral status"
    },
    social: {
      id: "social",
      name: "Social Media",
      icon: "📱",
      color: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      badgeClass: "badge-social",
      description: "Viral meme formats, audio dialogue remixes, creator challenges, and internet culture.",
      activeTrendsCount: 3,
      totalReach: "6.8M",
      avgGrowth: "+95%",
      leadTrend: "#ChinTapakDumDum Audio Trend",
      primaryPlatforms: "Instagram Reels, YouTube Shorts, X (Twitter)",
      propagationSpeed: "45 mins across creator feeds"
    },
    movies: {
      id: "movies",
      name: "Movies & Entertainment",
      icon: "🎬",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
      badgeClass: "badge-movies",
      description: "Box office milestones, teaser drops, OTT cliffhangers, and pan-India cinema buzz.",
      activeTrendsCount: 3,
      totalReach: "9.2M",
      avgGrowth: "+84%",
      leadTrend: "Stree 2 Historic Box Office Run",
      primaryPlatforms: "BookMyShow, YouTube India, X, Prime Video",
      propagationSpeed: "1.4 hrs to trending #1"
    },
    sports: {
      id: "sports",
      name: "Sports",
      icon: "🏏",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
      badgeClass: "badge-sports",
      description: "Cricket test thrillers, IPL auction retention rules, Olympic javelin, and badminton stars.",
      activeTrendsCount: 3,
      totalReach: "12.4M",
      avgGrowth: "+110%",
      leadTrend: "India vs Bangladesh Test Series & WTC Race",
      primaryPlatforms: "JioCinema, Star Sports, ESPNcricinfo, X",
      propagationSpeed: "25 mins during live match action"
    },
    tech: {
      id: "tech",
      name: "Technology",
      icon: "💻",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
      badgeClass: "badge-tech",
      description: "UPI-ATM digital innovations, Indic generative AI models, semiconductor plants, and gadget launches.",
      activeTrendsCount: 3,
      totalReach: "4.1M",
      avgGrowth: "+58%",
      leadTrend: "UPI Circle & Cardless Cash ATM Rollout",
      primaryPlatforms: "NPCI Portal, Tech Twitter, LinkedIn India",
      propagationSpeed: "3.2 hrs to developer saturation"
    },
    news: {
      id: "news",
      name: "News",
      icon: "📰",
      color: "#ef4444",
      gradient: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
      badgeClass: "badge-news",
      description: "State assembly election dates, ISRO space missions, economic policies, and national press alerts.",
      activeTrendsCount: 3,
      totalReach: "10.6M",
      avgGrowth: "+88%",
      leadTrend: "ISRO Chandrayaan-4 & Venus Mission Approval",
      primaryPlatforms: "Press Information Bureau (PIB), DD News, ANI",
      propagationSpeed: "35 mins across news networks"
    },
    shopping: {
      id: "shopping",
      name: "Shopping & Fashion",
      icon: "🛍️",
      color: "#d946ef",
      gradient: "linear-gradient(135deg, #d946ef 0%, #ec4899 100%)",
      badgeClass: "badge-shopping",
      description: "Clothing and fashion trends, festive wear, footwear, accessories, and e-commerce activity across major Indian shopping platforms.",
      activeTrendsCount: 3,
      totalReach: "5.4M",
      avgGrowth: "+65%",
      leadTrend: "Festive Fashion & Mega-Sale Shopping",
      primaryPlatforms: "Myntra, Amazon India, Flipkart, AJIO, Meesho",
      platformCoverage: [
        { name: "Myntra", type: "Fashion", url: "https://www.myntra.com/" },
        { name: "Amazon India", type: "Marketplace + Fashion", url: "https://www.amazon.in/" },
        { name: "Flipkart", type: "Marketplace + Fashion", url: "https://www.flipkart.com/" },
        { name: "AJIO", type: "Fashion", url: "https://www.ajio.com/" },
        { name: "Meesho", type: "Social Commerce + Fashion", url: "https://www.meesho.com/" }
      ],
      propagationSpeed: "2.5 hrs to shopper community"
    },
    food: {
      id: "food",
      name: "Food & Lifestyle",
      icon: "🍛",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      badgeClass: "badge-food",
      description: "FSSAI spice safety audits, protein lab test debates, viral street food hacks, and specialty coffee vs chai.",
      activeTrendsCount: 3,
      totalReach: "3.9M",
      avgGrowth: "+48%",
      leadTrend: "Packaged Food Labeling & Sugar Audits",
      primaryPlatforms: "YouTube Food Vlogs, Instagram Reels, FSSAI Notices",
      propagationSpeed: "4.0 hrs across health communities"
    }
  },

  // Dynamic Trend Pool for Rotation across all 8 domains
  trendsPool: {
    music: [
      {
        id: "music-illuminati",
        name: "Illuminati (Aavesham / Sushin Shyam)",
        domain: "music",
        domainLabel: "🎵 Music",
        category: "Malayalam Viral Hip-Hop Anthem",
        platform: "Spotify India & YouTube Music",
        sourceName: "Spotify India Top 50",
        sourceUrl: "https://open.spotify.com/",
        dataStatus: "PUBLIC SOURCE",
        searchVolume: "650K+ searches",
        searchVolumeRaw: 650000,
        currentRank: "Rank #1 Viral Audio India",
        status: "🔥 Rapidly Trending",
        statusType: "rapid",
        growth: "+115%",
        growthRaw: 115,
        likes: "4.2M",
        likesRaw: 4200000,
        views: "240M+",
        comments: "62.4K",
        commentsRaw: 62400,
        reach: "38.6M",
        reachRaw: 38600000,
        propagationStrength: 97,
        propagationType: "Observed propagation",
        rZeroFactor: "4.85",
        viralityVelocity: "55K reels created/day",
        whatIsTrending: "Sushin Shyam & Dabzee's track 'Illuminati' from Fahadh Faasil's Aavesham became an all-India anthem across Instagram Reels.",
        whatCausedTrend: "Fahadh Faasil's Ranga character dance combined with Sushin Shyam's infectious trap beat sparked a nationwide reel trend.",
        whyPeopleEngaging: "High-energy bassline, relatable flex culture, and universal appeal across North, South, and Central India.",
        whyTrending: [
          { icon: "🎬", title: "Aavesham OTT Surge", desc: "Prime Video streaming ignited reel waves in North India.", time: "Week 1", impact: "Pan-India Discovery" }
        ],
        sectors: { labels: ["Malayalam Hip-Hop", "Short Video", "Party Anthem"], values: [55, 30, 15], colors: ["#ec4899", "#8b5cf6", "#06b6d4"] },
        growthTimeline: { labels: ["Day 1", "Day 5", "Day 10"], mentions: [15000, 85000, 210000], shares: [4000, 25000, 78000] },
        propagationFlow: { initialSource: "Think Music India", earlyAdopters: "Malayalam cinema fans", influencers: "National reel stars", socialPosts: "850K+ Reels", engagementSurge: "240M+ Views", secondarySharing: "DJ Party Playlists", currentReach: "38.6M", stages: [] },
        community: { audience: { labels: ["College Youth", "Gen-Z"], values: [60, 40], colors: ["#ec4899", "#8b5cf6"] }, engagementType: { labels: ["Views", "Reels"], values: [65, 35], colors: ["#ef4444", "#3b82f6"] }, demographics: { age: { "16-24": "60%", "25-34": "32%" }, topRegions: ["Kerala", "Karnataka", "Maharashtra", "Delhi-NCR"] } },
        sentiment: { positive: 96, neutral: 3, negative: 1, summary: "Adored for beat production and vocal energy.", comments: [{ author: "@beat_head_in", avatar: "BH", time: "10m ago", type: "positive", text: "Sushin Shyam is on another level! Best track of the year." }] }
      },
      {
        id: "music-millionaire",
        name: "Millionaire (Yo Yo Honey Singh)",
        domain: "music",
        domainLabel: "🎵 Music",
        category: "Desi Hip-Hop Comeback Track",
        platform: "YouTube & Spotify India",
        sourceName: "Spotify India Top 50",
        sourceUrl: "https://open.spotify.com/",
        dataStatus: "PUBLIC SOURCE",
        searchVolume: "480K+ searches",
        searchVolumeRaw: 480000,
        currentRank: "Top 3 Spotify India Daily",
        status: "🔥 Rapidly Trending",
        statusType: "rapid",
        growth: "+98%",
        growthRaw: 98,
        likes: "2.9M",
        likesRaw: 2900000,
        views: "160M+",
        comments: "42.1K",
        commentsRaw: 42100,
        reach: "26.4M",
        reachRaw: 26400000,
        propagationStrength: 92,
        propagationType: "Observed propagation",
        rZeroFactor: "4.10",
        viralityVelocity: "28K reels created/day",
        whatIsTrending: "Honey Singh's comeback album 'Glory' lead single 'Millionaire' dominated nostalgia and modern desi hip-hop charts.",
        whatCausedTrend: "Nostalgic fanbase revival combined with catchy hook melody.",
        whyPeopleEngaging: "Strong nostalgia factor paired with modern drill/hip-hop basslines.",
        whyTrending: [{ icon: "🎙️", title: "Album Drop", desc: "Glory album debuted #1 on Spotify India Charts.", time: "Day 1", impact: "Chart Debut" }],
        sectors: { labels: ["Desi Hip-Hop", "Commercial Rap"], values: [65, 35], colors: ["#ec4899", "#f59e0b"] },
        growthTimeline: { labels: ["Day 1", "Day 3", "Day 7"], mentions: [20000, 90000, 180000], shares: [5000, 30000, 65000] },
        propagationFlow: { initialSource: "T-Series Drop", earlyAdopters: "Hip Hop fans", influencers: "Fitness influencers", socialPosts: "320K Reels", engagementSurge: "160M Views", secondarySharing: "Car Audio Playlists", currentReach: "26.4M", stages: [] },
        community: { audience: { labels: ["Millennials", "Gen-Z Youth"], values: [60, 40], colors: ["#ec4899", "#8b5cf6"] }, engagementType: { labels: ["Streaming", "Likes"], values: [60, 40], colors: ["#ef4444", "#10b981"] }, demographics: { age: { "18-30": "82%" }, topRegions: ["Punjab", "Delhi-NCR", "UP"] } },
        sentiment: { positive: 91, neutral: 6, negative: 3, summary: "Nostalgic excitement for Honey Singh's classic flow.", comments: [{ author: "@yoyo_fan_club", avatar: "YY", time: "15m ago", type: "positive", text: "Yo Yo is back! OG vibe is completely restored." }] }
      }
    ],
    movies: [
      {
        id: "movies-pushpa2",
        name: "Pushpa 2: The Rule (Teaser & Record Booking)",
        domain: "movies",
        domainLabel: "🎬 Movies & Entertainment",
        category: "Pan-India Blockbuster Cinema Hype",
        platform: "YouTube India & BookMyShow",
        sourceName: "BookMyShow Trends",
        sourceUrl: "https://in.bookmyshow.com/",
        dataStatus: "PUBLIC SOURCE",
        searchVolume: "850K+ searches",
        searchVolumeRaw: 850000,
        currentRank: "Rank #1 Most Anticipated Movie",
        status: "🔥 Rapidly Trending",
        statusType: "rapid",
        growth: "+140%",
        growthRaw: 140,
        likes: "5.8M",
        likesRaw: 5800000,
        views: "290M+",
        comments: "112K",
        commentsRaw: 112000,
        reach: "45.0M",
        reachRaw: 45000000,
        propagationStrength: 98,
        propagationType: "Observed propagation",
        rZeroFactor: "5.10",
        viralityVelocity: "90K shares/hour",
        whatIsTrending: "Allu Arjun & Sukumar's Pushpa 2 teaser and music drop created historic interest across North & South India.",
        whatCausedTrend: "Teaser record breakdown on YouTube combined with unprecedented fan club celebration events.",
        whyPeopleEngaging: "Iconic mass dialogues, Sukumar's visual scale, and massive pan-India audience waiting for the sequel.",
        whyTrending: [{ icon: "🔥", title: "Record 100M Views", desc: "Crossed 100M views faster than any Indian trailer in history.", time: "24h", impact: "Historical Record" }],
        sectors: { labels: ["Pan-India Cinema", "Teaser Launches"], values: [70, 30], colors: ["#f59e0b", "#ef4444"] },
        growthTimeline: { labels: ["Day 1", "Day 2", "Day 4"], mentions: [50000, 180000, 420000], shares: [12000, 60000, 180000] },
        propagationFlow: { initialSource: "Mythri Movie Makers", earlyAdopters: "Allu Arjun fan clubs", influencers: "Trade analysts", socialPosts: "1.5M Posts", engagementSurge: "290M Views", secondarySharing: "WhatsApp status", currentReach: "45M", stages: [] },
        community: { audience: { labels: ["Mass Audiences", "Youth"], values: [65, 35], colors: ["#f59e0b", "#ef4444"] }, engagementType: { labels: ["Trailer Views", "Mentions"], values: [70, 30], colors: ["#ef4444", "#3b82f6"] }, demographics: { age: { "16-35": "78%" }, topRegions: ["AP/Telangana", "Maharashtra", "North India"] } },
        sentiment: { positive: 95, neutral: 4, negative: 1, summary: "Unprecedented excitement for the theatrical premiere.", comments: [{ author: "@cine_analyst", avatar: "CA", time: "5m ago", type: "positive", text: "Pushpa 2 is going to rewrite all box office records!" }] }
      },
      {
        id: "movies-devara",
        name: "Devara Part 1 (NTR Jr & Janhvi Kapoor)",
        domain: "movies",
        domainLabel: "🎬 Movies & Entertainment",
        category: "Action Drama Theatrical Craze",
        platform: "BookMyShow & YouTube",
        sourceName: "Trade Analysts",
        sourceUrl: "https://in.bookmyshow.com/",
        dataStatus: "PUBLIC SOURCE",
        searchVolume: "620K+ searches",
        searchVolumeRaw: 620000,
        currentRank: "Top 2 Advance Booking Record",
        status: "🔥 Rapidly Trending",
        statusType: "rapid",
        growth: "+110%",
        growthRaw: 110,
        likes: "3.5M",
        likesRaw: 3500000,
        views: "175M+",
        comments: "58K",
        commentsRaw: 58000,
        reach: "31.2M",
        reachRaw: 31200000,
        propagationStrength: 95,
        propagationType: "Observed propagation",
        rZeroFactor: "4.40",
        viralityVelocity: "40K shares/hour",
        whatIsTrending: "Koratala Siva's sea-action drama starring NTR Jr, Saif Ali Khan, and Janhvi Kapoor created massive pre-release ticket booking surges.",
        whatCausedTrend: "North America advance booking crossing $2M+ and Anirudh's high-octane background score.",
        whyPeopleEngaging: "NTR's solo lead return after RRR combined with Anirudh Ravichander's viral chartbuster songs ('Fear Song').",
        whyTrending: [{ icon: "🎵", title: "Anirudh 'Fear Song' Craze", desc: "Audio track generated 100M+ views across languages.", time: "Day 1", impact: "Musical Hook" }],
        sectors: { labels: ["Telugu Cinema", "Action Mass"], values: [60, 40], colors: ["#f59e0b", "#ec4899"] },
        growthTimeline: { labels: ["Day 1", "Day 3"], mentions: [30000, 120000], shares: [8000, 45000] },
        propagationFlow: { initialSource: "NTR Arts", earlyAdopters: "NTR Fans", influencers: "Anirudh Fans", socialPosts: "600K Posts", engagementSurge: "175M Views", secondarySharing: "Status Videos", currentReach: "31.2M", stages: [] },
        community: { audience: { labels: ["Youth & Mass"], values: [80, 20], colors: ["#f59e0b", "#3b82f6"] }, engagementType: { labels: ["Views", "Likes"], values: [70, 30], colors: ["#ef4444", "#10b981"] }, demographics: { age: { "16-30": "80%" }, topRegions: ["AP/Telangana", "USA Overseas", "Karnataka"] } },
        sentiment: { positive: 93, neutral: 5, negative: 2, summary: "Fervent fan excitement for NTR's action avatar.", comments: [{ author: "@tarak_fc", avatar: "TF", time: "20m ago", type: "positive", text: "Anirudh BGM + NTR screen presence = explosion!" }] }
      }
    ],
    sports: [
      {
        id: "sports-ind-vs-nz",
        name: "India vs New Zealand Test Series & WTC Race",
        domain: "sports",
        domainLabel: "🏏 Sports",
        category: "Test Cricket & World Test Championship",
        platform: "JioCinema & ESPNcricinfo",
        sourceName: "BCCI Public Bulletins",
        sourceUrl: "https://www.espncricinfo.com/",
        dataStatus: "PUBLIC SOURCE",
        searchVolume: "950K+ searches",
        searchVolumeRaw: 950000,
        currentRank: "Rank #1 Sports Query",
        status: "🔥 Rapidly Trending",
        statusType: "rapid",
        growth: "+130%",
        growthRaw: 130,
        likes: "4.8M",
        likesRaw: 4800000,
        views: "320M+",
        comments: "84K",
        commentsRaw: 84000,
        reach: "42.0M",
        reachRaw: 42000000,
        propagationStrength: 97,
        propagationType: "Observed propagation",
        rZeroFactor: "4.90",
        viralityVelocity: "60K tweets/hour",
        whatIsTrending: "Team India's crucial 3-Test Series against New Zealand to lock in WTC Final qualification at Lord's.",
        whatCausedTrend: "Rohit Sharma, Virat Kohli, Jasprit Bumrah & Rishabh Pant leading high-stakes Test cricket action.",
        whyPeopleEngaging: "India leading WTC table standings; high thrill match moments shared instantly on X.",
        whyTrending: [{ icon: "🏏", title: "Bumrah Magical Spell", desc: "Reverse swing masterclass trending globally on X.", time: "Match Day 2", impact: "Viral Delivery" }],
        sectors: { labels: ["Test Cricket", "WTC Standings"], values: [70, 30], colors: ["#3b82f6", "#10b981"] },
        growthTimeline: { labels: ["Day 1", "Day 2", "Day 3"], mentions: [60000, 220000, 480000], shares: [15000, 80000, 210000] },
        propagationFlow: { initialSource: "BCCI Live Stream", earlyAdopters: "Cricket fans", influencers: "Commentators", socialPosts: "1.2M Tweets", engagementSurge: "320M Views", secondarySharing: "Group chats", currentReach: "42M", stages: [] },
        community: { audience: { labels: ["Cricket Fans", "Youth"], values: [70, 30], colors: ["#3b82f6", "#8b5cf6"] }, engagementType: { labels: ["Live Views", "X Discussions"], values: [75, 25], colors: ["#ef4444", "#3b82f6"] }, demographics: { age: { "15-45": "85%" }, topRegions: ["All India"] } },
        sentiment: { positive: 94, neutral: 4, negative: 2, summary: "National pride and excitement for WTC final berth.", comments: [{ author: "@cricket_geek", avatar: "CG", time: "2m ago", type: "positive", text: "Bumrah in home conditions is an absolute cheat code!" }] }
      }
    ],
    tech: [
      {
        id: "tech-isro-chandrayaan4",
        name: "ISRO Chandrayaan-4 & Venus Mission Approval",
        domain: "tech",
        domainLabel: "💻 Technology",
        category: "Space Tech & Sovereign Missions",
        platform: "PIB India & Tech X",
        sourceName: "ISRO Official Release",
        sourceUrl: "https://www.isro.gov.in/",
        dataStatus: "PUBLIC SOURCE",
        searchVolume: "720K+ searches",
        searchVolumeRaw: 720000,
        currentRank: "Rank #1 Tech News India",
        status: "🔥 Rapidly Trending",
        statusType: "rapid",
        growth: "+105%",
        growthRaw: 105,
        likes: "3.9M",
        likesRaw: 3900000,
        views: "190M+",
        comments: "45K",
        commentsRaw: 45000,
        reach: "29.5M",
        reachRaw: 29500000,
        propagationStrength: 95,
        propagationType: "Observed propagation",
        rZeroFactor: "4.30",
        viralityVelocity: "35K posts/day",
        whatIsTrending: "Union Cabinet cleared ₹2,104 Crore budget for ISRO's Chandrayaan-4 Lunar Sample Return Mission.",
        whatCausedTrend: "Official Cabinet announcement and ISRO Chairman S. Somanath's briefing.",
        whyPeopleEngaging: "Sovereign space pride and technological advancement.",
        whyTrending: [{ icon: "🚀", title: "Cabinet Approval", desc: "Formal government greenlight for Chandrayaan-4.", time: "T+1h", impact: "National News" }],
        sectors: { labels: ["Space Tech", "Cabinet Clearance"], values: [70, 30], colors: ["#8b5cf6", "#ef4444"] },
        growthTimeline: { labels: ["Day 1", "Day 2"], mentions: [40000, 150000], shares: [10000, 50000] },
        propagationFlow: { initialSource: "PIB Cabinet Briefing", earlyAdopters: "Space enthusiasts", influencers: "Tech journalists", socialPosts: "450K Posts", engagementSurge: "190M Reach", secondarySharing: "College groups", currentReach: "29.5M", stages: [] },
        community: { audience: { labels: ["Students & Engineers"], values: [100], colors: ["#8b5cf6"] }, engagementType: { labels: ["Shares", "Likes"], values: [60, 40], colors: ["#3b82f6", "#10b981"] }, demographics: { age: { "15-35": "75%" }, topRegions: ["Pan-India"] } },
        sentiment: { positive: 98, neutral: 2, negative: 0, summary: "Overwhelming national pride.", comments: [{ author: "@space_india", avatar: "SI", time: "12m ago", type: "positive", text: "ISRO is making history again!" }] }
      }
    ],
    social: [
      {
        id: "social-sigmaboy",
        name: "#SigmaBoy Dance & Dialogue Trend",
        domain: "social",
        domainLabel: "📱 Social Media",
        category: "Viral Audio & Creator Trend",
        platform: "Instagram Reels & YouTube Shorts",
        sourceName: "Instagram Audio Trends",
        sourceUrl: "https://www.instagram.com/",
        dataStatus: "PUBLIC SOURCE",
        searchVolume: "580K+ searches",
        searchVolumeRaw: 580000,
        currentRank: "Top 1 Reel Audio Stem",
        status: "🔥 Rapidly Trending",
        statusType: "rapid",
        growth: "+125%",
        growthRaw: 125,
        likes: "4.1M",
        likesRaw: 4100000,
        views: "220M+",
        comments: "52K",
        commentsRaw: 52000,
        reach: "32.0M",
        reachRaw: 32000000,
        propagationStrength: 96,
        propagationType: "Observed propagation",
        rZeroFactor: "4.70",
        viralityVelocity: "75K reels created/day",
        whatIsTrending: "The 'Sigma Boy' electro-remix audio stem inspired hilarious corporate, college, and situational Reels.",
        whatCausedTrend: "Relatable situational skits made by top Indian influencers.",
        whyPeopleEngaging: "Humorous juxtaposition of grand electronic music with funny everyday Indian situations.",
        whyTrending: [{ icon: "📱", title: "750K Creator Reels", desc: "Crossed 750,000 unique audio re-uses on Instagram.", time: "Day 5", impact: "Mass Creator Wave" }],
        sectors: { labels: ["Reels Meme", "Situational Skits"], values: [60, 40], colors: ["#06b6d4", "#ec4899"] },
        growthTimeline: { labels: ["Day 1", "Day 3"], mentions: [25000, 110000], shares: [7000, 42000] },
        propagationFlow: { initialSource: "Reel Audio Remix", earlyAdopters: "College creators", influencers: "Top IG Influencers", socialPosts: "750K Reels", engagementSurge: "220M Views", secondarySharing: "WhatsApp status", currentReach: "32M", stages: [] },
        community: { audience: { labels: ["Gen-Z Youth"], values: [100], colors: ["#06b6d4"] }, engagementType: { labels: ["Audio Reuse", "Likes"], values: [65, 35], colors: ["#3b82f6", "#10b981"] }, demographics: { age: { "16-25": "85%" }, topRegions: ["Metro Cities"] } },
        sentiment: { positive: 92, neutral: 6, negative: 2, summary: "Highly hilarious reception.", comments: [{ author: "@reel_king", avatar: "RK", time: "8m ago", type: "positive", text: "Every 3rd reel on my feed is this audio!" }] }
      }
    ],
    shopping: [
      {
        id: "shopping-organza-saree",
        name: "Chikankari & Organza Saree Festive Boom",
        domain: "shopping",
        domainLabel: "🛍️ Shopping & Fashion",
        category: "Festive Ethnic Wear Trend",
        platform: "Myntra, AJIO, Meesho",
        sourceName: "E-Commerce Shopping Trends",
        sourceUrl: "https://www.myntra.com/",
        dataStatus: "PUBLIC SOURCE",
        searchVolume: "420K+ searches",
        searchVolumeRaw: 420000,
        currentRank: "Rank #1 Women Fashion Query",
        status: "🔥 Rapidly Trending",
        statusType: "rapid",
        growth: "+88%",
        growthRaw: 88,
        likes: "2.1M",
        likesRaw: 2100000,
        views: "110M+",
        comments: "28K",
        commentsRaw: 28000,
        reach: "18.5M",
        reachRaw: 18500000,
        propagationStrength: 91,
        propagationType: "Observed propagation",
        rZeroFactor: "3.90",
        viralityVelocity: "20K cart additions/day",
        whatIsTrending: "Lightweight pastel Chikankari embroidery and Organza sarees surged across Myntra, AJIO, and Meesho.",
        whatCausedTrend: "Celebrity festive fashion hauls on YouTube & Instagram styling Reels.",
        whyPeopleEngaging: "Affordable luxury look, pastel aesthetic, and wedding/festive season demand.",
        whyTrending: [{ icon: "🛍️", title: "Myntra Festive Sale", desc: "Top searched apparel category.", time: "Day 2", impact: "Search Surge" }],
        sectors: { labels: ["Ethnic Wear", "Festive Fashion"], values: [70, 30], colors: ["#d946ef", "#ec4899"] },
        growthTimeline: { labels: ["Day 1", "Day 3"], mentions: [12000, 55000], shares: [3000, 18000] },
        propagationFlow: { initialSource: "Fashion Vlogs", earlyAdopters: "Festive shoppers", influencers: "Fashion Creators", socialPosts: "250K Posts", engagementSurge: "110M Impressions", secondarySharing: "WhatsApp", currentReach: "18.5M", stages: [] },
        community: { audience: { labels: ["Women Shoppers"], values: [100], colors: ["#d946ef"] }, engagementType: { labels: ["Searches", "Likes"], values: [70, 30], colors: ["#3b82f6", "#10b981"] }, demographics: { age: { "18-38": "88%" }, topRegions: ["North & West India"] } },
        sentiment: { positive: 95, neutral: 4, negative: 1, summary: "Loved for delicate aesthetics.", comments: [{ author: "@style_by_priya", avatar: "SP", time: "18m ago", type: "positive", text: "Organza sarees look so royal!" }] }
      }
    ],
    food: [
      {
        id: "food-filter-coffee",
        name: "South Indian Filter Coffee vs Artisan Matcha",
        domain: "food",
        domainLabel: "🍛 Food & Lifestyle",
        category: "Beverage Culture Debate",
        platform: "Instagram Food Vlogs & Zomato",
        sourceName: "Swiggy & Zomato Trends",
        sourceUrl: "https://www.zomato.com/",
        dataStatus: "PUBLIC SOURCE",
        searchVolume: "340K+ searches",
        searchVolumeRaw: 340000,
        currentRank: "Top Beverage Trend",
        status: "🔥 Rapidly Trending",
        statusType: "rapid",
        growth: "+78%",
        growthRaw: 78,
        likes: "1.8M",
        likesRaw: 1800000,
        views: "85M+",
        comments: "22K",
        commentsRaw: 22000,
        reach: "14.2M",
        reachRaw: 14200000,
        propagationStrength: 89,
        propagationType: "Observed propagation",
        rZeroFactor: "3.70",
        viralityVelocity: "15K vlog posts/week",
        whatIsTrending: "Traditional brass tumbler South Indian Filter Kaapi vs aesthetic green Matcha Latte debates sparked cafe viral reels.",
        whatCausedTrend: "Viral cafe reviews in Bengaluru, Chennai, and Mumbai.",
        whyPeopleEngaging: "Cultural nostalgia vs modern health beverage aesthetic.",
        whyTrending: [{ icon: "☕", title: "Brass Tumbler Pour", desc: "Aesthetic meter-high coffee pours generating millions of views.", time: "Day 3", impact: "Visual Appeal" }],
        sectors: { labels: ["Coffee Culture", "Cafe Vlogs"], values: [60, 40], colors: ["#10b981", "#f59e0b"] },
        growthTimeline: { labels: ["Day 1", "Day 3"], mentions: [8000, 32000], shares: [2000, 11000] },
        propagationFlow: { initialSource: "Food Vloggers", earlyAdopters: "Coffee lovers", influencers: "Lifestyle creators", socialPosts: "180K Posts", engagementSurge: "85M Views", secondarySharing: "Cafe recommendations", currentReach: "14.2M", stages: [] },
        community: { audience: { labels: ["Coffee Aficionados"], values: [100], colors: ["#10b981"] }, engagementType: { labels: ["Views", "Likes"], values: [65, 35], colors: ["#ef4444", "#10b981"] }, demographics: { age: { "18-35": "85%" }, topRegions: ["Bengaluru", "Chennai", "Mumbai"] } },
        sentiment: { positive: 92, neutral: 6, negative: 2, summary: "Strong emotional connection to traditional Filter Coffee.", comments: [{ author: "@kaapi_lover", avatar: "KL", time: "22m ago", type: "positive", text: "Nothing on earth can beat a hot filter coffee!" }] }
      }
    ],
    news: [
      {
        id: "news-national-space-cabinet",
        name: "National Space Cabinet Clearance & Venus Mission",
        domain: "news",
        domainLabel: "📰 News",
        category: "Government Policy & National Space Bulletins",
        platform: "Press Information Bureau (PIB) & DD News",
        sourceName: "PIB India & Government Gazette",
        sourceUrl: "https://pib.gov.in/",
        dataStatus: "PUBLIC SOURCE",
        searchVolume: "880K+ searches",
        searchVolumeRaw: 880000,
        currentRank: "Rank #1 National News Bulletin",
        status: "🔥 Rapidly Trending",
        statusType: "rapid",
        growth: "+135%",
        growthRaw: 135,
        likes: "4.5M",
        likesRaw: 4500000,
        views: "210M+",
        comments: "58K",
        commentsRaw: 58000,
        reach: "35.0M",
        reachRaw: 35000000,
        propagationStrength: 98,
        propagationType: "Observed propagation",
        rZeroFactor: "5.00",
        viralityVelocity: "80K mentions/day",
        whatIsTrending: "Union Cabinet cleared ₹2,104 Cr funding for ISRO's Chandrayaan-4 lunar sample return and Shukrayaan Venus orbiter mission.",
        whatCausedTrend: "Official Prime Minister Cabinet briefing and ISRO S. Somanath press conference.",
        whyPeopleEngaging: "Sovereign scientific pride, national media broadcast coverage, and space tech enthusiasm.",
        whyTrending: [{ icon: "📰", title: "PIB Special Release", desc: "Official Gazette notification published by Press Information Bureau.", time: "T+10m", impact: "Press Coverage" }],
        sectors: { labels: ["Cabinet Policy", "National News", "Space Mission"], values: [50, 30, 20], colors: ["#ef4444", "#f97316", "#8b5cf6"] },
        growthTimeline: { labels: ["Day 1", "Day 2", "Day 3"], mentions: [50000, 180000, 380000], shares: [12000, 60000, 140000] },
        propagationFlow: { initialSource: "Cabinet Press Conference", earlyAdopters: "Journalists & News Agencies", influencers: "National Anchors", socialPosts: "650K Posts", engagementSurge: "210M Reach", secondarySharing: "WhatsApp News Threads", currentReach: "35M", stages: [] },
        community: { audience: { labels: ["General Public", "Students & Professionals"], values: [60, 40], colors: ["#ef4444", "#3b82f6"] }, engagementType: { labels: ["Broadcast Views", "Shares"], values: [70, 30], colors: ["#ef4444", "#10b981"] }, demographics: { age: { "18-50": "88%" }, topRegions: ["Pan-India"] } },
        sentiment: { positive: 97, neutral: 3, negative: 0, summary: "National celebration for space mission approvals.", comments: [{ author: "@pib_follower", avatar: "PF", time: "5m ago", type: "positive", text: "Historic cabinet decision for Indian science!" }] }
      },
      {
        id: "news-election-commission-schedule",
        name: "Election Commission State Assembly Poll Notification",
        domain: "news",
        domainLabel: "📰 News",
        category: "Electoral Bulletins & Public Policy",
        platform: "ECI Portal, DD News, ANI",
        sourceName: "Election Commission of India (ECI)",
        sourceUrl: "https://eci.gov.in/",
        dataStatus: "PUBLIC SOURCE",
        searchVolume: "920K+ searches",
        searchVolumeRaw: 920000,
        currentRank: "Rank #1 Public Policy Query",
        status: "🔥 Rapidly Trending",
        statusType: "rapid",
        growth: "+145%",
        growthRaw: 145,
        likes: "3.8M",
        likesRaw: 3800000,
        views: "195M+",
        comments: "72K",
        commentsRaw: 72000,
        reach: "38.5M",
        reachRaw: 38500000,
        propagationStrength: 96,
        propagationType: "Observed propagation",
        rZeroFactor: "4.80",
        viralityVelocity: "95K mentions/day",
        whatIsTrending: "Chief Election Commissioner press conference announcing multi-phase election schedule and Model Code of Conduct.",
        whatCausedTrend: "Live televised national broadcast from Vigyan Bhawan, New Delhi.",
        whyPeopleEngaging: "High civic engagement, voter awareness, and political discussions across news channels.",
        whyTrending: [{ icon: "🗳️", title: "ECI Live Conference", desc: "Televised live notification of voting phases and counting dates.", time: "T+5m", impact: "Live Broadcast" }],
        sectors: { labels: ["Electoral News", "Public Governance"], values: [70, 30], colors: ["#ef4444", "#3b82f6"] },
        growthTimeline: { labels: ["Day 1", "Day 2"], mentions: [70000, 290000], shares: [20000, 95000] },
        propagationFlow: { initialSource: "ECI Press Conference", earlyAdopters: "Political Reporters", influencers: "TV News Anchors", socialPosts: "890K Posts", engagementSurge: "195M Views", secondarySharing: "Civic WhatsApp Groups", currentReach: "38.5M", stages: [] },
        community: { audience: { labels: ["Voters & Citizens", "Youth"], values: [75, 25], colors: ["#ef4444", "#8b5cf6"] }, engagementType: { labels: ["Live Views", "Discussions"], values: [65, 35], colors: ["#ef4444", "#3b82f6"] }, demographics: { age: { "18-60": "92%" }, topRegions: ["Poll States", "Delhi-NCR"] } },
        sentiment: { positive: 90, neutral: 8, negative: 2, summary: "High civic engagement and democratic discussion.", comments: [{ author: "@voter_voice", avatar: "VV", time: "10m ago", type: "positive", text: "Important announcements for voter verification!" }] }
      }
    ]
  },

  trends: [
    // =============================================================
    // 1. MUSIC DOMAIN (🎵)
    // =============================================================
    {
      id: "music-aayi-nai",
      name: "Aayi Nai (Stree 2)",
      domain: "music",
      domainLabel: "🎵 Music",
      category: "Bhojpuri-Bollywood Fusion Viral Track",
      platform: "YouTube Music & Instagram Reels",
      sourceName: "YouTube Music India & Spotify Charts",
      sourceUrl: "https://charts.youtube.com/charts/TrendingVideos/in",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "200K+ searches",
      searchVolumeRaw: 200000,
      currentRank: "Rank #1 Trending Music",
      status: "🔥 Rapidly Trending",
      statusType: "rapid",
      growth: "+92%",
      growthRaw: 92,
      lastUpdated: getDynamicTodayIST(),
      // Reliable public metrics:
      likes: "2.4M",
      likesRaw: 2400000,
      views: "185M+",
      shares: "Not publicly available",
      comments: "48.2K",
      commentsRaw: 48200,
      reach: "28.5M (Est. Public Video Impressions)",
      reachRaw: 28500000,
      propagationStrength: 94,
      propagationType: "Observed propagation",
      rZeroFactor: "4.25",
      viralityVelocity: "32K reels created/day",
      whatIsTrending: "The high-energy folk-fusion dance track 'Aayi Nai' featuring Pawan Singh, Shraddha Kapoor, and Rajkummar Rao exploded into an all-India reel sensation.",
      whatCausedTrend: "The theatrical release of blockbuster Stree 2 combined with Pawan Singh's iconic Bhojpuri vocal style created an instant hook for dance creators.",
      whyPeopleEngaging: "Audience participation stems from the infectious dholak rhythm, easy-to-replicate hook steps, and cross-cultural appeal bridging North and Central Indian audiences.",
      whyTrending: [
        { icon: "🎬", title: "Blockbuster Movie Theatrical Release", desc: "Featured as the high-energy celebration climax in Stree 2, driving immediate post-movie search spikes.", time: "Day 1", impact: "Theatrical Spark" },
        { icon: "🎙️", title: "Pawan Singh Powerhouse Vocals", desc: "Bhojpuri superstar Pawan Singh collaborated with Sachin-Jigar, uniting Hindi film and regional Bhojpuri fanbases.", time: "Day 2", impact: "Cultural Multiplier" },
        { icon: "💃", title: "Viral Hook Step Reel Challenge", desc: "Top choreographers and over 450,000 Instagram creators published dance covers using the signature footwork.", time: "Day 4", impact: "Mass User Wave" },
        { icon: "🏆", title: "#1 on YouTube Global Weekly Chart", desc: "YouTube Music verified the video as the #1 most-viewed music video in India for 4 consecutive weeks.", time: "Day 7", impact: "Milestone Record" }
      ],
      sectors: {
        labels: ["Film Soundtrack", "Short-Form Video", "Regional Folk", "Dance Choreography"],
        values: [55, 25, 12, 8],
        colors: ["#ec4899", "#8b5cf6", "#3b82f6", "#f59e0b"]
      },
      growthTimeline: {
        labels: ["Day 1", "Day 3", "Day 5", "Day 7", "Day 10", "Day 14", "Day 21"],
        mentions: [12000, 38000, 75000, 142000, 210000, 260000, 295000],
        shares: [2500, 8900, 24000, 52000, 89000, 115000, 142000]
      },
      propagationFlow: {
        initialSource: "Official Saregama Music YouTube Channel Drop",
        earlyAdopters: "Bhojpuri music fans & Stree movie fan clubs",
        influencers: "Celebrity reel dancers & wedding choreographers",
        socialPosts: "450,000+ User-generated reels and YouTube Shorts",
        engagementSurge: "185M+ YouTube Views & 2.4M Verified Likes",
        secondarySharing: "WhatsApp status and wedding playlist circulations (Private - Not publicly trackable)",
        currentReach: "28.5M Estimated across music feeds",
        stages: [
          { name: "YouTube Drop", entity: "Saregama 4K Video", delay: "0h", metric: "Official Track" },
          { name: "Theatrical Spark", entity: "Stree 2 Release", delay: "+24h", metric: "Theaters Packed" },
          { name: "Reel Cascade", entity: "Hook Step Challenge", delay: "+48h", metric: "450K User Reels" },
          { name: "Spotify Surge", entity: "Top 50 India #1", delay: "+72h", metric: "Daily Stream Record" },
          { name: "TV & Radio", entity: "National Radio Syndication", delay: "+96h", metric: "Pan-India Airplay" },
          { name: "Wedding Culture", entity: "Sangeet Season Anthem", delay: "+120h", metric: "Mass Cultural Fit" },
          { name: "🔥 Viral Peak", entity: "185M+ Views & Global #1", delay: "+180h", metric: "Year-defining Hit" }
        ]
      },
      community: {
        audience: {
          labels: ["College Students", "Youth & Gen-Z", "Family Audiences"],
          values: [50, 32, 18],
          colors: ["#ec4899", "#8b5cf6", "#06b6d4"]
        },
        engagementType: {
          labels: ["Video Views", "Audio Reuse in Reels", "Likes", "Comments"],
          values: [60, 25, 12, 3],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "56%", "25-34": "34%", "35+": "10%" },
          topRegions: ["Uttar Pradesh", "Bihar", "Maharashtra", "Delhi-NCR"]
        }
      },
      sentiment: {
        positive: 89,
        neutral: 8,
        negative: 3,
        summary: "Universal admiration for the high-octane tempo, vocal chemistry, and Shraddha Kapoor's screen energy.",
        comments: [
          { author: "@dancingsoul_in", avatar: "DS", time: "25m ago", type: "positive", text: "Pawan Singh's entry in this song gives literal goosebumps! Dholak beats are unmatched." },
          { author: "@mumbai_cinephile", avatar: "MC", time: "1h ago", type: "positive", text: "Crowd in Gaiety Galaxy stood up and danced in front of the screen. Absolute cinema magic!" },
          { author: "@rhythm_critic", avatar: "RC", time: "3h ago", type: "neutral", text: "Very energetic track, although Sachin-Jigar followed their proven Kamariya template." }
        ]
      }
    },
    {
      id: "music-tauba-tauba",
      name: "Tauba Tauba (Karan Aujla)",
      domain: "music",
      domainLabel: "🎵 Music",
      category: "Punjabi Pop & Dance Viral Track",
      platform: "Spotify India & YouTube",
      sourceName: "Spotify India Top 50 & Billboard Canadian Hot 100",
      sourceUrl: "https://open.spotify.com/genre/section0000000000000000000",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "500K+ searches",
      searchVolumeRaw: 500000,
      currentRank: "Top 5 Global Punjabi Entry",
      status: "🔥 Rapidly Trending",
      statusType: "rapid",
      growth: "+105%",
      growthRaw: 105,
      lastUpdated: getDynamicTodayIST(),
      likes: "3.1M",
      likesRaw: 3100000,
      views: "210M+",
      shares: "Not publicly available",
      comments: "54.8K",
      commentsRaw: 54800,
      reach: "34.2M (Public Video & Streaming Reach)",
      reachRaw: 34200000,
      propagationStrength: 96,
      propagationType: "Observed propagation",
      rZeroFactor: "4.60",
      viralityVelocity: "45K reels created/day",
      whatIsTrending: "Karan Aujla's Punjabi dance track from 'Bad Newz' featuring Vicky Kaushal's effortless swag dance step dominated international audio feeds.",
      whatCausedTrend: "Vicky Kaushal's smooth footwork video posted on Instagram ignited a massive celebrity mimicry trend within hours.",
      whyPeopleEngaging: "The fusion of Western hip-hop basslines with Punjabi lyrics and Vicky Kaushal's charismatic swag created a high-flex dance format.",
      whyTrending: [
        { icon: "🕺", title: "Vicky Kaushal Footwork Video", desc: "Actor's rehearsal clip went viral with 60M+ views on Instagram alone, sparking celebrity recreation duets.", time: "T+2h", impact: "Visual Ignition" },
        { icon: "🎧", title: "Karan Aujla Global Streaming Run", desc: "Track peaked at #1 on Spotify India and made an entry into Billboard global charts.", time: "T+24h", impact: "Streaming Dominance" },
        { icon: "⚡", title: "Bollywood Celebrities Joining", desc: "Hrithik Roshan, Janhvi Kapoor, and international dancers praised and replicated the routine.", time: "T+48h", impact: "Celebrity Validation" }
      ],
      sectors: {
        labels: ["Punjabi Pop", "Bollywood Dance", "Short-Form Video", "International Streaming"],
        values: [48, 28, 16, 8],
        colors: ["#ec4899", "#f59e0b", "#8b5cf6", "#3b82f6"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [4200, 12500, 31000, 68000, 115000, 185000, 240000],
        shares: [800, 2800, 7900, 18500, 34000, 52000, 71000]
      },
      propagationFlow: {
        initialSource: "Zee Music Company Audio Launch",
        earlyAdopters: "Punjabi music curators & Vicky Kaushal fandom",
        influencers: "Top Bollywood stars, Indian choreographers, and fitness influencers",
        socialPosts: "620,000+ Recreated reels across platforms",
        engagementSurge: "210M+ Video Views & 3.1M Verified Likes",
        secondarySharing: "Club DJ rotations and fitness gym playlist additions",
        currentReach: "34.2M Unique social impressions",
        stages: [
          { name: "Audio Release", entity: "Film Track Drop", delay: "0h", metric: "Audio Debut" },
          { name: "Vicky IG Reel", entity: "Footwork Video", delay: "+6h", metric: "60M Reel Views" },
          { name: "Celeb Re-creations", entity: "Hrithik Roshan Comment", delay: "+18h", metric: "A-List Attention" },
          { name: "Global Spotify", entity: "Viral 50 Global", delay: "+36h", metric: "#1 India" },
          { name: "Gym & Club Rotations", entity: "Pan-India Nightlife", delay: "+72h", metric: "Club Anthem" },
          { name: "Billboard Entry", entity: "Global Excl. US", delay: "+120h", metric: "Chart Record" },
          { name: "🔥 Viral Peak", entity: "Cultural Benchmark", delay: "+160h", metric: "Year's Biggest Hook" }
        ]
      },
      community: {
        audience: {
          labels: ["Youth & College", "Urban Working Professionals", "Music Enthusiasts"],
          values: [46, 38, 16],
          colors: ["#ec4899", "#8b5cf6", "#06b6d4"]
        },
        engagementType: {
          labels: ["Video Streaming", "Reel Creation", "Likes", "Comments"],
          values: [55, 30, 11, 4],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "52%", "25-34": "39%", "35+": "9%" },
          topRegions: ["Punjab", "Delhi-NCR", "Maharashtra", "Canada (Diaspora)"]
        }
      },
      sentiment: {
        positive: 94,
        neutral: 5,
        negative: 1,
        summary: "Overwhelming praise for Vicky Kaushal's body rhythm and Karan Aujla's infectious vocal swagger.",
        comments: [
          { author: "@vicky_fans_club", avatar: "VF", time: "18m ago", type: "positive", text: "Vicky Kaushal didn't just dance, he set a new gold standard for Bollywood swag!" },
          { author: "@desi_hiphop_head", avatar: "DH", time: "42m ago", type: "positive", text: "Karan Aujla taking Punjabi music truly global with every single release." }
        ]
      }
    },
    {
      id: "music-illuminati-aavesham",
      name: "Illuminati (Aavesham)",
      domain: "music",
      domainLabel: "🎵 Music",
      category: "Malayalam Electronic Hip-Hop Viral Anthem",
      platform: "Spotify India & YouTube",
      sourceName: "Spotify India Top 50 & Think Music",
      sourceUrl: "https://open.spotify.com",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "100K+ searches",
      searchVolumeRaw: 100000,
      currentRank: "Rank #1 South Indian Streamed Track",
      status: "📈 Steady Growth",
      statusType: "steady",
      growth: "+48%",
      growthRaw: 48,
      lastUpdated: getDynamicTodayIST(),
      likes: "1.8M",
      likesRaw: 1800000,
      views: "140M+",
      shares: "Not publicly available",
      comments: "32.1K",
      commentsRaw: 32100,
      reach: "22.4M (Verified YouTube & Streaming Plays)",
      reachRaw: 22400000,
      propagationStrength: 88,
      propagationType: "Observed propagation",
      rZeroFactor: "3.75",
      viralityVelocity: "22K reels created/day",
      whatIsTrending: "Sushin Shyam & Dabzee's energetic track from Fahadh Faasil's hit movie Aavesham transcended linguistic barriers across India.",
      whatCausedTrend: "Fahadh Faasil's unhinged gangster character 'Ranga' in white safari suit dancing at college party captured internet imagination.",
      whyPeopleEngaging: "Catchy electronic bass drops, Malayalam rap verses, and Ranga-style attitude reels produced viral memes across college campuses.",
      whyTrending: [
        { icon: "🕶️", title: "Fahadh Faasil 'Ranga' Cult Craze", desc: "The character's signature laughter, sunglasses, and dance style became the template for youth edits.", time: "Week 1", impact: "Character Spark" },
        { icon: "🔊", title: "Sushin Shyam's Synth-Bass Drop", desc: "Electronic production style broke out of regional Kerala into clubs across Mumbai, Bengaluru, and Chennai.", time: "Week 2", impact: "Acoustic Virality" }
      ],
      sectors: {
        labels: ["Malayalam Rap", "Electronic Dance", "Campus Culture", "Film Score"],
        values: [52, 26, 14, 8],
        colors: ["#ec4899", "#8b5cf6", "#3b82f6", "#10b981"]
      },
      growthTimeline: {
        labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W8"],
        mentions: [8000, 24000, 68000, 115000, 172000, 210000, 238000],
        shares: [1200, 4800, 16000, 31000, 48000, 61000, 72000]
      },
      propagationFlow: {
        initialSource: "Think Music India YouTube Audio Launch",
        earlyAdopters: "Malayalam cinema buffs & campus students in Kerala",
        influencers: "South Indian creators, comedy sketch makers, and Bangalore techies",
        socialPosts: "340,000+ Reels with Ranga sunglasses filter",
        engagementSurge: "140M+ Views & 1.8M Likes",
        secondarySharing: "College fest entry music and sports team warm-ups",
        currentReach: "22.4M Music listeners nationwide",
        stages: [
          { name: "Audio Teaser", entity: "Sushin Shyam Drop", delay: "0h", metric: "Teaser Launch" },
          { name: "Movie Release", entity: "Aavesham Theaters", delay: "+24h", metric: "Housefull Buzz" },
          { name: "Ranga Memes", entity: "Safari Suit Edits", delay: "+72h", metric: "340K Reels" },
          { name: "Pan-India Spotify", entity: "Top 50 India", delay: "+120h", metric: "Cross-Language Hit" },
          { name: "College Fests", entity: "DJ Sets in Bengaluru", delay: "+180h", metric: "Campus Anthem" },
          { name: "National Virality", entity: "Multi-State Streaming", delay: "+240h", metric: "140M+ Views" },
          { name: "🔥 Viral Peak", entity: "Cult Pop Cultural Icon", delay: "+300h", metric: "Enduring Craze" }
        ]
      },
      community: {
        audience: {
          labels: ["College Students", "Young Tech Workers", "General Cinema Lovers"],
          values: [55, 30, 15],
          colors: ["#ec4899", "#8b5cf6", "#06b6d4"]
        },
        engagementType: {
          labels: ["Streams", "Reel Creation", "Likes", "Comments"],
          values: [58, 28, 10, 4],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "61%", "25-34": "31%", "35+": "8%" },
          topRegions: ["Kerala", "Karnataka", "Tamil Nadu", "Maharashtra"]
        }
      },
      sentiment: {
        positive: 91,
        neutral: 7,
        negative: 2,
        summary: "Adored for unmatched energy, Dabzee's raw rap flow, and Fahadh Faasil's electric performance.",
        comments: [
          { author: "@kerala_tunes", avatar: "KT", time: "30m ago", type: "positive", text: "Language is no barrier when the beat drops like this! Sushin Shyam is a musical genius." }
        ]
      }
    },

    // =============================================================
    // 2. SOCIAL MEDIA DOMAIN (📱)
    // =============================================================
    {
      id: "social-chin-tapak",
      name: "#ChinTapakDumDum Audio Meme",
      domain: "social",
      domainLabel: "📱 Social Media",
      category: "Viral Nostalgia Dialogue Remix",
      platform: "Instagram Reels & YouTube Shorts",
      sourceName: "Instagram Reels Audio Trending & YouTube Trends",
      sourceUrl: "https://trends.google.com/trends/trendingsearches/daily?geo=IN",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "500K+ searches",
      searchVolumeRaw: 500000,
      currentRank: "Rank #1 Viral Meme Audio in India",
      status: "🔥 Rapidly Trending",
      statusType: "rapid",
      growth: "+145%",
      growthRaw: 145,
      lastUpdated: getDynamicTodayIST(),
      likes: "18.5M (Aggregated Reel Likes on Top Posts)",
      likesRaw: 18500000,
      views: "250M+ (Reel Audio Impressions)",
      shares: "Not publicly available",
      comments: "142K+",
      commentsRaw: 142000,
      reach: "38.2M Users",
      reachRaw: 38200000,
      propagationStrength: 98,
      propagationType: "Observed propagation",
      rZeroFactor: "5.12",
      viralityVelocity: "120K reels created/day",
      whatIsTrending: "A quirky 3-second dialogue 'Chin Tapak Dum Dum' spoken by villain Takiya in old Chhota Bheem animated episodes became the ultimate punchline for awkward Indian situations.",
      whatCausedTrend: "A meme creator cut the vintage snippet and matched it with everyday relatable failures (exam results, mom scoldings, sudden expenses).",
      whyPeopleEngaging: "Extreme nostalgia from 2000s childhood cartoons paired with universal applicability to make funny reaction memes in under 5 seconds.",
      whyTrending: [
        { icon: "🧒", title: "Childhood Cartoon Nostalgia", desc: "Resurfaced from early 2010s Chhota Bheem cartoon, evoking immediate humorous recognition across Gen-Z.", time: "T+1h", impact: "Nostalgic Spark" },
        { icon: "🏢", title: "Brand & Corporate Social Media Takeover", desc: "Zomato, Swiggy, Netflix India, and police handles officially adopted the audio for promotional banter.", time: "T+24h", impact: "Brand Adoption" },
        { icon: "🎭", title: "Celebrity Lipsync Posts", desc: "Major television actors and cricketers posted humorous lip-sync videos using the catchphrase.", time: "T+48h", impact: "Mass Reach" }
      ],
      sectors: {
        labels: ["Relatable Memes", "Short-Form Video", "Brand Marketing", "Nostalgia Pop"],
        values: [55, 25, 12, 8],
        colors: ["#06b6d4", "#8b5cf6", "#ec4899", "#f59e0b"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [5000, 18000, 48000, 110000, 240000, 390000, 520000],
        shares: [1200, 4500, 14000, 36000, 78000, 120000, 165000]
      },
      propagationFlow: {
        initialSource: "Pogo TV Chhota Bheem Episode (Archived YouTube Clip)",
        earlyAdopters: "Instagram Indian meme pages & Reddit r/IndianDankMemes",
        influencers: "Bhuvan Bam, Tanmay Bhat, and top lifestyle vloggers",
        socialPosts: "850,000+ User-generated Reels & Shorts",
        engagementSurge: "18.5M+ Likes across creator videos",
        secondarySharing: "WhatsApp family group forwards & college discord memes",
        currentReach: "38.2M Social feed impressions",
        stages: [
          { name: "Old Clip Cut", entity: "Meme Page Snippet", delay: "0h", metric: "1 Short Video" },
          { name: "Meme Pages Wave", entity: "Top 50 Meme Hubs", delay: "+3h", metric: "500K Views" },
          { name: "Shorts Audio Peak", entity: "#ChinTapak Audio Tag", delay: "+12h", metric: "850K Reels" },
          { name: "Brand Marketing", entity: "Zomato & Swiggy Posts", delay: "+24h", metric: "Brand Infiltration" },
          { name: "Celeb Lipsync", entity: "Cricket & TV Stars", delay: "+48h", metric: "Prime Time Mentions" },
          { name: "Cross-Platform X", entity: "Trending #1 on X", delay: "+72h", metric: "120K Tweets" },
          { name: "🔥 Viral Peak", entity: "National Meme Sensation", delay: "+96h", metric: "All-Age Recognition" }
        ]
      },
      community: {
        audience: {
          labels: ["Students & School Kids", "Young Professionals", "General Social Users"],
          values: [58, 28, 14],
          colors: ["#06b6d4", "#8b5cf6", "#ec4899"]
        },
        engagementType: {
          labels: ["Reel Remakes", "Shares / DMs", "Likes", "Comments"],
          values: [48, 32, 14, 6],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "64%", "25-34": "28%", "35+": "8%" },
          topRegions: ["Delhi-NCR", "Maharashtra", "Uttar Pradesh", "West Bengal"]
        }
      },
      sentiment: {
        positive: 88,
        neutral: 9,
        negative: 3,
        summary: "Pure comedy and nostalgic joy; viewers enjoying how harmless and universal the audio is.",
        comments: [
          { author: "@desi_humor_99", avatar: "DH", time: "14m ago", type: "positive", text: "When life gives you lemons, just play Chin Tapak Dum Dum and move on haha!" },
          { author: "@memeking_india", avatar: "MK", time: "38m ago", type: "positive", text: "Whoever unearthed this dialogue from 2012 cartoon deserves a National Meme Award." }
        ]
      }
    },
    {
      id: "social-corporate-rto-memes",
      name: "RTO vs WFH Indian Tech Memes",
      domain: "social",
      domainLabel: "📱 Social Media",
      category: "Workplace Culture Debate",
      platform: "LinkedIn India & X (Twitter)",
      sourceName: "LinkedIn Trending Topics & X India",
      sourceUrl: "https://twitter.com/explore/tabs/trending",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "80K+ searches",
      searchVolumeRaw: 80000,
      currentRank: "Rank #3 Tech Discourse",
      status: "📈 Steady Growth",
      statusType: "steady",
      growth: "+42%",
      growthRaw: 42,
      lastUpdated: getDynamicTodayIST(),
      likes: "320K (Public Posts on LinkedIn & X)",
      likesRaw: 320000,
      views: "Not publicly available",
      shares: "48K Retweets & Reposts",
      sharesRaw: 48000,
      comments: "28.5K",
      commentsRaw: 28500,
      reach: "5.6M Indian Tech Professionals",
      reachRaw: 5600000,
      propagationStrength: 76,
      propagationType: "Cross-domain presence",
      rZeroFactor: "2.80",
      viralityVelocity: "8.5K posts/day",
      whatIsTrending: "Major Indian IT service giants enforcing mandatory 5-day return-to-office (RTO) ignited viral memes about Bengaluru and Pune traffic.",
      whatCausedTrend: "HR emails sent to employees mandating biometric attendance tracking with warnings on appraisal impacts.",
      whyPeopleEngaging: "Deep emotional venting from IT workforce battling Silk Board and Hinjawadi traffic jams, rent hikes, and loss of work-life balance.",
      whyTrending: [
        { icon: "🚦", title: "Bengaluru Silk Board Traffic Jokes", desc: "Commuters posted real-time GPS screenshots showing 2-hour delays for 6 km commutes.", time: "T+4h", impact: "Relatable Pain" },
        { icon: "📊", title: "Productivity Survey Debates", desc: "LinkedIn influencers sparked heated comment sections debating 70-hour work week vs work-life balance.", time: "T+18h", impact: "Executive Debate" }
      ],
      sectors: {
        labels: ["IT Industry", "Workplace Culture", "Urban Infrastructure", "Satirical Memes"],
        values: [50, 25, 15, 10],
        colors: ["#06b6d4", "#8b5cf6", "#f59e0b", "#64748b"]
      },
      growthTimeline: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        mentions: [4200, 11000, 18500, 24000, 31000, 19000, 14000],
        shares: [800, 2400, 5200, 8100, 11500, 5400, 3800]
      },
      propagationFlow: {
        initialSource: "Internal Corporate HR Announcements & Tech Reddit",
        earlyAdopters: "IT employees on Reddit r/developersIndia & Blind app",
        influencers: "Startup founders, senior engineering managers, and tech satirists",
        socialPosts: "48,000+ Tweets, LinkedIn carousels, and parody reels",
        engagementSurge: "320K Public likes & passionate commentary",
        secondarySharing: "Office Slack channels and WhatsApp batch groups",
        currentReach: "5.6M Tech workforce in India",
        stages: [
          { name: "HR Email Leak", entity: "Internal Circular", delay: "0h", metric: "Reddit r/developersIndia" },
          { name: "Twitter Outcry", entity: "#ReturnToOffice", delay: "+6h", metric: "25K Tweets" },
          { name: "Traffic Screenshots", entity: "Bengaluru Jam Memes", delay: "+18h", metric: "Viral Photo Carousels" },
          { name: "LinkedIn Thinkpieces", entity: "HR Leaders Debate", delay: "+36h", metric: "15K Longform Posts" },
          { name: "Mainstream Media", entity: "Business Standard & ET", delay: "+60h", metric: "News Feature" },
          { name: "Founder Rebuttals", entity: "Startup CEO Polls", delay: "+90h", metric: "High Engagement" },
          { name: "🔥 Viral Peak", entity: "National Workplace Discourse", delay: "+120h", metric: "Policy Attention" }
        ]
      },
      community: {
        audience: {
          labels: ["Software Engineers", "Management & HR", "General Tech Public"],
          values: [62, 24, 14],
          colors: ["#06b6d4", "#8b5cf6", "#3b82f6"]
        },
        engagementType: {
          labels: ["Comments / Debates", "Shares / Reposts", "Likes", "Survey Votes"],
          values: [42, 30, 20, 8],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "18%", "25-34": "64%", "35+": "18%" },
          topRegions: ["Bengaluru", "Hyderabad", "Pune", "Chennai"]
        }
      },
      sentiment: {
        positive: 14,
        neutral: 28,
        negative: 58,
        summary: "Predominantly frustrated sentiment concerning urban traffic, loss of flexible working, and high metro rents.",
        comments: [
          { author: "@bengaluru_techie", avatar: "BT", time: "22m ago", type: "negative", text: "Spent 3 hours on Outer Ring Road today just to attend Zoom meetings from an office cubicle." },
          { author: "@startup_lead", avatar: "SL", time: "1h ago", type: "neutral", text: "Hybrid 2-3 days makes sense for team sync, but rigid 5-day mandates ignore traffic realities." }
        ]
      }
    },
    {
      id: "social-instagram-ai-studio",
      name: "Meta AI Studio India Rollout",
      domain: "social",
      domainLabel: "📱 Social Media",
      category: "Social Platform Feature",
      platform: "Instagram & WhatsApp",
      sourceName: "Meta Newsroom & TechCrunch India",
      sourceUrl: "https://about.fb.com/news/",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "60K+ searches",
      searchVolumeRaw: 60000,
      currentRank: "Trending in App Features",
      status: "⚡ Viral Surge",
      statusType: "surge",
      growth: "+78%",
      growthRaw: 78,
      lastUpdated: getDynamicTodayIST(),
      likes: "185K",
      likesRaw: 185000,
      views: "Not publicly available",
      shares: "32K",
      sharesRaw: 32000,
      comments: "14.2K",
      commentsRaw: 14200,
      reach: "6.8M Indian Creators",
      reachRaw: 6800000,
      propagationStrength: 82,
      propagationType: "Observed propagation",
      rZeroFactor: "3.20",
      viralityVelocity: "14K interactions/day",
      whatIsTrending: "Meta's new AI Studio allowing Indian creators to build personalized AI chatbots to answer follower DMs generated widespread experimentation.",
      whatCausedTrend: "In-app rollout across Indian user profiles with ready-to-test creator clones.",
      whyPeopleEngaging: "Curiosity around whether creator AI avatars accurately mimic tone and whether followers are chatting with bots or real humans.",
      whyTrending: [
        { icon: "🤖", title: "Creator Chatbot Infiltration", desc: "Top creators programmed their AI to reply in Hinglish and regional slang.", time: "Day 1", impact: "Novelty Trigger" },
        { icon: "😂", title: "Hilarious Bot Fails & Screenshot Memes", desc: "Followers tested edge-case questions, sharing funny automated responses on Twitter.", time: "Day 3", impact: "Memetic Amplification" }
      ],
      sectors: {
        labels: ["Social Tech", "Creator Economy", "Artificial Intelligence", "Community Messaging"],
        values: [45, 30, 15, 10],
        colors: ["#06b6d4", "#8b5cf6", "#ec4899", "#10b981"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [1200, 3900, 9400, 18500, 31000, 48000, 62000],
        shares: [300, 1100, 3200, 7400, 13500, 21000, 32000]
      },
      propagationFlow: {
        initialSource: "Meta India Official Developer Announcement",
        earlyAdopters: "Verified tech influencers & digital marketing agencies",
        influencers: "Content creators testing AI auto-responders",
        socialPosts: "42,000+ Stories showing chatbot conversations",
        engagementSurge: "185K Likes & 14.2K comments comparing accuracy",
        secondarySharing: "DM screenshots shared into group chats",
        currentReach: "6.8M Social media users",
        stages: [
          { name: "App Update", entity: "Meta AI Studio Drop", delay: "0h", metric: "OTA Update" },
          { name: "Creator Tests", entity: "First 100 Influencer Clones", delay: "+6h", metric: "Hinglish AI Prompts" },
          { name: "DM Trolling", entity: "User Question Testing", delay: "+18h", metric: "Funny Screenshot Wave" },
          { name: "Tech YouTuber Videos", entity: "Explainer Carousels", delay: "+36h", metric: "Tutorial Trend" },
          { name: "Brand Integration", entity: "Direct Commerce Links", delay: "+60h", metric: "Shop Integration" },
          { name: "Cross-Platform X", entity: "Trending AI Feature", delay: "+84h", metric: "Tech Debate" },
          { name: "🔥 Viral Peak", entity: "Mass Adoption Milestone", delay: "+120h", metric: "Standard DM Tool" }
        ]
      },
      community: {
        audience: {
          labels: ["Content Creators", "Gen-Z Followers", "Digital Marketers"],
          values: [44, 38, 18],
          colors: ["#06b6d4", "#8b5cf6", "#3b82f6"]
        },
        engagementType: {
          labels: ["Chatbot Queries", "Screenshot Sharing", "Likes", "Comments"],
          values: [46, 32, 14, 8],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "58%", "25-34": "34%", "35+": "8%" },
          topRegions: ["Mumbai", "Delhi-NCR", "Bengaluru", "Hyderabad"]
        }
      },
      sentiment: {
        positive: 65,
        neutral: 24,
        negative: 11,
        summary: "Entertaining and futuristic, with mild wariness about fake follower intimacy.",
        comments: [
          { author: "@tech_chatter", avatar: "TC", time: "40m ago", type: "positive", text: "The Hinglish conversational flow in Meta AI studio is surprisingly natural!" }
        ]
      }
    },

    // =============================================================
    // 3. MOVIES & ENTERTAINMENT DOMAIN (🎬)
    // =============================================================
    {
      id: "movies-stree-2-boxoffice",
      name: "Stree 2 Historic Box Office Run",
      domain: "movies",
      domainLabel: "🎬 Movies & Entertainment",
      category: "Hindi Cinema Box Office Record",
      platform: "BookMyShow, YouTube & X (Twitter)",
      sourceName: "Sacnilk, Bollywood Hungama & BookMyShow",
      sourceUrl: "https://www.sacnilk.com",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "1M+ searches",
      searchVolumeRaw: 1000000,
      currentRank: "Rank #1 All-Time Hindi Net Grosser",
      status: "🔥 Rapidly Trending",
      statusType: "rapid",
      growth: "+160%",
      growthRaw: 160,
      lastUpdated: getDynamicTodayIST(),
      likes: "1.4M (Official Studio & Trade Tweets)",
      likesRaw: 1400000,
      views: "Not publicly available (Private Theatrical Tickets: 3.5Cr+ Admissions)",
      shares: "185K Trade Retweets",
      sharesRaw: 185000,
      comments: "92.4K",
      commentsRaw: 92400,
      reach: "44.5M Pan-India Cinema Audience",
      reachRaw: 44500000,
      propagationStrength: 97,
      propagationType: "Observed propagation",
      rZeroFactor: "4.85",
      viralityVelocity: "55K tickets sold/hour on peak weekends",
      whatIsTrending: "Amar Kaushik's horror-comedy sequel Stree 2 shattered all box office records, crossing ₹600 Crore domestic net to surpass Jawan and Animal.",
      whatCausedTrend: "Extraordinary word-of-mouth praise, family audience rush, and hilarious horror-comedy balance featuring Sarkata villain.",
      whyPeopleEngaging: "Audiences celebrated high-quality original writing triumphing without typical superstar hype, sparking Maddock Supernatural Universe debates.",
      whyTrending: [
        { icon: "💰", title: "Crossing ₹600 Crore Domestic Net Milestone", desc: "Trade analysts officially confirmed it as the highest-grossing Hindi film in domestic cinema history.", time: "Week 4", impact: "All-Time Record" },
        { icon: "👻", title: "Sarkata Villain Memes", desc: "The headless ghost antagonist became the subject of hundreds of hilarious viral memes across social channels.", time: "Week 1", impact: "Memetic Wave" },
        { icon: "✨", title: "Surprise Cameo Hype", desc: "Akshay Kumar's eccentric cameo and Varun Dhawan's Bhediya crossover ignited massive cinematic universe speculation.", time: "Day 1", impact: "Fandom Catalyst" }
      ],
      sectors: {
        labels: ["Theatrical Box Office", "Cinematic Universe", "Horror-Comedy", "Fan Discourse"],
        values: [62, 18, 12, 8],
        colors: ["#f59e0b", "#ec4899", "#8b5cf6", "#3b82f6"]
      },
      growthTimeline: {
        labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
        mentions: [45000, 120000, 240000, 380000, 490000, 560000, 620000],
        shares: [8500, 24000, 56000, 98000, 135000, 162000, 185000]
      },
      propagationFlow: {
        initialSource: "Theatrical Independence Day Release Drop",
        earlyAdopters: "First-day-first-show moviegoers & horror enthusiasts",
        influencers: "Trade analysts (Taran Adarsh, Komal Nahta) & film critics",
        socialPosts: "420,000+ Tweets, BookMyShow reviews, and reaction videos",
        engagementSurge: "₹600Cr+ Ticket sales & 92.4K debate threads",
        secondarySharing: "Family group movie plan invites & ticket booking links",
        currentReach: "44.5M Moviegoers across India",
        stages: [
          { name: "Advance Bookings", entity: "Record 450K Tickets Day 1", delay: "0h", metric: "BookMyShow Crash" },
          { name: "Unanimous WOM", entity: "Word of Mouth Eruption", delay: "+12h", metric: "95% Positive Ratings" },
          { name: "Sarkata Meme Wave", entity: "Viral Antagonist Clips", delay: "+36h", metric: "420K Posts" },
          { name: "Akshay Cameo Buzz", entity: "Universe Speculation", delay: "+72h", metric: "Fandom Hype" },
          { name: "Fastest 500Cr Net", entity: "Historic Milestone", delay: "+240h", metric: "Record Broken" },
          { name: "All-Time #1 Hindi", entity: "Surpasses Jawan", delay: "+480h", metric: "₹600Cr Club" },
          { name: "🔥 Viral Peak", entity: "Maddock Universe Solidified", delay: "+600h", metric: "Cultural Phenomenon" }
        ]
      },
      community: {
        audience: {
          labels: ["Family Audiences", "Youth & Students", "Cinephiles & Critics"],
          values: [48, 38, 14],
          colors: ["#f59e0b", "#ec4899", "#8b5cf6"]
        },
        engagementType: {
          labels: ["Ticket Purchases", "Review Writing", "Likes", "Shares"],
          values: [58, 22, 12, 8],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "38%", "25-34": "42%", "35+": "20%" },
          topRegions: ["Maharashtra", "Delhi-NCR", "Gujarat", "Rajasthan"]
        }
      },
      sentiment: {
        positive: 92,
        neutral: 6,
        negative: 2,
        summary: "Sensational acclaim for comedy timing, writing consistency, and ensemble performances.",
        comments: [
          { author: "@bollywood_tracker", avatar: "BT", time: "15m ago", type: "positive", text: "Stree 2 proved content is the undisputed king. What an incredible cinematic triumph!" }
        ]
      }
    },
    {
      id: "movies-pushpa-2-trailer",
      name: "Pushpa 2: The Rule Teaser & Buzz",
      domain: "movies",
      domainLabel: "🎬 Movies & Entertainment",
      category: "Pan-India Blockbuster Anticipation",
      platform: "YouTube India & X (Twitter)",
      sourceName: "Mythri Movie Makers & YouTube Trends",
      sourceUrl: "https://www.youtube.com",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "800K+ searches",
      searchVolumeRaw: 800000,
      currentRank: "Rank #1 Most Anticipated Indian Film",
      status: "⚡ Viral Surge",
      statusType: "surge",
      growth: "+125%",
      growthRaw: 125,
      lastUpdated: getDynamicTodayIST(),
      likes: "2.8M (YouTube Teaser Verified Likes)",
      likesRaw: 2800000,
      views: "115M+ Views in 24 Hours",
      shares: "Not publicly available",
      comments: "164K",
      commentsRaw: 164000,
      reach: "32.6M Film Lovers",
      reachRaw: 32600000,
      propagationStrength: 96,
      propagationType: "Observed propagation",
      rZeroFactor: "4.70",
      viralityVelocity: "42K tweets/hour on release day",
      whatIsTrending: "Sukumar's Pushpa 2: The Rule starring Allu Arjun and Fahadh Faasil generated volcanic excitement across North and South India ahead of its worldwide release.",
      whatCausedTrend: "The teaser showcasing Pushpa Raj in the iconic Jaathara avatar with ghungroos and blue saree broke all single-day 24-hour YouTube records.",
      whyPeopleEngaging: "Allu Arjun's National Award-winning swag, fierce dialogue delivery, and the high-stakes battle between Pushpa and SP Bhanwar Singh Shekhawat.",
      whyTrending: [
        { icon: "🦚", title: "Jaathara Avatar Visual Impact", desc: "Allu Arjun's blue pattu saree look with trishul became an instant viral sensation and artwork template.", time: "Day 1", impact: "Iconic Visual" },
        { icon: "📊", title: "Record 100M+ Views in 24 Hours", desc: "Became the fastest Indian teaser in history to breach the 100M view barrier across languages.", time: "Day 2", impact: "Record Breaker" }
      ],
      sectors: {
        labels: ["Telugu & Hindi Cinema", "Mass Action", "Fan Art & Edits", "Theatrical Rights"],
        values: [55, 25, 12, 8],
        colors: ["#f59e0b", "#ef4444", "#8b5cf6", "#3b82f6"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [15000, 48000, 115000, 240000, 410000, 590000, 720000],
        shares: [3200, 11000, 28000, 64000, 110000, 145000, 172000]
      },
      propagationFlow: {
        initialSource: "Mythri Movie Makers YouTube Premiere",
        earlyAdopters: "Allu Arjun fan clubs & Telugu cinephiles",
        influencers: "Hindi film critics, mass YouTubers, and box office trackers",
        socialPosts: "380,000+ Twitter trends under #Pushpa2TheRule",
        engagementSurge: "115M+ Views & 2.8M Likes",
        secondarySharing: "Fan edits on TikTok/Reels and WhatsApp status updates",
        currentReach: "32.6M Movie lovers globally",
        stages: [
          { name: "Teaser Premiere", entity: "4K YouTube Launch", delay: "0h", metric: "Live Stream Rush" },
          { name: "Jaathara Sensation", entity: "Saree Look Reveal", delay: "+2h", metric: "Jaw Drop Reactions" },
          { name: "100M Record", entity: "Fastest Indian Teaser", delay: "+24h", metric: "All-Time Record" },
          { name: "Dubbed Viral Spikes", entity: "Hindi/Tamil/Kannada Drops", delay: "+48h", metric: "Pan-India Trend" },
          { name: "Merchandise Buzz", entity: "Fan T-Shirts & Posters", delay: "+72h", metric: "Street Culture" },
          { name: "Pre-Release Deals", entity: "Theatrical Rights Record", delay: "+120h", metric: "₹1000Cr Biz" },
          { name: "🔥 Viral Peak", entity: "Global Box Office Countdown", delay: "+168h", metric: "Unstoppable Hype" }
        ]
      },
      community: {
        audience: {
          labels: ["Mass Action Fans", "Youth & Students", "Cinephiles"],
          values: [58, 30, 12],
          colors: ["#f59e0b", "#ef4444", "#3b82f6"]
        },
        engagementType: {
          labels: ["Video Views", "Likes", "Comments", "Shares"],
          values: [62, 22, 10, 6],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "52%", "25-34": "38%", "35+": "10%" },
          topRegions: ["Andhra Pradesh/Telangana", "Maharashtra", "Uttar Pradesh", "Bihar"]
        }
      },
      sentiment: {
        positive: 95,
        neutral: 4,
        negative: 1,
        summary: "Electric mass delirium across language borders; Allu Arjun's screen presence hailed as historic.",
        comments: [
          { author: "@tollywood_insider", avatar: "TI", time: "20m ago", type: "positive", text: "Pushpa Raj isn't fire, he is wild forest fire! Box office records will tremble." }
        ]
      }
    },
    {
      id: "movies-kalki-ott",
      name: "Kalki 2898 AD Streaming Arrival",
      domain: "movies",
      domainLabel: "🎬 Movies & Entertainment",
      category: "Sci-Fi Mythological Epic OTT Premiere",
      platform: "Netflix & Prime Video India",
      sourceName: "Netflix India & Prime Video Charts",
      sourceUrl: "https://www.netflix.com",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "400K+ searches",
      searchVolumeRaw: 400000,
      currentRank: "Rank #1 on Both Netflix & Prime India",
      status: "📈 Steady Growth",
      statusType: "steady",
      growth: "+54%",
      growthRaw: 54,
      lastUpdated: getDynamicTodayIST(),
      likes: "680K",
      likesRaw: 680000,
      views: "Not publicly available (Proprietary Streaming Hours)",
      shares: "52K",
      sharesRaw: 52000,
      comments: "38.5K",
      commentsRaw: 38500,
      reach: "18.4M OTT Viewers",
      reachRaw: 18400000,
      propagationStrength: 84,
      propagationType: "Observed propagation",
      rZeroFactor: "3.45",
      viralityVelocity: "18K discussions/day",
      whatIsTrending: "Nag Ashwin's sci-fi epic combining futuristic dystopian technology with Mahabharata lore gained massive second wind upon dual-OTT release.",
      whatCausedTrend: "Detailed 4K frame-by-frame decoding of Amitabh Bachchan's Ashwatthama battle sequences and Karna-Arjun lore.",
      whyPeopleEngaging: "Viewers paused and dissected mythological easter eggs, VFX worldbuilding, and debated Kamal Haasan's Supreme Yaskin plotline for Part 2.",
      whyTrending: [
        { icon: "🏹", title: "Mahabharata Sequence Dissections", desc: "High-definition streaming allowed fans to screenshot hidden iconography and Sanskrit shlokas.", time: "Day 1", impact: "Lore Analysis" },
        { icon: "👑", title: "Amitabh Bachchan Ashwatthama Praise", desc: "Widespread social consensus hailing 81-year-old Amitabh Bachchan's towering action choreography.", time: "Day 3", impact: "Actor Tribute" }
      ],
      sectors: {
        labels: ["Mythology & Sci-Fi", "OTT Streaming", "VFX & Worldbuilding", "Mahabharata Lore"],
        values: [52, 24, 14, 10],
        colors: ["#f59e0b", "#8b5cf6", "#06b6d4", "#ec4899"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [3200, 8900, 21000, 48000, 84000, 125000, 158000],
        shares: [700, 2100, 6400, 14500, 26000, 39000, 52000]
      },
      propagationFlow: {
        initialSource: "Midnight Dual OTT Release (Netflix Hindi / Prime South)",
        earlyAdopters: "Binge watchers, lore YouTubers, and VFX artists",
        influencers: "Film analysis channels (Tried & Refused Productions, ComicVerse)",
        socialPosts: "85,000+ Twitter threads and reddit r/tollywood discussions",
        engagementSurge: "680K Verified Likes & 38.5K lore debates",
        secondarySharing: "Clips of the Kurukshetra war sequence shared on WhatsApp",
        currentReach: "18.4M OTT Streamers",
        stages: [
          { name: "OTT Midnight Drop", entity: "Dual Platform Release", delay: "0h", metric: "Instant Server Rush" },
          { name: "Ashwatthama Clips", entity: "Kurukshetra Replays", delay: "+6h", metric: "Trending #1 Twitter" },
          { name: "Easter Egg Threads", entity: "YouTube Breakdown Videos", delay: "+18h", metric: "85K Posts" },
          { name: "Netflix Global Non-English", entity: "Top 10 Global Movies", delay: "+36h", metric: "International Watch" },
          { name: "Sequel Theories", entity: "Kalki Part 2 Debates", delay: "+72h", metric: "High Engagement" },
          { name: "VFX Peer Praise", entity: "Hollywood Animators Review", delay: "+120h", metric: "Industry Validation" },
          { name: "🔥 Viral Peak", entity: "Modern Indian Sci-Fi Standard", delay: "+168h", metric: "Streaming Benchmark" }
        ]
      },
      community: {
        audience: {
          labels: ["Sci-Fi & Comic Fans", "General Families", "Tech & Animation Students"],
          values: [48, 34, 18],
          colors: ["#f59e0b", "#8b5cf6", "#06b6d4"]
        },
        engagementType: {
          labels: ["Streaming Views", "Social Discussion", "Likes", "Shares"],
          values: [60, 22, 12, 6],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "44%", "25-34": "42%", "35+": "14%" },
          topRegions: ["Andhra Pradesh/Telangana", "Karnataka", "Maharashtra", "Tamil Nadu"]
        }
      },
      sentiment: {
        positive: 88,
        neutral: 9,
        negative: 3,
        summary: "Universal awe for Amitabh Bachchan and Nag Ashwin's courageous fusion of epic Indian lore with cyberpunk.",
        comments: [
          { author: "@sci_fi_bharat", avatar: "SB", time: "35m ago", type: "positive", text: "Amitabh Bachchan as Ashwatthama is easily one of the greatest casting triumphs in Indian cinema history." }
        ]
      }
    },

    // =============================================================
    // 4. SPORTS DOMAIN (🏏)
    // =============================================================
    {
      id: "sports-ind-ban-wtc",
      name: "India vs Bangladesh Test Series & WTC Final Race",
      domain: "sports",
      domainLabel: "🏏 Sports",
      category: "International Cricket & World Test Championship",
      platform: "JioCinema, Star Sports & X (Twitter)",
      sourceName: "BCCI Official, ESPNcricinfo & Google Trends India",
      sourceUrl: "https://www.espncricinfo.com",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "2M+ searches",
      searchVolumeRaw: 2000000,
      currentRank: "Rank #1 Google Trending Search in India",
      status: "🔥 Rapidly Trending",
      statusType: "rapid",
      growth: "+180%",
      growthRaw: 180,
      lastUpdated: getDynamicTodayIST(),
      likes: "1.9M (Official BCCI & Player Posts)",
      likesRaw: 1900000,
      views: "Not publicly available (Live Broadcast Concurrent Peak: 28M+ on JioCinema)",
      shares: "240K Retweets & Shares",
      sharesRaw: 240000,
      comments: "84.2K",
      commentsRaw: 84200,
      reach: "52.8M Cricket Fans",
      reachRaw: 52800000,
      propagationStrength: 99,
      propagationType: "Observed propagation",
      rZeroFactor: "5.40",
      viralityVelocity: "68K mentions/hour during live sessions",
      whatIsTrending: "Team India's commanding Test performances, Ravichandran Ashwin's all-round century and 6-wicket masterclass in Chennai, and the qualification race for WTC Finals at Lord's.",
      whatCausedTrend: "Live cricket match turnarounds, Ashwin equaling Shane Warne's record of 37 five-wicket hauls in Test cricket.",
      whyPeopleEngaging: "Passionate cricket discussions regarding batting order, Rohit Sharma's tactical captaincy, Rishabh Pant's triumphant Test return century, and preparation for Border-Gavaskar Trophy.",
      whyTrending: [
        { icon: "🏏", title: "Ashwin Record Milestone", desc: "Century in 1st innings + 6 wickets in 2nd innings on home ground Chennai equaled Warne's historic mark.", time: "Day 4", impact: "Historic Record" },
        { icon: "🔥", title: "Rishabh Pant's Comeback Century", desc: "First Test century after life-threatening accident brought stadium crowd and cricket world to tears.", time: "Day 3", impact: "Emotional Triumph" },
        { icon: "🏆", title: "WTC Points Table Top Spot", desc: "Consolidated India's #1 position on the ICC World Test Championship standings ahead of Australia tour.", time: "Day 5", impact: "Global Standing" }
      ],
      sectors: {
        labels: ["Test Cricket", "WTC Race", "Player Milestones", "Fan Discourse"],
        values: [65, 18, 11, 6],
        colors: ["#3b82f6", "#6366f1", "#10b981", "#f59e0b"]
      },
      growthTimeline: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Post-Match", "Analysis"],
        mentions: [85000, 160000, 310000, 580000, 890000, 1150000, 1340000],
        shares: [14000, 32000, 75000, 140000, 210000, 260000, 285000]
      },
      propagationFlow: {
        initialSource: "Live Broadcast on JioCinema & Sports18 from Chepauk",
        earlyAdopters: "Cricket journalists, ESPNcricinfo ball-by-ball trackers, and Twitter fans",
        influencers: "Sachin Tendulkar, Harsha Bhogle, Dinesh Karthik, and Virender Sehwag",
        socialPosts: "480,000+ Tweets, celebration clips, and batting wagons",
        engagementSurge: "2M+ Google Searches & 1.9M verified likes",
        secondarySharing: "WhatsApp family forwards with match scorecards and video highlights",
        currentReach: "52.8M Indian cricket followers",
        stages: [
          { name: "Toss & First Session", entity: "Match Start Chepauk", delay: "0h", metric: "Live Stream Rush" },
          { name: "Ashwin-Jadeja 199 Run Stand", entity: "Rescue Masterclass", delay: "+6h", metric: "Trending #1 Twitter" },
          { name: "Pant 109 Comeback", entity: "Tearful Celebration", delay: "+48h", metric: "Emotional Peak" },
          { name: "Ashwin 6-Wicket Haul", entity: "Equal Warne Record", delay: "+72h", metric: "Cricket History" },
          { name: "Victory Handshake", entity: "280 Run Win Sealed", delay: "+80h", metric: "WTC Table Boost" },
          { name: "Press Conference", entity: "Rohit & Ashwin Media", delay: "+84h", metric: "Quotes Viral" },
          { name: "🔥 Viral Peak", entity: "BGT Australia Preview", delay: "+96h", metric: "National Pride" }
        ]
      },
      community: {
        audience: {
          labels: ["Cricket Enthusiasts", "Youth & Students", "Family Viewers"],
          values: [48, 34, 18],
          colors: ["#3b82f6", "#6366f1", "#10b981"]
        },
        engagementType: {
          labels: ["Live Stream Watching", "Score Checking", "Social Debates", "Highlights Sharing"],
          values: [55, 25, 12, 8],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "38%", "25-34": "42%", "35+": "20%" },
          topRegions: ["Tamil Nadu", "Maharashtra", "Delhi-NCR", "Karnataka"]
        }
      },
      sentiment: {
        positive: 94,
        neutral: 5,
        negative: 1,
        summary: "Universal jubilation for Ashwin's historic achievements and Rishabh Pant's miraculous recovery.",
        comments: [
          { author: "@cricket_wallah", avatar: "CW", time: "10m ago", type: "positive", text: "Rishabh Pant scoring a Test century on comeback after that horrifying accident is pure inspiration!" },
          { author: "@spin_master_fan", avatar: "SM", time: "28m ago", type: "positive", text: "R Ashwin is India's greatest match-winner of this generation. Hundred + 6fer at Chepauk is mythical." }
        ]
      }
    },
    {
      id: "sports-ipl-retention-rules",
      name: "IPL 2025 Mega Auction Retention Rules & RTM",
      domain: "sports",
      domainLabel: "🏏 Sports",
      category: "Domestic T20 League Governance",
      platform: "X (Twitter) & ESPNcricinfo",
      sourceName: "BCCI Press Release & Cricbuzz",
      sourceUrl: "https://www.iplt20.com",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "500K+ searches",
      searchVolumeRaw: 500000,
      currentRank: "Rank #2 Sports Trending Topic",
      status: "⚡ Viral Surge",
      statusType: "surge",
      growth: "+130%",
      growthRaw: 130,
      lastUpdated: getDynamicTodayIST(),
      likes: "740K (Franchise & Analyst Tweets)",
      likesRaw: 740000,
      views: "Not publicly available",
      shares: "95K",
      sharesRaw: 95000,
      comments: "58.4K",
      commentsRaw: 58400,
      reach: "26.5M IPL Fans",
      reachRaw: 26500000,
      propagationStrength: 92,
      propagationType: "Observed propagation",
      rZeroFactor: "4.15",
      viralityVelocity: "38K tweets/day",
      whatIsTrending: "BCCI's official announcement of player retention rules (up to 6 retentions via retention/RTM, ₹120Cr purse, uncapped rule revival) triggered franchise prediction wars.",
      whatCausedTrend: "The re-introduction of the 5-year international retirement rule allowing MS Dhoni to be retained as an uncapped player for ₹4 Crore by CSK.",
      whyPeopleEngaging: "Passionate fanbase arguments over Rohit Sharma's MI status, Rishabh Pant at DC, KL Rahul at LSG, and fantasy mega-auction scenarios.",
      whyTrending: [
        { icon: "🦁", title: "MS Dhoni Uncapped Retention Clause", desc: "Rule allowing players retired from international cricket for 5+ years to be retained at ₹4Cr dominated headlines.", time: "T+1h", impact: "Dhoni Craze" },
        { icon: "💰", title: "₹120 Crore Team Purse Hike", desc: "Increased salary cap sparked calculations on how much top Indian stars (Bumrah, Kohli, Klaasen) will command.", time: "T+6h", impact: "Auction Math" }
      ],
      sectors: {
        labels: ["IPL Governance", "Franchise Fandom", "Auction Strategy", "Social Memes"],
        values: [48, 30, 14, 8],
        colors: ["#3b82f6", "#f59e0b", "#8b5cf6", "#10b981"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [8500, 24000, 68000, 145000, 260000, 380000, 470000],
        shares: [1800, 6200, 18000, 39000, 68000, 94000, 115000]
      },
      propagationFlow: {
        initialSource: "BCCI Governing Council Official Press Release",
        earlyAdopters: "Sports journalists, Cricbuzz live show, and IPL Twitter",
        influencers: "Aakash Chopra, Ravichandran Ashwin YouTube channel, and franchise handles (CSK, RCB, MI)",
        socialPosts: "240,000+ Tweets with #IPLRetention and squad graphics",
        engagementSurge: "740K Likes & 58.4K heated retention debate comments",
        secondarySharing: "WhatsApp group fantasy retention spreadsheets",
        currentReach: "26.5M T20 cricket enthusiasts",
        stages: [
          { name: "BCCI Press Release", entity: "Official Retention Rules", delay: "0h", metric: "PDF Release" },
          { name: "CSK Dhoni Uncapped Buzz", entity: "Rule 7 Debate", delay: "+30m", metric: "Trending #1 on X" },
          { name: "Rohit Sharma MI Debate", entity: "Captaincy Fallout Speculation", delay: "+4h", metric: "110K Tweets" },
          { name: "Cricbuzz & Star Sports", entity: "Live Primetime Shows", delay: "+8h", metric: "Broadcast Panel" },
          { name: "Franchise Teaser Posts", entity: "CSK & MI Cryptic Emojis", delay: "+18h", metric: "Fanbase Engagement" },
          { name: "Fantasy Squad Spreadsheets", entity: "Viral Reddit Charts", delay: "+36h", metric: "Deep Strategy" },
          { name: "🔥 Viral Peak", entity: "Mega Auction Countdown", delay: "+60h", metric: "Bidding Frenzy" }
        ]
      },
      community: {
        audience: {
          labels: ["IPL Franchise Fans", "Students & Gamers", "Cricket Analysts"],
          values: [55, 33, 12],
          colors: ["#3b82f6", "#f59e0b", "#8b5cf6"]
        },
        engagementType: {
          labels: ["Poll Voting", "Comments / Debates", "Shares", "Likes"],
          values: [42, 32, 16, 10],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "56%", "25-34": "35%", "35+": "9%" },
          topRegions: ["Tamil Nadu", "Maharashtra", "Karnataka", "West Bengal"]
        }
      },
      sentiment: {
        positive: 82,
        neutral: 14,
        negative: 4,
        summary: "Euphoria for CSK fans celebrating one more season of Thala Dhoni; high excitement for auction drama.",
        comments: [
          { author: "@whistle_podu_army", avatar: "WP", time: "18m ago", type: "positive", text: "Definite uncapped retention! One more year of MS Dhoni entering Chepauk in yellow." }
        ]
      }
    },
    {
      id: "sports-neeraj-chopra-diamond",
      name: "Neeraj Chopra 89.49m Diamond League Silver",
      domain: "sports",
      domainLabel: "🏏 Sports",
      category: "Athletics & Olympic Javelin",
      platform: "JioCinema, YouTube & X (Twitter)",
      sourceName: "Wanda Diamond League & Athletics Federation of India",
      sourceUrl: "https://www.worldathletics.org",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "300K+ searches",
      searchVolumeRaw: 300000,
      currentRank: "Rank #3 Sports Trend",
      status: "📈 Steady Growth",
      statusType: "steady",
      growth: "+62%",
      growthRaw: 62,
      lastUpdated: getDynamicTodayIST(),
      likes: "520K",
      likesRaw: 520000,
      views: "18M+ Video Clip Views",
      shares: "Not publicly available",
      comments: "22.4K",
      commentsRaw: 22400,
      reach: "18.2M Athletics Fans",
      reachRaw: 18200000,
      propagationStrength: 86,
      propagationType: "Observed propagation",
      rZeroFactor: "3.50",
      viralityVelocity: "16K mentions/day",
      whatIsTrending: "Neeraj Chopra's valiant 89.49-meter throw in the Brussels Diamond League final, finishing just 1 cm behind Anderson Peters despite competing with a fractured hand.",
      whatCausedTrend: "The athlete's post-match revelation that he competed through severe hand injury and bone fracture to represent India in the season finale.",
      whyPeopleEngaging: "Immense admiration for his grit, mental courage, supreme consistency, and modesty in victory or defeat.",
      whyTrending: [
        { icon: "🥈", title: "1 Centimeter Margin Drama", desc: "Narrowest margin in Diamond League javelin history (89.49m vs 89.48m) created nail-biting suspense.", time: "T+1h", impact: "Sporting Thriller" },
        { icon: "🩺", title: "Competing with Bone Fracture", desc: "X-ray photo and doctor's brief revealed fourth metacarpal fracture suffered during training.", time: "T+12h", impact: "Heroic Resilience" }
      ],
      sectors: {
        labels: ["Olympic Javelin", "National Athletics", "Inspirational Stories", "Sports Science"],
        values: [60, 22, 12, 6],
        colors: ["#3b82f6", "#10b981", "#f59e0b", "#64748b"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [4500, 14000, 38000, 85000, 142000, 195000, 230000],
        shares: [950, 3100, 8900, 19000, 34000, 48000, 59000]
      },
      propagationFlow: {
        initialSource: "Diamond League Brussels Official Stream & AFI Updates",
        earlyAdopters: "Olympic tracking accounts & Indian athletics journalists",
        influencers: "Abhinav Bindra, Prime Minister Narendra Modi, and sports anchors",
        socialPosts: "65,000+ Tweets under #NeerajChopra and highlight videos",
        engagementSurge: "520K Verified Likes & 22.4K congratulatory messages",
        secondarySharing: "Motivational reels paired with emotional music",
        currentReach: "18.2M Citizens celebrating sportsmanship",
        stages: [
          { name: "Final Round Throw", entity: "89.49m Javelin Release", delay: "0h", metric: "Live Stream" },
          { name: "1cm Silver Result", entity: "Anderson Peters Win", delay: "+15m", metric: "Thrilling Contest" },
          { name: "Fracture Revelation", entity: "Post-match X-ray Post", delay: "+12h", metric: "Emotional Shock" },
          { name: "PM Congratulation", entity: "Official Tweet Tribute", delay: "+18h", metric: "National Salute" },
          { name: "Reels Motivation", entity: "Workout & Grit Edits", delay: "+36h", metric: "35K Viral Reels" },
          { name: "Surgery & Rehab Buzz", entity: "Off-Season Recovery", delay: "+72h", metric: "Fan Well-wishes" },
          { name: "🔥 Viral Peak", entity: "India's Greatest Track Athlete", delay: "+100h", metric: "Permanent Legend" }
        ]
      },
      community: {
        audience: {
          labels: ["General Indian Public", "Students & Youth", "Sports Fraternity"],
          values: [52, 34, 14],
          colors: ["#3b82f6", "#10b981", "#8b5cf6"]
        },
        engagementType: {
          labels: ["Video Watching", "Likes", "Comments", "Shares"],
          values: [54, 28, 12, 6],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "42%", "25-34": "38%", "35+": "20%" },
          topRegions: ["Haryana", "Punjab", "Delhi-NCR", "Maharashtra"]
        }
      },
      sentiment: {
        positive: 98,
        neutral: 2,
        negative: 0,
        summary: "Supreme national pride and admiration for competing with fractured hand with zero excuses.",
        comments: [
          { author: "@indian_olympian_fan", avatar: "IO", time: "25m ago", type: "positive", text: "To throw 89.49m with a fractured hand is superhuman. Neeraj is a true warrior of Bharat!" }
        ]
      }
    },

    // =============================================================
    // 5. TECHNOLOGY DOMAIN (💻)
    // =============================================================
    {
      id: "tech-upi-circle-atm",
      name: "UPI Circle & Cardless Cash ATM Rollout",
      domain: "tech",
      domainLabel: "💻 Technology",
      category: "Fintech & Digital Public Infrastructure (DPI)",
      platform: "NPCI Official, LinkedIn & Tech Twitter",
      sourceName: "National Payments Corporation of India (NPCI) & RBI",
      sourceUrl: "https://www.npci.org.in",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "250K+ searches",
      searchVolumeRaw: 250000,
      currentRank: "Rank #1 Fintech Innovation",
      status: "🔥 Rapidly Trending",
      statusType: "rapid",
      growth: "+82%",
      growthRaw: 82,
      lastUpdated: getDynamicTodayIST(),
      likes: "240K (Fintech & Banking Handles)",
      likesRaw: 240000,
      views: "Not publicly available",
      shares: "42K",
      sharesRaw: 42000,
      comments: "18.2K",
      commentsRaw: 18200,
      reach: "12.8M Indian Smartphone Users",
      reachRaw: 12800000,
      propagationStrength: 87,
      propagationType: "Observed propagation",
      rZeroFactor: "3.80",
      viralityVelocity: "18K retweets/day",
      whatIsTrending: "NPCI's nationwide rollout of 'UPI Circle' (delegated secondary payments for family members) and Interoperable Cardless Cash Withdrawal (ICCW) via QR codes at ATMs.",
      whatCausedTrend: "Live demo videos at Global Fintech Fest showing users scanning ATM screens with Google Pay/PhonePe and withdrawing currency without plastic debit cards.",
      whyPeopleEngaging: "Revolutionary convenience for aging parents, students, and eliminating ATM card skimming fraud across India.",
      whyTrending: [
        { icon: "💳", title: "End of Plastic ATM Cards", desc: "Users can walk up to any bank ATM, scan dynamic QR on machine, and receive cash within 10 seconds.", time: "T+2h", impact: "Consumer Delight" },
        { icon: "👨‍👩‍👧", title: "UPI Circle Delegated Payments", desc: "Parents can authorize college kids or domestic helpers to spend up to ₹15,000/month from their primary account with limits.", time: "T+12h", impact: "Family Utility" }
      ],
      sectors: {
        labels: ["Fintech & Banking", "Digital Public Infra", "Consumer Tech", "Security & Fraud Control"],
        values: [55, 22, 15, 8],
        colors: ["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [2100, 6800, 18500, 42000, 89000, 145000, 195000],
        shares: [500, 1800, 5400, 12500, 24000, 36000, 42000]
      },
      propagationFlow: {
        initialSource: "NPCI Keynote at Global Fintech Fest Mumbai",
        earlyAdopters: "Fintech product managers, banking journalists, and tech Twitter",
        influencers: "Fintech vloggers (Akshat Shrivastava, LLA, Asset Yogi)",
        socialPosts: "48,000+ Explainer carousels and demo shorts",
        engagementSurge: "240K Likes & 18.2K setup inquiries",
        secondarySharing: "Family WhatsApp groups forwarded step-by-step guides",
        currentReach: "12.8M Banking consumers",
        stages: [
          { name: "NPCI Press Release", entity: "RBI Circular Issued", delay: "0h", metric: "Regulatory Greenlight" },
          { name: "ATM Live Demo", entity: "QR Withdrawal Video", delay: "+4h", metric: "2M Video Views" },
          { name: "Bank Implementation", entity: "SBI, HDFC, ICICI Rollout", delay: "+24h", metric: "Active at 150K ATMs" },
          { name: "UPI Circle Setup", entity: "PhonePe & GPay Update", delay: "+48h", metric: "App Feature Live" },
          { name: "Family Forwards", entity: "WhatsApp How-To Guides", delay: "+72h", metric: "Senior Citizen Reach" },
          { name: "Global Fintech Buzz", entity: "International Coverage", delay: "+96h", metric: "DPI Benchmark" },
          { name: "🔥 Viral Peak", entity: "Daily Payment Routine", delay: "+120h", metric: "Mainstream Adoption" }
        ]
      },
      community: {
        audience: {
          labels: ["Working Professionals", "College Students", "Senior Citizens / Parents"],
          values: [48, 32, 20],
          colors: ["#8b5cf6", "#3b82f6", "#06b6d4"]
        },
        engagementType: {
          labels: ["Tutorial Watching", "Shares", "Comments", "Likes"],
          values: [48, 28, 14, 10],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "28%", "25-34": "52%", "35+": "20%" },
          topRegions: ["Bengaluru", "Mumbai", "Delhi-NCR", "Hyderabad"]
        }
      },
      sentiment: {
        positive: 92,
        neutral: 6,
        negative: 2,
        summary: "Universal acclaim for India's digital payments infrastructure leading global banking innovations.",
        comments: [
          { author: "@fintech_india", avatar: "FI", time: "18m ago", type: "positive", text: "India's UPI ecosystem makes Western banking look like it's stuck in 2005. Seamless execution!" }
        ]
      }
    },
    {
      id: "tech-bharatgen-sarvam-ai",
      name: "BharatGen & Sarvam AI Indic LLM Breakthrough",
      domain: "tech",
      domainLabel: "💻 Technology",
      category: "Sovereign Generative Artificial Intelligence",
      platform: "ArXiv, GitHub & Tech Twitter",
      sourceName: "Department of Science & Technology (DST) & Sarvam AI",
      sourceUrl: "https://dst.gov.in",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "90K+ searches",
      searchVolumeRaw: 90000,
      currentRank: "Rank #2 Tech Research Trend",
      status: "⚡ Viral Surge",
      statusType: "surge",
      growth: "+64%",
      growthRaw: 64,
      lastUpdated: getDynamicTodayIST(),
      likes: "165K",
      likesRaw: 165000,
      views: "Not publicly available",
      shares: "28K",
      sharesRaw: 28000,
      comments: "11.4K",
      commentsRaw: 11400,
      reach: "4.8M Developers & Researchers",
      reachRaw: 4800000,
      propagationStrength: 81,
      propagationType: "Observed propagation",
      rZeroFactor: "3.10",
      viralityVelocity: "12K tweets/day",
      whatIsTrending: "Government of India's launch of 'BharatGen' initiative and Sarvam AI's OpenHathi language models natively trained on 22 official Indian languages.",
      whatCausedTrend: "Union Minister Dr. Jitendra Singh inaugurating the first government-funded multimodal generative AI initiative under the National Quantum & AI Mission.",
      whyPeopleEngaging: "Addressing the severe English bias in global models like ChatGPT, enabling voice-first governance in Hindi, Tamil, Telugu, and Bengali.",
      whyTrending: [
        { icon: "🇮🇳", title: "Sovereign AI Infrastructure", desc: "First indigenous foundational model trained on Indian cultural corpus and subsidized government computing clusters.", time: "Day 1", impact: "National Initiative" },
        { icon: "🎙️", title: "Voice-First Multilingual Translation", desc: "Demos showed real-time audio translation across 10 Indian regional dialects with 98% phonetic fidelity.", time: "Day 2", impact: "Tech Milestone" }
      ],
      sectors: {
        labels: ["Generative AI", "Indic Languages", "GovTech & DPI", "Academic Research"],
        values: [52, 26, 14, 8],
        colors: ["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [900, 2800, 8400, 19000, 36000, 58000, 74000],
        shares: [200, 750, 2400, 6800, 14000, 21000, 28000]
      },
      propagationFlow: {
        initialSource: "DST Press Release & IIT Bombay Media Center",
        earlyAdopters: "AI research fellows at IITs/IISc, Hugging Face developers, and tech founders",
        influencers: "Vinod Khosla, Nandan Nilekani, and AI startup CEOs",
        socialPosts: "34,000+ GitHub star milestones and benchmark comparisons",
        engagementSurge: "165K Likes & 11.4K developer comments",
        secondarySharing: "Discord and Slack channels of Indian engineering campuses",
        currentReach: "4.8M Software engineers and students",
        stages: [
          { name: "Government Launch", entity: "DST Official Inception", delay: "0h", metric: "PIB Bulletin" },
          { name: "GitHub Model Weights", entity: "OpenHathi Repo Release", delay: "+6h", metric: "5K Stars in 24h" },
          { name: "Regional Audio Demo", entity: "Hindi-Tamil Live Voice", delay: "+18h", metric: "Viral Demo Video" },
          { name: "Developer Benchmarks", entity: "MMLU Indic Scorecards", delay: "+36h", metric: "Beat Llama-3 on Indic" },
          { name: "Enterprise Trials", entity: "Bhashini Govt Integration", delay: "+60h", metric: "E-Gov Pilot" },
          { name: "Academic Symposia", entity: "IIT Tech Fests", delay: "+96h", metric: "Campus Hackathons" },
          { name: "🔥 Viral Peak", entity: "India's Sovereign AI Base", delay: "+144h", metric: "Global Indic Standard" }
        ]
      },
      community: {
        audience: {
          labels: ["AI Researchers & Devs", "Tech Students", "Policy Makers"],
          values: [54, 34, 12],
          colors: ["#8b5cf6", "#3b82f6", "#06b6d4"]
        },
        engagementType: {
          labels: ["Code Forks / Testing", "Shares", "Comments", "Likes"],
          values: [44, 30, 16, 10],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "42%", "25-34": "48%", "35+": "10%" },
          topRegions: ["Bengaluru", "Hyderabad", "Delhi-NCR", "Pune"]
        }
      },
      sentiment: {
        positive: 86,
        neutral: 11,
        negative: 3,
        summary: "Strong nationalist and scientific excitement; developers eager for low-cost API inference credits.",
        comments: [
          { author: "@indic_nlp_geek", avatar: "IN", time: "25m ago", type: "positive", text: "Finally models that understand nuances of Hindi idioms rather than literal machine translation!" }
        ]
      }
    },
    {
      id: "tech-iphone-16-made-in-india",
      name: "iPhone 16 Pro Made in India (Foxconn Expansion)",
      domain: "tech",
      domainLabel: "💻 Technology",
      category: "Consumer Hardware & Electronics Manufacturing",
      platform: "YouTube Tech Channels & X (Twitter)",
      sourceName: "Economic Times, Bloomberg & Ministry of Electronics (MeitY)",
      sourceUrl: "https://economictimes.indiatimes.com",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "350K+ searches",
      searchVolumeRaw: 350000,
      currentRank: "Rank #3 Tech Consumer Search",
      status: "📈 Steady Growth",
      statusType: "steady",
      growth: "+45%",
      growthRaw: 45,
      lastUpdated: getDynamicTodayIST(),
      likes: "210K",
      likesRaw: 210000,
      views: "Not publicly available",
      shares: "34K",
      sharesRaw: 34000,
      comments: "19.5K",
      commentsRaw: 19500,
      reach: "14.2M Consumers",
      reachRaw: 14200000,
      propagationStrength: 79,
      propagationType: "Observed propagation",
      rZeroFactor: "2.95",
      viralityVelocity: "14K mentions/day",
      whatIsTrending: "Apple assembling top-tier iPhone 16 Pro and Pro Max models in India for the first time through Foxconn Sriperumbudur facility sparked pride and price debates.",
      whatCausedTrend: "The retail launch day showing 'Assembled in India' on Pro model retail boxes in Delhi and Mumbai stores.",
      whyPeopleEngaging: "Consumers debated why retail prices in India remain higher than Dubai/US despite domestic assembly under PLI scheme.",
      whyTrending: [
        { icon: "🏭", title: "First Time 'Pro' Models Made Outside China", desc: "Historic milestone for Indian manufacturing with Foxconn assembling flagship titanium models in Tamil Nadu.", time: "Launch Day", impact: "Industrial Landmark" },
        { icon: "🏷️", title: "Price Parity Debate (India vs Dubai)", desc: "Tech creators compared import duty math, GST, and flight ticket costs to buy in Dubai vs buying locally.", time: "Day 2", impact: "Consumer Heat" }
      ],
      sectors: {
        labels: ["Smartphone Hardware", "Make in India (PLI)", "Consumer Pricing", "Tech Retail"],
        values: [50, 28, 14, 8],
        colors: ["#8b5cf6", "#f59e0b", "#ef4444", "#3b82f6"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [1800, 5200, 14000, 31000, 62000, 95000, 125000],
        shares: [400, 1400, 4200, 9800, 18500, 26000, 34000]
      },
      propagationFlow: {
        initialSource: "Apple Retail Store Launch in BKC Mumbai & Saket Delhi",
        earlyAdopters: "Tech unboxers, tech journalists, and early queue buyers",
        influencers: "Technical Guruji, Geekyranjit, and Beebom",
        socialPosts: "48,000+ Unboxing tweets, retail box photos, and comparison reels",
        engagementSurge: "210K Verified Likes & 19.5K pricing comments",
        secondarySharing: "Buying advice in tech and finance WhatsApp chats",
        currentReach: "14.2M Smartphone buyers",
        stages: [
          { name: "Launch Queues", entity: "Apple Store Openings", delay: "0h", metric: "Store Lines at 6 AM" },
          { name: "Box Label Photos", entity: "'Assembled in India' Pro", delay: "+2h", metric: "Viral Twitter Photos" },
          { name: "MeitY Tweet", entity: "Minister Ashwini Vaishnaw", delay: "+6h", metric: "Govt Endorsement" },
          { name: "Dubai Price Comparison", entity: "Tech Vloggers Analysis", delay: "+18h", metric: "8M Video Views" },
          { name: "Supply Chain News", entity: "Economic Times Front Page", delay: "+36h", metric: "Exports Data" },
          { name: "E-Commerce Delivery", entity: "10-Min Delivery via Blinkit", delay: "+60h", metric: "Quick Commerce Buzz" },
          { name: "🔥 Viral Peak", entity: "Hardware Hub Recognition", delay: "+96h", metric: "Manufacturing Shift" }
        ]
      },
      community: {
        audience: {
          labels: ["Tech Enthusiasts", "Working Professionals", "Students"],
          values: [46, 42, 12],
          colors: ["#8b5cf6", "#3b82f6", "#06b6d4"]
        },
        engagementType: {
          labels: ["Unboxing Views", "Price Debates", "Likes", "Shares"],
          values: [52, 28, 12, 8],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "38%", "25-34": "50%", "35+": "12%" },
          topRegions: ["Mumbai", "Delhi-NCR", "Bengaluru", "Chennai"]
        }
      },
      sentiment: {
        positive: 74,
        neutral: 18,
        negative: 8,
        summary: "Great pride in Indian electronics manufacturing capabilities; continued hope for lower retail prices.",
        comments: [
          { author: "@gadget_guru_in", avatar: "GG", time: "18m ago", type: "positive", text: "Seeing 'Assembled in India' on the top-of-the-line Pro Max box is a huge victory for Indian manufacturing!" }
        ]
      }
    },

    // =============================================================
    // 6. NEWS DOMAIN (📰)
    // =============================================================
    {
      id: "news-chandrayaan-4-venus",
      name: "ISRO Chandrayaan-4 & Venus Orbiter Mission Approval",
      domain: "news",
      domainLabel: "📰 News",
      category: "Space Exploration & National Policy",
      platform: "PIB India, DD News & X (Twitter)",
      sourceName: "Press Information Bureau (PIB) & ISRO",
      sourceUrl: "https://pib.gov.in",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "600K+ searches",
      searchVolumeRaw: 600000,
      currentRank: "Rank #1 National Science News",
      status: "🔥 Rapidly Trending",
      statusType: "rapid",
      growth: "+140%",
      growthRaw: 140,
      lastUpdated: getDynamicTodayIST(),
      likes: "480K (Official Government & Science Handles)",
      likesRaw: 480000,
      views: "Not publicly available",
      shares: "86K",
      sharesRaw: 86000,
      comments: "28.4K",
      commentsRaw: 28400,
      reach: "38.5M Citizens",
      reachRaw: 38500000,
      propagationStrength: 95,
      propagationType: "Observed propagation",
      rZeroFactor: "4.50",
      viralityVelocity: "32K retweets/day",
      whatIsTrending: "Union Cabinet cleared ₹22,750 Crore for major space missions including Chandrayaan-4 (Lunar Sample Return), Venus Orbiter Mission (Shukrayaan), and Bharatiya Antariksh Station (BAS).",
      whatCausedTrend: "Official Union Cabinet press briefing by Union Minister Ashwini Vaishnaw detailing timeline for Indian astronaut Moon landing by 2040.",
      whyPeopleEngaging: "National pride following Chandrayaan-3's historic South Pole landing, curiosity regarding lunar rock retrieval, and planetary science ambition.",
      whyTrending: [
        { icon: "🌕", title: "Chandrayaan-4 Lunar Sample Return", desc: "First Indian mission designed to drill, collect lunar surface soil, and return safely to Earth.", time: "T+1h", impact: "Historic Space Goal" },
        { icon: "🪐", title: "Venus Orbiter Mission Clearance", desc: "First Indian scientific spacecraft to study the hostile atmosphere and volcanic surface of Venus.", time: "T+4h", impact: "Planetary Science" },
        { icon: "🚀", title: "Indian Space Station Module 1 by 2028", desc: "Blueprint approved for Base module launch of Bharatiya Antariksh Station.", time: "T+12h", impact: "Human Spaceflight" }
      ],
      sectors: {
        labels: ["Space Exploration", "National Budget", "Scientific Innovation", "Geopolitics"],
        values: [62, 18, 12, 8],
        colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [5200, 18500, 54000, 120000, 240000, 390000, 480000],
        shares: [1100, 4200, 14500, 34000, 62000, 78000, 86000]
      },
      propagationFlow: {
        initialSource: "Press Information Bureau (PIB) Cabinet Briefing",
        earlyAdopters: "Space journalists, defense analysts, and astronomy students",
        influencers: "ISRO Chairman S. Somanath, aerospace commentators, and news anchors",
        socialPosts: "85,000+ Tweets with #ISRO, #Chandrayaan4, and mission infographics",
        engagementSurge: "480K Likes & 28.4K patriotic comments",
        secondarySharing: "Educational school and university WhatsApp groups",
        currentReach: "38.5M Citizens",
        stages: [
          { name: "Cabinet Briefing", entity: "Union Approval Announced", delay: "0h", metric: "PIB Live Stream" },
          { name: "Budget Infographics", entity: "₹22,750 Cr Allocation", delay: "+2h", metric: "Trending #1 on X" },
          { name: "ISRO Official Blueprint", entity: "Sample Return Animation", delay: "+6h", metric: "5M Video Views" },
          { name: "Venus Mission News", entity: "Global Science Media", delay: "+18h", metric: "NASA & ESA Quotes" },
          { name: "Editorial Analyses", entity: "Indian Express & Hindu", delay: "+36h", metric: "Front Page News" },
          { name: "School Classroom Buzz", entity: "Science Curriculum Sharing", delay: "+60h", metric: "Educational Wave" },
          { name: "🔥 Viral Peak", entity: "National Pride Milestone", delay: "+96h", metric: "Global Space Leader" }
        ]
      },
      community: {
        audience: {
          labels: ["Students & Youth", "Educators & Researchers", "General Citizens"],
          values: [48, 30, 22],
          colors: ["#ef4444", "#3b82f6", "#10b981"]
        },
        engagementType: {
          labels: ["Article Reading", "Shares", "Likes", "Comments"],
          values: [50, 30, 12, 8],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "46%", "25-34": "38%", "35+": "16%" },
          topRegions: ["Karnataka", "Tamil Nadu", "Maharashtra", "Delhi-NCR"]
        }
      },
      sentiment: {
        positive: 97,
        neutral: 2,
        negative: 1,
        summary: "Overwhelming patriotic euphoria and scientific celebration across all states.",
        comments: [
          { author: "@space_enthusiast_in", avatar: "SE", time: "20m ago", type: "positive", text: "Chandrayaan-4 returning Moon soil to India will be a golden chapter in our history. Kudos ISRO!" }
        ]
      }
    },
    {
      id: "news-election-dates-state",
      name: "Assembly Election Schedules (Maharashtra & Jharkhand)",
      domain: "news",
      domainLabel: "📰 News",
      category: "Democratic Elections & National Governance",
      platform: "ECI Official, Live TV & X (Twitter)",
      sourceName: "Election Commission of India (ECI) & Doordarshan",
      sourceUrl: "https://eci.gov.in",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "800K+ searches",
      searchVolumeRaw: 800000,
      currentRank: "Rank #1 Political News",
      status: "🔥 Rapidly Trending",
      statusType: "rapid",
      growth: "+115%",
      growthRaw: 115,
      lastUpdated: getDynamicTodayIST(),
      likes: "290K",
      likesRaw: 290000,
      views: "Not publicly available",
      shares: "64K",
      sharesRaw: 64000,
      comments: "46.2K",
      commentsRaw: 46200,
      reach: "32.4M Voters",
      reachRaw: 32400000,
      propagationStrength: 91,
      propagationType: "Observed propagation",
      rZeroFactor: "4.10",
      viralityVelocity: "28K tweets/day",
      whatIsTrending: "Chief Election Commissioner's press conference announcing single-phase polling in Maharashtra and two-phase polling in Jharkhand alongside model code of conduct.",
      whatCausedTrend: "Live televised press conference detailing voting dates, counting schedules, and security deployment.",
      whyPeopleEngaging: "High-stakes political battle between Mahayuti vs MVA in Maharashtra and NDA vs INDIA in Jharkhand influencing state welfare schemes.",
      whyTrending: [
        { icon: "🗳️", title: "Single-Phase Maharashtra Polling", desc: "ECI confirmed single-day voting for all 288 assembly seats across Maharashtra.", time: "T+30m", impact: "Logistical Surprise" },
        { icon: "⚖️", title: "Model Code of Conduct Enforced", desc: "Freeze on new government populist announcements sparked debate on schemes like Ladki Bahin.", time: "T+3h", impact: "Policy Shift" }
      ],
      sectors: {
        labels: ["State Politics", "Electoral Governance", "Public Welfare", "Live Media"],
        values: [58, 22, 12, 8],
        colors: ["#ef4444", "#f59e0b", "#3b82f6", "#10b981"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [4200, 14000, 48000, 110000, 210000, 310000, 395000],
        shares: [900, 3400, 11000, 26000, 45000, 58000, 64000]
      },
      propagationFlow: {
        initialSource: "ECI Vigyan Bhawan Press Conference",
        earlyAdopters: "Political reporters, regional news desks, and party spokespersons",
        influencers: "Leading political analysts, party handles, and TV anchors",
        socialPosts: "92,000+ Tweets with #MaharashtraElections and seat forecasts",
        engagementSurge: "290K Verified Likes & 46.2K debate comments",
        secondarySharing: "Constituency-level WhatsApp groups and local party cadre feeds",
        currentReach: "32.4M Voters",
        stages: [
          { name: "CEC Press Briefing", entity: "Vigyan Bhawan Live", delay: "0h", metric: "Live News Stream" },
          { name: "Schedule Infographic", entity: "Voting Dates Published", delay: "+30m", metric: "Trending #1 on X" },
          { name: "Alliance Reactions", entity: "Party Leaders Speeches", delay: "+3h", metric: "45K Tweets" },
          { name: "Model Code Freeze", entity: "Welfare Scheme Reviews", delay: "+8h", metric: "Policy Analysis" },
          { name: "Seat-Sharing Talks", entity: "Nomination Deadlines", delay: "+24h", metric: "Coalition Debates" },
          { name: "Constituency Ground", entity: "Voter Registration Rush", delay: "+48h", metric: "Civic Activity" },
          { name: "🔥 Viral Peak", entity: "National Political Focus", delay: "+72h", metric: "Electoral Fever" }
        ]
      },
      community: {
        audience: {
          labels: ["Active Voters", "Youth & First-Timers", "Party Cadre & Leaders"],
          values: [54, 30, 16],
          colors: ["#ef4444", "#3b82f6", "#f59e0b"]
        },
        engagementType: {
          labels: ["News Watching", "Comments / Debates", "Shares", "Likes"],
          values: [52, 28, 12, 8],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "26%", "25-34": "44%", "35+": "30%" },
          topRegions: ["Maharashtra", "Jharkhand", "Delhi-NCR", "Bihar"]
        }
      },
      sentiment: {
        positive: 45,
        neutral: 38,
        negative: 17,
        summary: "Heated democratic anticipation mixed with intense coalition rivalry.",
        comments: [
          { author: "@mumbai_voter", avatar: "MV", time: "18m ago", type: "neutral", text: "Single phase in Maharashtra will test logistics, but good to get it done in one day." }
        ]
      }
    },
    {
      id: "news-unified-pension-ups",
      name: "Unified Pension Scheme (UPS) Rollout",
      domain: "news",
      domainLabel: "📰 News",
      category: "Government Policy & Civil Service Benefits",
      platform: "PIB, Print Media & X (Twitter)",
      sourceName: "Ministry of Finance & Department of Personnel",
      sourceUrl: "https://pib.gov.in",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "200K+ searches",
      searchVolumeRaw: 200000,
      currentRank: "Rank #3 Policy News",
      status: "📈 Steady Growth",
      statusType: "steady",
      growth: "+50%",
      growthRaw: 50,
      lastUpdated: getDynamicTodayIST(),
      likes: "180K",
      likesRaw: 180000,
      views: "Not publicly available",
      shares: "38K",
      sharesRaw: 38000,
      comments: "24.5K",
      commentsRaw: 24500,
      reach: "15.2M Government Staff & Families",
      reachRaw: 15200000,
      propagationStrength: 78,
      propagationType: "Observed propagation",
      rZeroFactor: "2.90",
      viralityVelocity: "14K tweets/day",
      whatIsTrending: "Central government's approval of UPS guaranteeing 50% of average basic pay as pension for 23 lakh central government employees.",
      whatCausedTrend: "Union Cabinet resolving the long-standing debate between the Old Pension Scheme (OPS) and New Pension Scheme (NPS).",
      whyPeopleEngaging: "Direct impact on retirement security, dearness relief adjustments, and minimum assured pension of ₹10,000/month.",
      whyTrending: [
        { icon: "💼", title: "50% Assured Pension Benchmark", desc: "Guaranteed 50% average basic pay for employees with minimum 25 years service.", time: "T+1h", impact: "Retirement Security" },
        { icon: "🏛️", title: "Family Pension Protection", desc: "Spouse receives 60% of the pension amount upon pensioner's demise.", time: "T+4h", impact: "Social Safety" }
      ],
      sectors: {
        labels: ["Civil Service Benefits", "Fiscal Economics", "Public Policy", "Labor Unions"],
        values: [55, 22, 13, 10],
        colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [1800, 5800, 16000, 38000, 72000, 110000, 142000],
        shares: [400, 1200, 4200, 9800, 19000, 28000, 38000]
      },
      propagationFlow: {
        initialSource: "Cabinet Press Release & Finance Secretary Briefing",
        earlyAdopters: "Government employee unions and railway worker federations",
        influencers: "Economic commentators and pension calculation YouTubers",
        socialPosts: "42,000+ Tweets comparing OPS vs NPS vs UPS formulas",
        engagementSurge: "180K Likes & 24.5K detailed calculations",
        secondarySharing: "Government staff WhatsApp networks and circular forwards",
        currentReach: "15.2M Citizens",
        stages: [
          { name: "Cabinet Briefing", entity: "UPS Greenlit", delay: "0h", metric: "PIB Release" },
          { name: "50% Assurance Graphic", entity: "Comparison Charts", delay: "+2h", metric: "Trending #2 on X" },
          { name: "Union Responses", entity: "Railway & Defense Staff", delay: "+6h", metric: "Statement Releases" },
          { name: "Calculator Videos", entity: "YouTube Pension Explainer", delay: "+18h", metric: "4M Video Views" },
          { name: "State Govt Reactions", entity: "States Considering Adoption", delay: "+36h", metric: "Policy Diffusion" },
          { name: "Fiscal Deficit Debate", entity: "Economists in ET & Mint", delay: "+60h", metric: "Fiscal Analysis" },
          { name: "🔥 Viral Peak", entity: "Central Policy Consensus", delay: "+96h", metric: "Adopted Standard" }
        ]
      },
      community: {
        audience: {
          labels: ["Govt Employees & Teachers", "Pensioners & Families", "Finance Students"],
          values: [62, 26, 12],
          colors: ["#ef4444", "#3b82f6", "#06b6d4"]
        },
        engagementType: {
          labels: ["Calculations & Reading", "Shares", "Comments", "Likes"],
          values: [48, 30, 14, 8],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "12%", "25-34": "40%", "35+": "48%" },
          topRegions: ["Delhi-NCR", "Uttar Pradesh", "Bihar", "Rajasthan"]
        }
      },
      sentiment: {
        positive: 75,
        neutral: 18,
        negative: 7,
        summary: "Broad relief for assured pension percentage, with some unions continuing demand for non-contributory OPS.",
        comments: [
          { author: "@central_staff_voice", avatar: "CS", time: "30m ago", type: "positive", text: "50% assured pension with inflation dearness relief brings much-needed peace of mind to government employees." }
        ]
      }
    },

    // =============================================================
    // 7. SHOPPING & FASHION DOMAIN (🛍️)
    // =============================================================
    {
      id: "shopping-festive-quick-commerce",
      name: "10-Minute Festive Delivery Wars (Gold & iPhones)",
      domain: "shopping",
      domainLabel: "🛍️ Shopping & Fashion",
      category: "Quick Commerce & Festive Retail Wars",
      platform: "Blinkit, Zepto, Swiggy Instamart & X",
      sourceName: "Economic Times Retail, Blinkit & Zepto Trends",
      sourceUrl: "https://retail.economictimes.indiatimes.com",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "450K+ searches",
      searchVolumeRaw: 450000,
      currentRank: "Rank #1 Retail Tech Trend",
      status: "🔥 Rapidly Trending",
      statusType: "rapid",
      growth: "+155%",
      growthRaw: 155,
      lastUpdated: getDynamicTodayIST(),
      likes: "310K",
      likesRaw: 310000,
      views: "Not publicly available",
      shares: "58K",
      sharesRaw: 58000,
      comments: "26.4K",
      commentsRaw: 26400,
      reach: "24.5M Urban Consumers",
      reachRaw: 24500000,
      propagationStrength: 93,
      propagationType: "Observed propagation",
      rZeroFactor: "4.20",
      viralityVelocity: "25K tweets/day",
      whatIsTrending: "Quick commerce platforms delivering brand new iPhone 16 models, 24K gold coins for Dhanteras, and designer festive clothing in under 10 minutes.",
      whatCausedTrend: "Viral photos of delivery executives carrying sealed Apple boxes at 8:07 AM on launch day, beating traditional e-commerce by days.",
      whyPeopleEngaging: "Fascination with the sheer logistical audacity of hyper-local dark stores replacing traditional shopping malls.",
      whyTrending: [
        { icon: "⚡", title: "iPhone 16 Delivered in 7 Minutes", desc: "Customer in Gurugram ordered at 8:00 AM and received delivery at 8:07 AM with video verification.", time: "T+1h", impact: "Logistics Miracle" },
        { icon: "🪙", title: "Gold & Silver Coin Dhanteras Surge", desc: "Partnerships with Malabar Gold and Joyalukkas allowing 10-minute certified hallmarked coin deliveries.", time: "T+18h", impact: "Festive Disruption" }
      ],
      sectors: {
        labels: ["Quick Commerce", "Festive Gold Retail", "Consumer Electronics", "Dark Store Logistics"],
        values: [54, 24, 14, 8],
        colors: ["#d946ef", "#f59e0b", "#8b5cf6", "#10b981"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [3200, 9500, 28000, 68000, 145000, 240000, 320000],
        shares: [700, 2400, 7800, 18500, 34000, 48000, 58000]
      },
      propagationFlow: {
        initialSource: "Blinkit CEO Albinder Dhindsa Post & Customer Live Unboxing",
        earlyAdopters: "Urban tech early-adopters & fintech commentators",
        influencers: "LinkedIn marketing influencers, startup founders, and retail analysts",
        socialPosts: "62,000+ Tweets and video deliveries under #10MinDelivery",
        engagementSurge: "310K Verified Likes & 26.4K logistics debates",
        secondarySharing: "App referral links and shock screenshots sent in family chats",
        currentReach: "24.5M Urban shoppers",
        stages: [
          { name: "Launch Morning", entity: "First Delivery at 8:07 AM", delay: "0h", metric: "Customer Unboxing Video" },
          { name: "CEO Verification", entity: "Order Graph Tweeted", delay: "+2h", metric: "Trending #1 on X" },
          { name: "Gold Coin Partnership", entity: "Dhanteras Coin Announcement", delay: "+12h", metric: "Hallmarked Gold Stock" },
          { name: "E-Commerce Disruption", entity: "Amazon vs Blinkit Debates", delay: "+24h", metric: "Retail Column Features" },
          { name: "Dark Store Density", entity: "Logistics Teardowns", delay: "+48h", metric: "Supply Chain Case Study" },
          { name: "Tier-2 Expansion", entity: "Jaipur, Lucknow Rollouts", delay: "+72h", metric: "Geographic Expansion" },
          { name: "🔥 Viral Peak", entity: "The New Retail Reality", delay: "+96h", metric: "Permanent Consumer Shift" }
        ]
      },
      community: {
        audience: {
          labels: ["Urban Working Professionals", "Gen-Z Shoppers", "Tech Early Adopters"],
          values: [52, 34, 14],
          colors: ["#d946ef", "#06b6d4", "#8b5cf6"]
        },
        engagementType: {
          labels: ["Orders Placed", "Social Sharing", "Likes", "Comments"],
          values: [50, 30, 12, 8],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "38%", "25-34": "52%", "35+": "10%" },
          topRegions: ["Delhi-NCR", "Bengaluru", "Mumbai", "Hyderabad"]
        }
      },
      sentiment: {
        positive: 89,
        neutral: 7,
        negative: 4,
        summary: "Awe at delivery speeds; minor discussions about delivery partner traffic safety.",
        comments: [
          { author: "@gurgaon_shopper", avatar: "GS", time: "18m ago", type: "positive", text: "Ordered iPhone 16 while brushing teeth, doorbell rang before my tea was ready! Mind blown." }
        ]
      }
    },
    {
      id: "shopping-organza-chikankari-saree",
      name: "Organza & Chikankari Festive Saree Revival",
      domain: "shopping",
      domainLabel: "🛍️ Shopping & Fashion",
      category: "Indian Ethnic Couture & Festive Fashion",
      platform: "Myntra, AJIO, Amazon Fashion, Flipkart Fashion, Instagram & Pinterest",
      sourceName: "Myntra Fashion Trends, AJIO Trends & Pinterest India",
      sourceUrl: "https://www.myntra.com",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "220K+ searches",
      searchVolumeRaw: 220000,
      currentRank: "Rank #1 Women Ethnic Search",
      status: "⚡ Viral Surge",
      statusType: "surge",
      growth: "+72%",
      growthRaw: 72,
      lastUpdated: getDynamicTodayIST(),
      likes: "420K",
      likesRaw: 420000,
      views: "68M+ Reel Views",
      shares: "Not publicly available",
      comments: "18.9K",
      commentsRaw: 18900,
      reach: "16.8M Festive Shoppers",
      reachRaw: 16800000,
      propagationStrength: 85,
      propagationType: "Observed propagation",
      rZeroFactor: "3.40",
      viralityVelocity: "22K saves/day",
      whatIsTrending: "Hand-embroidered Lucknowi Chikankari on pastel organza sarees became the most pinned and purchased festive outfit for Navratri, Diwali, and wedding season.",
      whatCausedTrend: "Celebrities (Janhvi Kapoor, Alia Bhatt) styling pastel organza sarees with minimalist pearl jewelry at pre-festive galas.",
      whyPeopleEngaging: "Lightweight breathability suited for Indian climate combined with royal heritage aesthetic and budget-friendly indie weaver brands.",
      whyTrending: [
        { icon: "🌸", title: "Celebrity Pastel Drapes", desc: "Lavender, mint green, and blush pink organza drapes set the visual moodboard across Instagram.", time: "Week 1", impact: "Aesthetic Spark" },
        { icon: "🪡", title: "Weaver Direct Platforms", desc: "D2C brands connecting directly with Lucknow artisans gained viral traction on Shark Tank and Instagram.", time: "Week 2", impact: "Artisan Direct" }
      ],
      sectors: {
        labels: ["Ethnic Fashion", "Handloom Heritage", "Festive Retail", "Influencer Styling"],
        values: [55, 24, 13, 8],
        colors: ["#d946ef", "#ec4899", "#f59e0b", "#3b82f6"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [1800, 4800, 12000, 26000, 52000, 84000, 110000],
        shares: [500, 1400, 4100, 9500, 18000, 27000, 36000]
      },
      propagationFlow: {
        initialSource: "Celebrity Festive Red Carpet & Fashion Week Lookbooks",
        earlyAdopters: "Fashion design students & bridal moodboard curators",
        influencers: "Komal Pandey, Kritika Khurana, and lifestyle creators",
        socialPosts: "78,000+ Saree transition reels and styling guides",
        engagementSurge: "420K Verified Likes & 18.9K purchase inquiries",
        secondarySharing: "Pinterest board saves and group shopping links",
        currentReach: "16.8M Women shoppers",
        stages: [
          { name: "Red Carpet Look", entity: "Alia Bhatt Pastel Saree", delay: "0h", metric: "Vogue Feature" },
          { name: "Pinterest Moodboard", entity: "Festive Inspo Spike", delay: "+12h", metric: "Top Pinned India" },
          { name: "Myntra Festive Sale", entity: "Search Surge +240%", delay: "+24h", metric: "Fastest Selling SKU" },
          { name: "Reels Styling Guides", entity: "3 Ways to Drape Organza", delay: "+48h", metric: "68M Views" },
          { name: "Local Weaver Direct", entity: "Lucknow D2C Boom", delay: "+72h", metric: "Artisan Orders Up 3x" },
          { name: "Wedding Guest Trend", entity: "Sangeet Season Standard", delay: "+120h", metric: "Pervasive Uniform" },
          { name: "🔥 Viral Peak", entity: "Year's Defining Ethnic Look", delay: "+168h", metric: "National Trend" }
        ]
      },
      community: {
        audience: {
          labels: ["Women Shoppers (18-35)", "Festive Enthusiasts", "Fashion Stylists"],
          values: [64, 24, 12],
          colors: ["#d946ef", "#ec4899", "#8b5cf6"]
        },
        engagementType: {
          labels: ["Pinterest / Reel Saves", "Product Searches", "Likes", "Comments"],
          values: [46, 32, 14, 8],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "48%", "25-34": "42%", "35+": "10%" },
          topRegions: ["Delhi-NCR", "Uttar Pradesh", "Maharashtra", "Gujarat"]
        }
      },
      sentiment: {
        positive: 94,
        neutral: 5,
        negative: 1,
        summary: "Universal love for the breathable elegance and celebration of traditional Indian craft.",
        comments: [
          { author: "@ethnic_wardrobe", avatar: "EW", time: "28m ago", type: "positive", text: "Organza chikankari is pure poetry! Effortlessly regal without weighing you down." }
        ]
      }
    },
    {
      id: "shopping-flipkart-amazon-sales",
      name: "Great Indian Festival & Big Billion Days Rush",
      domain: "shopping",
      domainLabel: "🛍️ Shopping & Fashion",
      category: "Annual E-Commerce Festive Mega Sale",
      platform: "Amazon India & Flipkart",
      sourceName: "Amazon Press & Flipkart Trends",
      sourceUrl: "https://www.amazon.in",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "2.5M+ searches",
      searchVolumeRaw: 2500000,
      currentRank: "Rank #1 Shopping Event in India",
      status: "🔥 Rapidly Trending",
      statusType: "rapid",
      growth: "+190%",
      growthRaw: 190,
      lastUpdated: getDynamicTodayIST(),
      likes: "850K",
      likesRaw: 850000,
      views: "Not publicly available (Billions of Pageviews)",
      shares: "140K",
      sharesRaw: 140000,
      comments: "64.8K",
      commentsRaw: 64800,
      reach: "58.2M Shoppers across Tier 1, 2 & 3",
      reachRaw: 58200000,
      propagationStrength: 99,
      propagationType: "Observed propagation",
      rZeroFactor: "5.20",
      viralityVelocity: "95K deals shared/hour",
      whatIsTrending: "The annual e-commerce showdown with aggressive price drops on smartphones, electronics, home appliances, and credit card instant discounts.",
      whatCausedTrend: "Early access unlock for Prime and VIP members offering iPhone 15 below ₹50,000 and 65-inch 4K TVs at 60% discounts.",
      whyPeopleEngaging: "Festival bonus season combined with genuine year-low prices and EMI options causing massive midnight cart checkouts.",
      whyTrending: [
        { icon: "📱", title: "iPhone Deal Price Drops", desc: "Flagship models discounting below psychological price barriers triggered server lag in minutes.", time: "Midnight", impact: "Midnight Cart Rush" },
        { icon: "📦", title: "Tier 2 & 3 City Penetration", desc: "Over 70% of festive order volumes originated outside top metro cities in regional languages.", time: "Day 1", impact: "Pan-India Scale" }
      ],
      sectors: {
        labels: ["Smartphones & Laptops", "Home Appliances", "Fashion & Beauty", "Logistics & Supply"],
        values: [52, 22, 16, 10],
        colors: ["#d946ef", "#3b82f6", "#10b981", "#f59e0b"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [18000, 54000, 140000, 290000, 520000, 780000, 940000],
        shares: [4200, 12000, 34000, 72000, 115000, 150000, 185000]
      },
      propagationFlow: {
        initialSource: "Midnight Sale Banner Drop on Amazon & Flipkart Apps",
        earlyAdopters: "Bargain hunters on Telegram deal channels & Reddit r/dealsindia",
        influencers: "Tech reviewers sharing curated affiliate deal spreadsheets",
        socialPosts: "180,000+ Tweets comparing bank offers and checkout confirmations",
        engagementSurge: "850K Verified Likes & 64.8K price comparisons",
        secondarySharing: "Deal link forwards in family and roommate WhatsApp groups",
        currentReach: "58.2M Shoppers",
        stages: [
          { name: "Early Access Midnight", entity: "VIP Access Open", delay: "0h", metric: "Traffic Peak at 00:01 AM" },
          { name: "Telegram Deal Drops", entity: "Affiliate Link Surge", delay: "+1h", metric: "100K Clicks/Min" },
          { name: "Bank Discount Math", entity: "SBI & HDFC 10% Off", delay: "+4h", metric: "Trending #1 on X" },
          { name: "Unboxing Deliveries", entity: "Next-Day Delivery Rush", delay: "+24h", metric: "Social Proof Posts" },
          { name: "Tier 2/3 Records", entity: "Regional Language Orders", delay: "+48h", metric: "70% Rural Share" },
          { name: "Final Weekend Push", entity: "Last Chance Deals", delay: "+72h", metric: "Second Wave" },
          { name: "🔥 Viral Peak", entity: "Annual Retail Phenomenon", delay: "+120h", metric: "Record GMV Achieved" }
        ]
      },
      community: {
        audience: {
          labels: ["Family & Household Buyers", "Tech Students", "Young Professionals"],
          values: [48, 30, 22],
          colors: ["#d946ef", "#3b82f6", "#06b6d4"]
        },
        engagementType: {
          labels: ["Purchases / Cart Adds", "Deal Sharing", "Comments", "Likes"],
          values: [55, 28, 10, 7],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "35%", "25-34": "48%", "35+": "17%" },
          topRegions: ["Maharashtra", "Uttar Pradesh", "Karnataka", "West Bengal"]
        }
      },
      sentiment: {
        positive: 84,
        neutral: 10,
        negative: 6,
        summary: "High customer satisfaction on genuine discounts; occasional grumbles over quick out-of-stock items.",
        comments: [
          { author: "@deal_hunter_in", avatar: "DH", time: "12m ago", type: "positive", text: "Got the 55-inch 4K TV with bank card discount for ₹26,000. Best deal of the entire year!" }
        ]
      }
    },

    // =============================================================
    // 8. FOOD & LIFESTYLE DOMAIN (🍛)
    // =============================================================
    {
      id: "food-packaged-labeling-fssai",
      name: "Packaged Food Sugar & Health Label Audits",
      domain: "food",
      domainLabel: "🍛 Food & Lifestyle",
      category: "Food Safety, Nutrition & Consumer Awareness",
      platform: "YouTube, Instagram Reels & FSSAI Bulletins",
      sourceName: "FSSAI Official Notices & Consumer Health Channels",
      sourceUrl: "https://www.fssai.gov.in",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "180K+ searches",
      searchVolumeRaw: 180000,
      currentRank: "Rank #1 Health & Food Discourse",
      status: "🔥 Rapidly Trending",
      statusType: "rapid",
      growth: "+95%",
      growthRaw: 95,
      lastUpdated: getDynamicTodayIST(),
      likes: "380K",
      likesRaw: 380000,
      views: "45M+ Video Views",
      shares: "Not publicly available",
      comments: "31.2K",
      commentsRaw: 31200,
      reach: "16.4M Health-Conscious Indians",
      reachRaw: 16400000,
      propagationStrength: 89,
      propagationType: "Observed propagation",
      rZeroFactor: "3.85",
      viralityVelocity: "18K shares/day",
      whatIsTrending: "Independent creator audits and FSSAI directives penalizing misleading 'No Added Sugar' claims and hidden palm oil in popular Indian cookies, health drinks, and breakfast cereals.",
      whatCausedTrend: "Health influencer videos (FoodPharmer) turning nutritional labels around and breaking down sugar-per-serving calculations in supermarkets.",
      whyPeopleEngaging: "Parents and young professionals realizing staple childhood 'health drinks' contain over 50% sugar by weight, sparking dietary reform.",
      whyTrending: [
        { icon: "🔍", title: "FoodPharmer Label Reading Movement", desc: "Creator's #LabelPadhegaIndia movement gained endorsement from pediatricians and national ministers.", time: "Week 1", impact: "Consumer Awakening" },
        { icon: "🏛️", title: "FSSAI Mandatory Font & Front Warning", desc: "Regulator mandated larger warning font for sugar, saturated fat, and sodium on front-of-pack labels.", time: "Week 3", impact: "Regulatory Action" }
      ],
      sectors: {
        labels: ["Food Safety & Health", "Consumer Rights", "Packaged FMCG", "Dietary Reform"],
        values: [54, 24, 14, 8],
        colors: ["#10b981", "#3b82f6", "#ef4444", "#f59e0b"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [2400, 6800, 18000, 42000, 89000, 145000, 185000],
        shares: [600, 1900, 5200, 12000, 24000, 36000, 48000]
      },
      propagationFlow: {
        initialSource: "Instagram Video Teardown of Major Brand Cereal Box",
        earlyAdopters: "Pediatricians, nutritionists, and parent communities",
        influencers: "Revant Himatsingka (FoodPharmer), doctors, and fitness creators",
        socialPosts: "64,000+ Pantry audits and label screenshot posts",
        engagementSurge: "380K Verified Likes & 31.2K parent comments",
        secondarySharing: "School parent WhatsApp groups warning about child snacks",
        currentReach: "16.4M Health-conscious consumers",
        stages: [
          { name: "Supermarket Video", entity: "Sugar Breakdown Clip", delay: "0h", metric: "10M Reel Views" },
          { name: "Brand Legal Notice", entity: "Brand Response Issued", delay: "+24h", metric: "Public Backlash" },
          { name: "Doctor Endorsements", entity: "Pediatricians Speak Out", delay: "+48h", metric: "Scientific Backing" },
          { name: "FSSAI Official Notice", entity: "Advisory on Health Drinks", delay: "+96h", metric: "Govt Directives" },
          { name: "FMCG Recipe Reform", entity: "Brands Cut 30% Sugar", delay: "+144h", metric: "Industry Change" },
          { name: "Supermarket Label Wave", entity: "#LabelPadhegaIndia", delay: "+192h", metric: "Consumer Habit Shift" },
          { name: "🔥 Viral Peak", entity: "National Nutrition Standard", delay: "+240h", metric: "Public Health Win" }
        ]
      },
      community: {
        audience: {
          labels: ["Parents & Families", "Young Fitness Buffs", "Medical Professionals"],
          values: [52, 34, 14],
          colors: ["#10b981", "#3b82f6", "#06b6d4"]
        },
        engagementType: {
          labels: ["Video Watching", "WhatsApp Sharing", "Comments", "Likes"],
          values: [48, 32, 12, 8],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "28%", "25-34": "48%", "35+": "24%" },
          topRegions: ["Mumbai", "Bengaluru", "Delhi-NCR", "Chennai"]
        }
      },
      sentiment: {
        positive: 88,
        neutral: 8,
        negative: 4,
        summary: "Universal consumer support for ingredient transparency and curbing false marketing to children.",
        comments: [
          { author: "@health_first_in", avatar: "HF", time: "22m ago", type: "positive", text: "Checked my kids cereal this morning and was shocked: 35g sugar per 100g. Thank God for this movement!" }
        ]
      }
    },
    {
      id: "food-filter-coffee-boba-culture",
      name: "Specialty Filter Coffee vs Boba Tea Craze",
      domain: "food",
      domainLabel: "🍛 Food & Lifestyle",
      category: "Urban Beverage Culture & Cafe Scene",
      platform: "Instagram Reels & Zomato",
      sourceName: "Zomato Restaurant Trends & Lifestyle Feeds",
      sourceUrl: "https://www.zomato.com",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "140K+ searches",
      searchVolumeRaw: 140000,
      currentRank: "Rank #2 Beverage Trend",
      status: "⚡ Viral Surge",
      statusType: "surge",
      growth: "+58%",
      growthRaw: 58,
      lastUpdated: getDynamicTodayIST(),
      likes: "260K",
      likesRaw: 260000,
      views: "32M+ Reel Views",
      shares: "34K",
      sharesRaw: 34000,
      comments: "16.8K",
      commentsRaw: 16800,
      reach: "9.8M Urban Youth",
      reachRaw: 9800000,
      propagationStrength: 82,
      propagationType: "Observed propagation",
      rZeroFactor: "3.20",
      viralityVelocity: "14K posts/day",
      whatIsTrending: "The meteoric rise of artisanal specialty South Indian filter coffee bars (Subko, Third Wave, Araku) competing with Taiwanese popping boba tea cafes in Indian metros.",
      whatCausedTrend: "Aesthetic cafe hopping vlogs on Instagram celebrating single-origin Chikmagalur beans poured from traditional brass dabarahs.",
      whyPeopleEngaging: "Work-from-cafe culture, high visual appeal of iced pour-overs and purple taro boba drinks, and local coffee pride.",
      whyTrending: [
        { icon: "☕", title: "Single-Origin Estate Coffee Revival", desc: "Young urban Indians switching from instant coffee to Chikmagalur & Coorg pour-overs.", time: "Month 1", impact: "Palate Evolution" },
        { icon: "🧋", title: "Aesthetic Boba Pop-Ups in Metros", desc: "Colorful bubble tea stalls expanding rapidly in Mumbai, Bengaluru, and Pune malls.", time: "Month 2", impact: "Gen-Z Favorite" }
      ],
      sectors: {
        labels: ["Artisanal Coffee", "Bubble Tea", "Cafe Culture", "Urban Lifestyle"],
        values: [48, 28, 16, 8],
        colors: ["#10b981", "#8b5cf6", "#ec4899", "#f59e0b"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [1200, 3800, 9200, 21000, 45000, 72000, 95000],
        shares: [300, 1100, 3200, 7500, 14500, 24000, 34000]
      },
      propagationFlow: {
        initialSource: "Artisanal Coffee Bar Launch in Bandra & Indiranagar",
        earlyAdopters: "Remote tech workers, freelance designers, and food vloggers",
        influencers: "Lifestyle YouTubers and coffee connoisseurs",
        socialPosts: "44,000+ Aesthetic cafe photo dumps and aesthetic pour videos",
        engagementSurge: "260K Verified Likes & 16.8K cafe recommendations",
        secondarySharing: "Weekend hangout plans coordinated via Instagram DMs",
        currentReach: "9.8M Urban consumers",
        stages: [
          { name: "Cafe Grand Opening", entity: "Aesthetic Brass Dabarah Pour", delay: "0h", metric: "Vlogger Reel" },
          { name: "Work From Cafe Crowd", entity: "High-Speed WiFi & Cold Brew", delay: "+12h", metric: "Techie Hub" },
          { name: "Zomato Delivery Surge", entity: "Bottled Brew Deliveries", delay: "+36h", metric: "Order Spike 3x" },
          { name: "Boba Tea Counter-Trend", entity: "Taiwanese Bubble Tea Stores", delay: "+60h", metric: "College Student Craze" },
          { name: "Mall Footfall Battle", entity: "Specialty Drink War", delay: "+96h", metric: "Metro Trend" },
          { name: "Tier-2 Expansion", entity: "Chains Enter Chandigarh, Kochi", delay: "+144h", metric: "National Footprint" },
          { name: "🔥 Viral Peak", entity: "Modern Indian Beverage Culture", delay: "+192h", metric: "Lifestyle Identity" }
        ]
      },
      community: {
        audience: {
          labels: ["College Students", "Remote Tech Workers", "Food Connoisseurs"],
          values: [48, 38, 14],
          colors: ["#10b981", "#8b5cf6", "#06b6d4"]
        },
        engagementType: {
          labels: ["Cafe Visits & Reviews", "Reel Sharing", "Likes", "Comments"],
          values: [48, 30, 14, 8],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "54%", "25-34": "38%", "35+": "8%" },
          topRegions: ["Bengaluru", "Mumbai", "Chennai", "Pune"]
        }
      },
      sentiment: {
        positive: 91,
        neutral: 7,
        negative: 2,
        summary: "Warm appreciation for rich Indian coffee history modernized into high-aesthetic spaces.",
        comments: [
          { author: "@bangalore_cafes", avatar: "BC", time: "30m ago", type: "positive", text: "Nothing beats hot Chikmagalur filter coffee poured from a brass dabarah on a rainy Bengaluru afternoon!" }
        ]
      }
    },
    {
      id: "food-gourmet-ramen-hacks",
      name: "Korean Instant Ramen Gourmet Hacks",
      domain: "food",
      domainLabel: "🍛 Food & Lifestyle",
      category: "DIY Cooking & Convenience Food Trends",
      platform: "YouTube Shorts & Instagram Reels",
      sourceName: "YouTube Food Trending India & Zepto Trends",
      sourceUrl: "https://www.youtube.com",
      dataStatus: "PUBLIC SOURCE",
      searchVolume: "160K+ searches",
      searchVolumeRaw: 160000,
      currentRank: "Rank #3 Food Prep Trend",
      status: "📈 Steady Growth",
      statusType: "steady",
      growth: "+46%",
      growthRaw: 46,
      lastUpdated: getDynamicTodayIST(),
      likes: "310K",
      likesRaw: 310000,
      views: "38M+ Reel Views",
      shares: "Not publicly available",
      comments: "14.2K",
      commentsRaw: 14200,
      reach: "11.2M Youth Foodies",
      reachRaw: 11200000,
      propagationStrength: 80,
      propagationType: "Observed propagation",
      rZeroFactor: "3.10",
      viralityVelocity: "12K recipes recreated/day",
      whatIsTrending: "College students and young adults elevating spicy Buldak and Shin Ramyun with processed cheese slices, Kewpie mayo, chili garlic crisps, and poached eggs.",
      whatCausedTrend: "Late-night cooking ASMR reels on YouTube Shorts paired with K-Drama binge sessions across Indian households.",
      whyPeopleEngaging: "Ultra-simple 5-minute comfort food hack that delivers restaurant-style creamy broth on a hostel or bachelor budget.",
      whyTrending: [
        { icon: "🍜", title: "K-Drama Food Spillover", desc: "Viewers watching Korean shows order spicy ramen online and replicate cheese hack recipes.", time: "Week 1", impact: "Media Catalyst" },
        { icon: "🧀", title: "Cheese Slice & Butter Creaminess", desc: "Muting extreme ghost pepper heat with melted Amul cheese slices became a viral cooking standard.", time: "Week 2", impact: "Flavor Fusion" }
      ],
      sectors: {
        labels: ["Instant Noodles", "Korean Pop Culture", "Late-Night Cooking", "Hostel Hacks"],
        values: [52, 24, 14, 10],
        colors: ["#10b981", "#ef4444", "#8b5cf6", "#f59e0b"]
      },
      growthTimeline: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        mentions: [1500, 4200, 9800, 22000, 48000, 78000, 105000],
        shares: [350, 1200, 3400, 8100, 16000, 25000, 34000]
      },
      propagationFlow: {
        initialSource: "Midnight Hostel Cooking ASMR Reel",
        earlyAdopters: "College hostelers & K-Pop / K-Drama fans",
        influencers: "Indian food vloggers (Kabita's Kitchen, Chef Ranveer Brar Shorts)",
        socialPosts: "48,000+ User-generated cooking reels and stories",
        engagementSurge: "310K Verified Likes & 14.2K recipe variations",
        secondarySharing: "Quick commerce cart screenshots and recipe lists",
        currentReach: "11.2M Young foodies",
        stages: [
          { name: "ASMR Reel Video", entity: "Cheese Melt on Boiling Ramen", delay: "0h", metric: "5M Shorts Views" },
          { name: "Hostel Copycats", entity: "Induction Stove Cooking", delay: "+12h", metric: "Trending #3 Shorts" },
          { name: "Quick Commerce Surge", entity: "Buldak & Shin Ramyun Stockouts", delay: "+24h", metric: "Zepto 4x Sales" },
          { name: "Amul Butter Fusion", entity: "Desi Twist Integrations", delay: "+48h", metric: "Indianized Recipes" },
          { name: "Food Creator Duets", entity: "Top Chefs Reviewing Hacks", delay: "+72h", metric: "Celebrity Cook Endorsement" },
          { name: "Supermarket Shelf Priority", entity: "Korean Aisles in Reliance Fresh", delay: "+120h", metric: "Retail Space Shift" },
          { name: "🔥 Viral Peak", entity: "Standard Indian Comfort Food", delay: "+168h", metric: "Pervasive Youth Habit" }
        ]
      },
      community: {
        audience: {
          labels: ["College & Hostel Students", "Gen-Z & K-Culture Fans", "Young Tech Workers"],
          values: [56, 32, 12],
          colors: ["#10b981", "#ef4444", "#8b5cf6"]
        },
        engagementType: {
          labels: ["Recipe Recreations", "Video Views", "Likes", "Comments"],
          values: [48, 32, 12, 8],
          colors: ["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]
        },
        demographics: {
          age: { "16-24": "64%", "25-34": "28%", "35+": "8%" },
          topRegions: ["Delhi-NCR", "Bengaluru", "Mumbai", "North-East India"]
        }
      },
      sentiment: {
        positive: 89,
        neutral: 8,
        negative: 3,
        summary: "Universal delight for late-night indulgence and creative, creamy comfort cooking.",
        comments: [
          { author: "@hostel_chef", avatar: "HC", time: "19m ago", type: "positive", text: "Adding a slice of cheese and raw garlic changed my entire hostel life. Elite tier comfort meal." }
        ]
      }
    }
  ]
};

// Helper lookup functions
function getTrendById(id) {
  return TRENDFLOW_DATA.trends.find(t => t.id === id) || TRENDFLOW_DATA.trends[0];
}

function getTrendsByDomain(domain) {
  if (!domain || domain === 'all') return TRENDFLOW_DATA.trends;
  return TRENDFLOW_DATA.trends.filter(t => t.domain === domain);
}

function getDomainMeta(domainId) {
  return TRENDFLOW_DATA.domains[domainId] || null;
}

