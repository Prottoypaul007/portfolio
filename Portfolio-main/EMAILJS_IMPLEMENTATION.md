# EmailJS Setup Guide for Your Portfolio

## What is EmailJS?
EmailJS is a service that allows you to send emails directly from your JavaScript code without requiring a backend server. It's perfect for contact forms!

## Setup Steps

### 1. Create an EmailJS Account
- Go to https://www.emailjs.com/
- Click "Sign Up Free"
- Create an account and verify your email

### 2. Get Your Public Key
- After logging in, go to **Account** (top right menu)
- Copy your **Public Key** (you'll need this)
- It should look something like: `abc123xyz789`

### 3. Create an Email Service
- In the dashboard, go to **Email Services** (left sidebar)
- Click **Add Service**
- Choose "Gmail" (or your preferred email provider)
- Click **Connect Account**
- Sign in with your Gmail account
- Authorize EmailJS to send emails
- Copy the **Service ID** (looks like: `service_abc123xyz`)

### 4. Create an Email Template
- Go to **Email Templates** (left sidebar)
- Click **Create New Template**
- Name it something like "Contact Form"
- In the template editor, set up your email body with these variables:

```
From: {{user_email}}
Name: {{user_name}}
Subject: {{subject}}

Message:
{{message}}
```

- Copy the **Template ID** (looks like: `template_abc123xyz`)
- Click **Save**

### 5. Update Your Portfolio Code
- Open `assets/js/emailjs-config.js`
- Replace `'YOUR_PUBLIC_KEY'` with your actual public key
- Replace `'YOUR_SERVICE_ID'` with your service ID
- Replace `'YOUR_TEMPLATE_ID'` with your template ID
- Replace `'prottoypaul7@gmail.com'` with your actual email address if different

Example:
```javascript
emailjs.init("abc123xyz789"); // Your public key

emailjs.send(
    'service_abc123xyz', // Your service ID
    'template_abc123xyz', // Your template ID
    templateParams
)
```

### 6. Test Your Form
- Open your portfolio in a browser
- Scroll to the "Contact Me" section
- Fill out the form and click Submit
- You should receive an email within seconds!

## Troubleshooting

### "Failed to send email" message
- Double-check your Public Key, Service ID, and Template ID
- Make sure you've connected your email service (Gmail)
- Check the browser console (F12) for error messages

### Email not arriving
- Check your spam/junk folder
- Make sure your email service is active in EmailJS dashboard
- Verify your template is properly formatted

### Rate Limiting
- EmailJS free plan allows 200 emails/day
- For more, upgrade your plan

## Security Notes
- Your Public Key is public (it's in your JavaScript code), so it's safe to share
- Never put your Secret Key in your code
- EmailJS handles security on their servers

## Template Variables Reference
The following variables are available in your form:
- `{{user_name}}` - Visitor's name
- `{{user_email}}` - Visitor's email
- `{{subject}}` - Subject line
- `{{message}}` - Message content
- `{{to_email}}` - Your email (set in code)

## Additional Help
- EmailJS Docs: https://www.emailjs.com/docs/
- Email Templates Guide: https://www.emailjs.com/docs/user-guide/manage-templates/
- JavaScript API: https://www.emailjs.com/docs/sdk/send/