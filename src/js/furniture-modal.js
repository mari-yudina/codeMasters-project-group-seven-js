import { furnitureModalMarkup } from './render-functions';
import refs from './refs';
import { data } from './furniture-data';
import { openOrderModal } from './order-modal'; // відкриває модалку Ярослава

refs.modalCloseBtn.addEventListener('click', closeModal);
refs.modal.addEventListener('click', event => {
  if (event.target === refs.modal) closeModal();
});
refs.modal.addEventListener('click', handleColorToggle);

export async function openModal(event) {
  const btn = event.target.closest('.furnitures__details-btn');
  if (!btn) return;

  const furnitureItem = btn.closest('.furnitures__item');
  if (!furnitureItem) return;

  const currentFurnitureId = furnitureItem.dataset.id;
  const furniture = data.find(({ _id }) => _id === currentFurnitureId);
  if (!furniture) return;

  refs.modalFurniture.innerHTML = furnitureModalMarkup(furniture);
  refs.modal.classList.add('modal--is-open');
  document.body.classList.add('body--no-scroll');

  document.addEventListener('keydown', handleEscKey);

  document.querySelectorAll('.rating').forEach(el => {
    const rate = parseFloat(el.dataset.rate);
    const percent = (rate / 5) * 100;
    el.style.setProperty('--rating-percent', `${percent}%`);
  });

  const orderBtn = refs.modalFurniture.querySelector('.modal-furniture__btn');
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      const selectedColorBtn = refs.modalFurniture.querySelector(
        '.furnitures__colors__item--pressed'
      );
      const selectedColor = selectedColorBtn
        ? selectedColorBtn.dataset.color
        : null;

      closeModal();
      openOrderModal(furniture._id, selectedColor);
    });
  }
}

export function closeModal() {
  refs.modal.classList.remove('modal--is-open');
  refs.modalFurniture.innerHTML = '';
  document.removeEventListener('keydown', handleEscKey);
  document.body.classList.remove('body--no-scroll');
}

function handleEscKey(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function handleColorToggle(event) {
  const colorBtn = event.target.closest('.furnitures__colors__item');
  if (!colorBtn) return;

  document
    .querySelectorAll('.furnitures__colors__item')
    .forEach(btn => btn.classList.remove('furnitures__colors__item--pressed'));
  colorBtn.classList.add('furnitures__colors__item--pressed');
}
