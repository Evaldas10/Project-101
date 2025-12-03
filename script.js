 document.querySelectorAll('.main-button, .button').forEach(btn => {
      btn.addEventListener('click', () => {
        const el = document.querySelector('.famous-places');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // AOS init (jei naudojamas)
    if (typeof AOS !== 'undefined') AOS.init();

   const modal = document.getElementById("modal");
const seeMoreButtons = document.querySelectorAll(".see-more");
const closeBtn = modal.querySelector(".close");
const modalSections = modal.querySelectorAll(".modal-section");

// Atidaryti modalą tik su pasirinkto miesto nuotraukomis
seeMoreButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const place = btn.closest('.places').querySelector('.text').textContent.toLowerCase();
    
    // Paslėpti visas sekcijas
    modalSections.forEach(section => {
      section.style.display = 'none';
    });

    // Rodyti tik pasirinkto miesto sekciją
    const activeSection = modal.querySelector(`.modal-section[data-place="${place}"]`);
    if (activeSection) activeSection.style.display = 'block';

    // Atidaryti modalą
    modal.style.display = 'flex';
  });
});

// Uždaryti modalą paspaudus X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Uždaryti modalą paspaudus už modal content
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});