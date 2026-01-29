

## Navbar Alignment Fix

This plan will restructure the navbar to achieve perfect three-column alignment: **LOGO (left) | NAV BAR (center) | Get Started (right)**

---

### Current Issue

The current implementation uses:
- Absolute positioning with manual offset for the navigation menu
- `ml-auto` on the button which doesn't create true symmetry

This causes the nav items to appear off-center because the offset doesn't account for the button width.

---

### Solution: Flexbox Three-Column Layout

Replace the current layout with a true three-column flexbox structure where:
- Left column (Logo): Fixed width, left-aligned
- Center column (Nav): Flexible, truly centered
- Right column (Button): Fixed width, right-aligned

---

### Layout Diagram

```text
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  [LOGO]          Home | Services | Products | Blogs | Contact    [Get Started]
│                                                                  │
│  ◄─── flex-1 ───►  ◄────────── flex-1 (centered) ──────────►  ◄─── flex-1 ───►
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

### Technical Changes to Header.tsx

**Line 55 - Container div:**
Change from:
```tsx
<div className="flex items-center justify-between w-full relative">
```
To:
```tsx
<div className="flex items-center w-full">
```

**Lines 57-65 - Logo section:**
Wrap in a flex container with fixed width:
```tsx
<div className="flex-1 flex justify-start">
  <a href="/" className="flex items-center">
    <!-- Logo components -->
  </a>
</div>
```

**Lines 67-204 - Navigation Menu:**
- Remove `absolute left-[calc(50%+80px)] transform -translate-x-1/2`
- Wrap in a flex container that centers the content:
```tsx
<div className="hidden md:flex flex-1 justify-center">
  <NavigationMenu>
    <!-- Navigation items -->
  </NavigationMenu>
</div>
```

**Lines 206-209 - Get Started Button:**
Wrap in a flex container with fixed width:
```tsx
<div className="hidden md:flex flex-1 justify-end">
  <Button asChild className="bg-primary hover:bg-primary/90">
    <a href="/contact">Get Started</a>
  </Button>
</div>
```

---

### Summary of Changes

| Element | Before | After |
|---------|--------|-------|
| Container | `justify-between relative` | Simple flex row |
| Logo | Direct child, no wrapper | Wrapped in `flex-1 justify-start` |
| Navigation | `absolute` with offset | Wrapped in `flex-1 justify-center` |
| Button | `ml-auto` | Wrapped in `flex-1 justify-end` |

---

### File Modified

| File | Change |
|------|--------|
| `src/components/Header.tsx` | Restructure layout to three-column flexbox |

---

### Result

- Logo stays firmly on the left
- Navigation links are perfectly centered in the viewport
- "Get Started" button is aligned to the right
- Equal spacing creates visual balance

