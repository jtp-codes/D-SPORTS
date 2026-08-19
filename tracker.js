/* ====================================================================
   D-SPORTS — tracker.js
   Product Catalog + Silent Background Behavioral Analytics Engine
   All icons are professional inline SVGs — zero emoji usage.
   ==================================================================== */

// ──────────────────────────────────────────────────
// 0.  SVG ICON LIBRARY (inline, no external deps)
// ──────────────────────────────────────────────────
const SVG = {
  heart: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
  cart: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>',
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

// ──────────────────────────────────────────────────
// 1.  VERIFIED PRODUCT CATALOG
//     Every title & description matches its image URL 1-to-1
// ──────────────────────────────────────────────────
const PRODUCTS = [
  // ── FOOTBALL / SOCCER ──
  {
    id: 1,
    name: "Match-Grade Soccer Ball",
    brand: "Adidas",
    category: "Football",
    price: 4499,
    oldPrice: 5999,
    description: "Official size 5 match football with thermal-bonded panels. Tournament-grade seamless construction for consistent flight and water resistance.",
    image: "https://images.pexels.com/photos/28222529/pexels-photo-28222529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "sale",
    specs: ["Size 5", "Thermal-bonded", "FIFA Approved", "PU Cover"]
  },
  {
    id: 2,
    name: "Firm-Ground Football Studs",
    brand: "Nike",
    category: "Football",
    price: 7999,
    oldPrice: 9499,
    description: "Lightweight firm-ground football boots with textured strike zone and chevron studs for explosive acceleration on natural grass pitches.",
    image: "https://images.pexels.com/photos/13422994/pexels-photo-13422994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "sale",
    specs: ["Firm Ground", "Synthetic Upper", "Chevron Studs", "Lightweight"]
  },
  {
    id: 3,
    name: "Football Cleats — Blue Edition",
    brand: "Adidas",
    category: "Football",
    price: 8499,
    oldPrice: null,
    description: "Blue-accented firm-ground cleats with knit collar for ankle support. Conical and bladed stud configuration for multi-directional traction.",
    image: "https://images.pexels.com/photos/32941076/pexels-photo-32941076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "new",
    specs: ["FG Soleplate", "Knit Collar", "Bladed Studs", "Primeknit"]
  },
  {
    id: 4,
    name: "Pro Goalkeeper Training Gloves",
    brand: "Puma",
    category: "Football",
    price: 2999,
    oldPrice: 3799,
    description: "Professional goalkeeper gloves with 4mm German latex palm for superior grip. Extended wrist strap with finger-save spine protection.",
    image: "https://images.pexels.com/photos/38259011/pexels-photo-38259011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    specs: ["4mm Latex", "Finger Save", "Wrist Strap", "Ventilated"]
  },

  // ── CRICKET ──
  {
    id: 5,
    name: "English Willow Cricket Bat — Grade A",
    brand: "SS Ton",
    category: "Cricket",
    price: 12999,
    oldPrice: 16499,
    description: "Premium Grade-A English willow cricket bat with thick edges and concave profile. Hand-selected cleft with 8+ straight grains for elite stroke play.",
    image: "https://images.pexels.com/photos/35825599/pexels-photo-35825599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "sale",
    specs: ["English Willow", "Grade A", "8+ Grains", "Full Size SH"]
  },
  {
    id: 6,
    name: "Red Leather Test Match Cricket Ball",
    brand: "MRF",
    category: "Cricket",
    price: 1899,
    oldPrice: null,
    description: "Hand-stitched red leather cricket ball with raised seam. 4-piece alum-tanned construction for swing, seam movement, and long-lasting shape retention.",
    image: "https://images.pexels.com/photos/7702229/pexels-photo-7702229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    specs: ["156g", "4-Piece", "Alum Tanned", "Hand-Stitched"]
  },
  {
    id: 7,
    name: "Premium Red Leather Cricket Ball",
    brand: "SS Ton",
    category: "Cricket",
    price: 2199,
    oldPrice: 2799,
    description: "Match-quality red leather cricket ball with prominent seam for controlled swing. Cork core with layered wool winding for true bounce.",
    image: "https://images.pexels.com/photos/30401509/pexels-photo-30401509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    specs: ["156g", "Cork Core", "Wool Wound", "Red Leather"]
  },
  {
    id: 8,
    name: "Professional Cricket Batting Kit",
    brand: "MRF",
    category: "Cricket",
    price: 8999,
    oldPrice: 11499,
    description: "Complete professional batting kit including pads, gloves, thigh guard, and arm guard. Lightweight high-density foam with reinforced fiber shell.",
    image: "https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "sale",
    specs: ["Pads", "Gloves", "Thigh Guard", "HD Foam"]
  },
  {
    id: 9,
    name: "Cricket Bats — Pro Series Collection",
    brand: "SS Ton",
    category: "Cricket",
    price: 14999,
    oldPrice: 18999,
    description: "Collection of three professional-grade cricket bats with varied handle profiles. English willow blades with custom grip options for different playing styles.",
    image: "https://images.pexels.com/photos/35981348/pexels-photo-35981348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "hot",
    specs: ["English Willow", "3 Bat Set", "Round/Oval Handle", "Pro Grade"]
  },

  // ── BASKETBALL ──
  {
    id: 10,
    name: "Indoor/Outdoor Composite Basketball",
    brand: "Spalding",
    category: "Basketball",
    price: 3499,
    oldPrice: 4299,
    description: "Official size 7 composite leather basketball with deep channel design. Suitable for indoor hardwood and outdoor concrete courts with superior grip.",
    image: "https://images.pexels.com/photos/19932843/pexels-photo-19932843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "sale",
    specs: ["Size 7", "Composite Leather", "Deep Channel", "Indoor/Outdoor"]
  },
  {
    id: 11,
    name: "Pro Court Basketball — Indoor",
    brand: "Spalding",
    category: "Basketball",
    price: 4999,
    oldPrice: null,
    description: "Premium indoor basketball resting on hardwood court. Full-grain composite cover with moisture-wicking surface for elite indoor gameplay.",
    image: "https://images.pexels.com/photos/36330545/pexels-photo-36330545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "new",
    specs: ["Size 7", "Full-Grain", "Indoor Only", "FIBA Spec"]
  },

  // ── RACKET SPORTS ──
  {
    id: 12,
    name: "Pro Tennis Racquet — 300g",
    brand: "Wilson",
    category: "Rackets",
    price: 11999,
    oldPrice: 14499,
    description: "Tournament-grade tennis racquet with 100 sq-in head and 16x19 string pattern. Graphite composite frame with vibration dampening technology.",
    image: "https://images.pexels.com/photos/5741292/pexels-photo-5741292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "sale",
    specs: ["300g", "100 sq in", "16x19", "Graphite"]
  },
  {
    id: 13,
    name: "Tennis Racquet & Ball Set",
    brand: "Wilson",
    category: "Rackets",
    price: 13499,
    oldPrice: null,
    description: "Two professional tennis racquets paired with pressurized tennis balls. Ideal for competitive doubles play on hard and clay courts.",
    image: "https://images.pexels.com/photos/34015718/pexels-photo-34015718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    specs: ["2 Racquets", "Tournament Balls", "All-Court", "Graphite Frame"]
  },
  {
    id: 14,
    name: "Badminton Rackets & Shuttlecock Set",
    brand: "Yonex",
    category: "Rackets",
    price: 4999,
    oldPrice: 5999,
    description: "Two lightweight badminton rackets with isometric head shape and feather shuttlecocks. Carbon-graphite shaft for precision control and fast swings.",
    image: "https://images.pexels.com/photos/6307230/pexels-photo-6307230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    specs: ["2 Rackets", "Feather Shuttles", "Carbon Shaft", "Isometric"]
  },
  {
    id: 15,
    name: "Blue Badminton Racket Pair",
    brand: "Yonex",
    category: "Rackets",
    price: 3999,
    oldPrice: 4699,
    description: "Pair of blue badminton rackets with high-tension string bed. Aerodynamic frame design with enhanced sweet spot for recreational and club-level play.",
    image: "https://images.pexels.com/photos/6307231/pexels-photo-6307231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    specs: ["2 Rackets", "High Tension", "Aero Frame", "Nylon Shuttles"]
  },

  // ── RUNNING & FOOTWEAR ──
  {
    id: 16,
    name: "Neutral Road Running Shoes — Grey",
    brand: "Nike",
    category: "Running",
    price: 6999,
    oldPrice: 8499,
    description: "Lightweight grey road running shoes with responsive cushioning foam midsole and rubber outsole. Breathable mesh upper with reinforced heel counter.",
    image: "https://images.pexels.com/photos/1456733/pexels-photo-1456733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "sale",
    specs: ["Neutral", "Foam Midsole", "Mesh Upper", "Road"]
  },
  {
    id: 17,
    name: "Performance Running Shoes — Black/Green",
    brand: "Adidas",
    category: "Running",
    price: 7499,
    oldPrice: null,
    description: "Black and green performance running shoes with energy-return midsole technology. Continental rubber outsole for grip in wet and dry conditions.",
    image: "https://images.pexels.com/photos/28375818/pexels-photo-28375818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "new",
    specs: ["Energy Return", "Continental Rubber", "Knit Upper", "Boost"]
  },
  {
    id: 18,
    name: "Training Sneakers — White",
    brand: "Nike",
    category: "Running",
    price: 5499,
    oldPrice: 6499,
    description: "White training sneakers with flat, stable sole for gym workouts and light running. Synthetic leather upper with perforated zones for ventilation.",
    image: "https://images.pexels.com/photos/7880182/pexels-photo-7880182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    specs: ["Training", "Flat Sole", "Synthetic", "Ventilated"]
  },
  {
    id: 19,
    name: "Athletic Treadmill Shoes",
    brand: "Nike",
    category: "Running",
    price: 8999,
    oldPrice: 10999,
    description: "High-performance athletic shoes designed for treadmill and indoor training. Lightweight construction with Zoom Air cushioning and secure lockdown fit.",
    image: "https://images.pexels.com/photos/4065509/pexels-photo-4065509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "sale",
    specs: ["Zoom Air", "Indoor", "Lockdown Fit", "Lightweight"]
  },

  // ── GYM & WEIGHTS ──
  {
    id: 20,
    name: "Rubber-Coated Dumbbell Set",
    brand: "D-SPORTS",
    category: "Gym",
    price: 5999,
    oldPrice: 7499,
    description: "Set of rubber-coated hex dumbbells ranging from 2.5 kg to 15 kg. Non-roll hexagonal design with chrome knurled handles for secure grip.",
    image: "https://images.pexels.com/photos/7187871/pexels-photo-7187871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "sale",
    specs: ["2.5-15 kg", "Hex Design", "Rubber Coated", "Chrome Handle"]
  },
  {
    id: 21,
    name: "Cast Iron Kettlebell — 16 kg",
    brand: "D-SPORTS",
    category: "Gym",
    price: 2499,
    oldPrice: null,
    description: "Solid cast iron kettlebell with powder-coat finish for durability. Wide flat base for stability during renegade rows and floor-based exercises.",
    image: "https://images.pexels.com/photos/7671461/pexels-photo-7671461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    specs: ["16 kg", "Cast Iron", "Powder Coat", "Wide Handle"]
  },
  {
    id: 22,
    name: "Gym Kettlebells & Dumbbells Rack Set",
    brand: "D-SPORTS",
    category: "Gym",
    price: 14999,
    oldPrice: 18999,
    description: "Complete gym weight station with kettlebells and dumbbells on a commercial-grade rack. Rubber-encased weights with ergonomic grips for home or studio gyms.",
    image: "https://images.pexels.com/photos/8612034/pexels-photo-8612034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "hot",
    specs: ["Full Rack", "Multi-Weight", "Rubber Coated", "Commercial"]
  },
  {
    id: 23,
    name: "Pro Strength Training Weight Set",
    brand: "D-SPORTS",
    category: "Gym",
    price: 9999,
    oldPrice: 12499,
    description: "Professional strength training set with assorted kettlebells and weight plates. Ideal for functional training, CrossFit, and powerlifting programs.",
    image: "https://images.pexels.com/photos/7187881/pexels-photo-7187881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    specs: ["Assorted Weights", "Functional", "CrossFit Ready", "Iron Core"]
  },

  // ── EXTRA / ACCESSORIES ──
  {
    id: 24,
    name: "Pink Football Cleats — Limited Edition",
    brand: "Nike",
    category: "Football",
    price: 9999,
    oldPrice: 12999,
    description: "Limited-edition bright pink football cleats with Champions League ball. Flyknit upper with dynamic fit collar for speed-focused players.",
    image: "https://images.pexels.com/photos/27299906/pexels-photo-27299906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "hot",
    specs: ["Limited Edition", "Flyknit", "AG/FG", "Speed"]
  },

  // ── NEW: CRICKET (previously-unused verified photography) ──
  {
    id: 25,
    name: "Wicket-Keeping Gloves & Pads Combo",
    brand: "SG",
    category: "Cricket",
    price: 6499,
    oldPrice: 7999,
    description: "Full wicket-keeping combo with padded gloves and lightweight leg guards. Reinforced palm cushioning absorbs high-pace deliveries behind the stumps.",
    image: "https://images.pexels.com/photos/35801175/pexels-photo-35801175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "new",
    specs: ["Keeping Gloves", "Leg Guards", "Padded Palm", "Match Grade"]
  },
  {
    id: 26,
    name: "Test-Match Grade Cricket Ball — SG",
    brand: "SG",
    category: "Cricket",
    price: 2399,
    oldPrice: null,
    description: "Premium four-piece red leather cricket ball built for Test-match durability. Deep, even seam for consistent swing across long spells.",
    image: "https://images.pexels.com/photos/5519470/pexels-photo-5519470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    specs: ["156g", "4-Piece", "Deep Seam", "Test Grade"]
  },
  {
    id: 27,
    name: "Kookaburra Kahuna Batting Practice Set",
    brand: "Kookaburra",
    category: "Cricket",
    price: 10999,
    oldPrice: 13499,
    description: "Match-simulation batting practice set for drive and footwork drills, as used in pre-season nets. Includes bat, ball feeder cones, and stance markers.",
    image: "https://images.pexels.com/photos/29463867/pexels-photo-29463867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "hot",
    specs: ["Nets Practice", "Bat Included", "Footwork Drills", "Coach Kit"]
  },

  // ── NEW: RACKET SPORTS (previously-unused verified photography) ──
  {
    id: 28,
    name: "Babolat Pure Drive Tennis Racquet",
    brand: "Babolat",
    category: "Rackets",
    price: 15499,
    oldPrice: 17999,
    description: "Tour-level Babolat frame with FSI Power technology for a blend of pace and control. 100 sq-in head with 16x19 open string pattern for extra spin.",
    image: "https://images.pexels.com/photos/32390768/pexels-photo-32390768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "sale",
    specs: ["300g", "100 sq in", "16x19", "FSI Power"]
  },

  // ── NEW: SAME-SKU VARIANTS (identical, verified brand photography) ──
  {
    id: 29,
    name: "Match-Grade Soccer Ball — Pack of 2",
    brand: "Adidas",
    category: "Football",
    price: 8499,
    oldPrice: 10999,
    description: "Two official size-5 match footballs with thermal-bonded panels, packed together for club and academy training sessions.",
    image: "https://images.pexels.com/photos/28222529/pexels-photo-28222529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "sale",
    specs: ["2 Balls", "Size 5", "Thermal-bonded", "FIFA Approved"]
  },
  {
    id: 30,
    name: "English Willow Cricket Bat — Player Edition",
    brand: "SS Ton",
    category: "Cricket",
    price: 17999,
    oldPrice: 21999,
    description: "Player-edition upgrade on our Grade-A willow bat with a lower swell and bigger edges for power hitters. Hand-selected 10+ straight grains.",
    image: "https://images.pexels.com/photos/35825599/pexels-photo-35825599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "hot",
    specs: ["English Willow", "Player Edition", "10+ Grains", "Big Edges"]
  },
  {
    id: 31,
    name: "Pro Tennis Racquet — 285g Tour Weight",
    brand: "Wilson",
    category: "Rackets",
    price: 12999,
    oldPrice: 14999,
    description: "Lighter tour-weight build of our 100 sq-in frame for faster racquet-head speed. Graphite composite with the same 16x19 control-oriented pattern.",
    image: "https://images.pexels.com/photos/5741292/pexels-photo-5741292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    specs: ["285g", "100 sq in", "16x19", "Graphite"]
  },
  {
    id: 32,
    name: "Badminton Rackets & Shuttlecock Set — Pro Tension",
    brand: "Yonex",
    category: "Rackets",
    price: 5999,
    oldPrice: 6999,
    description: "Higher-tension stringing of our two-racquet isometric set for advanced club players who want a crisper, faster response off the string bed.",
    image: "https://images.pexels.com/photos/6307230/pexels-photo-6307230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "new",
    specs: ["2 Rackets", "Pro Tension", "Carbon Shaft", "Feather Shuttles"]
  },
  {
    id: 33,
    name: "Indoor/Outdoor Composite Basketball — Size 6",
    brand: "Spalding",
    category: "Basketball",
    price: 3299,
    oldPrice: 3999,
    description: "Women's and youth regulation size-6 composite basketball with the same deep-channel grip as our size-7 model, for indoor and outdoor courts.",
    image: "https://images.pexels.com/photos/19932843/pexels-photo-19932843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    specs: ["Size 6", "Composite Leather", "Deep Channel", "Indoor/Outdoor"]
  },
  {
    id: 34,
    name: "Rubber-Coated Dumbbell Set — 20kg Pair",
    brand: "D-SPORTS",
    category: "Gym",
    price: 8499,
    oldPrice: 9999,
    description: "Heavier 20 kg-pair addition to our rubber-coated hex dumbbell range, same non-roll hexagonal design with chrome knurled handles.",
    image: "https://images.pexels.com/photos/7187871/pexels-photo-7187871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "sale",
    specs: ["20 kg Pair", "Hex Design", "Rubber Coated", "Chrome Handle"]
  },
  {
    id: 35,
    name: "Neutral Road Running Shoes — Wide Fit",
    brand: "Nike",
    category: "Running",
    price: 7299,
    oldPrice: 8799,
    description: "Wide-fit version of our neutral road runner for extra forefoot room, same responsive foam midsole and breathable mesh upper.",
    image: "https://images.pexels.com/photos/1456733/pexels-photo-1456733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    specs: ["Wide Fit", "Foam Midsole", "Mesh Upper", "Road"]
  }
];

// ──────────────────────────────────────────────────
// 2.  GALLERY IMAGES (Stadium / Action)
// ──────────────────────────────────────────────────
const GALLERY_IMAGES = [
  { url: "https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", caption: "Football Stadium — Live Match Atmosphere" },
  { url: "https://images.pexels.com/photos/36230651/pexels-photo-36230651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", caption: "Night Cricket at Narendra Modi Stadium" },
  { url: "https://images.pexels.com/photos/31177171/pexels-photo-31177171.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", caption: "Basketball Game — Intense Court Action" },
  { url: "https://images.pexels.com/photos/15362139/pexels-photo-15362139.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", caption: "Packed Stadium Under Floodlights" },
  { url: "https://images.pexels.com/photos/29463867/pexels-photo-29463867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", caption: "Cricket Batsman — Powerful Drive Shot" },
  { url: "https://images.pexels.com/photos/32390768/pexels-photo-32390768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", caption: "Tennis Racket — Close-up Detail" },
  { url: "https://images.pexels.com/photos/35801175/pexels-photo-35801175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", caption: "Cricket Player in Full Protective Gear" },
  { url: "https://images.pexels.com/photos/5519470/pexels-photo-5519470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", caption: "Red Cricket Ball — Dramatic Lighting" }
];

// ──────────────────────────────────────────────────
// 3.  ANALYTICS ENGINE — Silent Background Clickstream
// ──────────────────────────────────────────────────
// ──────────────────────────────────────────────────
// 3.  ANALYTICS ENGINE — Background Clickstream + Google Sheets Sync
//
//     Real interaction data only. Persisted to localStorage so it
//     survives reloads, and (optionally) synced to a Google Sheet so
//     the site owner can see real visitor activity centrally — not
//     just trapped in each visitor's own browser.
//
//     SETUP: deploy the companion Apps Script (see google-apps-script.gs)
//     as a Web App, then paste the deployment URL into CONFIG below.
//     Leave it blank to log locally only (CSV export still works).
//
//     NOTE ON PRIVACY: this engine never captures or transmits
//     password values — only that a login/registration event
//     happened (start / submit / error). See handleLogin/handleRegister.
// ──────────────────────────────────────────────────
const CONFIG = {
  GOOGLE_SHEET_WEBHOOK_URL: "", // paste your deployed Apps Script /exec URL here
  SYNC_INTERVAL_MS: 8000,
  MAX_STORED_LOGS: 10000
};

const AnalyticsEngine = (() => {
  let logs = [];
  let syncQueue = [];
  let sessionStartTime = Date.now();
  let pageStartTime = Date.now();
  let currentPage = "home";
  const userId = getOrCreateUserId();
  const sessionId = "S-" + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 5).toUpperCase();

  // ── Persistent, returning-visitor-aware User ID ──
  // Stored once per browser so repeat visits are recognizable as the
  // same visitor (supports "returning users" / retention metrics).
  function getOrCreateUserId() {
    try {
      let id = localStorage.getItem("dsports_user_id");
      if (!id) {
        id = "U-" + Math.random().toString(36).substring(2, 8).toUpperCase();
        localStorage.setItem("dsports_user_id", id);
      }
      return id;
    } catch (e) {
      return "U-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    }
  }

  function getDevice() {
    const w = window.innerWidth;
    if (w <= 480) return "Mobile";
    if (w <= 1024) return "Tablet";
    return "Desktop";
  }

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

  // ── Local persistence ──
  function loadStoredLogs() {
    try {
      const raw = localStorage.getItem("dsports_clickstream_logs");
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }
  function persistLogs() {
    try {
      const trimmed = logs.length > CONFIG.MAX_STORED_LOGS ? logs.slice(logs.length - CONFIG.MAX_STORED_LOGS) : logs;
      localStorage.setItem("dsports_clickstream_logs", JSON.stringify(trimmed));
    } catch (e) { /* storage full — keep going in-memory */ }
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

  let scrollMilestones = new Set();
  function trackScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const pct = Math.round((scrollTop / docHeight) * 100);
    [25, 50, 75, 100].forEach(milestone => {
      if (pct >= milestone && !scrollMilestones.has(currentPage + "-" + milestone)) {
        scrollMilestones.add(currentPage + "-" + milestone);
        logEvent("scroll_depth", { Scroll_Depth: milestone + "%" });
      }
    });
  }

  let hoverStart = 0;
  function trackHoverStart() { hoverStart = Date.now(); }
  function trackHoverEnd(productName) {
    if (hoverStart) {
      const duration = ((Date.now() - hoverStart) / 1000).toFixed(2);
      logEvent("hover", { Mouse_Hover: productName + " (" + duration + "s)" });
      hoverStart = 0;
    }
  }

  function trackSearch(query) {
    if (query && query.trim().length > 0) logEvent("search", { Search_Query: query.trim() });
  }

  function trackFormEvent(formName, eventType) {
    logEvent("form_" + eventType, { Button_Click: formName });
  }

  // ── Real orders placed (products bought, quantities, totals) ──
  // Never includes payment card numbers or passwords — card fields in
  // this demo checkout are not read into this object at all.
  function logOrder(order) {
    try {
      const key = "dsports_orders";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push(order);
      localStorage.setItem(key, JSON.stringify(existing));
    } catch (e) { /* ignore storage errors */ }
    syncQueue.push(Object.assign({ sheet: "Orders" }, order));
  }

  // ── Real registered/logged-in visitors (name + email only) ──
  // Passwords are intentionally never passed into this function.
  function logUser(user) {
    try {
      const key = "dsports_users";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push(user);
      localStorage.setItem(key, JSON.stringify(existing));
    } catch (e) { /* ignore storage errors */ }
    syncQueue.push(Object.assign({ sheet: "Users" }, user));
  }

  // ── Google Sheets sync (optional — only runs if a webhook URL is set) ──
  function flushQueue(useBeacon) {
    if (!CONFIG.GOOGLE_SHEET_WEBHOOK_URL || syncQueue.length === 0) return;
    const batch = syncQueue.splice(0, syncQueue.length);
    const payload = JSON.stringify({ rows: batch });
    try {
      if (useBeacon && navigator.sendBeacon) {
        navigator.sendBeacon(CONFIG.GOOGLE_SHEET_WEBHOOK_URL, new Blob([payload], { type: "text/plain;charset=UTF-8" }));
      } else {
        fetch(CONFIG.GOOGLE_SHEET_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors", // Apps Script Web Apps don't return CORS headers; we don't need to read the response
          headers: { "Content-Type": "text/plain;charset=UTF-8" },
          body: payload
        });
      }
    } catch (e) { /* offline or blocked — data still safe in localStorage */ }
  }

  function exportCSV() {
    const headers = [
      "User_ID", "Session_ID", "Timestamp", "Page_Visited", "Event_Type",
      "Click_Position", "Button_Click", "Mouse_Hover", "Scroll_Depth",
      "Search_Query", "Time_On_Page", "Session_Time", "Device", "Browser",
      "Screen_Resolution", "Referrer", "Language"
    ];
    let csv = headers.join(",") + "\n";
    logs.forEach(row => {
      csv += headers.map(h => {
        let val = (row[h] || "").toString();
        if (val.includes(",") || val.includes('"') || val.includes("\n")) {
          val = '"' + val.replace(/"/g, '""') + '"';
        }
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
    trackPageView("home");
    document.addEventListener("click", trackClick, true);
    document.addEventListener("contextmenu", trackRightClick, true);
    document.addEventListener("dblclick", trackDblClick, true);
    let scrollTimer;
    window.addEventListener("scroll", () => { clearTimeout(scrollTimer); scrollTimer = setTimeout(trackScroll, 150); }, { passive: true });
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "E") { e.preventDefault(); exportCSV(); }
    });
    // periodic + reliable-on-exit sync to Google Sheets
    setInterval(() => flushQueue(false), CONFIG.SYNC_INTERVAL_MS);
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flushQueue(true); });
    window.addEventListener("pagehide", () => flushQueue(true));
  }

  return {
    init, trackPageView, trackSearch, trackHoverStart, trackHoverEnd, trackFormEvent,
    logOrder, logUser, exportCSV,
    getLogCount: () => logs.length,
    getUserId: () => userId
  };
})();


// ──────────────────────────────────────────────────
// 4.  APPLICATION STATE & SPA ROUTER
// ──────────────────────────────────────────────────
const AppState = {
  cart: [],
  wishlist: [],
  currentCategory: "All",
  checkoutStep: 0,
  selectedPayment: "",
  orderId: ""
};

function navigateTo(hash) { window.location.hash = hash; }

function handleRoute() {
  const hash = window.location.hash.replace("#", "") || "home";
  document.querySelectorAll(".page-view").forEach(v => v.classList.remove("active"));
  const target = document.getElementById("view-" + hash);
  if (target) target.classList.add("active");
  else document.getElementById("view-home")?.classList.add("active");
  document.querySelectorAll(".main-nav-link").forEach(l => {
    l.classList.toggle("active", l.getAttribute("href") === "#" + hash);
  });
  AnalyticsEngine.trackPageView(hash);
  if (hash === "products") renderProducts();
  if (hash === "cart") renderCartPage();
  if (hash === "wishlist") renderWishlist();
  if (hash === "checkout") renderCheckout();
  if (hash === "gallery") renderGallery();
  window.scrollTo(0, 0);
}

// ──── Render Products ────
function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;
  const filtered = AppState.currentCategory === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === AppState.currentCategory);
  container.innerHTML = filtered.map(p => productCardHTML(p)).join("");
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
            <button class="wishlist-btn ${isWished ? 'active' : ''}" onclick="toggleWishlist(${p.id})" title="Wishlist">${SVG.heart}</button>
            <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  `;
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
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.category === AppState.currentCategory);
  });
}

function filterCategory(cat) { AppState.currentCategory = cat; renderProducts(); }

// ──── Product Detail Modal ────
function openProductDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const overlay = document.getElementById("product-detail-overlay");
  const isWished = AppState.wishlist.some(w => w.id === p.id);
  overlay.innerHTML = `
    <div class="product-detail-box" style="position:relative;">
      <button class="pd-close" onclick="closeProductDetail()">${SVG.close}</button>
      <img src="${p.image}" alt="${p.name}" class="pd-image">
      <div class="pd-body">
        <div class="card-brand">${p.brand}</div>
        <h2>${p.name}</h2>
        <p class="pd-desc">${p.description}</p>
        <div class="pd-specs">${p.specs.map(s => `<span>${s}</span>`).join("")}</div>
        <div class="pd-footer">
          <div class="card-price">\u20B9${p.price.toLocaleString("en-IN")} ${p.oldPrice ? '<span class="old-price">\u20B9' + p.oldPrice.toLocaleString("en-IN") + '</span>' : ''}</div>
          <div style="display:flex;gap:8px;">
            <button class="wishlist-btn ${isWished ? 'active' : ''}" onclick="toggleWishlist(${p.id})" title="Wishlist">${SVG.heart}</button>
            <button class="btn btn-primary" onclick="addToCart(${p.id}); closeProductDetail();">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  `;
  overlay.classList.add("open");
}

function closeProductDetail() { document.getElementById("product-detail-overlay")?.classList.remove("open"); }

// ──── Cart Functions ────
function addToCart(id) {
  const existing = AppState.cart.find(c => c.id === id);
  if (existing) { existing.qty++; }
  else { const p = PRODUCTS.find(x => x.id === id); if (p) AppState.cart.push({ ...p, qty: 1 }); }
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

function getCartSubtotal() { return AppState.cart.reduce((sum, c) => sum + c.price * c.qty, 0); }
function getCartTax() { return Math.round(getCartSubtotal() * 0.08); }
function getCartShipping() { const sub = getCartSubtotal(); if (sub === 0) return 0; return sub >= 5000 ? 0 : 299; }
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
  let rows = AppState.cart.map(c => `
    <tr>
      <td><div class="cart-product-cell"><img src="${c.image}" alt="${c.name}"><div class="cp-info"><h4>${c.name}</h4><p>${c.brand}</p></div></div></td>
      <td><span style="color:var(--gold);font-weight:700;">\u20B9${c.price.toLocaleString("en-IN")}</span></td>
      <td><div class="qty-control"><button onclick="updateCartQty(${c.id}, -1)">&minus;</button><span>${c.qty}</span><button onclick="updateCartQty(${c.id}, 1)">+</button></div></td>
      <td style="font-weight:700;">\u20B9${(c.price * c.qty).toLocaleString("en-IN")}</td>
      <td><button class="remove-btn" onclick="removeFromCart(${c.id})">${SVG.close}</button></td>
    </tr>`).join("");
  container.innerHTML = `
    <table class="cart-table"><thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Total</th><th></th></tr></thead><tbody>${rows}</tbody></table>
    <div class="cart-summary">
      <div class="summary-row"><span>Subtotal</span><span>\u20B9${getCartSubtotal().toLocaleString("en-IN")}</span></div>
      <div class="summary-row"><span>GST / Tax (8%)</span><span>\u20B9${getCartTax().toLocaleString("en-IN")}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${getCartShipping() === 0 ? 'FREE' : '\u20B9' + getCartShipping()}</span></div>
      <div class="summary-row total"><span>Total</span><span>\u20B9${getCartTotal().toLocaleString("en-IN")}</span></div>
      <button class="btn btn-primary" style="width:100%;margin-top:12px;" onclick="navigateTo('checkout')">Proceed to Checkout</button>
    </div>`;
}

// ──── Drawer Cart ────
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
    footer.innerHTML = '';
    return;
  }
  body.innerHTML = AppState.cart.map(c => `
    <div class="drawer-item">
      <img src="${c.image}" alt="${c.name}">
      <div class="drawer-item-info"><h4>${c.name}</h4><p>${c.brand} &middot; Qty: ${c.qty}</p><span class="di-price">\u20B9${(c.price * c.qty).toLocaleString("en-IN")}</span></div>
      <button class="remove-btn" onclick="removeFromCart(${c.id})" style="align-self:center;">${SVG.close}</button>
    </div>`).join("");
  footer.innerHTML = `
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

function updateWishlistBadge() {
  document.querySelectorAll(".wishlist-count").forEach(el => el.textContent = AppState.wishlist.length || "");
}

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
  container.innerHTML = `<div class="wishlist-grid">${AppState.wishlist.map(p => productCardHTML(p)).join("")}</div>`;
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
          <div class="payment-option ${AppState.selectedPayment === 'upi' ? 'selected' : ''}" onclick="selectPayment('upi')">
            <div class="pay-icon">${SVG.smartphone}</div><div class="pay-label">UPI / BHIM</div>
          </div>
          <div class="payment-option ${AppState.selectedPayment === 'card' ? 'selected' : ''}" onclick="selectPayment('card')">
            <div class="pay-icon">${SVG.cardPay}</div><div class="pay-label">Credit / Debit Card</div>
          </div>
          <div class="payment-option ${AppState.selectedPayment === 'demo' ? 'selected' : ''}" onclick="selectPayment('demo')">
            <div class="pay-icon">${SVG.bank}</div><div class="pay-label">Demo Pay</div>
          </div>
        </div>
        <div class="cart-summary" style="max-width:100%;margin:0;">
          <div class="summary-row"><span>Subtotal</span><span>\u20B9${getCartSubtotal().toLocaleString("en-IN")}</span></div>
          <div class="summary-row"><span>GST / Tax (8%)</span><span>\u20B9${getCartTax().toLocaleString("en-IN")}</span></div>
          <div class="summary-row"><span>Shipping</span><span>${getCartShipping() === 0 ? 'FREE' : '\u20B9' + getCartShipping()}</span></div>
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

function selectPayment(method) { AppState.selectedPayment = method; renderCheckout(); }

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

  // Record what was actually bought — real order data, no card/payment
  // secrets are read into this object.
  const order = {
    Order_ID: AppState.orderId,
    Timestamp: new Date().toISOString(),
    User_ID: AnalyticsEngine.getUserId(),
    Customer_Name: document.getElementById("ship-name")?.value || "",
    Phone: document.getElementById("ship-phone")?.value || "",
    Address: document.getElementById("ship-addr1")?.value || "",
    PIN_Code: document.getElementById("ship-pin")?.value || "",
    Payment_Method: AppState.selectedPayment,
    Items: AppState.cart.map(c => `${c.name} (${c.brand}) x${c.qty}`).join(" | "),
    Item_Count: AppState.cart.reduce((n, c) => n + c.qty, 0),
    Subtotal: getCartTotal(),
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
  if (!container) return;
  container.innerHTML = GALLERY_IMAGES.map(g => `
    <div class="gallery-item">
      <img src="${g.url}" alt="${g.caption}" loading="lazy">
      <div class="gallery-overlay"><span>${g.caption}</span></div>
    </div>`).join("");
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
      if (results.length === 0) {
        dropdown.innerHTML = '<div style="padding:16px;text-align:center;color:var(--text-muted);font-size:0.85rem;">No results found</div>';
      } else {
        dropdown.innerHTML = results.map(p => `
          <div class="search-item" onclick="navigateTo('products');AppState.currentCategory='${p.category}';renderProducts();document.getElementById('search-dropdown').classList.remove('active');document.getElementById('global-search').value='';">
            <img src="${p.image}" alt="${p.name}">
            <div class="search-item-info"><h4>${p.name}</h4><p>\u20B9${p.price.toLocaleString("en-IN")} &middot; ${p.brand}</p></div>
          </div>`).join("");
      }
      dropdown.classList.add("active");
    }, 250);
  });
  document.addEventListener("click", (e) => { if (!e.target.closest(".search-wrapper")) dropdown.classList.remove("active"); });
}

// ──── Login / Register Modal ────
// IMPORTANT: password fields below are read only long enough to check
// they're non-empty for this client-side demo. The value is never
// stored, logged, or included in any object passed to AnalyticsEngine.
function openLoginModal() { document.getElementById("login-modal")?.classList.add("open"); switchAuthTab("login"); }
function closeLoginModal() { document.getElementById("login-modal")?.classList.remove("open"); }

function switchAuthTab(which) {
  const loginTab = document.getElementById("auth-tab-login");
  const registerTab = document.getElementById("auth-tab-register");
  const loginForm = document.getElementById("login-form-panel");
  const registerForm = document.getElementById("register-form-panel");
  if (!loginTab || !registerTab || !loginForm || !registerForm) return;
  const isLogin = which === "login";
  loginTab.classList.toggle("active", isLogin);
  registerTab.classList.toggle("active", !isLogin);
  loginForm.style.display = isLogin ? "block" : "none";
  registerForm.style.display = isLogin ? "none" : "block";
  AnalyticsEngine.trackFormEvent(isLogin ? "Login Form" : "Register Form", "start");
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("login-email")?.value;
  const pass = document.getElementById("login-pass")?.value; // read locally only — never stored/logged
  if (!email || !pass) { showToast("Please enter email and password", "error"); AnalyticsEngine.trackFormEvent("Login Form", "error"); return; }
  AnalyticsEngine.trackFormEvent("Login Form", "submit");
  showToast("Welcome back! Logged in successfully.", "success");
  closeLoginModal();
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById("reg-name")?.value;
  const email = document.getElementById("reg-email")?.value;
  const pass = document.getElementById("reg-pass")?.value;           // never stored/logged
  const confirm = document.getElementById("reg-pass-confirm")?.value; // never stored/logged
  if (!name || !email || !pass || !confirm) { showToast("Please fill all fields", "error"); AnalyticsEngine.trackFormEvent("Register Form", "error"); return; }
  if (pass !== confirm) { showToast("Passwords don't match", "error"); AnalyticsEngine.trackFormEvent("Register Form", "error"); return; }
  AnalyticsEngine.trackFormEvent("Register Form", "submit");
  // Only name + email are recorded — the password itself is discarded here.
  AnalyticsEngine.logUser({
    User_ID: AnalyticsEngine.getUserId(),
    Timestamp: new Date().toISOString(),
    Name: name,
    Email: email
  });
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

// ──── Toast ────
function showToast(message, type = "") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast " + type;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// ──── FAQ Toggle ────
function toggleFaq(el) { el.closest(".faq-item")?.classList.toggle("open"); }

// ──── Home Page Featured Products ────
function renderFeaturedProducts() {
  const container = document.getElementById("featured-grid");
  if (!container) return;
  const featured = PRODUCTS.filter(p => p.badge === "sale" || p.badge === "hot" || p.badge === "new").slice(0, 8);
  container.innerHTML = featured.map(p => productCardHTML(p)).join("");
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
