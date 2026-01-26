

## PHP Contact Form for Hostinger Hosting

This plan will create a PHP-based contact form solution that works perfectly with Hostinger shared hosting, sending emails directly to info@neomengage.com.

---

### What We're Building

```text
┌─────────────────────┐      ┌─────────────────────┐      ┌─────────────────────┐
│   React Frontend    │ ---> │    contact.php      │ ---> │ info@neomengage.com │
│   (Your Website)    │ POST │  (Hostinger Server) │ MAIL │   (Your Inbox)      │
└─────────────────────┘      └─────────────────────┘      └─────────────────────┘
```

---

### Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `public/contact.php` | Create | PHP script that handles email sending |
| `src/pages/Contact.tsx` | Modify | Update form to POST to PHP instead of Supabase |
| `src/components/EnquireSection.tsx` | Modify | Update form to POST to PHP instead of Supabase |

---

### Part 1: Create contact.php

**Location:** `public/contact.php`

This PHP file will:
- Accept POST requests from your React form
- Validate all required fields (name, email, phone)
- Sanitize inputs to prevent spam/injection attacks
- Send formatted email to info@neomengage.com
- Return JSON response (success or error)

**Security Features:**
- Input sanitization using `htmlspecialchars()` and `filter_var()`
- Email format validation
- Required field checks
- CORS headers for your domain only
- Prevents header injection attacks

**Email Format:**
```text
Subject: New Contact Form Submission - NeoMengage

From: John Doe
Email: john@example.com
Phone: +44 123456789

Service Inquiry:
Looking for bulk SMS services...

---
Submitted: 2026-01-26 14:30:00
```

---

### Part 2: Update React Components

**Changes to Contact.tsx and EnquireSection.tsx:**

1. Remove Supabase import (no longer needed for form)
2. Change `handleSubmit` function to:
   - POST form data to `/contact.php`
   - Use `FormData` or JSON body
   - Handle JSON response
   - Show success/error toast based on response

**New handleSubmit logic:**
```text
1. User clicks Submit
2. Validate consent checkbox (client-side)
3. POST to /contact.php with form data
4. PHP validates and sends email
5. PHP returns JSON: { success: true/false, message: "..." }
6. React shows toast notification
7. Reset form on success
```

---

### Part 3: Hostinger Deployment Instructions

**Step 1: Build Your React App**
```bash
npm run build
```

**Step 2: Upload Files to Hostinger**
```text
Hostinger File Manager Structure:
public_html/
├── index.html          (from dist/)
├── assets/             (from dist/)
├── contact.php         (NEW - email handler)
├── .htaccess           (for SPA routing)
└── [other dist files]
```

**Step 3: Create .htaccess for SPA Routing**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Don't rewrite contact.php - let PHP handle it
  RewriteRule ^contact\.php$ - [L]

  # SPA routing for React
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Step 4: Test the Form**
1. Visit your website
2. Fill out contact form
3. Check info@neomengage.com for the email
4. Verify success message appears

---

### Technical Details

**PHP contact.php Features:**

| Feature | Implementation |
|---------|----------------|
| Input Sanitization | `htmlspecialchars()`, `trim()` |
| Email Validation | `filter_var($email, FILTER_VALIDATE_EMAIL)` |
| Required Fields | Check if empty after sanitization |
| Anti-Spam | Basic field length limits, sanitization |
| Email Headers | Proper From, Reply-To, Content-Type |
| Response Format | JSON with success boolean and message |
| CORS | Headers for cross-origin requests |

**Form Field Mapping:**

| React Field | PHP Variable | Email Display |
|-------------|--------------|---------------|
| `name` | `$name` | "From: John Doe" |
| `email` | `$email` | "Email: john@example.com" |
| `phone` | `$phone` | "Phone: +44..." |
| `service` | `$service` | "Service Inquiry: ..." |
| `consent` | `$consent` | (Not shown in email) |

---

### Why This Works on Hostinger

1. **Hostinger supports PHP** - All shared hosting plans include PHP
2. **Built-in mail()** - PHP's mail function works with Hostinger's SMTP
3. **No external services** - No API keys or third-party accounts needed
4. **Same folder** - PHP and HTML files can live together in public_html

---

### Cost

**$0 additional cost** - Uses Hostinger's built-in email sending capability

---

### After Deployment Checklist

- [ ] Form submits without errors
- [ ] Email arrives at info@neomengage.com
- [ ] Success message displays in browser
- [ ] All form fields appear in email
- [ ] Consent validation works (error if unchecked)

