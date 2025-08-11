import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { furnitureModalMarkup } from './render-functions';
import refs from './refs';
import { data } from './furniture-data';
import { openOrderModal } from './order-modal';
import { openModal } from './furniture-modal';

let currentPage = 1;
const limit = 8;
let isLoading = false;
let isLastPage = false;
let swiperInstance = null;

async function fetchFurnituresData(page = 1, limit = 8, type = 'popular') {
  try {
    const response = await axios.get(
      `https://furniture-store.b.goit.study/api/furnitures?type=${type}&page=${page}&limit=${limit}`
    );

    return response.data;
  } catch (error) {
    iziToast.warning({
      message: `Помилка запиту: ${error.message}`,
      position: 'topCenter',
      timeout: 3000,
    });

    return null;
  }
}

function createFurnitureMarkup(furnitures) {
  if (!Array.isArray(furnitures)) return '';

  return furnitures
    .map(item => {
      const image = item.images?.[1] || item.images?.[0] || 'default.jpg';
      const colors = Array.isArray(item.color) ? item.color.slice(0, 3) : [];

      return `
        <li class="furniture-card swiper-slide " data-id="${item._id}">
          <div class="furniture-card-box-img">
            <img class="furniture-card-img" src="${image}" alt="${item.name}" />
          </div>
          <div class="box__product-card-info">
            <p>${item.name}</p>
            <div class="box__color">
              ${colors
                .map(
                  c =>
                    `<div class="color" style="background-color: ${c}; width: 24px; height: 24px;"></div>`
                )
                .join('')}
            </div>
            <p>${item.price * 42} грн</p>
          </div>
          <button class="btn__furniture-details-modal furnitures__details-btn  " type="button">Детальніше</button>
        </li>
      `;
    })
    .join('');
}

function appendFurnitureMarkup(markup) {
  const container = document.querySelector('.swiper-wrapper');
  if (!container) return;
  container.insertAdjacentHTML('beforeend', markup);

  // Оновлюємо Swiper після додавання нових слайдів
  if (swiperInstance) {
    swiperInstance.update();
  }
  // Додаємо слухачі на кнопки "Детальніше"
  const detailButtons = container.querySelectorAll(
    '.btn__furniture-details-modal'
  );
  detailButtons.forEach(btn => {
    btn.addEventListener('click', openModal);
  });
}

function initSwiper() {
  swiperInstance = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.btn-right',
      prevEl: '.btn-left',
      disabledClass: 'swiper-button-disabled',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
}

async function loadInitialFurniture() {
  const data = await fetchFurnituresData(currentPage, limit);
  if (!data || !data.furnitures) return;

  const markup = createFurnitureMarkup(data.furnitures);
  appendFurnitureMarkup(markup);
  initSwiper();

  if (data.totalItems <= limit) {
    isLastPage = true;
  }
}

async function loadNextFurniturePage() {
  if (isLoading || isLastPage) return;

  isLoading = true;
  currentPage += 1;

  const data = await fetchFurnituresData(currentPage, limit);
  if (!data || !data.furnitures || data.furnitures.length === 0) {
    isLastPage = true;
    return;
  }

  const markup = createFurnitureMarkup(data.furnitures);
  appendFurnitureMarkup(markup);
  isLoading = false;
}

// Прив'язуємо завантаження до кнопки .btn-right
document.querySelector('.btn-right').addEventListener('click', () => {
  loadNextFurniturePage();
});

// Початкове завантаження
loadInitialFurniture();
