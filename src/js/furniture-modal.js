import { furnitureModalMarkup } from "./render-functions";
import refs from "./refs";
import { data } from "./furniture-data";
import { openOrderModal } from './order-modal';




refs.modalCloseBtn.addEventListener("click", closeModal);
refs.modal.addEventListener("click", (event) => {
    if (event.target === refs.modal) closeModal();
});


export async function openModal(event) {
    document.body.classList.add('body--no-scroll');

    const btn = event.target.closest('.furnitures__details-btn');
    if (!btn) return;

    const furnitureItem = btn.closest('.furnitures__item');
    if (!furnitureItem) return;

    const currentFurniture = furnitureItem.dataset.id;
    const furniture = data.find(({ _id }) => _id === currentFurniture);

    refs.modalFurniture.innerHTML = furnitureModalMarkup(furniture);
    refs.modal.classList.add("modal--is-open");

    document.addEventListener("keydown", handleEscKey);

    //-------------------------------------rate
    document.querySelectorAll('.rating').forEach(el => {
        const rate = parseFloat(el.dataset.rate);
        const percent = (rate / 5) * 100;
        el.style.setProperty('--rating-percent', `${percent}%`);
    });

}

export function closeModal() {
    refs.modal.classList.remove("modal--is-open");
    refs.modalFurniture.innerHTML = "";

    document.removeEventListener("keydown", handleEscKey);
    document.body.classList.remove('body--no-scroll');

}

function handleEscKey(event) {
    if (event.key === "Escape") {
        closeModal()
    };
}

refs.modalFurniture.addEventListener('click', event => {
    const btn = event.target.closest('.modal-furniture__btn');
    if (!btn) return;

    const modelId = btn.dataset.modelId;
    const color = btn.dataset.color;

    openOrderModal(modelId, color);

    closeModal();
});