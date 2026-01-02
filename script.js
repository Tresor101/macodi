// Navbar toggle for mobile
console.log('Script loaded successfully');

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.alt-nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('nav-open');
            navToggle.classList.toggle('open');
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !expanded);
        });
    }
});

// Contact form submission (demo only)
document.addEventListener('DOMContentLoaded', function() {
    // Contact form handler
    const contactForm = document.querySelector('.contact-form');
    const formStatus = document.querySelector('.form-status');
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formStatus.textContent = 'Sending...';
            setTimeout(function() {
                formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
                contactForm.reset();
            }, 1200);
        });
    }
});

// Product details toggle

document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.details-toggle');
    toggles.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const details = btn.nextElementSibling;
            if (details) {
                const isOpen = details.style.display === 'block';
                details.style.display = isOpen ? 'none' : 'block';
                btn.textContent = isOpen ? 'View Details' : 'Hide Details';
            }
        });
    });
});

// Product details modal popup with JS content

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('product-modal');
    const modalBody = document.querySelector('.modal-body');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const detailButtons = document.querySelectorAll('.details-toggle');

    // Product details content (HTML strings)
    const productDetailsContent = [
        // Sulphuric Acid
        `<ul>
          <li><strong>Physical Characteristics:</strong>
            <ul>
              <li>Appearance: Clear, colorless liquid</li>
              <li>Purity: ≥ 98.0%</li>
              <li>Specific Gravity: 1.834 (g/cm³)</li>
              <li>Molecular Weight: 98.078 (g/mol)</li>
            </ul>
          </li>
          <li><strong>Chemical Properties:</strong>
            <ul>
              <li>Melting Point: 10.31°C</li>
              <li>Boiling Point: 337°C</li>
              <li>Solubility in Water: 100%</li>
              <li>Solubility: Miscible, Exothermic</li>
            </ul>
          </li>
          <li><strong>Chemical Analysis:</strong>
            <table>
              <thead>
                <tr><th>Test</th><th>Result</th><th>Limit</th></tr>
              </thead>
              <tbody>
                <tr><td>Assay (%)</td><td>98.4</td><td>Min 97.5</td></tr>
                <tr><td>Fe (ppm)</td><td>12</td><td>Max 30</td></tr>
                <tr><td>Cu (ppm)</td><td>&lt;0.6</td><td>Max 10</td></tr>
                <tr><td>Cl (ppm)</td><td>&lt;0.002</td><td>Max 0.1</td></tr>
                <tr><td>Density (g/ml)</td><td>1.83</td><td>-</td></tr>
                <tr><td>Mn (ppm)</td><td>0.2</td><td>Max 0.3</td></tr>
                <tr><td>As (ppm)</td><td>0.08</td><td>Max 3</td></tr>
                <tr><td>SO<sub>3</sub> (ppm)</td><td>0.24</td><td>Max 17</td></tr>
                <tr><td>Volatile Material (%)</td><td>&lt;0.01</td><td>Max 0.05</td></tr>
              </tbody>
            </table>
          </li>
        </ul>`,
        // Quick Lime
        `<ul>
          <li><strong>Chemical Analysis:</strong>
            <table>
              <thead>
                <tr><th>Items</th><th>Result</th></tr>
              </thead>
              <tbody>
                <tr><td>CaO</td><td>≥90%</td></tr>
                <tr><td>MgO</td><td>&lt;3.0%</td></tr>
                <tr><td>Fe<sub>2</sub>O<sub>3</sub></td><td>≤0.05%</td></tr>
                <tr><td>Al<sub>2</sub>O<sub>3</sub></td><td>≤0.2%</td></tr>
                <tr><td>SiO<sub>2</sub></td><td>&lt;0.68%</td></tr>
                <tr><td>S</td><td>&lt;0.05%</td></tr>
                <tr><td>C</td><td>≤1.5%</td></tr>
                <tr><td>L.O.I</td><td>≤6.0%</td></tr>
                <tr><td>Size</td><td>10 – 80 MM</td></tr>
                <tr><td>Color</td><td>Milky White</td></tr>
              </tbody>
            </table>
          </li>
        </ul>`,
        // Sub-Grades of Sulphur
        `<table>
          <tbody>
            <tr><td>Granular Sulphur (Pastilles, Globular)</td><td>Sulphur Blocks</td></tr>
            <tr><td>Lumps Sulphur</td><td>Sulphur Rolls</td></tr>
            <tr><td>Flakes Sulphur</td><td>Powder Sulphur 125 Mesh – 400 Mesh</td></tr>
          </tbody>
        </table>`,
        // Base Oils
        `<table>
          <tbody>
            <tr><td>Group I Base Oil</td></tr>
            <tr><td>Group II Base Oil</td></tr>
          </tbody>
        </table>`
    ];

    // Use data-details attribute for mapping
    detailButtons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const idx = parseInt(btn.getAttribute('data-details'), 10);
            if (modal && modalBody && !isNaN(idx)) {
                let html = productDetailsContent[idx] || '<div style="text-align:center;">No details available for this product.</div>';
                modalBody.innerHTML = html;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    function closeModal() {
        if (modal) modal.style.display = 'none';
        document.body.style.overflow = '';
        if (modalBody) modalBody.innerHTML = '';
    }
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
});
