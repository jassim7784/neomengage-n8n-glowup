

## Add Country Code Selector to Contact Forms

This plan adds a country code dropdown selector to the phone input field in both the EnquireSection (homepage) and Contact page forms.

---

### Design

The phone field will be split into two parts:
- A dropdown selector for country code (with flag emoji and dial code)
- The phone number input field

```text
┌──────────────────────────────────────────────────────────┐
│  ┌─────────────────┐  ┌────────────────────────────────┐ │
│  │ 🇬🇧 +44      ▼ │  │ Phone Number*                  │ │
│  └─────────────────┘  └────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

---

### Country Codes List

A focused list of commonly used country codes:
- UK (+44) - Default
- USA (+1)
- UAE (+971)
- India (+91)
- Singapore (+65)
- Saudi Arabia (+966)
- Australia (+61)
- Germany (+49)
- France (+33)
- And more...

---

### Changes

**Files to modify:**
1. `src/components/EnquireSection.tsx`
2. `src/pages/Contact.tsx`

**For each file:**

1. **Import Select components:**
```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
```

2. **Add country codes data array:**
```tsx
const countryCodes = [
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
];
```

3. **Update form state** to include `countryCode`:
```tsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  countryCode: "+44",  // Default to UK
  phone: "",
  service: "",
  consent: false
});
```

4. **Update phone input row** to include select + input:
```tsx
<div className="flex gap-2">
  <Select 
    value={formData.countryCode} 
    onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
  >
    <SelectTrigger className="w-[120px] bg-background/50">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      {countryCodes.map((country) => (
        <SelectItem key={country.code} value={country.code}>
          {country.flag} {country.code}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
  <Input
    type="tel"
    placeholder="Phone*"
    value={formData.phone}
    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
    required
    className="flex-1 bg-background/50"
  />
</div>
```

5. **Update form submission** to combine country code with phone:
```tsx
body: JSON.stringify({
  ...formData,
  phone: `${formData.countryCode} ${formData.phone}`
})
```

6. **Update form reset** to include countryCode:
```tsx
setFormData({ name: "", email: "", countryCode: "+44", phone: "", service: "", consent: false });
```

---

### Summary

| File | Changes |
|------|---------|
| `src/components/EnquireSection.tsx` | Add country code selector, update state, modify submission |
| `src/pages/Contact.tsx` | Add country code selector, update state, modify submission |

---

### Result

- Users can select their country code from a dropdown with flag emojis
- UK (+44) is the default selection
- Phone number is submitted as `+44 1234567890` format
- Consistent design across both contact forms

