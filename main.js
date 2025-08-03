// Load header and footer
fetch('header.html')
  .then(res => res.text())
  .then(data => document.getElementById('header-placeholder').innerHTML = data);

fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  });

// Load page sections
const sections = [
  { id: 'hero-section', file: 'sections/hero.html' },
  { id: 'about-section', file: 'sections/about.html' },
  { id: 'events-section', file: 'sections/events.html' },
  { id: 'news-section', file: 'sections/news.html' },
  { id: 'gallery-section', file: 'sections/gallery.html' },
  { id: 'contact-section', file: 'sections/contact.html' }
];

sections.forEach(section => {
  fetch(section.file)
    .then(res => res.text())
    .then(data => document.getElementById(section.id).innerHTML = data);
});
