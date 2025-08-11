import { furnitureModalMarkup } from './render-functions';
import refs from './refs';
import { data } from './furniture-data';
import { openOrderModal } from './order-modal';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

refs.modalCloseBtn.addEventListener('click', closeModal);
refs.modal.addEventListener('click', event => {
  if (event.target === refs.modal) closeModal();
});

export async function openModal(event) {
  const btn = event.target.closest('.furnitures__details-btn');
  if (!btn) return;

  const furnitureItem = btn.closest('.furnitures__item');
  if (!furnitureItem) return;

  document.body.classList.add('body--no-scroll');

  const currentFurniture = furnitureItem.dataset.id;
  const furniture = data.find(({ _id }) => _id === currentFurniture);

  refs.modalFurniture.innerHTML = furnitureModalMarkup(furniture);
  refs.modal.classList.add('modal--is-open');

  document.addEventListener('keydown', handleEscKey);

  document.querySelectorAll('.rating').forEach(el => {
    const rate = parseFloat(el.dataset.rate);
    const percent = (rate / 5) * 100;
    el.style.setProperty('--rating-percent', `${percent}%`);
  });
}

export function closeModal() {
  refs.modal.classList.remove('modal--is-open');
  refs.modalFurniture.innerHTML = '';

  document.removeEventListener('keydown', handleEscKey);
  document.body.classList.remove('body--no-scroll');
}

export function handleEscKey(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

// Оновлений слухач кнопки "Перейти до замовлення"
refs.modalFurniture.addEventListener('click', event => {
  const btn = event.target.closest('.modal-furniture__btn');
  if (!btn) return;

  const modelId = btn.dataset.modelId;

  // Беремо вибраний колір із radio input у момент кліку
  const checkedColorInput = refs.modalFurniture.querySelector(
    'input[name="color"]:checked'
  );
  const selectedColor = checkedColorInput ? checkedColorInput.value : null;

  if (!selectedColor) {
    iziToast.warning({
      title: 'Увага',
      message: 'Оберіть, будь ласка, колір перед замовленням',
      position: 'topRight',
      timeout: 3000,
    });
    return;
  }

  closeModal();

  openOrderModal(modelId, selectedColor);
});
