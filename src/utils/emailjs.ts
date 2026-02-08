// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add your Gmail as an Email Service (get the Service ID)
// 3. Create email templates (get the Template IDs)
// 4. Get your Public Key from Account > API Keys
// 5. Replace the placeholder values below

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',        // Replace with your EmailJS public key
  SERVICE_ID: 'YOUR_SERVICE_ID',        // Replace with your EmailJS service ID

  // Template for Event Booking submissions (sent to you + auto-reply to client)
  EVENT_BOOKING_TEMPLATE: 'YOUR_EVENT_BOOKING_TEMPLATE_ID',

  // Template for Contact form submissions (sent to you + auto-reply to client)
  CONTACT_TEMPLATE: 'YOUR_CONTACT_TEMPLATE_ID',
};
