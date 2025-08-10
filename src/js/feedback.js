import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import getFeedback from './feedback-api.js';

const feedbackList = document.querySelector('#feedback-list');

export async function loadFeedbacks() {
  try {
    const response = await getFeedback();
    const feedbacks = response?.feedbacks || [];

    const limitedFeedbacks = feedbacks.slice(0, 10);

    if (!limitedFeedbacks.length) {
      feedbackList.innerHTML = '<li class="swiper-slide">Відгуків поки немає.</li>';
      return;
    }

    const markup = limitedFeedbacks.map(item => `
      <li class="swiper-slide feedback-item">
        <div class="feedback-card">
          <div class="feedback-stars">
            ${createStarRating(item.rate)}
          </div>
          <p class="feedback-text">"${item.descr}"</p>
          <h3 class="feedback-author">${item.name}</h3>
        </div>
      </li>
    `).join('');

    feedbackList.innerHTML = markup;

    new Swiper('.feedback-swiper', {
      loop: false,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: '#feedback-next',
        prevEl: '#feedback-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

  } catch (err) {
    console.error('Помилка завантаження відгуків:', err);
    feedbackList.innerHTML = '<li class="swiper-slide">Не вдалося завантажити відгуки.</li>';
  }
}

function createStarRating(rate) {
    const maxStars = 5;
    const spritePath = './img/sprite.svg#icon-star';
  let starsMarkup = '';

  for (let i = 1; i <= maxStars; i++) {
    let fillPercent = 0;

    if (rate >= i) {
      fillPercent = 100;
    } else if (rate > i - 1 && rate < i) {
      fillPercent = (rate - (i - 1)) * 100;
    }

    const uniqueId = Math.random().toString(36).slice(2, 8);
const clipId = `clip-star-${i}-${uniqueId}`;

    starsMarkup += `
      <svg class="star" width="21" height="21" aria-hidden="true" focusable="false" viewBox="0 0 24 24" style="vertical-align: middle;">
        <defs>
          <clipPath id="${clipId}">
            <rect x="0" y="0" width="${fillPercent}%" height="100%"></rect>
          </clipPath>
        </defs>
        <!-- gray star background -->
        <use xlink:href="${spritePath}" fill="#e6e6e6"></use>
        <!-- colored star clipped by fillPercent -->
        <use xlink:href="${spritePath}" fill="black" clip-path="url(#${clipId})"></use>
      </svg>`;
  }
  return starsMarkup;
}

loadFeedbacks();
