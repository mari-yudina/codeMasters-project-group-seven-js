import refs from './refs';

export function categoriesItemRender(arr) {
  refs.categoriesItems.forEach((item, index) => {
    const category = arr[index];
    const thumb = item.querySelector('.categories__thumb');

    const markup = `<p class="categories__item__name" data-id="${
      category._id ?? '1'
    }">${category.name}</p>`;
    thumb.insertAdjacentHTML('beforeend', markup);
  });
}

export function furnituresCardMarkup(arr) {
  return arr
    .map(
      ({ _id, name, images, price, color }) =>
        `
            <li class="furnitures__item" data-id="${_id}">
                <img class="furnitures__image" src="${
                  images[0]
                }" alt="${name}" height="277"/>
                <p class="furnitures__title">${name}</p>
                <ul class="furnitures__colors-list furnitures__colors-list__card">${furnitureCardColorListMarkup(
                  color
                )}</ul>
                <p class="furnitures__price">${price} грн</p>
                <button class="btn furnitures__details-btn">Детальніше</button>
            </li>
        `
    )
    .join('');
}

export function furnitureModalMarkup({
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
            <ul class="furnitures__colors-list">${modalColorListMarkup(
              color
            )}</ul>
            <p class="modal-furniture__description">${description}</p>
            <p class="modal-furniture__sizes">Розміри: ${sizes}</p>
        </div>
  `;
}

function furnitureCardColorListMarkup(arr) {
  return arr
    .map(
      color => `
            <li class="furnitures__colors">
                <div class="furnitures__colors__item" style="background-color: ${color};"></div>
            </li>
        `
    )
    .join('');
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
