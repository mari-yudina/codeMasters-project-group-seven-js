import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { getFeedback } from './feedback-api.js';

const feedbackList = document.querySelector('#feedback-list');

export async function loadFeedbacks() {
  try {
    const response = await getFeedback();
    const feedbacks = response?.feedbacks || [];

    const limitedFeedbacks = feedbacks.slice(0, 10);

    if (!limitedFeedbacks.length) {
      feedbackList.innerHTML =
        '<li class="swiper-slide">Відгуків поки немає.</li>';
      return;
    }

    const markup = limitedFeedbacks
      .map(
        item => `
      <li class="swiper-slide feedback-item">
        <div class="feedback-card">
          <div class="feedback-stars">
            ${createStarRating(item.rate)}
          </div>
          <p class="feedback-text">"${item.descr}"</p>
          <h3 class="feedback-author">${item.name}</h3>
        </div>
      </li>
    `
      )
      .join('');

    feedbackList.innerHTML = markup;

    const swiper = new Swiper('.feedback-swiper', {
      loop: false,
      spaceBetween: 72,
      slidesPerView: 1,

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },

      navigation: {
        nextEl: '#feedback-next',
        prevEl: '#feedback-prev',
      },

      pagination: {
        el: '.feedback_swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 6,
        watchSlidesProgress: true,
      },

      on: {
        init() {
          toggleButtons(this);
        },
        slideChange() {
          toggleButtons(this);
        },
      },
    });

    swiper.pagination.render();
    swiper.pagination.update();

    function toggleButtons(swiper) {
      const prev = document.querySelector('#feedback-prev');
      const next = document.querySelector('#feedback-next');

      if (swiper.isBeginning) {
        prev.classList.add('disabled');
      } else {
        prev.classList.remove('disabled');
      }

      if (swiper.isEnd) {
        next.classList.add('disabled');
      } else {
        next.classList.remove('disabled');
      }
    }
  } catch (err) {
    console.error('Помилка завантаження відгуків:', err);
    feedbackList.innerHTML =
      '<li class="swiper-slide">Не вдалося завантажити відгуки.</li>';
  }
}

function createStarRating(rate) {
  const maxStars = 5;
  const starSize = 20;
  const viewBoxSize = 32;

  const outerPath = `M7.226 19.717l-2.384 10.323c-0.074 0.313-0.052 0.64 0.064 0.94s0.318 0.558 0.582 0.74
    c0.264 0.183 0.577 0.281 0.899 0.283s0.635-0.093 0.902-0.273l8.712-5.808 8.712 5.808
    c0.273 0.181 0.594 0.274 0.921 0.267s0.644-0.114 0.908-0.307c0.264-0.193 0.463-0.462 0.57-0.771
    s0.116-0.644 0.028-0.959l-2.926-10.24 7.258-6.531c0.232-0.209 0.399-0.482 0.477-0.785
    s0.068-0.622-0.033-0.918-0.285-0.556-0.532-0.749c-0.247-0.192-0.544-0.308-0.856-0.333
    l-9.122-0.726-3.947-8.738c-0.126-0.281-0.33-0.52-0.589-0.688s-0.56-0.257-0.868-0.257
    c-0.308 0-0.61 0.089-0.868 0.257s-0.463 0.407-0.589 0.688l-3.947 8.738-9.122 0.725
    c-0.306 0.024-0.599 0.136-0.844 0.323s-0.43 0.439-0.534 0.728c-0.104 0.289-0.123 0.602-0.055 0.902
    s0.223 0.573 0.443 0.788l6.742 6.571z`;

  const innerPath = `M8.7 19.1l-1.9 8.4c-0.06 0.26-0.04 0.53 0.05 0.77s0.26 0.45 0.47 0.6c0.21 0.13 0.46 0.2 0.72 0.2s0.51-0.07 0.73-0.2l7.1-4.7 7.1 4.7c0.22 0.13 0.48 0.2 0.74 0.2s0.53-0.09 0.74-0.26c0.21-0.17 0.37-0.4 0.46-0.67s0.09-0.53 0.02-0.8l-2.3-8.5 6-5.4c0.2-0.18 0.35-0.41 0.42-0.67s0.05-0.53-0.03-0.79-0.25-0.45-0.47-0.6c-0.22-0.14-0.48-0.22-0.75-0.24l-8-0.7-3.5-7.7c-0.12-0.26-0.31-0.48-0.56-0.62s-0.53-0.23-0.82-0.23c-0.29 0-0.58 0.08-0.82 0.23s-0.44 0.34-0.56 0.62l-3.5 7.7-8 0.7c-0.27 0-0.53 0.1-0.75 0.24s-0.37 0.32-0.47 0.53c-0.1 0.21-0.12 0.43-0.05 0.65s0.18 0.4 0.36 0.55l5.5 5.3z`;

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

    const clipWidth = (fillPercent / 100) * viewBoxSize;

    starsMarkup += `
<svg class="star" width="${starSize}" height="${starSize}" viewBox="-2 -2 36 36" aria-hidden="true" focusable="false" style="vertical-align: middle; margin-right: 4px;">
        <defs>
          <clipPath id="${clipId}">
            <rect x="0" y="0" width="${clipWidth}" height="${viewBoxSize}"></rect>
          </clipPath>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%" color-interpolation-filters="sRGB">
            <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="gold" flood-opacity="1"/>
          </filter>
        </defs>

        <!-- Outer glowing stroke -->
        <path d="${outerPath}" fill="gold" stroke="gold" stroke-width="1" filter="url(#glow)" />
        <!-- Inner stroke -->
        <path d="${innerPath}" fill="rgba(247, 244, 180, 0.94)" stroke="gold" stroke-width="1"/>
        <!-- Fill clipped -->
        <path d="${innerPath}" fill="gold" clip-path="url(#${clipId})" />
        </svg>
    `;
  }

  return starsMarkup;
}

loadFeedbacks();
