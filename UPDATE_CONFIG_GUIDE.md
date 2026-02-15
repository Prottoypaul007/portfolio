# How to Update Your EmailJS Configuration File

## Overview
This guide will show you exactly where to find your EmailJS credentials and how to update your configuration file.

---

## What You Need to Gather

Before updating your configuration file, you'll need three pieces of information from EmailJS:

1. **Public Key** - From Account Settings
2. **Service ID** - From Email Services
3. **Template ID** - From Email Templates

---

## Step-by-Step Instructions

### STEP 1: Find Your Public Key

#### In EmailJS Dashboard:
1. Log in to https://dashboard.emailjs.com/
2. Click **"Account"** in the left sidebar
3. Click on the **"API Keys"** tab
4. You'll see your **Public Key** - it looks like this:
   ```
   abc123xyz456def789ghi012jkl345
   ```
5. **Copy this entire key** (click the copy icon next to it)

#### Where to Use It:
Open `assets/js/emailjs-config.js` and find this line at the top:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```

Replace `"YOUR_PUBLIC_KEY"` with your actual key:

```javascript
emailjs.init("abc123xyz456def789ghi012jkl345");
```

---

### STEP 2: Find Your Service ID

#### In EmailJS Dashboard:
1. Click **"Email Services"** in the left sidebar
2. You'll see your connected email service (Gmail, Outlook, etc.)
3. Click on your service to view details
4. Copy the **Service ID** - it looks like this:
   ```
   service_hgpdcwd
   ```

#### Where to Use It:
In `assets/js/emailjs-config.js`, find this line (around line 33):

```javascript
emailjs.send(
    'service_hgpdcwd', // Replace this with your Service ID
    'YOUR_TEMPLATE_ID',
    templateParams
)
```

Replace `'service_hgpdcwd'` with your actual Service ID:

```javascript
emailjs.send(
    'service_abc123xyz456',
    'YOUR_TEMPLATE_ID',
    templateParams
)
```

---

### STEP 3: Find Your Template ID

#### In EmailJS Dashboard:
1. Click **"Email Templates"** in the left sidebar
2. Click on your email template (e.g., "Portfolio Contact Form")
3. At the top of the template editor, you'll see your **Template ID** - it looks like:
   ```
   template_abc123xyz456
   ```
4. **Copy this Template ID**

#### Where to Use It:
In `assets/js/emailjs-config.js`, replace `'YOUR_TEMPLATE_ID'` with your actual ID:

```javascript
emailjs.send(
    'service_abc123xyz456',
    'template_abc123xyz456',  // Replace with your actual Template ID
    templateParams
)
```

---

## Complete Updated Configuration File

Here's what your complete `assets/js/emailjs-config.js` should look like after updating:

```javascript
// Initialize EmailJS
// Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
// Get your keys from: https://dashboard.emailjs.com/admin

(function() {
    // Initialize EmailJS with your public key
    emailjs.init("abc123xyz456def789ghi012jkl345"); // ✅ YOUR PUBLIC KEY

    // Get the contact form
    const contactForm = document.getElementById('contact_form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const templateParams = {
                to_email: 'prottoypaul7@gmail.com', // Your email address
                user_name: document.getElementById('name').value,
                user_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Disable submit button to prevent multiple submissions
            const submitBtn = document.getElementById('submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Send email using EmailJS
            emailjs.send(
                'service_hgpdcwd',           // ✅ YOUR SERVICE ID
                'template_abc123xyz456',     // ✅ YOUR TEMPLATE ID
                templateParams
            ).then(function(response) {
                console.log('Email sent successfully!', response);
                
                // Show success message
                alert('Message sent successfully! Thank you for contacting me.');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }, function(error) {
                console.error('Failed to send email:', error);
                alert('Failed to send message. Please try again or contact me directly at prottoypaul7@gmail.com');
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            });
        });
    }
})();
```

---

## Verification Checklist

After updating your configuration file, verify these three things:

- [ ] **Line 6** - Public Key is updated (not "YOUR_PUBLIC_KEY")
- [ ] **Line 33** - Service ID is updated (should start with "service_")
- [ ] **Line 34** - Template ID is updated (should start with "template_")

---

## Visual Guide: Finding Each Credential

### Finding Public Key
```
EmailJS Dashboard
├── Account (left sidebar)
│   ├── API Keys (tab)
│   └── Public Key ← COPY THIS
```

### Finding Service ID
```
EmailJS Dashboard
├── Email Services (left sidebar)
│   ├── [Your Service Name]
│   └── Service ID ← COPY THIS
```

### Finding Template ID
```
EmailJS Dashboard
├── Email Templates (left sidebar)
│   ├── [Your Template Name]
│   └── Template ID (at top) ← COPY THIS
```

---

## Quick Copy-Paste Reference

When you're ready to update, follow this format:

**Step 1 - Public Key:**
```javascript
emailjs.init("PASTE_YOUR_PUBLIC_KEY_HERE");
```

**Step 2 - Service ID:**
```javascript
emailjs.send(
    'PASTE_YOUR_SERVICE_ID_HERE',
    'template_...',
    templateParams
)
```

**Step 3 - Template ID:**
```javascript
emailjs.send(
    'service_...',
    'PASTE_YOUR_TEMPLATE_ID_HERE',
    templateParams
)
```

---

## Testing After Update

Once you've updated all three values:

1. **Save the file** (Ctrl+S)
2. **Refresh your website** (F5 or Ctrl+R)
3. **Open Contact Me section**
4. **Fill in the form** with test data
5. **Click Submit**
6. **Check for success message**
7. **Verify email arrived** in your inbox

---

## Troubleshooting

### "Service ID is invalid" Error
- ❌ Did you copy the entire Service ID?
- ❌ Did you include quotes around it?
- ✅ Make sure it's formatted like: `'service_abc123xyz'`

### "Template ID is invalid" Error
- ❌ Did you copy the entire Template ID?
- ❌ Did you include quotes around it?
- ✅ Make sure it's formatted like: `'template_abc123xyz'`

### Email not sending but no error
- ❌ Check browser console (F12 → Console)
- ✅ Verify all three IDs are correct
- ✅ Ensure email service is active in EmailJS dashboard

### Browser shows console error
- ✅ Copy the full error message
- ✅ Check that all IDs are in quotes: `'service_...'`
- ✅ Check there are no extra spaces: `'service_abc123'` (not `'service_abc123 '`)

---

## Security Reminder

⚠️ **DO NOT share your credentials online:**
- ✅ Public Key = Safe to share (it's in the frontend code)
- ❌ Private Key = Never share (keep in EmailJS dashboard only)
- ❌ Don't commit credentials to public GitHub repositories

---

## Example Values Reference

Here's what valid IDs look like:

| Type | Example | Location |
|------|---------|----------|
| Public Key | `abc123xyz456def789ghi012jkl345` | Account → API Keys |
| Service ID | `service_hgpdcwd` | Email Services |
| Template ID | `template_abc123xyz456` | Email Templates |

---

## Still Need Help?

1. Review the main setup guide: `EMAILJS_SETUP_GUIDE.md`
2. Check EmailJS documentation: https://www.emailjs.com/docs/
3. Verify your email service is connected in the dashboard
4. Test sending a test email directly from EmailJS dashboard

