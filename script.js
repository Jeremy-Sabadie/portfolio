document.getElementById('theme').addEventListener('click',()=>document.body.classList.toggle('light'));
// Ouverture et fermeture de la popup IA
const aiModal = document.getElementById("ai-policy-modal");
const aiOpen = document.getElementById("open-ai-policy");
const aiClose = document.getElementById("close-ai-policy");
const aiDismiss = document.getElementById("dismiss-ai-policy");

if (aiModal && aiOpen) {
    aiOpen.addEventListener("click", () => aiModal.showModal());

    aiClose?.addEventListener("click", () => aiModal.close());
    aiDismiss?.addEventListener("click", () => aiModal.close());

    aiModal.addEventListener("click", (event) => {
        if (event.target === aiModal) aiModal.close();
    });
}

// SUPERVISEME CAROUSEL V2
document.querySelectorAll('.superviseme-carousel').forEach(carousel => {
    const slides = carousel.querySelector('.superviseme-slides');
    const counter = carousel.querySelector('.superviseme-counter');
    const images = slides.querySelectorAll('img');
    let index = 0;

    function show(next) {
        index = (next + images.length) % images.length;
        slides.style.transform = `translateX(-${index * 100}%)`;
        counter.textContent = `${index + 1} / ${images.length}`;
    }

    carousel.querySelector('.superviseme-prev')
        .addEventListener('click', () => show(index - 1));

    carousel.querySelector('.superviseme-next')
        .addEventListener('click', () => show(index + 1));
});

// Portfolio contact form
(() => {
  const modal = document.getElementById('contact-modal');
  const open = document.getElementById('open-contact');
  const close = document.getElementById('close-contact');
  const form = document.getElementById('portfolio-contact-form');
  const feedback = document.getElementById('contact-feedback');

  if (!modal || !open || !close || !form || !feedback) return;

  open.addEventListener('click', () => modal.showModal());
  close.addEventListener('click', () => modal.close());

  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.close();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submit = form.querySelector('[type="submit"]');
    submit.disabled = true;
    feedback.textContent = 'Envoi en cours…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) throw new Error('Submission failed');

      form.reset();
      feedback.textContent = 'Message envoyé avec succès. Merci !';
    } catch (error) {
      feedback.textContent =
        "L'envoi a échoué. Réessayez ou écrivez à contact@atelier-du-dev.fr.";
    } finally {
      submit.disabled = false;
    }
  });
})();
