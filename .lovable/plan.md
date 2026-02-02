

## Implementation Plan: Favicon, Country Codes, Locations & PHP Form

---

### 1. Update Favicon

**Action:** Copy the uploaded favicon image to the public folder and update the HTML reference.

**Files:**
- Copy `user-uploads://favicon.png` to `public/favicon.png`
- Update `index.html` to reference the new favicon

---

### 2. Comprehensive Country Code Selector

**Approach:** Replace the limited dropdown with a searchable input that includes all 200+ country codes worldwide. Users can either:
- Type to search/filter country codes
- Scroll through the complete list

**Files to modify:**
- `src/components/EnquireSection.tsx`
- `src/pages/Contact.tsx`

**New country codes list** (comprehensive - 240+ countries):
```tsx
const countryCodes = [
  { code: "+93", country: "Afghanistan", flag: "🇦🇫" },
  { code: "+355", country: "Albania", flag: "🇦🇱" },
  { code: "+213", country: "Algeria", flag: "🇩🇿" },
  // ... all countries A-Z
  { code: "+263", country: "Zimbabwe", flag: "🇿🇼" },
];
```

The Select component already supports scrolling through long lists, so this will work seamlessly.

---

### 3. Update Office Locations

**Current locations:**
1. UK Office (keep)
2. London (remove)
3. Singapore (remove)

**New locations:**
1. UK Office (keep as-is)
2. UAE Office (add)

**File:** `src/pages/Contact.tsx`

**Change the offices array:**
```tsx
const offices = [
  { city: "UK Office", address: "71 A Meadowlands, Downpatrick", details: "Co Down, BT30 6HG, UK" },
  { city: "UAE Office", address: "Business Bay, Dubai", details: "United Arab Emirates" }
];
```

The grid will automatically adjust to 2 columns on desktop.

---

### 4. PHP Contact Form

The `public/contact.php` file is already fully functional and well-written. It:
- Accepts JSON POST requests
- Validates and sanitizes all inputs
- Sends email to info@neomengage.com
- Returns JSON responses for toast notifications

**For Hostinger deployment:**
The PHP file will work once deployed to Hostinger. The form already submits to `/contact.php` which will be served by Hostinger's PHP server.

**No code changes needed** - the file is production-ready.

---

### Summary of Changes

| Task | File(s) | Action |
|------|---------|--------|
| Favicon | `public/favicon.png`, `index.html` | Copy image, update reference |
| Country codes | `EnquireSection.tsx`, `Contact.tsx` | Add comprehensive 240+ country list |
| Office locations | `Contact.tsx` | Replace London/Singapore with UAE |
| PHP form | No changes | Already working - deploy to Hostinger |

---

### Technical Notes

**Country codes implementation:**
- The Select component with ScrollArea handles large lists well
- Countries sorted alphabetically for easy finding
- Flag emojis provide visual identification

**Hostinger deployment:**
Once you upload the built files to Hostinger:
1. The `contact.php` file goes in the same directory as your HTML
2. PHP mail() function should work with Hostinger's default config
3. Forms will automatically POST to the PHP endpoint

