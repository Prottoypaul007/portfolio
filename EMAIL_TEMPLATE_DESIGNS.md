# EmailJS Email Template HTML Designs

## How to Use These Templates

1. Go to your **EmailJS Dashboard**
2. Click **"Email Templates"** (left sidebar)
3. Open or create a template
4. Copy one of the HTML designs below
5. Paste it into the **Email Body** section
6. Replace the template variables (e.g., `{{user_name}}`) with your own
7. Click **Save**

---

## Template 1: Modern Professional Design (Recommended)

### Subject Line:
```
New Contact Form Submission from {{user_name}}
```

### Email Body HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
        }
        .header p {
            margin: 8px 0 0 0;
            font-size: 14px;
            opacity: 0.9;
        }
        .content {
            padding: 30px;
        }
        .greeting {
            font-size: 16px;
            margin-bottom: 20px;
            color: #555;
        }
        .form-section {
            margin-bottom: 20px;
        }
        .form-field {
            margin-bottom: 18px;
            background-color: #f9f9f9;
            padding: 15px;
            border-left: 4px solid #667eea;
            border-radius: 4px;
        }
        .form-field label {
            font-weight: 600;
            color: #667eea;
            display: block;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 6px;
        }
        .form-field p {
            margin: 0;
            color: #333;
            word-break: break-word;
        }
        .message-box {
            background-color: #f9f9f9;
            padding: 15px;
            border-left: 4px solid #764ba2;
            border-radius: 4px;
            margin-top: 20px;
        }
        .message-box label {
            font-weight: 600;
            color: #764ba2;
            display: block;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }
        .message-box p {
            margin: 0;
            color: #333;
            line-height: 1.8;
            word-wrap: break-word;
            white-space: pre-wrap;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #666;
        }
        .button {
            display: inline-block;
            background-color: #667eea;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 20px;
            font-weight: 600;
        }
        .divider {
            height: 1px;
            background-color: #ddd;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 New Contact Form Submission</h1>
            <p>You have received a new message from your portfolio website</p>
        </div>

        <div class="content">
            <div class="greeting">
                <p>Hello,</p>
                <p>You have received a new message through your portfolio contact form. Here are the details:</p>
            </div>

            <div class="form-section">
                <div class="form-field">
                    <label>From (Name)</label>
                    <p>{{user_name}}</p>
                </div>

                <div class="form-field">
                    <label>Email Address</label>
                    <p>{{user_email}}</p>
                </div>

                <div class="form-field">
                    <label>Subject</label>
                    <p>{{subject}}</p>
                </div>

                <div class="message-box">
                    <label>Message</label>
                    <p>{{message}}</p>
                </div>
            </div>

            <div class="divider"></div>

            <p style="font-size: 14px; color: #666;">
                <strong>Quick Actions:</strong><br>
                You can reply directly to this email to respond to {{user_name}} at <strong>{{user_email}}</strong>
            </p>
        </div>

        <div class="footer">
            <p>This email was sent from your portfolio contact form.</p>
            <p>© 2024 Your Portfolio. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

---

## Template 2: Minimal Clean Design

### Subject Line:
```
New Message: {{subject}} - {{user_name}}
```

### Email Body HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .email-wrapper {
            background-color: white;
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
        }
        .info-row {
            margin: 15px 0;
            padding: 10px;
            background-color: #ecf0f1;
            border-radius: 3px;
        }
        .info-label {
            font-weight: bold;
            color: #2c3e50;
            font-size: 12px;
            text-transform: uppercase;
        }
        .info-value {
            margin-top: 5px;
            color: #555;
        }
        .message-section {
            background-color: #ecf0f1;
            padding: 15px;
            border-radius: 3px;
            margin: 20px 0;
            border-left: 4px solid #3498db;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #888;
            margin-top: 20px;
            border-top: 1px solid #ddd;
            padding-top: 10px;
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <h2>New Contact Form Message</h2>

        <div class="info-row">
            <div class="info-label">Name:</div>
            <div class="info-value">{{user_name}}</div>
        </div>

        <div class="info-row">
            <div class="info-label">Email:</div>
            <div class="info-value">{{user_email}}</div>
        </div>

        <div class="info-row">
            <div class="info-label">Subject:</div>
            <div class="info-value">{{subject}}</div>
        </div>

        <div class="message-section">
            <div class="info-label">Message:</div>
            <div class="info-value" style="margin-top: 10px; white-space: pre-wrap;">{{message}}</div>
        </div>

        <div class="footer">
            <p>This message was sent from your portfolio contact form.</p>
        </div>
    </div>
</body>
</html>
```

---

## Template 3: Corporate Business Design

### Subject Line:
```
Portfolio Contact: {{subject}}
```

### Email Body HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background-color: #e9ecef;
            color: #333;
        }
        .main-container {
            background-color: #e9ecef;
            padding: 20px;
        }
        .email-container {
            background-color: white;
            max-width: 600px;
            margin: 0 auto;
            border: 1px solid #dee2e6;
        }
        .header-section {
            background-color: #1a3a52;
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .header-section h1 {
            font-size: 24px;
            margin-bottom: 5px;
        }
        .header-section p {
            font-size: 14px;
            opacity: 0.9;
        }
        .body-section {
            padding: 30px;
        }
        .greeting {
            margin-bottom: 20px;
            font-size: 14px;
            color: #555;
        }
        .detail-block {
            margin: 15px 0;
            padding: 15px;
            background-color: #f8f9fa;
            border-left: 4px solid #1a3a52;
        }
        .detail-label {
            font-weight: bold;
            color: #1a3a52;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .detail-value {
            color: #333;
            line-height: 1.6;
            word-wrap: break-word;
        }
        .message-detail {
            margin: 25px 0;
            padding: 20px;
            background-color: #f8f9fa;
            border-left: 4px solid #495057;
        }
        .footer-section {
            background-color: #f8f9fa;
            padding: 20px 30px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #dee2e6;
        }
        .footer-section p {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="main-container">
        <div class="email-container">
            <div class="header-section">
                <h1>Contact Form Submission</h1>
                <p>New message received on your portfolio</p>
            </div>

            <div class="body-section">
                <div class="greeting">
                    <p>You have received a new message through your portfolio contact form.</p>
                </div>

                <div class="detail-block">
                    <div class="detail-label">Sender Name</div>
                    <div class="detail-value">{{user_name}}</div>
                </div>

                <div class="detail-block">
                    <div class="detail-label">Email Address</div>
                    <div class="detail-value">{{user_email}}</div>
                </div>

                <div class="detail-block">
                    <div class="detail-label">Subject</div>
                    <div class="detail-value">{{subject}}</div>
                </div>

                <div class="message-detail">
                    <div class="detail-label">Message Content</div>
                    <div class="detail-value" style="margin-top: 10px; white-space: pre-wrap;">{{message}}</div>
                </div>
            </div>

            <div class="footer-section">
                <p><strong>Reply Instructions:</strong> You can reply directly to this email to contact {{user_name}}</p>
                <p>© 2024 Your Portfolio Contact Form</p>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## Template 4: Colorful Creative Design

### Subject Line:
```
✨ New Message from {{user_name}}
```

### Email Body HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container {
            max-width: 550px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 26px;
            font-weight: 700;
        }
        .header p {
            margin: 10px 0 0 0;
            font-size: 14px;
            opacity: 0.95;
        }
        .content {
            padding: 35px 30px;
        }
        .field {
            margin-bottom: 20px;
        }
        .field-title {
            font-weight: 600;
            color: #667eea;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
            display: block;
        }
        .field-value {
            color: #333;
            font-size: 15px;
            padding: 10px 15px;
            background: #f5f7ff;
            border-radius: 6px;
            border-left: 3px solid #667eea;
        }
        .message-field .field-value {
            border-left: 3px solid #764ba2;
            white-space: pre-wrap;
            word-wrap: break-word;
            line-height: 1.6;
        }
        .divider {
            height: 2px;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            margin: 25px 0;
            border: none;
        }
        .cta-section {
            background: #f5f7ff;
            padding: 20px;
            border-radius: 6px;
            text-align: center;
            margin-top: 20px;
        }
        .cta-text {
            font-size: 13px;
            color: #666;
            margin: 0;
        }
        .footer {
            background: #f8f9fa;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e9ecef;
            font-size: 12px;
            color: #999;
        }
        .emoji {
            font-size: 20px;
            margin-right: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1><span class="emoji">💌</span>New Message!</h1>
            <p>You received a contact form submission</p>
        </div>

        <div class="content">
            <div class="field">
                <span class="field-title">👤 Sender Name</span>
                <div class="field-value">{{user_name}}</div>
            </div>

            <div class="field">
                <span class="field-title">📧 Email Address</span>
                <div class="field-value">{{user_email}}</div>
            </div>

            <div class="field">
                <span class="field-title">📌 Subject</span>
                <div class="field-value">{{subject}}</div>
            </div>

            <hr class="divider">

            <div class="field message-field">
                <span class="field-title">💬 Message</span>
                <div class="field-value">{{message}}</div>
            </div>

            <div class="cta-section">
                <p class="cta-text">💡 Reply directly to this email to respond to the sender</p>
            </div>
        </div>

        <div class="footer">
            <p>This email was sent from your portfolio contact form</p>
            <p>© 2024 Your Portfolio. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

---

## Template Variables Reference

All templates use these variables (must match your form):

| Variable | Purpose | Required |
|----------|---------|----------|
| `{{user_name}}` | Visitor's name | Yes |
| `{{user_email}}` | Visitor's email | Yes |
| `{{subject}}` | Message subject | No |
| `{{message}}` | Full message body | Yes |
| `{{to_email}}` | Your email address | Yes |

---

## How to Customize Colors

### For Template 1 (Modern Professional):
Find these color codes and replace them:
- `#667eea` = Primary Purple
- `#764ba2` = Secondary Purple
- `#f9f9f9` = Light Background

### For Template 3 (Corporate):
Find these color codes and replace them:
- `#1a3a52` = Dark Blue
- `#f8f9fa` = Light Gray
- `#495057` = Medium Gray

### For Template 4 (Creative):
Find these color codes and replace them:
- `#667eea` = Primary Purple
- `#764ba2` = Secondary Purple
- `#f5f7ff` = Light Purple

---

## Testing Your Template

After creating a template:

1. Click **"Test Email"** button in EmailJS
2. Enter sample data
3. Check your inbox for the test email
4. Verify formatting looks good
5. Make adjustments if needed

---

## Best Practices

✅ **Do:**
- Keep emails responsive (max-width: 600px)
- Use inline CSS (external stylesheets may not work)
- Include sender's email for easy replies
- Test on multiple email clients
- Keep file size under 100KB

❌ **Don't:**
- Use external image URLs (they may not load)
- Use complex JavaScript (won't work in emails)
- Use custom fonts (stick to web-safe fonts)
- Make emails wider than 600px
- Use very large images

---

## Troubleshooting Template Issues

### Email looks broken
- ✅ Check inline CSS syntax
- ✅ Ensure all tags are properly closed
- ✅ Test in different email clients

### Variables not showing
- ✅ Verify variable names are exactly correct
- ✅ Check they match your form input IDs
- ✅ Use exact format: `{{variable_name}}`

### Images not loading
- ✅ EmailJS blocks external images by default
- ✅ Use inline base64 images instead
- ✅ Or remove images and use emoji/text

---

## Additional Resources

- EmailJS Template Editor: https://dashboard.emailjs.com/
- HTML Email Best Practices: https://www.emailonacid.com/
- Responsive Email Guide: https://litmus.com/resources

