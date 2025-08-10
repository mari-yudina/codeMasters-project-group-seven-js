import axios from 'axios';

async function fetchFurnitures() {
  try {
    const { data } = await axios.get(
      'https://furniture-store.b.goit.study/api/furnitures?type=popular'
    );
    console.log('Меблі:', data);
    const { furnitures, totalItems, page, limit } = data;

    console.log('Меблі:', furnitures);
    console.log('Всього товарів:', totalItems);
    console.log('Сторінка:', page);
    console.log('Ліміт:', limit);
    // const expensiveItems = furnitures.filter(item => item.rate > 4.5);
    // console.log('Популярні:', expensiveItems);
    // Знаходимо список у DOM

    const listTwo = document.querySelector('.swiper-wrapper');

    // Створюємо розмітку для свайпера
    const markupTwo = furnitures
      .map(
        item => `
      <li class="furniture-card swiper-slide">
      <div class = "furniture-card-box-img">
        <img class = "furniture-card-img" src="${item.images[1]}" alt="${
          item.name
        }"

          /></div>
          <div class = "box__product-card-info">
        <p>${item.name}</p>
        <div class = "box__color">

<div class="color" style="background-color: ${
          item.color[0]
        }; width: 24px; height: 24px;"></div>
   <div class="color" style="background-color: ${
     item.color[1]
   }; width: 24px; height: 24px;"></div>
   <div class="color" style="background-color: ${
     item.color[2]
   }; width: 24px; height: 24px;"></div>

        </div>
        <p>${item.price * 42} грн</p></div>
        <button class = "btn__furniture-details-modal" type = "button">Детальніше</button>
      </li>
    `
      )
      .join('');

    listTwo.innerHTML = markupTwo;

    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 1.2, // стартова кількість карток
      spaceBetween: 16, // відстань між картками
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
  } catch (error) {
    console.error('Помилка запиту:', error.message);
  }
}

fetchFurnitures();
//--------------------------------------------

//------------------------------------------

// async function fetchFurnituresPopular() {
//   const { data } = await axios(
//     'https://furniture-store.b.goit.study/api/furnitures?type=popular'
//   );
//   return data;
// }
// fetchFurnituresPopular().then(data => console.log('Меблі:', data));

// const furnitureMarkup = `
//       <li class="furniture-card">
//       <div class = "furniture-card-box-img">
//         <img class = "furniture-card-img" src="${item.images[1]}" alt="${
//   item.name
// }"

//           /></div>
//         <p>${item.name}</p>
//         <div class = "box__color">

// <div class="color" style="background-color: ${
//   item.color[0]
// }; width: 24px; height: 24px;"></div>
//    <div class="color" style="background-color: ${
//      item.color[1]
//    }; width: 24px; height: 24px;"></div>
//    <div class="color" style="background-color: ${
//      item.color[2]
//    }; width: 24px; height: 24px;"></div>

//         </div
//         <p>${item.price * 42} грн</p>
//         <button class = "btn" type = "button">Детальніше</button>
//       </li>
//     `;

// const list = document.querySelector('.popular__products__list');

// function renderFurnituresPopular(data) {
//   const markup = data.map(el => furnitureMarkup).join('');

//   list.insertAdjacentHTML('beforeend', markup);
//   lightbox.refresh();
// }

// async function getFurnituresPopular() {
//   try {
//     const data = await fetchFurnituresPopular();
//     renderFurnituresPopular(data);

//     // showLoader();
//   } catch (error) {
//     console.log(error);
//   }
//   // } finally {
//   //   hideLoader();
//   // }
// }
