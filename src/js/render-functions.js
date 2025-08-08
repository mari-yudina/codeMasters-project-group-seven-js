import refs from "./refs";

export function categoriesItemRender(arr) {
    refs.categoriesItems.forEach((item, index) => {
        const category = arr[index];
        const thumb = item.querySelector('.categories__thumb');

        const markup = `<p class="categories__item__name" data-id="${category._id ?? '1'}">${category.name}</p>`;
        thumb.insertAdjacentHTML('beforeend', markup);
    });
}



export function furnituresCardMarkup(arr) {
    return arr.map(({ _id, name, images, price, color }) =>
        `
            <li class="furnitures__item" data-id="${_id}">
                <img class="furnitures__image" src="${images[0]}" alt="${name}" height="277"/>
                <p class="furnitures__title">${name}</p>
                <ul class="furnitures__colors__list">${colorListMarkup(color)}</ul>
                <p class="furnitures__price">${price} грн</p>
                <button class="furnitures__details-btn">Детальніше</button>
            </li>
        `
    ).join('');

}

export function furnitureModalMarkup({ _id, name, images, description, price, color, category, rate, sizes }) {
    const image = images.map(image => `
      <li class="modal-furniture__image">
        <div class="modal-furniture__thumb">
          <img class="modal-furniture__img" src=${image} alt="${name}" width="166" height="122">
        </div>
      </li>
    `).join('');

    return `
        <ul class="modal-furniture__image-list">${image}</ul>
        <div class="modal-furniture__content data-id="${_id}">
            <p class="modal-furniture__title">${name}</p>
            <p class="modal-furniture__category">${category.name}</p>
            <p class="modal-furniture__price">${price} грн</p>
            <div class="modal-furniture__rate">
                <span class="rating" data-rate="${rate}">★★★★★</span>
            </div>
            <p class="modal-furniture__color-title">Колір</p>
            <ul class="furnitures__colors__list">${colorListMarkup(color)}</ul>
            <p class="modal-furniture__description">${description}</p>
            <p class="modal-furniture__sizes">Розміри: ${sizes}</p>
        </div>
  `;
}


function colorListMarkup(arr) {
    return arr.map(color => `
            <li class="furnitures__colors">
                <div class="furnitures__colors__item" style="background-color: ${color};"></div>
            </li>
        `).join('');
}

