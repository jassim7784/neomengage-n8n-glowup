

## A2P SMS Service: Remove Pricing Button & Centralize CTA

This is a simple update to the hero section button layout on the A2P SMS Service page.

---

### Current State (Lines 101-108)

```tsx
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button size="lg" ...>Get Started Today</Button>
  <Button variant="outline" ...>View Pricing</Button>  <!-- REMOVE THIS -->
</div>
```

Currently there are two buttons side-by-side:
- "Get Started Today" (primary)
- "View Pricing" (outline) ← To be removed

---

### Changes

**File:** `src/pages/services/A2PSMSService.tsx`

**Line 107:** Remove the "View Pricing" button entirely:
```tsx
// DELETE THIS LINE:
<Button variant="outline" size="lg" className="px-8 py-6 rounded-full" onClick={() => navigate('/contact')}>View Pricing</Button>
```

**Lines 101-108:** Simplify the container to just the single centered button:
```tsx
<div className="flex justify-center">
  <Button size="lg" className="px-8 py-6 rounded-full hover:shadow-neon transition-all group" onClick={() => navigate('/contact')}>
    <MessageSquare className="w-5 h-5 mr-2" />
    Get Started Today
    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
  </Button>
</div>
```

---

### Summary

| Change | Before | After |
|--------|--------|-------|
| Buttons | 2 buttons (Get Started + View Pricing) | 1 button (Get Started Today) |
| Layout | `flex-col sm:flex-row gap-4` | `flex justify-center` |
| Alignment | Side by side on desktop | Single centered button |

---

### File Modified

| File | Change |
|------|--------|
| `src/pages/services/A2PSMSService.tsx` | Remove View Pricing button, centralize Get Started Today |

