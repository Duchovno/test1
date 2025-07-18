// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// FAQ rozklikávání
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isOpen = faqItem.classList.contains('open');

    // Zavřeme ostatní
    document.querySelectorAll('.faq-item.open').forEach((item) => {
      if (item !== faqItem) item.classList.remove('open');
    });

    // Toggle otevření
    if (!isOpen) {
      faqItem.classList.add('open');
    } else {
      faqItem.classList.remove('open');
    }
  });
});

// Formulář (dummy odeslání)
document.getElementById('order-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const question = e.target.question.value.trim();

  if (!name || !email || !question) {
    alert('Vyplň prosím všechna pole.');
    return;
  }

  alert(`Díky, ${name}! Tvá objednávka byla přijata. Brzy ti pošleme výklad na e-mail: ${email}`);
  e.target.reset();
});
