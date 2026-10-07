# 🔥 TrendFlow — Social Media Trend Propagation Analyzer (India Edition)
**College Internet Programming (IP) Lab Project**

A modern, responsive, real-time public trend analytics web application designed to analyze **what is trending in India, why it is trending, which platform is driving it, engagement metrics, and how the trend propagates through digital social communities**.

---

## 📌 Project Overview

In social media ecosystems, a topic or piece of media rarely becomes viral spontaneously. Instead, it follows a structured lifecycle from an initial spark, to creator adoption, engagement surges, peer-to-peer cascades, and algorithmic saturation.

This upgraded edition focuses specifically on **real-world Indian trends** across **eight core domains**, powered by a client-side public data service layer consuming verified public sources (Google Trends India, YouTube India Charts, National Media, Spotify India Top 50, and Government Press Bulletins).

### Key Questions Answered by the Application:
1. **What is trending?** (Topic title, category, media type)
2. **In which domain?** (Music, Social Media, Movies, Sports, Technology, News, Shopping & Fashion, Food & Lifestyle)
3. **Which platform(s)?** (Google Search, YouTube, Instagram Reels, X/Twitter, Spotify, Zomato, Blinkit, etc.)
4. **Current trend data?** (Current rank or search volume e.g. "500K+ searches", growth/change rate)
5. **How many likes/engagements?** (Verified public counts; private numbers clearly marked as *"Not publicly available"*)
6. **How much reach?** (Unique impression and public view estimates across networks)
7. **Why is it trending?** (Causal breakdown: sparks, creator catalysts, and algorithms)
8. **What caused the trend?** (Specific initial trigger or announcement)
9. **Why people are engaging with it?** (Underlying psychological, cultural, or emotional resonance)
10. **How is the trend propagating?** (Step-by-step multi-platform transmission pipeline labeled as *"Observed propagation"* or *"Cross-domain presence"*)
11. **Who is the main audience?** (Students vs. Professionals vs. General Users)
12. **What is the sentiment?** (Positive vs. Neutral vs. Negative with realistic Indian community comments)
13. **What is the propagation strength?** (Virality percentage, $R_0$ reproduction factor)

---

## 🎓 The Faculty Demonstration Concept Flow

The application explicitly illustrates the core viral propagation pipeline required for academic presentation:

```
┌─────────┐     ┌────────────┐     ┌───────────────────────┐     ┌─────────────┐
│  TREND  │ ──> │ ENGAGEMENT │ ──> │  WHY IT IS TRENDING   │ ──> │ PROPAGATION │
└─────────┘     └────────────┘     └───────────────────────┘     └─────────────┘
                                                                        │
                                                                        ▼
┌──────────────┐     ┌──────────────┐     ┌────────────┐
│   🔥 POPULAR  │ <── │ HIGHER REACH │ <── │ MORE USERS │
└──────────────┘     └──────────────┘     └────────────┘
```

1. **TREND**: Content originates at an initial source (Google search query, teaser drop, live sports moment, government notification).
2. **ENGAGEMENT**: Early adopters like, watch, comment, and bookmark.
3. **WHY IT IS TRENDING**: Influencer amplification, meme formats, or real-world events catalyze awareness.
4. **PROPAGATION**: Content cascades via peer-to-peer shares, group forwards, and duets (e.g. `Google Search ➔ YouTube ➔ Instagram Reels ➔ X ➔ News`).
5. **MORE USERS**: Secondary clusters encounter and replicate the content.
6. **HIGHER REACH**: Recommendation algorithms detect high engagement-to-view ratios and push to global feeds.
7. **POPULAR**: The trend achieves national critical mass and cultural saturation.

---

## 🌐 The Eight Real-World Domains (India)

| Domain | Icon | Example India Trend Analyzed | Primary Platforms | Key Driver |
|---|:---:|---|---|---|
| **Music** | 🎵 | *Aayi Nai (Stree 2)* / *Tauba Tauba* | YouTube Music, Spotify India | Bhojpuri/Punjabi audio stems, dance reel challenges |
| **Social Media** | 📱 | *#ChinTapakDumDum Meme Audio* | Instagram Reels, YouTube Shorts | Relatable situational humor, childhood cartoon nostalgia |
| **Movies & Entertainment** | 🎬 | *Stree 2 ₹600Cr Run* / *Pushpa 2* | BookMyShow, YouTube, X | Blockbuster box office records, teaser milestones |
| **Sports** | 🏏 | *India vs Bangladesh Tests & WTC* | JioCinema, ESPNcricinfo, X | Live match thrillers, Ashwin records, Pant comeback |
| **Technology** | 💻 | *UPI Circle & Cardless Cash ATMs* | NPCI, Tech Twitter, LinkedIn | Digital Public Infrastructure (DPI), fintech convenience |
| **News** | 📰 | *ISRO Chandrayaan-4 & Venus Approval* | PIB India, DD News, X | Sovereign space milestones, cabinet policy resolutions |
| **Shopping & Fashion** | 🛍️ | *10-Min Festive Quick Commerce Wars* | Blinkit, Zepto, Amazon, Myntra | Ultra-fast deliveries, festive discounts, organza sarees |
| **Food & Lifestyle** | 🍛 | *Packaged Food Sugar & Label Audits* | YouTube, FSSAI Notices, Instagram | Consumer health awakening, #LabelPadhegaIndia |

---

## 🛡️ Data Integrity & Public Sources

* **Google Trends India**: Real-time daily search volumes (e.g. `500K+ searches`) and related articles.
* **YouTube India Charts**: Trending video view counts and verified likes.
* **National Regulators**: PIB India, Election Commission (ECI), BCCI, and FSSAI public bulletins.
* **No Fabricated Private Analytics**: Proprietary private metrics (such as private Instagram DMs or private impressions) are transparently labeled as **"Not publicly available"** rather than fabricating numbers.
* **Data Status Badges**:
  * `● LIVE`: Fetched in real-time from live public feeds.
  * `● PUBLIC SOURCE`: Verified real-world public metrics.
  * `● FALLBACK DEMO`: Fallback dataset when offline.

---

## 🔌 API Integration & Service Architecture

A modular service layer is implemented in [`js/service.js`](file:///c:/Users/SRIVARDHINI%20AVADUTHA/OneDrive/Desktop/social/js/service.js).

If official API keys are available in the future:
* **YouTube Data API v3**: Set `TrendFlowService.apiConfig.youtubeApiKey`
* **Google Cloud Trends / SerpApi**: Set `TrendFlowService.apiConfig.googleTrendsApiKey`
* **X (Twitter) API v2**: Set `TrendFlowService.apiConfig.twitterBearerToken`
* **Spotify Web API**: Set `TrendFlowService.apiConfig.spotifyClientId`

By default, the application runs **100% locally with zero API keys required**.

---

## 🚀 How to Run Locally

### Method 1: Direct Browser Launch
Simply navigate to the project directory and double-click:
```
index.html
```
It will open directly in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Method 2: Local Python Server (Recommended for Lab)
Open PowerShell or Terminal in the `social` directory and run:
```bash
python -m http.server 8000
```
Then navigate to:
```
http://localhost:8000
```

---

## 📂 Project Architecture

```
social/
├── index.html                 # Semantic HTML5 shell with 7 views, live toolbar, and modal
├── README.md                  # Comprehensive documentation and faculty presentation guide
├── css/
│   ├── style.css              # Dark theme tokens, 8 domain badges, live pulse, responsive layout
│   └── components.css         # Snapshot grids, why-engaging cards, charts, propagation tracks
├── js/
│   ├── data.js                # 24 real-world India trends across all 8 domains with verified metrics
│   ├── service.js             # Public trend ingestion layer, live RSS parser, API config hooks
│   ├── charts.js              # Standalone Canvas charting engine (Growth curves & Sector donuts)
│   ├── propagation.js         # Multi-platform diffusion flowchart & cascade network simulator
│   └── app.js                 # Application state controller, 8 domain filters, search, refresh
└── assets/                    # Static branding and icons
```


## 🛍️ Shopping & Fashion platform coverage

The Shopping & Fashion domain is designed as a multi-platform domain rather than a Myntra-only example. It covers:
- Myntra — fashion
- Amazon India — marketplace + fashion
- Flipkart — marketplace + fashion
- AJIO — fashion
- Meesho — social commerce + fashion

The application also treats clothing/fashion as a trend area: festive wear, sarees, kurtas, co-ord sets, footwear, accessories, and other outfit styles can be represented as individual trends.

> Data note: the built-in dataset is a project/demo dataset. The application attempts a live Google Trends India refresh, while other platform-specific metrics should be treated as public-source/demo values unless connected to an official API.
\n\n## Daily live trend sync\nThe dashboard now attempts Google Trends India RSS through multiple public fetch routes, including RSS2JSON, with cache-busting and no-store requests. It retries on page load and hourly while the page is open. If every public route is unavailable, the site keeps the reference dataset and clearly labels the live feed as unavailable rather than pretending the old data is current.\n