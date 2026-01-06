document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formAlert').textContent = 'Thank you for contacting us! We will get back to you soon.';
  document.getElementById('contactForm').reset();
});
