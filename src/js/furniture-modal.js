import refs from './refs';
import { data } from './furniture-data';
import { openOrderModal } from './order-modal';

function furnitureModalMarkup({
  _id,
  name,
  images,
  description,
  price,
  color,
  category,
  rate,
  sizes,
}) {
  return `
    <div class="modal-furniture__image-list">${renderFurnitureGallery(
      images
    )}</div>
    <div class="modal-furniture__content" data-id="${_id}">
      <p class="modal-furniture__title">${name}</p>
      <p class="modal-furniture__category">${category.name}</p>
      <p class="modal-furniture__price">${price} грн</p>
      <div class="modal-furniture__rate">
        <span class="rating" data-rate="${rate}">★★★★★</span>
      </div>
      <p class="modal-furniture__color-title">Колір</p>
      <ul class="furnitures__colors-list">${modalColorListMarkup(color)}</ul>
      <p class="modal-furniture__description">${description}</p>
      <p class="modal-furniture__sizes">Розміри: ${sizes}</p>
      <button 
        class="btn modal-furniture__btn" 
        type="button" 
        data-model-id="${_id}" 
        data-color="${color && color.length > 0 ? color[0] : ''}"
      >
        Перейти до замовлення
      </button>
    </div>
  `;
}

function modalColorListMarkup(arr) {
  return arr
    .map(
      (color, index) => `
        <li class="furnitures__colors">
          <label class="color-radio">
            <input 
              type="radio" 
              name="color" 
              value="${color}" 
              class="color-radio__input" 
              id="color-${index}"
            >
            <span 
              class="color-radio__circle" 
              style="background-color: ${color};"
            ></span>
          </label>
        </li>
      `
    )
    .join('');
}

function renderFurnitureGallery(images) {
  return `
    <ul class="furniture-gallery">
      <li class="gallery-item big">
        <img src="${images[0]}" alt="Велике фото">
      </li>
      <li class="gallery-item small">
        <img src="${images[1]}" alt="Мале фото 1">
      </li>
      <li class="gallery-item small">
        <img src="${images[2]}" alt="Мале фото 2">
      </li>
    </ul>
  `;
}

refs.modalCloseBtn.addEventListener('click', closeModal);
refs.modal.addEventListener('click', event => {
  if (event.target === refs.modal) closeModal();
});

export function openModal(event) {
  document.body.classList.add('body--no-scroll');

  const btn = event.target.closest('.furnitures__details-btn');
  if (!btn) return;

  const furnitureItem = btn.closest('.furnitures__item');
  if (!furnitureItem) return;

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

refs.modalFurniture.addEventListener('click', event => {
  const btn = event.target.closest('.modal-furniture__btn');
  if (!btn) return;

  const modelId = btn.dataset.modelId;
  const color = btn.dataset.color;

  openOrderModal(modelId, color);

  closeModal();
});

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
