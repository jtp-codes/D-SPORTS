/* ====================================================================
   D-SPORTS — final/tracker.js
   TRUTHFUL Product Catalog (title = image, 1:1) +
   Silent Behavioral Analytics Engine (Google Sheets sync ready)
   Zero emoji — all icons are inline SVG.
   ==================================================================== */

// ──────────────────────────────────────────────────
// 0.  SVG ICON LIBRARY
// ──────────────────────────────────────────────────
const SVG = {
  heart: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
  cartLg: '<svg viewBox="0 0 24 24" width="64" height="64" fill="currentColor"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>',
  heartLg: '<svg viewBox="0 0 24 24" width="64" height="64" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
  close: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
  check: '<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
  creditCard: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',
  smartphone: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>',
  cardPay: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',
  bank: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/></svg>',
  package: '<svg viewBox="0 0 24 24" width="64" height="64" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>'
};

function px(id, w) { return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=${w || 940}`; }

// ──────────────────────────────────────────────────
// 1.  VERIFIED PRODUCT CATALOG — 34 products
//     STRICT TRUTH RULE: the photo shows EXACTLY what
//     the title says (item type AND visible quantity).
//     • Never a "Pack of 2" over a photo of one item.
//     • Never a brand name the photo can't support.
//     • Gear shown being worn is described as such.
// ──────────────────────────────────────────────────
const PRODUCTS = [
  // ── FOOTBALL (7) ──
  { id: 1, name: "Match-Grade Soccer Ball", brand: "Adidas", category: "Football", price: 4499, oldPrice: 5999,
    description: "Official size 5 match football with thermal-bonded panels, shown on the pitch through the goal net. Tournament-grade seamless construction.",
    image: px(28222529), badge: "sale", specs: ["Size 5", "Thermal-bonded", "FIFA Approved", "PU Cover"] },
  { id: 2, name: "Training Soccer Ball — Size 5", brand: "Adidas", category: "Football", price: 2499, oldPrice: 2999,
    description: "Durable single training football resting on natural grass. Machine-stitched TPU cover built for daily academy practice sessions.",
    image: px(30585331), badge: null, specs: ["Size 5", "Machine-Stitched", "TPU Cover", "Training"] },
  { id: 3, name: "Turf Soccer Ball — Recreational", brand: "D-SPORTS", category: "Football", price: 1799, oldPrice: null,
    description: "Single recreational football on lush green turf, ideal for weekend five-a-side games and school sport periods.",
    image: px(37696373), badge: "new", specs: ["Size 5", "Recreational", "All-Turf", "Butyl Bladder"] },
  { id: 4, name: "Firm-Ground Football Studs", brand: "Nike", category: "Football", price: 7999, oldPrice: 9499,
    description: "Lightweight firm-ground football boots pressed on the ball as shown — textured strike zone with chevron studs for acceleration on grass.",
    image: px(13422994), badge: "sale", specs: ["Firm Ground", "Synthetic Upper", "Chevron Studs", "Lightweight"] },
  { id: 5, name: "Firm-Ground Cleats — Blue", brand: "Adidas", category: "Football", price: 8499, oldPrice: null,
    description: "Blue firm-ground cleats pictured mid-match on green turf. Knit collar with mixed conical-bladed stud layout for traction.",
    image: px(32941076), badge: "new", specs: ["FG Soleplate", "Knit Collar", "Bladed Studs", "Blue Colourway"] },
  { id: 6, name: "Pro Goalkeeper Training Gloves", brand: "Puma", category: "Football", price: 2999, oldPrice: 3799,
    description: "Goalkeeper gloves shown as worn during sunset training. 4mm latex palm, extended wrist strap, finger-save spine protection.",
    image: px(38259011), badge: "sale", specs: ["4mm Latex", "Finger Save", "Wrist Strap", "Shown In Use"] },
  { id: 7, name: "Pink Football Cleats — Limited", brand: "Nike", category: "Football", price: 9999, oldPrice: 12999,
    description: "Bright pink limited-edition cleats pictured beside a Champions League-style ball. Flyknit upper with dynamic fit collar.",
    image: px(27299906), badge: "hot", specs: ["Limited Edition", "Flyknit", "AG/FG", "Speed"] },

  // ── CRICKET (10) ──
  { id: 8, name: "English Willow Cricket Bat — Grade A", brand: "SS Ton", category: "Cricket", price: 12999, oldPrice: 16499,
    description: "Single Grade-A English willow bat with thick edges and concave profile — the exact cleft pictured. Hand-selected 8+ straight grains.",
    image: px(35825599), badge: "sale", specs: ["English Willow", "Grade A", "8+ Grains", "Full Size SH"] },
  { id: 9, name: "Player Edition Willow Bat — Dark Series", brand: "SS Ton", category: "Cricket", price: 17999, oldPrice: 21999,
    description: "Single premium willow bat photographed against a dark studio backdrop. Lower swell and bigger edges for power hitters.",
    image: px(35823233), badge: "hot", specs: ["English Willow", "Player Edition", "Big Edges", "Studio-Shot Unit"] },
  { id: 10, name: "Cricket Starter Combo — Bat, Ball & Stumps", brand: "D-SPORTS", category: "Cricket", price: 3999, oldPrice: 4999,
    description: "The exact set pictured: one wooden bat, one red leather ball, and stumps arranged on the field. Ideal for gully and club practice.",
    image: px(20652481), badge: "new", specs: ["1 Bat", "1 Leather Ball", "Stumps Set", "Starter Kit"] },
  { id: 11, name: "Red Leather Test Match Cricket Ball", brand: "MRF", category: "Cricket", price: 1899, oldPrice: null,
    description: "Hand-stitched red leather ball with visible raised seam and honest match wear, exactly as pictured. 4-piece alum-tanned construction.",
    image: px(7702229), badge: null, specs: ["156g", "4-Piece", "Alum Tanned", "Hand-Stitched"] },
  { id: 12, name: "Premium Red Leather Cricket Ball", brand: "SS Ton", category: "Cricket", price: 2199, oldPrice: 2799,
    description: "Match-quality red leather ball shown in tight close-up with clear stitching. Cork core with layered wool winding for true bounce.",
    image: px(30401509), badge: null, specs: ["156g", "Cork Core", "Wool Wound", "Red Leather"] },
  { id: 13, name: "Heritage Red Cricket Ball — Shadow Edition", brand: "D-SPORTS", category: "Cricket", price: 1599, oldPrice: null,
    description: "Single red cricket ball photographed in dramatic light with a long shadow — the collector-style unit pictured is the unit shipped.",
    image: px(5519470), badge: null, specs: ["156g", "Lacquered Red", "Match Quality", "Single Ball"] },
  { id: 14, name: "Junior Cricket Batting Kit — Pads & Gloves", brand: "MRF", category: "Cricket", price: 8999, oldPrice: 11499,
    description: "Complete junior batting protection — pads, gloves, thigh and arm guard — pictured exactly as worn by the young player in whites.",
    image: px(3657154), badge: "sale", specs: ["Junior Size", "Pads + Gloves", "HD Foam", "Shown As Worn"] },
  { id: 15, name: "Wicket-Keeper Gear Set — Leg Guards & Gloves", brand: "D-SPORTS", category: "Cricket", price: 6499, oldPrice: 7999,
    description: "Keeping set photographed in match use: padded gloves and leg guards on the crouched keeper, ready at the stumps.",
    image: px(32721929), badge: "new", specs: ["Keeping Gloves", "Leg Guards", "Padded Palm", "Shown As Worn"] },
  { id: 16, name: "Pro Series Bat Trio Collection", brand: "SS Ton", category: "Cricket", price: 14999, oldPrice: 18999,
    description: "The three professional bats pictured under red accent lighting — varied handle profiles with custom grip options.",
    image: px(35981348), badge: "hot", specs: ["3 Bats", "English Willow", "Round/Oval Handle", "Pro Grade"] },
  { id: 17, name: "Academy Bat Trio — Orange Handles", brand: "D-SPORTS", category: "Cricket", price: 9999, oldPrice: 12499,
    description: "Three practice bats with the distinctive orange grips exactly as displayed. Durable blades for nets and school programs.",
    image: px(35981347), badge: null, specs: ["3 Bats", "Orange Grips", "Practice Grade", "Academy"] },

  // ── BASKETBALL (3) ──
  { id: 18, name: "Indoor/Outdoor Composite Basketball", brand: "Spalding", category: "Basketball", price: 3499, oldPrice: 4299,
    description: "Single size 7 composite leather basketball with deep channels, shown in vibrant close-up. Grip that works on hardwood and concrete alike.",
    image: px(19932843), badge: "sale", specs: ["Size 7", "Composite Leather", "Deep Channel", "Indoor/Outdoor"] },
  { id: 19, name: "Pro Court Basketball — Indoor", brand: "Spalding", category: "Basketball", price: 4999, oldPrice: null,
    description: "Premium indoor ball resting on a polished court, exactly as pictured. Full-grain composite cover with moisture-wicking surface.",
    image: px(36330545), badge: "new", specs: ["Size 7", "Full-Grain", "Indoor Only", "FIBA Spec"] },
  { id: 20, name: "Hardwood Court Basketball", brand: "Spalding", category: "Basketball", price: 4599, oldPrice: 5499,
    description: "Indoor Spalding ball photographed on the wood court from a second angle — same match-ready unit, tight close focus.",
    image: px(36330544), badge: null, specs: ["Size 7", "Indoor", "Composite Cover", "Match Ready"] },

  // ── RACKET SPORTS (5) ──
  { id: 21, name: "Clay-Court Tennis Racquet — 300g", brand: "Wilson", category: "Rackets", price: 11999, oldPrice: 14499,
    description: "Tournament racquet and ball pictured on the clay court. 100 sq-in head, 16x19 pattern, graphite composite with dampening.",
    image: px(5741292), badge: "sale", specs: ["300g", "100 sq in", "16x19", "Graphite"] },
  { id: 22, name: "Doubles Tennis Set — 2 Racquets & Balls", brand: "Wilson", category: "Rackets", price: 13499, oldPrice: null,
    description: "Exactly what you see: two tennis racquets with pressurized balls on the sunlit court. Ready for competitive doubles.",
    image: px(34015718), badge: null, specs: ["2 Racquets", "Balls Included", "All-Court", "Graphite Frame"] },
  { id: 23, name: "Badminton Rackets & Shuttlecock Set", brand: "Yonex", category: "Rackets", price: 4999, oldPrice: 5999,
    description: "The two rackets and feather shuttlecocks pictured in vibrant close-up. Isometric head shape with carbon-graphite shafts.",
    image: px(6307230), badge: null, specs: ["2 Rackets", "Feather Shuttles", "Carbon Shaft", "Isometric"] },
  { id: 24, name: "Blue Badminton Racket Pair", brand: "Yonex", category: "Rackets", price: 3999, oldPrice: 4699,
    description: "Two blue badminton rackets with shuttlecocks on white, exactly as shown — aerodynamic frames for club-level play.",
    image: px(6307231), badge: null, specs: ["2 Rackets", "High Tension", "Aero Frame", "Shuttles Included"] },
  { id: 25, name: "Graphite Tennis Racquet — Tour Close-Up", brand: "D-SPORTS Pro", category: "Rackets", price: 10999, oldPrice: 13499,
    description: "The racquet pictured in detailed string-and-frame close-up. 100 sq-in graphite build with an open spin-friendly pattern.",
    image: px(32390768), badge: null, specs: ["300g", "Graphite", "100 sq in", "Spin Pattern"] },

  // ── RUNNING & FOOTWEAR (4) ──
  { id: 26, name: "Neutral Road Running Shoes — Grey", brand: "Nike", category: "Running", price: 6999, oldPrice: 8499,
    description: "The grey textured running pair pictured heel-up with white soles. Responsive foam midsole and breathable mesh upper.",
    image: px(1456733), badge: "sale", specs: ["Neutral", "Foam Midsole", "Mesh Upper", "Road"] },
  { id: 27, name: "Running Shoes — Black/Green", brand: "Adidas", category: "Running", price: 7499, oldPrice: null,
    description: "Black and green pair shown hanging on a grey wall — energy-return midsole with Continental-style rubber grip.",
    image: px(28375818), badge: "new", specs: ["Energy Return", "Rubber Grip", "Knit Upper", "Black/Green"] },
  { id: 28, name: "Training Sneakers — White", brand: "Nike", category: "Running", price: 5499, oldPrice: 6499,
    description: "White training sneakers photographed as laced for an outdoor session. Flat stable sole with perforated ventilation zones.",
    image: px(7880182), badge: null, specs: ["Training", "Flat Sole", "Synthetic", "Ventilated"] },
  { id: 29, name: "Athletic Treadmill Shoes", brand: "Nike", category: "Running", price: 8999, oldPrice: 10999,
    description: "The black shoe captured mid-stride on the treadmill belt — Zoom-style air cushioning with a secure lockdown fit.",
    image: px(4065509), badge: "hot", specs: ["Air Cushion", "Indoor", "Lockdown Fit", "Lightweight"] },

  // ── GYM & WEIGHTS (5) ──
  { id: 30, name: "Hex Dumbbells — Pair", brand: "D-SPORTS", category: "Gym", price: 4499, oldPrice: 5499,
    description: "The exact pair of black hex dumbbells pictured on the gym floor. Non-roll hexagonal heads with knurled chrome handles.",
    image: px(3931367), badge: "sale", specs: ["Sold As Pair", "Hex Heads", "Knurled Grip", "Black Coating"] },
  { id: 31, name: "Dumbbell Rack Set — 2.5 to 15 kg", brand: "D-SPORTS", category: "Gym", price: 14999, oldPrice: 18999,
    description: "The full racked range of rubber-coated dumbbells and kettlebells pictured — a complete home-studio strength station.",
    image: px(7187871), badge: "hot", specs: ["Full Rack", "2.5-15 kg", "Rubber Coated", "Station Deal"] },
  { id: 32, name: "Cast Iron Kettlebell — 16 kg", brand: "D-SPORTS", category: "Gym", price: 2499, oldPrice: null,
    description: "Single black kettlebell on the shelf, exactly as pictured. Powder-coat finish with a wide flat base for floor work.",
    image: px(7671461), badge: null, specs: ["16 kg", "Cast Iron", "Powder Coat", "Wide Handle"] },
  { id: 33, name: "Kettlebell & Dumbbell Floor Set", brand: "D-SPORTS", category: "Gym", price: 9999, oldPrice: 12499,
    description: "Mixed kettlebells and dumbbells arranged on the gym floor as shown — ergonomic grips for functional strength circuits.",
    image: px(8612034), badge: "new", specs: ["Mixed Set", "Floor Layout", "Ergonomic", "Functional"] },
  { id: 34, name: "Strength Training Weights Combo", brand: "D-SPORTS", category: "Gym", price: 8499, oldPrice: 9999,
    description: "The kettlebells and weights captured in tight close-up — iron-core build for CrossFit and power programs.",
    image: px(7187881), badge: null, specs: ["Iron Core", "Close-Up Unit", "CrossFit Ready", "Combo Pack"] }
];

// ──────────────────────────────────────────────────
// 2.  GALLERY IMAGES — action/stadium shots (not product claims)
// ──────────────────────────────────────────────────
const GALLERY_IMAGES = [
  { url: "https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", caption: "Football Stadium — Live Match Atmosphere" },
  { url: "https://images.pexels.com/photos/36230651/pexels-photo-36230651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", caption: "Night Cricket at Narendra Modi Stadium" },
  { url: "https://images.pexels.com/photos/31177171/pexels-photo-31177171.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", caption: "Basketball Game — Intense Court Action" },
  { url: "https://images.pexels.com/photos/15362139/pexels-photo-15362139.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", caption: "Packed Stadium Under Floodlights" },
  { url: px(29463867), caption: "Cricket Batsman — Powerful Drive Shot" },
  { url: px(32390768), caption: "Tennis Racket — String & Frame Detail" },
  { url: px(32721929), caption: "Young Wicket-Keeper Set Behind The Stumps" },
  { url: px(5519470), caption: "Red Cricket Ball — Dramatic Lighting" }
];

// ──────────────────────────────────────────────────
// 3.  CONFIG — paste your deployed Apps Script /exec URL
// ──────────────────────────────────────────────────
const CONFIG = {
  GOOGLE_SHEET_WEBHOOK_URL: "https://script.google.com/macros/s/AKfycbzs8vx8lXlQ6zRxspV4UpK5CtD1T8MacC--EfQ0ysX486WIhJVxS_WvYpkGoDNDNmDh/exec", 
  SYNC_INTERVAL_MS: 8000,
  MAX_STORED_LOGS: 10000,
  REAL_LOG_STORAGE_KEY: "dsports_real_clickstream_v1",
  LEGACY_LOG_STORAGE_KEY: "dsports_clickstream_logs"
};

// ──────────────────────────────────────────────────
// 4.  ANALYTICS ENGINE — Silent Background Clickstream
//     16-field CSV schema · localStorage persistence ·
//     optional Google Sheets sync · Ctrl+Shift+E export.
//     PRIVACY: no password value is ever stored/sent.
// ──────────────────────────────────────────────────
const AnalyticsEngine = (() => {
  let logs = [];
  let syncQueue = [];
  const sessionStartTime = Date.now();
  let pageStartTime = Date.now();
  let currentPage = "home";
  const userId = getOrCreateUserId();
  const sessionId = "S-" + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 5).toUpperCase();

  function getOrCreateUserId() {
    try {
      let id = localStorage.getItem("dsports_user_id");
      if (!id) { id = "U-" + Math.random().toString(36).substring(2, 8).toUpperCase(); localStorage.setItem("dsports_user_id", id); }
      return id;
    } catch (e) { return "U-" + Math.random().toString(36).substring(2, 8).toUpperCase(); }
  }

  function getDevice() { const w = window.innerWidth; return w <= 480 ? "Mobile" : w <= 1024 ? "Tablet" : "Desktop"; }
  function getBrowser() {
    const ua = navigator.userAgent;
    if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome";
    if (ua.includes("Firefox")) return "Firefox";
    if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
    if (ua.includes("Edg")) return "Edge";
    return "Other";
  }
  function getScreenRes() { return window.screen.width + "x" + window.screen.height; }
  function getReferrer() { return document.referrer || "Direct"; }
  function getLang() { return navigator.language || "en-US"; }
  function timestamp() { return new Date().toISOString(); }
  function timeOnPage() { return ((Date.now() - pageStartTime) / 1000).toFixed(1); }
  function sessionTime() { return ((Date.now() - sessionStartTime) / 1000).toFixed(1); }

  function loadStoredLogs() {
    try {
      // The legacy key may contain synthetic records from an older build.
      // Delete it without migration so Ctrl+Shift+E exports real activity only.
      localStorage.removeItem(CONFIG.LEGACY_LOG_STORAGE_KEY);

      const stored = JSON.parse(localStorage.getItem(CONFIG.REAL_LOG_STORAGE_KEY) || "[]");
      return Array.isArray(stored) ? stored : [];
    } catch (e) {
      return [];
    }
  }

  function persistLogs() {
    try {
      const t = logs.length > CONFIG.MAX_STORED_LOGS ? logs.slice(logs.length - CONFIG.MAX_STORED_LOGS) : logs;
      localStorage.setItem(CONFIG.REAL_LOG_STORAGE_KEY, JSON.stringify(t));
    } catch (e) { /* storage full — continue in memory */ }
  }

  logs = loadStoredLogs();

  function logEvent(eventType, extra = {}) {
    const entry = {
      User_ID: extra.User_ID || userId,
      Session_ID: extra.Session_ID || sessionId,
      Timestamp: extra.Timestamp || timestamp(),
      Page_Visited: extra.Page_Visited || currentPage,
      Event_Type: eventType,
      Click_Position: extra.Click_Position || "",
      Button_Click: extra.Button_Click || "",
      Mouse_Hover: extra.Mouse_Hover || "",
      Scroll_Depth: extra.Scroll_Depth || "",
      Search_Query: extra.Search_Query || "",
      Time_On_Page: extra.Time_On_Page || timeOnPage(),
      Session_Time: extra.Session_Time || sessionTime(),
      Device: extra.Device || getDevice(),
      Browser: extra.Browser || getBrowser(),
      Screen_Resolution: extra.Screen_Resolution || getScreenRes(),
      Referrer: extra.Referrer || getReferrer(),
      Language: extra.Language || getLang()
    };
    logs.push(entry);
    persistLogs();
    syncQueue.push(Object.assign({ sheet: "Clickstream" }, entry));
  }

  function trackPageView(page) { pageStartTime = Date.now(); currentPage = page; logEvent("page_view"); }
  function trackClick(e) {
    logEvent("click", {
      Click_Position: e.clientX + "," + e.clientY,
      Button_Click: e.target.closest("button,a,[data-track]")?.textContent?.trim().substring(0, 40) || ""
    });
  }
  function trackRightClick(e) { logEvent("right_click", { Click_Position: e.clientX + "," + e.clientY }); }
  function trackDblClick(e) { logEvent("double_click", { Click_Position: e.clientX + "," + e.clientY }); }

  const scrollMilestones = new Set();
  function trackScroll() {
    const st = window.scrollY || document.documentElement.scrollTop;
    const dh = document.documentElement.scrollHeight - window.innerHeight;
    if (dh <= 0) return;
    const pct = Math.round((st / dh) * 100);
    [25, 50, 75, 100].forEach(m => {
      if (pct >= m && !scrollMilestones.has(currentPage + "-" + m)) {
        scrollMilestones.add(currentPage + "-" + m);
        logEvent("scroll_depth", { Scroll_Depth: m + "%" });
      }
    });
  }

  let hoverStart = 0;
  function trackHoverStart() { hoverStart = Date.now(); }
  function trackHoverEnd(productName) {
    if (hoverStart) {
      logEvent("hover", { Mouse_Hover: productName + " (" + ((Date.now() - hoverStart) / 1000).toFixed(2) + "s)" });
      hoverStart = 0;
    }
  }

  function trackSearch(q) { if (q && q.trim().length > 0) logEvent("search", { Search_Query: q.trim() }); }
  function trackFormEvent(formName, eventType) { logEvent("form_" + eventType, { Button_Click: formName }); }

  function logOrder(order) {
    try {
      const k = "dsports_orders";
      const ex = JSON.parse(localStorage.getItem(k) || "[]");
      ex.push(order); localStorage.setItem(k, JSON.stringify(ex));
    } catch (e) {}
    syncQueue.push(Object.assign({ sheet: "Orders" }, order));
  }

  function logUser(user) {
    try {
      const k = "dsports_users";
      const ex = JSON.parse(localStorage.getItem(k) || "[]");
      ex.push(user); localStorage.setItem(k, JSON.stringify(ex));
    } catch (e) {}
    syncQueue.push(Object.assign({ sheet: "Users" }, user));
  }

  function flushQueue(useBeacon) {
    if (!CONFIG.GOOGLE_SHEET_WEBHOOK_URL || syncQueue.length === 0) return;
    const batch = syncQueue.splice(0, syncQueue.length);
    const payload = JSON.stringify({ rows: batch });
    try {
      if (useBeacon && navigator.sendBeacon) {
        navigator.sendBeacon(CONFIG.GOOGLE_SHEET_WEBHOOK_URL, new Blob([payload], { type: "text/plain;charset=UTF-8" }));
      } else {
        fetch(CONFIG.GOOGLE_SHEET_WEBHOOK_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=UTF-8" }, body: payload });
      }
    } catch (e) { /* data remains safe in localStorage */ }
  }

  function exportCSV() {
    const headers = ["User_ID","Session_ID","Timestamp","Page_Visited","Event_Type","Click_Position","Button_Click","Mouse_Hover","Scroll_Depth","Search_Query","Time_On_Page","Session_Time","Device","Browser","Screen_Resolution","Referrer","Language"];
    let csv = headers.join(",") + "\n";
    logs.forEach(row => {
      csv += headers.map(h => {
        let val = (row[h] || "").toString();
        if (val.includes(",") || val.includes('"') || val.includes("\n")) val = '"' + val.replace(/"/g, '""') + '"';
        return val;
      }).join(",") + "\n";
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "dsports_clickstream.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function init() {
    // The router records the initial page view after initialization.
    document.addEventListener("click", trackClick, true);
    document.addEventListener("contextmenu", trackRightClick, true);
    document.addEventListener("dblclick", trackDblClick, true);
    let scrollTimer;
    window.addEventListener("scroll", () => { clearTimeout(scrollTimer); scrollTimer = setTimeout(trackScroll, 150); }, { passive: true });
    document.addEventListener("keydown", e => {
      if (e.ctrlKey && e.shiftKey && e.key === "E") { e.preventDefault(); exportCSV(); }
    });
    setInterval(() => flushQueue(false), CONFIG.SYNC_INTERVAL_MS);
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flushQueue(true); });
    window.addEventListener("pagehide", () => flushQueue(true));
  }

  return { init, trackPageView, trackSearch, trackHoverStart, trackHoverEnd, trackFormEvent, logOrder, logUser, exportCSV, getLogCount: () => logs.length, getUserId: () => userId };
})();

// ──────────────────────────────────────────────────
// 5.  APPLICATION STATE & SPA ROUTER
// ──────────────────────────────────────────────────
const AppState = { cart: [], wishlist: [], currentCategory: "All", checkoutStep: 0, selectedPayment: "", orderId: "" };

function navigateTo(hash) { window.location.hash = hash; }

function handleRoute() {
  const hash = window.location.hash.replace("#", "") || "home";
  document.querySelectorAll(".page-view").forEach(v => v.classList.remove("active"));
  const target = document.getElementById("view-" + hash);
  if (target) target.classList.add("active");
  else document.getElementById("view-home")?.classList.add("active");
  document.querySelectorAll(".main-nav-link").forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + hash));
  AnalyticsEngine.trackPageView(hash);
  if (hash === "products") renderProducts();
  if (hash === "cart") renderCartPage();
  if (hash === "wishlist") renderWishlist();
  if (hash === "checkout") renderCheckout();
  if (hash === "gallery") renderGallery();
  window.scrollTo(0, 0);
}

// ──── Products ────
function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;
  const filtered = AppState.currentCategory === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === AppState.currentCategory);
  container.innerHTML = filtered.map(productCardHTML).join("");
  const sub = document.getElementById("products-subtitle");
  if (sub) sub.textContent = "Browse " + PRODUCTS.length + " match-grade products across 6 sport categories";
  attachProductListeners();
  updateCategoryPills();
}

function productCardHTML(p) {
  const isWished = AppState.wishlist.some(w => w.id === p.id);
  const badgeHTML = p.badge ? `<span class="product-badge ${p.badge}">${p.badge}</span>` : "";
  const oldPriceHTML = p.oldPrice ? `<span class="old-price">\u20B9${p.oldPrice.toLocaleString("en-IN")}</span>` : "";
  return `
    <div class="product-card" data-product-id="${p.id}" data-name="${p.name}">
      ${badgeHTML}
      <img src="${p.image}" alt="${p.name}" class="card-img" loading="lazy">
      <div class="card-body">
        <div class="card-brand">${p.brand}</div>
        <div class="card-title">${p.name}</div>
        <div class="card-desc">${p.description}</div>
        <div class="card-footer">
          <div class="card-price">\u20B9${p.price.toLocaleString("en-IN")} ${oldPriceHTML}</div>
          <div class="card-actions">
            <button class="wishlist-btn ${isWished ? "active" : ""}" onclick="toggleWishlist(${p.id})" title="Wishlist" aria-label="Wishlist">${SVG.heart}</button>
            <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>`;
}

function attachProductListeners() {
  document.querySelectorAll(".product-card").forEach(card => {
    const name = card.dataset.name;
    card.addEventListener("mouseenter", () => AnalyticsEngine.trackHoverStart());
    card.addEventListener("mouseleave", () => AnalyticsEngine.trackHoverEnd(name));
    card.querySelector(".card-img")?.addEventListener("click", () => openProductDetail(parseInt(card.dataset.productId)));
    card.querySelector(".card-title")?.addEventListener("click", () => openProductDetail(parseInt(card.dataset.productId)));
  });
}

function updateCategoryPills() {
  document.querySelectorAll(".cat-pill").forEach(pill => pill.classList.toggle("active", pill.dataset.category === AppState.currentCategory));
}

function filterCategory(cat) { AppState.currentCategory = cat; renderProducts(); }

// ──── Product Detail ────
function openProductDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const overlay = document.getElementById("product-detail-overlay");
  const isWished = AppState.wishlist.some(w => w.id === p.id);
  overlay.innerHTML = `
    <div class="product-detail-box" style="position:relative;">
      <button class="pd-close" onclick="closeProductDetail()" aria-label="Close">${SVG.close}</button>
      <img src="${p.image}" alt="${p.name}" class="pd-image">
      <div class="pd-body">
        <div class="card-brand">${p.brand}</div>
        <h2>${p.name}</h2>
        <p class="pd-desc">${p.description}</p>
        <div class="pd-specs">${p.specs.map(s => `<span>${s}</span>`).join("")}</div>
        <div class="pd-footer">
          <div class="card-price">\u20B9${p.price.toLocaleString("en-IN")} ${p.oldPrice ? '<span class="old-price">\u20B9' + p.oldPrice.toLocaleString("en-IN") + "</span>" : ""}</div>
          <div style="display:flex;gap:8px;">
            <button class="wishlist-btn ${isWished ? "active" : ""}" onclick="toggleWishlist(${p.id})" title="Wishlist" aria-label="Wishlist">${SVG.heart}</button>
            <button class="btn btn-primary" onclick="addToCart(${p.id}); closeProductDetail();">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>`;
  overlay.classList.add("open");
}

function closeProductDetail() { document.getElementById("product-detail-overlay")?.classList.remove("open"); }

// ──── Cart ────
function addToCart(id) {
  const existing = AppState.cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else { const p = PRODUCTS.find(x => x.id === id); if (p) AppState.cart.push(Object.assign({}, p, { qty: 1 })); }
  updateCartBadge();
  showToast(PRODUCTS.find(x => x.id === id)?.name + " added to cart", "success");
  renderDrawerCart();
}

function removeFromCart(id) { AppState.cart = AppState.cart.filter(c => c.id !== id); updateCartBadge(); renderCartPage(); renderDrawerCart(); }

function updateCartQty(id, delta) {
  const item = AppState.cart.find(c => c.id === id);
  if (item) { item.qty += delta; if (item.qty <= 0) { removeFromCart(id); return; } }
  renderCartPage(); renderDrawerCart(); updateCartBadge();
}

function getCartSubtotal() { return AppState.cart.reduce((s, c) => s + c.price * c.qty, 0); }
function getCartTax() { return Math.round(getCartSubtotal() * 0.08); }
function getCartShipping() { const s = getCartSubtotal(); if (s === 0) return 0; return s >= 5000 ? 0 : 299; }
function getCartTotal() { return getCartSubtotal() + getCartTax() + getCartShipping(); }

function updateCartBadge() {
  const count = AppState.cart.reduce((s, c) => s + c.qty, 0);
  document.querySelectorAll(".cart-count").forEach(el => el.textContent = count || "");
}

function renderCartPage() {
  const container = document.getElementById("cart-content");
  if (!container) return;
  if (AppState.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">${SVG.cartLg}</div>
        <h3>Your cart is empty</h3>
        <p style="color:var(--text-muted);margin-bottom:20px;">Browse our collection and add items to your cart.</p>
        <a href="#products" class="btn btn-primary">Shop Now</a>
      </div>`;
    return;
  }
  const rows = AppState.cart.map(c => `
    <tr>
      <td><div class="cart-product-cell"><img src="${c.image}" alt="${c.name}"><div class="cp-info"><h4>${c.name}</h4><p>${c.brand}</p></div></div></td>
      <td><span style="color:var(--gold);font-weight:700;">\u20B9${c.price.toLocaleString("en-IN")}</span></td>
      <td><div class="qty-control"><button onclick="updateCartQty(${c.id}, -1)">&minus;</button><span>${c.qty}</span><button onclick="updateCartQty(${c.id}, 1)">+</button></div></td>
      <td style="font-weight:700;">\u20B9${(c.price * c.qty).toLocaleString("en-IN")}</td>
      <td><button class="remove-btn" onclick="removeFromCart(${c.id})" aria-label="Remove">${SVG.close}</button></td>
    </tr>`).join("");
  container.innerHTML = `
    <table class="cart-table"><thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Total</th><th></th></tr></thead><tbody>${rows}</tbody></table>
    <div class="cart-summary">
      <div class="summary-row"><span>Subtotal</span><span>\u20B9${getCartSubtotal().toLocaleString("en-IN")}</span></div>
      <div class="summary-row"><span>GST / Tax (8%)</span><span>\u20B9${getCartTax().toLocaleString("en-IN")}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${getCartShipping() === 0 ? "FREE" : "\u20B9" + getCartShipping()}</span></div>
      <div class="summary-row total"><span>Total</span><span>\u20B9${getCartTotal().toLocaleString("en-IN")}</span></div>
      <button class="btn btn-primary" style="width:100%;margin-top:12px;" onclick="navigateTo('checkout')">Proceed to Checkout</button>
    </div>`;
}

// ──── Drawer ────
function openDrawerCart() {
  document.getElementById("cart-drawer")?.classList.add("open");
  document.getElementById("cart-drawer-overlay")?.classList.add("open");
  renderDrawerCart();
}
function closeDrawerCart() {
  document.getElementById("cart-drawer")?.classList.remove("open");
  document.getElementById("cart-drawer-overlay")?.classList.remove("open");
}
function renderDrawerCart() {
  const body = document.getElementById("drawer-body");
  const footer = document.getElementById("drawer-footer");
  if (!body) return;
  if (AppState.cart.length === 0) {
    body.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px 0;">Cart is empty</p>';
    if (footer) footer.innerHTML = "";
    return;
  }
  body.innerHTML = AppState.cart.map(c => `
    <div class="drawer-item">
      <img src="${c.image}" alt="${c.name}">
      <div class="drawer-item-info"><h4>${c.name}</h4><p>${c.brand} &middot; Qty: ${c.qty}</p><span class="di-price">\u20B9${(c.price * c.qty).toLocaleString("en-IN")}</span></div>
      <button class="remove-btn" onclick="removeFromCart(${c.id})" style="align-self:center;" aria-label="Remove">${SVG.close}</button>
    </div>`).join("");
  if (footer) footer.innerHTML = `
    <div class="drawer-total"><span>Total</span><span>\u20B9${getCartTotal().toLocaleString("en-IN")}</span></div>
    <a href="#cart" class="btn btn-outline" style="width:100%;margin-bottom:8px;" onclick="closeDrawerCart()">View Full Cart</a>
    <a href="#checkout" class="btn btn-primary" style="width:100%;" onclick="closeDrawerCart()">Checkout</a>`;
}

// ──── Wishlist ────
function toggleWishlist(id) {
  const idx = AppState.wishlist.findIndex(w => w.id === id);
  if (idx !== -1) { AppState.wishlist.splice(idx, 1); showToast("Removed from wishlist"); }
  else { const p = PRODUCTS.find(x => x.id === id); if (p) { AppState.wishlist.push(p); showToast(p.name + " added to wishlist", "success"); } }
  updateWishlistBadge();
  const hash = window.location.hash.replace("#", "") || "home";
  if (hash === "products") renderProducts();
  if (hash === "wishlist") renderWishlist();
}
function updateWishlistBadge() { document.querySelectorAll(".wishlist-count").forEach(el => el.textContent = AppState.wishlist.length || ""); }
function renderWishlist() {
  const container = document.getElementById("wishlist-content");
  if (!container) return;
  if (AppState.wishlist.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">${SVG.heartLg}</div>
        <h3>Your wishlist is empty</h3>
        <p style="color:var(--text-muted);margin-bottom:20px;">Save items you love for later.</p>
        <a href="#products" class="btn btn-primary">Browse Products</a>
      </div>`;
    return;
  }
  container.innerHTML = `<div class="wishlist-grid">${AppState.wishlist.map(productCardHTML).join("")}</div>`;
  attachProductListeners();
}

// ──── Checkout ────
function renderCheckout() {
  const container = document.getElementById("checkout-content");
  if (!container) return;
  if (AppState.cart.length === 0 && AppState.checkoutStep < 3) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">${SVG.package}</div>
        <h3>Nothing to checkout</h3>
        <p style="color:var(--text-muted);margin-bottom:20px;">Add items to your cart first.</p>
        <a href="#products" class="btn btn-primary">Shop Now</a>
      </div>`;
    return;
  }
  const steps = ["Shipping Address", "Payment Method", "Order Confirmation"];
  const stepsHTML = steps.map((s, i) => {
    let cls = "";
    if (i < AppState.checkoutStep) cls = "completed";
    if (i === AppState.checkoutStep) cls = "active";
    return `<div class="checkout-step ${cls}">${i + 1}. ${s}</div>`;
  }).join("");

  let panelHTML = "";
  if (AppState.checkoutStep === 0) {
    panelHTML = `
      <div class="checkout-panel">
        <h3>${SVG.pin} Shipping Address</h3>
        <div class="form-row">
          <div class="form-group"><label>Full Name</label><input type="text" class="form-input" id="ship-name" placeholder="e.g. Rahul Sharma" onfocus="AnalyticsEngine.trackFormEvent('Checkout Shipping','start')"></div>
          <div class="form-group"><label>Phone Number</label><input type="tel" class="form-input" id="ship-phone" placeholder="+91 98200 xxxxx"></div>
        </div>
        <div class="form-group"><label>Address Line 1</label><input type="text" class="form-input" id="ship-addr1" placeholder="Flat / House No., Building Name"></div>
        <div class="form-group"><label>Address Line 2</label><input type="text" class="form-input" id="ship-addr2" placeholder="Street, Locality"></div>
        <div class="form-row">
          <div class="form-group"><label>City</label><select class="form-input" id="ship-city"><option value="Badlapur">Badlapur</option><option value="Mumbai">Mumbai</option><option value="Thane">Thane</option><option value="Navi Mumbai">Navi Mumbai</option><option value="Pune">Pune</option></select></div>
          <div class="form-group"><label>PIN Code</label><input type="text" class="form-input" id="ship-pin" placeholder="421503" maxlength="6"></div>
        </div>
        <div class="form-group"><label>State</label><input type="text" class="form-input" value="Maharashtra" readonly style="opacity:0.7;"></div>
        <button class="btn btn-primary" style="margin-top:10px;" onclick="checkoutNext()">Continue to Payment &rarr;</button>
      </div>`;
  } else if (AppState.checkoutStep === 1) {
    panelHTML = `
      <div class="checkout-panel">
        <h3>${SVG.creditCard} Payment Method</h3>
        <div class="payment-options">
          <div class="payment-option ${AppState.selectedPayment === "upi" ? "selected" : ""}" onclick="selectPayment('upi')"><div class="pay-icon">${SVG.smartphone}</div><div class="pay-label">UPI / BHIM</div></div>
          <div class="payment-option ${AppState.selectedPayment === "card" ? "selected" : ""}" onclick="selectPayment('card')"><div class="pay-icon">${SVG.cardPay}</div><div class="pay-label">Credit / Debit Card</div></div>
          <div class="payment-option ${AppState.selectedPayment === "demo" ? "selected" : ""}" onclick="selectPayment('demo')"><div class="pay-icon">${SVG.bank}</div><div class="pay-label">Demo Pay</div></div>
        </div>
        <div class="cart-summary" style="max-width:100%;margin:0;">
          <div class="summary-row"><span>Subtotal</span><span>\u20B9${getCartSubtotal().toLocaleString("en-IN")}</span></div>
          <div class="summary-row"><span>GST / Tax (8%)</span><span>\u20B9${getCartTax().toLocaleString("en-IN")}</span></div>
          <div class="summary-row"><span>Shipping</span><span>${getCartShipping() === 0 ? "FREE" : "\u20B9" + getCartShipping()}</span></div>
          <div class="summary-row total"><span>Order Total</span><span>\u20B9${getCartTotal().toLocaleString("en-IN")}</span></div>
        </div>
        <div style="display:flex;gap:12px;margin-top:16px;">
          <button class="btn btn-outline" onclick="AppState.checkoutStep=0;renderCheckout();">&larr; Back</button>
          <button class="btn btn-primary" style="flex:1;" onclick="placeOrder()">Place Order &mdash; \u20B9${getCartTotal().toLocaleString("en-IN")}</button>
        </div>
      </div>`;
  } else if (AppState.checkoutStep === 2) {
    panelHTML = `
      <div class="checkout-panel">
        <div class="order-confirmation">
          <div class="check-circle">${SVG.check}</div>
          <h2>Order Placed Successfully!</h2>
          <div class="order-id">Tracking ID: ${AppState.orderId}</div>
          <p>Thank you for shopping with D-SPORTS. Your order will be dispatched from our Badlapur HQ within 2&ndash;3 business days.</p>
          <p style="margin-top:8px;font-size:0.82rem;color:var(--text-muted);">A confirmation email has been sent to your registered email address.</p>
          <a href="#products" class="btn btn-primary" style="margin-top:20px;" onclick="AppState.checkoutStep=0;">Continue Shopping</a>
        </div>
      </div>`;
  }
  container.innerHTML = `<div class="checkout-container"><div class="checkout-steps">${stepsHTML}</div>${panelHTML}</div>`;
}

function selectPayment(m) { AppState.selectedPayment = m; renderCheckout(); }

function checkoutNext() {
  const name = document.getElementById("ship-name")?.value;
  const phone = document.getElementById("ship-phone")?.value;
  const addr1 = document.getElementById("ship-addr1")?.value;
  const pin = document.getElementById("ship-pin")?.value;
  if (!name || !phone || !addr1 || !pin) { showToast("Please fill all required shipping fields", "error"); AnalyticsEngine.trackFormEvent("Checkout Shipping", "error"); return; }
  AnalyticsEngine.trackFormEvent("Checkout Shipping", "submit");
  AppState.checkoutStep = 1;
  renderCheckout();
}

function placeOrder() {
  if (!AppState.selectedPayment) { showToast("Please select a payment method", "error"); return; }
  AppState.orderId = "#DSP-" + Math.floor(100000 + Math.random() * 900000);
  // FIX: real subtotal now recorded correctly (was logging grand total as both)
  const order = {
    Order_ID: AppState.orderId,
    Timestamp: new Date().toISOString(),
    User_ID: AnalyticsEngine.getUserId(),
    Customer_Name: document.getElementById("ship-name")?.value || "",
    Phone: document.getElementById("ship-phone")?.value || "",
    Address: ((document.getElementById("ship-addr1")?.value || "") + " " + (document.getElementById("ship-addr2")?.value || "")).trim(),
    PIN_Code: document.getElementById("ship-pin")?.value || "",
    Payment_Method: AppState.selectedPayment,
    Items: AppState.cart.map(c => c.name + " (" + c.brand + ") x" + c.qty).join(" | "),
    Item_Count: AppState.cart.reduce((n, c) => n + c.qty, 0),
    Subtotal: getCartSubtotal(),
    Tax_8pct: getCartTax(),
    Shipping: getCartShipping(),
    Total: getCartTotal()
  };
  AnalyticsEngine.logOrder(order);
  AppState.cart = [];
  AppState.checkoutStep = 2;
  updateCartBadge();
  AnalyticsEngine.trackFormEvent("Checkout Payment", "submit");
  renderCheckout();
}

// ──── Gallery ────
function renderGallery() {
  const container = document.getElementById("gallery-grid");
  if (!container || container.dataset.rendered === "1") return;
  container.innerHTML = GALLERY_IMAGES.map(g => `
    <div class="gallery-item">
      <img src="${g.url}" alt="${g.caption}" loading="lazy">
      <div class="gallery-overlay"><span>${g.caption}</span></div>
    </div>`).join("");
  container.dataset.rendered = "1";
}

// ──── Search ────
function initSearch() {
  const input = document.getElementById("global-search");
  const dropdown = document.getElementById("search-dropdown");
  if (!input || !dropdown) return;
  let searchTimeout;
  input.addEventListener("input", () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const q = input.value.toLowerCase().trim();
      if (q.length < 2) { dropdown.classList.remove("active"); return; }
      AnalyticsEngine.trackSearch(q);
      const results = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      ).slice(0, 6);
      dropdown.innerHTML = results.length === 0
        ? '<div style="padding:16px;text-align:center;color:var(--text-muted);font-size:0.85rem;">No results found</div>'
        : results.map(p => `
          <div class="search-item" onclick="navigateTo('products');AppState.currentCategory='${p.category}';renderProducts();document.getElementById('search-dropdown').classList.remove('active');document.getElementById('global-search').value='';">
            <img src="${p.image}" alt="${p.name}">
            <div class="search-item-info"><h4>${p.name}</h4><p>\u20B9${p.price.toLocaleString("en-IN")} &middot; ${p.brand}</p></div>
          </div>`).join("");
      dropdown.classList.add("active");
    }, 250);
  });
  document.addEventListener("click", e => { if (!e.target.closest(".search-wrapper")) dropdown.classList.remove("active"); });
}

// ──── Login / Register Modal ────
function openLoginModal() { document.getElementById("login-modal")?.classList.add("open"); switchAuthTab("login"); }
function closeLoginModal() { document.getElementById("login-modal")?.classList.remove("open"); }

function switchAuthTab(which) {
  const lt = document.getElementById("auth-tab-login");
  const rt = document.getElementById("auth-tab-register");
  const lf = document.getElementById("login-form-panel");
  const rf = document.getElementById("register-form-panel");
  if (!lt || !rt || !lf || !rf) return;
  const isLogin = which === "login";
  lt.classList.toggle("active", isLogin);
  rt.classList.toggle("active", !isLogin);
  lf.style.display = isLogin ? "block" : "none";
  rf.style.display = isLogin ? "none" : "block";
  AnalyticsEngine.trackFormEvent(isLogin ? "Login Form" : "Register Form", "start");
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("login-email")?.value;
  const pass = document.getElementById("login-pass")?.value; // read-only check — never stored/logged
  if (!email || !pass) { showToast("Please enter email and password", "error"); AnalyticsEngine.trackFormEvent("Login Form", "error"); return; }
  AnalyticsEngine.trackFormEvent("Login Form", "submit");
  showToast("Welcome back! Logged in successfully.", "success");
  closeLoginModal();
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById("reg-name")?.value;
  const email = document.getElementById("reg-email")?.value;
  const pass = document.getElementById("reg-pass")?.value;             // never stored/logged
  const confirm = document.getElementById("reg-pass-confirm")?.value;  // never stored/logged
  if (!name || !email || !pass || !confirm) { showToast("Please fill all fields", "error"); AnalyticsEngine.trackFormEvent("Register Form", "error"); return; }
  if (pass !== confirm) { showToast("Passwords don't match", "error"); AnalyticsEngine.trackFormEvent("Register Form", "error"); return; }
  AnalyticsEngine.trackFormEvent("Register Form", "submit");
  AnalyticsEngine.logUser({ User_ID: AnalyticsEngine.getUserId(), Timestamp: new Date().toISOString(), Name: name, Email: email });
  showToast("Account created! You're logged in.", "success");
  closeLoginModal();
}

// ──── Contact Form ────
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("contact-name")?.value;
  const email = document.getElementById("contact-email")?.value;
  const msg = document.getElementById("contact-msg")?.value;
  if (!name || !email || !msg) { showToast("Please fill all fields", "error"); AnalyticsEngine.trackFormEvent("Contact Form", "error"); return; }
  AnalyticsEngine.trackFormEvent("Contact Form", "submit");
  showToast("Message sent! We'll get back to you soon.", "success");
  e.target.reset();
}

// ──── Toast / FAQ / Featured ────
function showToast(message, type = "") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast " + type;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

function toggleFaq(el) { el.closest(".faq-item")?.classList.toggle("open"); }

function renderFeaturedProducts() {
  const container = document.getElementById("featured-grid");
  if (!container) return;
  const featured = PRODUCTS.filter(p => p.badge === "sale" || p.badge === "hot" || p.badge === "new").slice(0, 8);
  container.innerHTML = featured.map(productCardHTML).join("");
  attachProductListeners();
}

// ──── Init ────
document.addEventListener("DOMContentLoaded", () => {
  AnalyticsEngine.init();
  window.addEventListener("hashchange", handleRoute);
  handleRoute();
  initSearch();
  renderFeaturedProducts();
  renderProducts();
  renderGallery();
});
