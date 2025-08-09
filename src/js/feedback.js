import Swiper from 'swiper';
import 'swiper/css';

async function loadFeedbacks() {
  const res = await fetch('/feedbacks?page=1&limit=10');
  const data = await res.json();

  const wrapper = document.getElementById('feedback-list');
  wrapper.innerHTML = data.feedbacks
    .map(feedback => {
      const roundedRate = roundRate(feedback.rate);
      return `
        <li class="swiper-slide">
          <div class="feedback-card">
            <div class="feedback-stars">
              ${renderStars(roundedRate)}
            </div>
            <p class="feedback-text">"${feedback.descr}"</p>
            <p class="feedback-author">${feedback.name}</p>
          </div>
        </li>
      `;
    })
    .join('');

  initSwiper();
}

function roundRate(rate) {
  if (rate >= 3.3 && rate <= 3.7) return 3.5;
  if (rate >= 3.8 && rate <= 4.2) return 4;
  return Math.round(rate * 2) / 2;
}

function renderStars(rate) {
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return `
    ${'<svg class="star full"><use href="./img/sprite.svg#icon-star-full"></use></svg>'.repeat(fullStars)}
    ${halfStar ? '<svg class="star half"><use href="./img/sprite.svg#icon-star-half"></use></svg>' : ''}
    ${'<svg class="star empty"><use href="./img/sprite.svg#icon-star-empty"></use></svg>'.repeat(emptyStars)}
  `;
}

function initSwiper() {
  new Swiper('.feedback-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '#feedback-next',
      prevEl: '#feedback-prev'
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
}

loadFeedbacks();
