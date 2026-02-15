(function() {
    // Check if EmailJS loaded correctly
    if (typeof emailjs === 'undefined') {
        console.error("EmailJS library failed to load. Check your file path.");
        return;
    }

    emailjs.init("MLuUIBI0nW3hNObb-");

    const contactForm = document.getElementById('contact_form');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const templateParams = {
                user_name: document.getElementById('name').value,
                user_email: document.getElementById('email').value, // Matches 'From Name' in dashboard
                email: document.getElementById('email').value,      // Matches 'Reply To' in dashboard
                subject: document.getElementById('subject').value || "Portfolio Message",
                message: document.getElementById('message').value
            };
            
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            emailjs.send('service_vkvh8e1', 'template_acbjt1w', templateParams)
                .then(function() {
                    alert('Message sent successfully!');
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }, function(error) {
                    console.error('EmailJS Error:', error);
                    alert('Failed to send. Please try again later.');
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                });
        });
    }
})();