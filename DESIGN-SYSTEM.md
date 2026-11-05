# DESIGN-SYSTEM.md — AirAware Visual Identity

## 1. Color Palette

- **Primary Background:** `#0F172A` (Deep Navy Charcoal)
- **Card Background:** `#1E293B` (Slate Dark Card)
- **Border / Subtle Lines:** `#334155` (Slate Gray)
- **Primary Accent / Positive:** `#14B8A6` (Fresh Teal)
- **Secondary Accent:** `#3B82F6` (Electric Blue)
- **Text Primary:** `#F8FAFC` (Off-white)
- **Text Secondary / Muted:** `#94A3B8` (Cool Muted Gray)

### AQI Brackets & Color Coding
- **Good (0 - 50):** `#10B981` (Emerald Green)
- **Satisfactory (51 - 100):** `#84CC16` (Lime Green)
- **Moderate (101 - 200):** `#F59E0B` (Warm Amber)
- **Poor (201 - 300):** `#F97316` (Orange)
- **Very Poor (301 - 400):** `#EF4444` (Coral Red)
- **Severe (401 - 500+):** `#881337` (Deep Burgundy)

## 2. Typography

- **Font Family:** `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif`
- **H1 (Hero Title):** `2.8rem (44.8px) / Bold 800 / Line Height 1.2`
- **H2 (Section Titles):** `1.8rem (28.8px) / Semi-Bold 700`
- **H3 (Card Headings):** `1.1rem (17.6px) / Semi-Bold 600`
- **Body Text:** `0.95rem (15.2px) / Regular 400`
- **Small / Meta Text:** `0.85rem (13.6px) / Regular 400`

## 3. UI Components Architecture

- **Navbar Header:** Glassmorphism blurred top bar with brand logo and status pill badge.
- **AQI Dashboard Card:** High-contrast display featuring big AQI numerical typography, progress gauge meter, and 4-column pollutant sub-cards.
- **Custom Dropdown Select:** Accessible inputs styled with clean focus borders.
- **Dynamic Advisory Cards:** Flexbox cards featuring category icons, titles, and localized recommendations.
- **Impact Calculator:** Interactive multi-select checkbox card list paired with a dynamic score counter (0-100).
- **Pledge Form:** Clean structured inputs with instant submission state toggle and summary generation.
