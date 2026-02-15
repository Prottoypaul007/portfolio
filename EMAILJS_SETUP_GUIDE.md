# EmailJS Setup Guide for Portfolio Contact Form

## Overview
This guide will help you set up EmailJS to enable your portfolio contact form to send emails directly to your inbox without requiring a backend server.

---

## Step 1: Create an EmailJS Account

1. Visit **[https://www.emailjs.com/](https://www.emailjs.com/)**
2. Click **"Sign Up Free"** button
3. Choose your preferred signup method (Email, Google, or GitHub)
4. Verify your email address
5. Complete your profile setup

---

## Step 2: Get Your Public Key

1. Log in to your EmailJS dashboard
2. Click on **"Account"** in the left sidebar
3. Go to the **"API Keys"** tab
4. Copy your **Public Key** (starts with letters like `abc123...`)
5. **Update your config file:**
   - Open `assets/js/emailjs-config.js`
   - Replace `"YOUR_PUBLIC_KEY"` with your actual public key:
     ```javascript
     emailjs.init("YOUR_PUBLIC_KEY_HERE");
     ```

---

## Step 3: Create an Email Service

### Option A: Using Gmail (Recommended)

1. In your EmailJS dashboard, click **"Email Services"** in the left sidebar
2. Click **"Add Service"**
3. Select **"Gmail"** from the list
4. Click **"Connect Account"**
5. A Gmail login window will appear
6. Sign in with your Gmail account
7. Grant EmailJS permission to send emails
8. **Copy your Service ID** (you'll need this in Step 4)
9. Click **"Create Service"**

### Option B: Using Other Email Providers

1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add Service"**
3. Select your email provider (Outlook, Yahoo, SendGrid, etc.)
4. Follow the provider-specific authentication steps
5. Copy your **Service ID**

---

## Step 4: Create an Email Template

### How to Create a Template

1. In your EmailJS dashboard, click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Give your template a name (e.g., "Portfolio Contact Form")

### Configure Template Variables

Use these template variables to match your form:

```
{{to_email}}       - Recipient email address
{{user_name}}      - Sender's name
{{user_email}}     - Sender's email
{{subject}}        - Message subject
{{message}}        - Message body
```

### Example Email Template Content

**Subject:** 
```
New Contact Form Submission from {{user_name}}
```

**Email Body:**
```html
<h2>New Message from Your Portfolio</h2>

<p><strong>From:</strong> {{user_name}}</p>
<p><strong>Email:</strong> {{user_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<hr>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><small>This email was sent from your portfolio contact form.</small></p>
```

4. Click **"Save"**
5. **Copy your Template ID** (displayed at the top)

---

## Step 5: Update Your Configuration File

Open `assets/js/emailjs-config.js` and replace the TODO placeholders:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");  // Replace with your Public Key from Step 2

// Later in the file, find emailjs.send() and update:
emailjs.send(
    'service_YOUR_SERVICE_ID',   // Replace with your Service ID from Step 3
    'template_YOUR_TEMPLATE_ID',  // Replace with your Template ID from Step 4
    templateParams
)
```

### Example of Complete Configuration:

```javascript
(function() {
    emailjs.init("abc123xyz456def789");  // Your actual public key

    const contactForm = document.getElementById('contact_form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const templateParams = {
                to_email: 'prottoypaul7@gmail.com',
                user_name: document.getElementById('name').value,
                user_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            const submitBtn = document.getElementById('submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            emailjs.send(
                'service_hgpdcwd',        // Your service ID
                'template_abc123xyz',     // Your template ID
                templateParams
            ).then(function(response) {
                console.log('Success!', response);
                alert('Message sent successfully!');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }, function(error) {
                console.error('Error:', error);
                alert('Failed to send message. Please try again.');
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            });
        });
    }
})();
```

---

## Step 6: Test Your Contact Form

1. Save all changes to your files
2. Open your portfolio website in a browser
3. Scroll to the **"Contact Me"** section
4. Fill in the contact form with test data
5. Click **"Submit"**
6. You should see:
   - Button changes to "Sending..."
   - Success alert message
   - Email arrives in your inbox

---

## Troubleshooting

### Issue: "Service ID is invalid"
- ✅ Check that you copied the correct Service ID from Step 3
- ✅ Make sure it's in the correct format: `service_xxxxx`

### Issue: "Template ID is invalid"
- ✅ Verify Template ID is copied correctly from Step 4
- ✅ Template ID should look like: `template_xxxxx`

### Issue: "Public Key is invalid"
- ✅ Double-check your Public Key from Account → API Keys
- ✅ Make sure you didn't accidentally copy the Private Key

### Issue: Email not sending but no error message
- ✅ Check your browser console (F12 → Console tab)
- ✅ Ensure your email service is active in EmailJS dashboard
- ✅ Verify the email template is properly saved

### Issue: Emails going to spam folder
- ✅ This is normal for new services
- ✅ You can mark them as "Not Spam" in Gmail
- ✅ Consider using a custom email service (SendGrid) for better deliverability

---

## Important Security Notes

⚠️ **Your Public Key is safe to share** (it's used in the frontend)

⚠️ **Keep your Private Key secret** (never share or commit to GitHub)

⚠️ **Email limits:** Free EmailJS plan allows 200 emails/month

---

## Email Service Comparison

| Service | Free Limit | Setup Time | Reliability |
|---------|-----------|-----------|-------------|
| Gmail | Unlimited | 5 min | ★★★★★ |
| SendGrid | 100/day | 10 min | ★★★★★ |
| Mailgun | 5000/month | 10 min | ★★★★★ |
| AWS SES | 62,000/month | 15 min | ★★★★ |

---

## Next Steps

1. ✅ Create EmailJS account
2. ✅ Set up email service (Gmail recommended)
3. ✅ Create email template
4. ✅ Update configuration file
5. ✅ Test your contact form
6. ✅ Deploy your portfolio

---

## Additional Resources

- **EmailJS Documentation:** https://www.emailjs.com/docs/
- **EmailJS Dashboard:** https://dashboard.emailjs.com/
- **Template Variables Guide:** https://www.emailjs.com/docs/user-guide/variables/
- **Support Email:** support@emailjs.com

---

## Support

If you encounter any issues:
1. Check the browser console (F12) for error messages
2. Verify all IDs in `emailjs-config.js`
3. Test your email service directly in EmailJS dashboard
4. Review the [EmailJS Troubleshooting Guide](https://www.emailjs.com/docs/user-guide/troubleshooting/)
