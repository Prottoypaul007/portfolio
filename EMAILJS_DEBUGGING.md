# EmailJS Email Not Sending - Debugging Guide

## 🔍 Step 1: Check Browser Console

1. **Open Developer Tools:** Press `F12`
2. **Go to Console Tab**
3. **Refresh the page** (Ctrl+R)
4. **Look for these messages:**

### ✅ Good Signs (You should see):
```
EmailJS Config Script Loading...
Initializing EmailJS...
EmailJS library loaded successfully
EmailJS initialized with public key
Contact Form: <form id="contact_form">...</form>
Submit Button: <button id="submit-btn">...</button>
Form and button found, adding event listener...
```

### ❌ Bad Signs (Errors you might see):
```
EmailJS library failed to load. Check your file path.
Contact form or submit button not found!
[EmailJS] Error sending email: ...
```

---

## 🔍 Step 2: Verify EmailJS Credentials

Your current credentials in `emailjs-config.js`:
- **Public Key:** `MLuUIBI0nW3hNObb-`
- **Service ID:** `service_vkvh8e1`
- **Template ID:** `template_acbjt1w`

### How to Verify These Are Correct:

1. **Go to EmailJS Dashboard:** https://dashboard.emailjs.com/
2. **Check Account → API Keys**
   - Is your Public Key `MLuUIBI0nW3hNObb-`?
   - ✅ If YES, it's correct
   - ❌ If NO, update `emailjs-config.js`

3. **Check Email Services**
   - Is your Service ID `service_vkvh8e1`?
   - ✅ If YES, it's correct
   - ❌ If NO, update it

4. **Check Email Templates**
   - Is your Template ID `template_acbjt1w`?
   - ✅ If YES, it's correct
   - ❌ If NO, update it

---

## 🔍 Step 3: Test Your EmailJS Service

Do this directly in EmailJS Dashboard:

1. Go to **Email Services** → Click your service
2. Click **"Test It"** button
3. Fill in test data
4. Check if test email arrives in your inbox

### If Test Email Works:
- Your EmailJS service is fine
- Problem is likely in your form setup

### If Test Email Fails:
- Your EmailJS service has an issue
- Check EmailJS status page: https://status.emailjs.com/

---

## 🔍 Step 4: Check Form HTML Structure

Your form should have these exact elements:

```html
<form id="contact_form">
    <input type="text" id="name" placeholder="Name*" required>
    <input type="email" id="email" placeholder="Email*" required>
    <input type="text" id="subject" placeholder="Subject">
    <textarea id="message" placeholder="Message" required></textarea>
    <button type="submit" id="submit-btn">submit</button>
</form>
```

**Critical Requirements:**
- ✅ Form ID must be `contact_form`
- ✅ Input IDs must be: `name`, `email`, `subject`, `message`
- ✅ Button ID must be `submit-btn`
- ✅ Button type must be `submit`

---

## 🔍 Step 5: Fill Out Form and Check Console

1. **Open the page** in browser
2. **Open Console** (F12)
3. **Fill in the contact form completely:**
   - Name: `Test User`
   - Email: `test@example.com`
   - Subject: `Test Subject`
   - Message: `This is a test message`
4. **Click Submit**
5. **Watch the Console for messages:**

### Expected Console Output:
```
Form submitted!
Form Data: {name: 'Test User', email: 'test@example.com', subject: 'Test Subject', message: 'This is a test message'}
Template Params: {...}
Sending email...
Email sent successfully! {status: 200, text: 'OK'}
```

### Common Error Messages:

#### Error 1: "Invalid Service ID"
```
EmailJS Error: Invalid Service ID
```
**Solution:** Update `service_vkvh8e1` to your correct Service ID from EmailJS Dashboard

#### Error 2: "Invalid Template ID"
```
EmailJS Error: Invalid Template ID
```
**Solution:** Update `template_acbjt1w` to your correct Template ID from EmailJS Dashboard

#### Error 3: "Invalid Public Key"
```
EmailJS Error: Invalid public key
```
**Solution:** Update `MLuUIBI0nW3hNObb-` to your correct Public Key from EmailJS Dashboard

#### Error 4: "Form Data is Invalid"
```
EmailJS Error: Form data is invalid
```
**Solution:** Check that all template variables match your template in EmailJS Dashboard

#### Error 5: "Bad Request - 400"
```
EmailJS Error: Bad Request (400)
```
**Solution:** Template variable names don't match your EmailJS template. Check:
- In your template, what variables are used? (e.g., `{{user_name}}`)
- In your config, are you sending those exact names? (e.g., `user_name: ...`)

---

## 🔍 Step 6: Check Network Tab

1. **Open Developer Tools** (F12)
2. **Go to Network tab**
3. **Fill form and click Submit**
4. **Look for a request to:** `api.emailjs.com`

### If You See the Request:
- ✅ Request was sent
- Check the response status:
  - **200** = Success ✅
  - **400** = Bad Request (check template variables)
  - **401** = Invalid credentials
  - **403** = Service not accessible

### If You DON'T See the Request:
- ❌ JavaScript error occurred before sending
- Check Console tab for red errors
- Verify form/button IDs match exactly

---

## 🔍 Step 7: Verify Template Variable Names

**Your JavaScript sends:**
```javascript
const templateParams = {
    user_name: name,
    user_email: email,
    email: email,
    subject: subject || "Portfolio Message",
    message: message
};
```

**Your EmailJS Template must use these exact variable names:**
```
{{user_name}}    ← Must match "user_name" in config
{{user_email}}   ← Must match "user_email" in config
{{email}}        ← Must match "email" in config
{{subject}}      ← Must match "subject" in config
{{message}}      ← Must match "message" in config
```

---

## 🚀 Quick Fix Checklist

```
☐ Console shows no errors
☐ "Form and button found, adding event listener..." appears
☐ Public Key is verified in EmailJS dashboard
☐ Service ID is verified in EmailJS dashboard
☐ Template ID is verified in EmailJS dashboard
☐ Template variables match config.js exactly
☐ Form has correct IDs (name, email, subject, message)
☐ Submit button has correct ID (submit-btn)
☐ Test email in EmailJS dashboard works
☐ Network request shows 200 status
```

---

## 💬 What to Tell Me to Help Debug

If it's still not working, share:

1. **Console Error Message** (exact text)
2. **Screenshot of EmailJS Dashboard** showing:
   - Your Public Key
   - Your Service ID
   - Your Template ID
3. **Status from Network Tab** (when sending email)
4. **Your Email Template** (what variables it uses)

---

## 📞 Additional Support

- **EmailJS Status:** https://status.emailjs.com/
- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Common Issues:** https://www.emailjs.com/docs/user-guide/troubleshooting/
