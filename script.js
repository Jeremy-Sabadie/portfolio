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