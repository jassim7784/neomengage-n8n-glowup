

## Multi-Part Update Plan

This plan covers 5 changes to improve the website's navigation, statistics, and content.

---

### Summary of Changes

| # | Request | File(s) to Modify |
|---|---------|-------------------|
| 1 | Remove "View Pricing" button, centralize "Get Started Today" | `ServicesSection.tsx`, `ProductsSection.tsx` |
| 2 | Update stats with centralized layout | `StatsSection.tsx` (new design), `HeroSection.tsx` |
| 3 | Update second address to UAE | `Footer.tsx` |
| 4 | Add "Get Started" button to navbar | `Header.tsx` |
| 5 | Rename RCS in navigation | `Header.tsx` |

---

### Part 1: Remove Pricing Buttons & Centralize CTA

**ServicesSection.tsx Changes:**
- Keep existing "Explore All Services" button centered at bottom (already centralized)
- No pricing buttons to remove in this section

**ProductsSection.tsx Changes:**
- Remove individual "Get Started" buttons from each product card (lines 108-114)
- Remove price display from each card (line 107)
- Keep only the bottom centralized CTA section with "Contact Sales Team" button
- Change button text to "Get Started Today" for consistency

---

### Part 2: Update Statistics (Centralized & Clear)

**New Stats Values:**
- Messages Sent: **15M+**
- Clients Served: **273+**
- Global Reach: **200+** (countries)
- Uptime: **99.9%**

**StatsSection.tsx - Complete Redesign:**
Replace current single-counter design with a 4-stat grid layout:

```text
┌─────────────────────────────────────────────────────────┐
│                    Our Impact in Numbers                │
│                                                         │
│   ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐
│   │   15M+    │ │   273+    │ │   200+    │ │  99.9%   │
│   │ Messages  │ │  Clients  │ │  Global   │ │  Uptime  │
│   │   Sent    │ │  Served   │ │   Reach   │ │          │
│   └───────────┘ └───────────┘ └───────────┘ └───────────┘
│                                                         │
│         All stats centralized and prominent             │
└─────────────────────────────────────────────────────────┘
```

- Create 4 animated counters side-by-side
- Large, bold numbers with gradient text
- Descriptive labels below each number
- Icons for each stat (MessageSquare, Users, Globe, Shield)

**HeroSection.tsx Changes:**
- Update the existing 3-stat row (lines 29-42) to match new values:
  - 99.9% Uptime ✓ (keep)
  - Change "100M+" to "15M+" Messages Sent
  - Change "Global" to "200+ Countries"

---

### Part 3: Update Second Address to UAE

**Footer.tsx Changes:**
Update lines 36-39 from placeholder text to:

```text
Before: "Second Address (Please provide your second address)"
After:  "United Arab Emirates"
```

---

### Part 4: Add "Get Started" Button to Navbar

**Header.tsx Changes:**

**Desktop Navigation:**
- Add "Get Started" button to the right side of the navbar
- Position it after the navigation menu items
- Use prominent button styling (gradient or primary variant)
- Link to `/contact` page

**Mobile Navigation:**
- Add "Get Started" button at the bottom of mobile menu
- Make it full-width and prominent

**Layout adjustment:**
- Logo remains on the left (already positioned)
- Navigation menu stays centered
- New "Get Started" button on the far right

```text
┌─────────────────────────────────────────────────────────┐
│  [LOGO]      Home | Services | Products | Blogs | Contact    [Get Started] │
│  ← Left                    Center                            Right →       │
└─────────────────────────────────────────────────────────┘
```

---

### Part 5: Rename Rich Communication Solution

**Header.tsx Changes:**

Update in 2 locations:
1. **Desktop menu** (line 176): "Rich Communication Solution" → "Rich Communication Solution (RCS)"
2. **Mobile menu** (line 291): "Rich Communication Solution" → "Rich Communication Solution (RCS)"

---

### Technical Implementation Details

**StatsSection.tsx - New Stats Array:**
```typescript
const stats = [
  { value: 15, suffix: "M+", label: "Messages Sent", icon: MessageSquare },
  { value: 273, suffix: "+", label: "Clients Served", icon: Users },
  { value: 200, suffix: "+", label: "Global Reach", icon: Globe },
  { value: 99.9, suffix: "%", label: "Uptime", icon: Shield }
];
```

**Header.tsx - Button Addition:**
```tsx
<Button asChild className="ml-auto">
  <a href="/contact">Get Started</a>
</Button>
```

---

### Visual Preview After Changes

**Navbar:**
- Logo (left) → Nav Links (center) → Get Started Button (right)

**Stats Section:**
- 4 large stat cards in a row, each with icon, number, and label
- Numbers animate on scroll into view

**Footer:**
- UK Address + UAE Address displayed

---

### Files Modified

| File | Changes |
|------|---------|
| `src/components/Header.tsx` | Add Get Started button, rename RCS |
| `src/components/Footer.tsx` | Update second address to UAE |
| `src/components/StatsSection.tsx` | Complete redesign with 4 stats |
| `src/components/HeroSection.tsx` | Update stat values |
| `src/components/ProductsSection.tsx` | Remove individual pricing, centralize CTA |

