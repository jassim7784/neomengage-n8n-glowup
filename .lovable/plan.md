

## Changes Overview

Four updates to the homepage and contact forms.

---

### 1. Stats Section: Change "15 M+" to "100 M+"

**File:** `src/components/StatsSection.tsx`

Update the first stat value from 15 to 100 and the counter animation accordingly.

---

### 2. Remove "Explore All Services" Button

**File:** `src/components/ServicesSection.tsx`

Remove the entire div block (lines 54-56) containing the "Explore All Services" button at the bottom of the services section.

---

### 3. "Learn More" Links to Respective Pages

**File:** `src/components/ServicesSection.tsx`

Add a `link` property to each service item mapping to its product page, then wrap the "Learn More" button in a `<Link>` from react-router-dom:

| Service | Route |
|---------|-------|
| SMS Solutions | `/products/sms-solutions` |
| WhatsApp Business API | `/products/whatsapp-solutions` |
| Voice Solutions | `/products/voice-solutions` |
| Email Solutions | `/products/email-solutions` |
| Chatbot Solutions | `/products/chatbot-solutions` |
| Rich Communication Services | `/products/rcs-solutions` |
| VoIP Solutions | `/products/voip-solutions` |
| API Integration | `/services/sms-api-integration` |

---

### 4. Country Code Dropdown: Show Country Name + Code (like screenshot)

**Files:** `src/components/EnquireSection.tsx`, `src/pages/Contact.tsx`

Currently the dropdown shows only `flag + code` (e.g., "🇬🇧 +44"). Update to show `flag + country name + code` in the dropdown items (e.g., "🇬🇧 United Kingdom +44"), matching the reference screenshot. The trigger will show the compact `flag + code` format, but the dropdown list will display the full country name for easier identification.

Changes:
- Update `SelectItem` children from `{country.flag} {country.code}` to `{country.flag} {country.country} {country.code}`
- Widen the dropdown content slightly for readability

---

### Summary

| File | Changes |
|------|---------|
| `src/components/StatsSection.tsx` | 15M to 100M |
| `src/components/ServicesSection.tsx` | Remove "Explore All Services" button, add page links to "Learn More" |
| `src/components/EnquireSection.tsx` | Show country name in dropdown items |
| `src/pages/Contact.tsx` | Show country name in dropdown items |

