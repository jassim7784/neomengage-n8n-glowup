

## Update Services Section: Add All Solutions & Products

Currently the Services section on the homepage shows 8 cards (mostly products). The user wants it to include all items from both the **Services** and **Products** navigation menus, each linking to their respective pages.

---

### Items to Display

**Services (5 items):**

| Title | Icon | Link |
|-------|------|------|
| A2P SMS Service | MessageSquare | `/services/a2p-sms` |
| Bulk SMS Marketing Enterprise | Send | `/services/bulk-sms-marketing` |
| SMS API Integration | Code2 | `/services/sms-api-integration` |
| CPaaS/Omnichannel | Layers | `/services/cpaas-omnichannel` |
| Web Design & Development | Globe | `/services/web-design-development` |

**Products (7 items):**

| Title | Icon | Link |
|-------|------|------|
| SMS Solutions | MessagesSquare | `/products/sms-solutions` |
| WhatsApp Solutions | MessageCircle | `/products/whatsapp-solutions` |
| Voice Solutions | Phone | `/products/voice-solutions` |
| Email Solutions | Mail | `/products/email-solutions` |
| Chatbot Solutions | Bot | `/products/chatbot-solutions` |
| Rich Communication (RCS) | Sparkles | `/products/rcs-solutions` |
| VoIP Solutions | Headphones | `/products/voip-solutions` |

**Total: 12 cards** (currently 8)

---

### Changes

**File:** `src/components/ServicesSection.tsx`

1. **Update the heading** to "Our Solutions & Products" (instead of just "Our Services")
2. **Replace the `services` array** with the full 12 items (5 services + 7 products), each with appropriate icon, description, gradient, and link
3. **Adjust the grid** from `lg:grid-cols-4` to `lg:grid-cols-3` for better readability with 12 cards (4 rows of 3)
4. **Add new icon imports**: `Layers`, `MessagesSquare`, `MessageCircle`, `Phone`, `Sparkles`, `Headphones`
5. Each card's "Learn More" button already links via `<Link to={service.link}>` - this pattern stays the same

---

### Layout

```text
Row 1: [A2P SMS Service] [Bulk SMS Marketing] [SMS API Integration]
Row 2: [CPaaS/Omnichannel] [Web Design & Dev] [SMS Solutions]
Row 3: [WhatsApp Solutions] [Voice Solutions] [Email Solutions]
Row 4: [Chatbot Solutions] [RCS Solutions] [VoIP Solutions]
```

---

### Summary

| File | Changes |
|------|---------|
| `src/components/ServicesSection.tsx` | Replace 8 items with 12 (all services + products), update heading, adjust grid to 3 columns |

