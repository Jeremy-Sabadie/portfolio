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
