import{a as p,i as k,S as E,A as B}from"./assets/vendor-BxOt1qhU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(r){r.preventDefault();const i=document.querySelector(this.getAttribute("href"));i&&i.scrollIntoView({behavior:"smooth"}),g()})});const q=document.querySelector(".burger-btn"),m=document.querySelector(".mobile-menu"),F=document.querySelector(".mobile-close-btn");q.addEventListener("click",()=>{m.classList.add("is-open"),document.body.classList.add("no-scroll")});F.addEventListener("click",g);m.addEventListener("click",e=>{e.target===m&&g()});document.addEventListener("keydown",e=>{e.key==="Escape"&&g()});function g(){m.classList.remove("is-open"),document.body.classList.remove("no-scroll")}const n={categories:document.querySelector(".our-furnitures__categories"),categoriesItems:document.querySelectorAll(".categories__item"),categoriesTumbs:document.querySelectorAll(".categories__thumb"),furnitures:document.querySelector(".our-furnitures__list"),loadMoreBtn:document.querySelector(".our-furnitures__load-more-btn"),modal:document.querySelector(".modal"),modalFurniture:document.querySelector(".modal-furniture"),modalCloseBtn:document.querySelector(".modal__close-btn"),spinner:document.querySelector(".loader-box")};function P(e){n.categoriesItems.forEach((r,i)=>{const o=e[i],t=r.querySelector(".categories__thumb"),s=`<p class="categories__item__name" data-id="${o._id??"1"}">${o.name}</p>`;t.insertAdjacentHTML("beforeend",s)})}function b(e){return e.map(({_id:r,name:i,images:o,price:t,color:s})=>`
            <li class="furnitures__item" data-id="${r}">
                <img class="furnitures__image" src="${o[0]}" alt="${i}" height="277"/>
                <p class="furnitures__title">${i}</p>
                <ul class="furnitures__colors-list furnitures__colors-list__card">${T(s)}</ul>
                <p class="furnitures__price">${t} грн</p>
                <button class="btn furnitures__details-btn">Детальніше</button>
            </li>
        `).join("")}function H({_id:e,name:r,images:i,description:o,price:t,color:s,category:a,rate:l,sizes:c}){return`
        <div class="modal-furniture__image-list">${I(i)}</div>
        <div class="modal-furniture__content data-id="${e}">
            <p class="modal-furniture__title">${r}</p>
            <p class="modal-furniture__category">${a.name}</p>
            <p class="modal-furniture__price">${t} грн</p>
            <div class="modal-furniture__rate">
                <span class="rating" data-rate="${l}">★★★★★</span>
            </div>
            <p class="modal-furniture__color-title">Колір</p>
            <ul class="furnitures__colors-list">${A(s)}</ul>
            <p class="modal-furniture__description">${o}</p>
            <p class="modal-furniture__sizes">Розміри: ${c}</p>
        </div>
  `}function T(e){return e.map(r=>`
            <li class="furnitures__colors">
                <div class="furnitures__colors__item" style="background-color: ${r};"></div>
            </li>
        `).join("")}function A(e){return e.map((r,i)=>`
        <li class="furnitures__colors">
            <label class="color-radio">
                <input 
                    type="radio" 
                    name="color" 
                    value="${r}" 
                    class="color-radio__input" 
                    id="color-${i}"
                >
                <span 
                    class="color-radio__circle" 
                    style="background-color: ${r};"
                ></span>
            </label>
        </li>
    `).join("")}function I(e){return`
    <ul class="furniture-gallery">
      <li class="gallery-item big">
        <img src="${e[0]}" alt="Велике фото">
      </li>
      <li class="gallery-item small">
        <img src="${e[1]}" alt="Мале фото 1">
      </li>
      <li class="gallery-item small">
        <img src="${e[2]}" alt="Мале фото 2">
      </li>
    </ul>
  `}let f=[];n.modalCloseBtn.addEventListener("click",L);n.modal.addEventListener("click",e=>{e.target===n.modal&&L()});async function V(e){document.body.classList.add("body--no-scroll");const r=e.target.closest(".furnitures__details-btn");if(!r)return;const i=r.closest(".furnitures__item");if(!i)return;const o=i.dataset.id,t=f.find(({_id:s})=>s===o);n.modalFurniture.innerHTML=H(t),n.modal.classList.add("modal--is-open"),document.addEventListener("keydown",M),document.querySelectorAll(".rating").forEach(s=>{const l=parseFloat(s.dataset.rate)/5*100;s.style.setProperty("--rating-percent",`${l}%`)})}function L(){n.modal.classList.remove("modal--is-open"),n.modalFurniture.innerHTML="",document.removeEventListener("keydown",M),document.body.classList.remove("body--no-scroll")}function M(e){e.key==="Escape"&&L()}const O=async()=>(await p.get("https://furniture-store.b.goit.study/api/categories")).data,w=async(e=1)=>(await p.get("https://furniture-store.b.goit.study/api/furnitures",{params:{limit:8,page:e}})).data,x=async(e,r=1)=>(await p.get("https://furniture-store.b.goit.study/api/furnitures",{params:{category:e,limit:8,page:r}})).data,j="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_78)'%3e%3cpath%20d='M11.907%203.02393C11.9364%203.00781%2011.9695%202.99954%2012.003%202.99993C12.0361%202.9998%2012.0686%203.00805%2012.0975%203.02393C12.1318%203.0445%2012.1599%203.07407%2012.1785%203.10943L22.464%2020.6099C22.518%2020.6999%2022.5165%2020.7959%2022.467%2020.8844C22.448%2020.9207%2022.4202%2020.9517%2022.386%2020.9744C22.3563%2020.9926%2022.3218%2021.0015%2022.287%2020.9999H1.71904C1.68422%2021.0016%201.64971%2020.9927%201.62004%2020.9744C1.58592%2020.9517%201.55807%2020.9207%201.53904%2020.8844C1.51432%2020.8428%201.50153%2020.7952%201.50206%2020.7468C1.50259%2020.6983%201.51642%2020.651%201.54204%2020.6099L11.826%203.10943C11.8448%203.07411%2011.8728%203.04456%2011.907%203.02393ZM13.473%202.34893C13.3246%202.09027%2013.1105%201.87538%2012.8524%201.72594C12.5942%201.5765%2012.3013%201.4978%2012.003%201.4978C11.7048%201.4978%2011.4118%201.5765%2011.1537%201.72594C10.8956%201.87538%2010.6815%202.09027%2010.533%202.34893L0.247541%2019.8494C-0.437959%2021.0164%200.384041%2022.4999%201.71754%2022.4999H22.287C23.6205%2022.4999%2024.444%2021.0149%2023.757%2019.8494L13.473%202.34893Z'%20fill='white'%20/%3e%3cpath%20d='M10.5031%2017.9999C10.5031%2017.8029%2010.5419%2017.6079%2010.6172%2017.4259C10.6926%2017.2439%2010.8031%2017.0786%2010.9424%2016.9393C11.0817%2016.8%2011.247%2016.6895%2011.429%2016.6141C11.611%2016.5387%2011.8061%2016.4999%2012.0031%2016.4999C12.2%2016.4999%2012.3951%2016.5387%2012.5771%2016.6141C12.7591%2016.6895%2012.9244%2016.8%2013.0637%2016.9393C13.203%2017.0786%2013.3135%2017.2439%2013.3889%2017.4259C13.4643%2017.6079%2013.5031%2017.8029%2013.5031%2017.9999C13.5031%2018.3978%2013.345%2018.7793%2013.0637%2019.0606C12.7824%2019.3419%2012.4009%2019.4999%2012.0031%2019.4999C11.6052%2019.4999%2011.2237%2019.3419%2010.9424%2019.0606C10.6611%2018.7793%2010.5031%2018.3978%2010.5031%2017.9999ZM10.6501%208.99243C10.6301%208.80319%2010.6501%208.61187%2010.7089%208.43087C10.7676%208.24988%2010.8637%208.08325%2010.991%207.94181C11.1183%207.80037%2011.2739%207.68727%2011.4478%207.60986C11.6216%207.53244%2011.8098%207.49243%2012.0001%207.49243C12.1903%207.49243%2012.3785%207.53244%2012.5523%207.60986C12.7262%207.68727%2012.8818%207.80037%2013.0091%207.94181C13.1364%208.08325%2013.2325%208.24988%2013.2913%208.43087C13.35%208.61187%2013.37%208.80319%2013.3501%208.99243L12.8251%2014.2529C12.8074%2014.4596%2012.7129%2014.6521%2012.5601%2014.7924C12.4073%2014.9327%2012.2075%2015.0105%2012.0001%2015.0105C11.7926%2015.0105%2011.5928%2014.9327%2011.44%2014.7924C11.2872%2014.6521%2011.1927%2014.4596%2011.1751%2014.2529L10.6501%208.99243Z'%20fill='white'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_78'%3e%3crect%20width='24'%20height='24'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Z="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_57)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'%20/%3e%3cpath%20d='M6.969%206.96912C7.03867%206.89927%207.12143%206.84386%207.21255%206.80605C7.30366%206.76824%207.40135%206.74878%207.5%206.74878C7.59865%206.74878%207.69633%206.76824%207.78745%206.80605C7.87857%206.84386%207.96133%206.89927%208.031%206.96912L12%2010.9396L15.969%206.96912C16.0387%206.89939%2016.1215%206.84407%2016.2126%206.80633C16.3037%206.7686%2016.4014%206.74917%2016.5%206.74917C16.5986%206.74917%2016.6963%206.7686%2016.7874%206.80633C16.8785%206.84407%2016.9613%206.89939%2017.031%206.96912C17.1007%207.03885%2017.156%207.12164%2017.1938%207.21274C17.2315%207.30385%2017.2509%207.4015%2017.2509%207.50012C17.2509%207.59874%2017.2315%207.69639%2017.1938%207.7875C17.156%207.8786%2017.1007%207.96139%2017.031%208.03112L13.0605%2012.0001L17.031%2015.9691C17.1007%2016.0389%2017.156%2016.1216%2017.1938%2016.2127C17.2315%2016.3039%2017.2509%2016.4015%2017.2509%2016.5001C17.2509%2016.5987%2017.2315%2016.6964%2017.1938%2016.7875C17.156%2016.8786%2017.1007%2016.9614%2017.031%2017.0311C16.9613%2017.1009%2016.8785%2017.1562%2016.7874%2017.1939C16.6963%2017.2316%2016.5986%2017.2511%2016.5%2017.2511C16.4014%2017.2511%2016.3037%2017.2316%2016.2126%2017.1939C16.1215%2017.1562%2016.0387%2017.1009%2015.969%2017.0311L12%2013.0606L8.031%2017.0311C7.96127%2017.1009%207.87848%2017.1562%207.78737%2017.1939C7.69626%2017.2316%207.59861%2017.2511%207.5%2017.2511C7.40138%2017.2511%207.30373%2017.2316%207.21262%2017.1939C7.12151%2017.1562%207.03873%2017.1009%206.969%2017.0311C6.89927%2016.9614%206.84395%2016.8786%206.80621%2016.7875C6.76847%2016.6964%206.74905%2016.5987%206.74905%2016.5001C6.74905%2016.4015%206.76847%2016.3039%206.80621%2016.2127C6.84395%2016.1216%206.89927%2016.0389%206.969%2015.9691L10.9395%2012.0001L6.969%208.03112C6.89915%207.96145%206.84374%207.87869%206.80593%207.78757C6.76812%207.69645%206.74866%207.59877%206.74866%207.50012C6.74866%207.40147%206.76812%207.30379%206.80593%207.21267C6.84374%207.12155%206.89915%207.03879%206.969%206.96912Z'%20fill='%23FAFAFB'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_57'%3e%3crect%20width='24'%20height='24'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";function N(){n.categoriesTumbs.forEach(e=>e.classList.remove("categories__thumb--active"))}function h(){n.spinner.classList.remove("loader-box-hidden"),S()}function y(){n.spinner.classList.add("loader-box-hidden")}function v(e){k.warning({messageColor:"#fff",iconUrl:j,iconColor:"#ffffffff",maxWidth:"350px",position:"topRight",color:"#ffa000",message:e})}function C(e){k.error({messageColor:"#fff",iconColor:"#fff",maxWidth:"350px",iconUrl:Z,position:"topRight",color:"#ef4040",message:e})}function R(){const e=document.querySelector(".furnitures__item");if(!e)return;const r=e.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function $(e){Number(e.page)*Number(e.limit)>=e.totalItems?(v("Усі меблі завантажено!"),S()):D()}function D(){n.loadMoreBtn.classList.remove("is-hidden")}function S(){n.loadMoreBtn.classList.add("is-hidden")}let d=1,u=null;async function z(e){var o;const r=e.target.closest("li");if(!r)return;const i=r.querySelector(".categories__thumb");if(!i.classList.contains("categories__thumb--active")){d=1,f.length=0,h(),N(),i.classList.add("categories__thumb--active"),u=((o=r.querySelector(".categories__item__name"))==null?void 0:o.dataset.id)||null;try{const t=u&&u!=="1"?await x(u,d):await w(d);if(t.furnitures.length===0){v("Sorry, there are no furnitures.");return}n.furnitures.innerHTML=b(t.furnitures),f.push(...t.furnitures),$(t)}catch(t){C(`Помилка при завантаженні меблів по категоріях: ${t}`)}finally{y()}}}async function K(){d++,h();try{const e=u&&u!=="1"?await x(u,d):await w(d);if(e.furnitures.length===0){v("Sorry, there are no furnitures.");return}n.furnitures.insertAdjacentHTML("beforeend",b(e.furnitures)),f.push(...e.furnitures),R(),$(e)}catch(e){C(`Помилка при завантаженні додаткових меблів: ${e}`)}finally{y()}}n.categories.addEventListener("click",z);n.furnitures.addEventListener("click",V);n.loadMoreBtn.addEventListener("click",K);async function U(){h();try{const e=await O(),r=[{_id:1,name:"Всі товари"},...e];P(r)}catch(e){C(`Помилка при отриманні категорій: ${e}`)}finally{y()}W()}async function W(){h();try{const e=await w();f.push(...e.furnitures),n.furnitures.innerHTML=b(e.furnitures),$(e)}catch(e){C(`Помилка при отриманні меблів: ${e}`)}finally{y()}}U();const G=async(e=1)=>{const r=await p.get("https://furniture-store.b.goit.study/api/feedbacks",{params:{limit:8,page:e}});return console.log(r.data),r.data},_=document.querySelector("#feedback-list");async function J(){try{const e=await G(),i=((e==null?void 0:e.feedbacks)||[]).slice(0,10);if(!i.length){_.innerHTML='<li class="swiper-slide">Відгуків поки немає.</li>';return}const o=i.map(t=>`
      <li class="swiper-slide feedback-item">
        <div class="feedback-card">
          <div class="feedback-stars">
            ${Q(t.rate)}
          </div>
          <p class="feedback-text">"${t.descr}"</p>
          <h3 class="feedback-author">${t.name}</h3>
        </div>
      </li>
    `).join("");_.innerHTML=o,new E(".feedback-swiper",{loop:!1,spaceBetween:20,slidesPerView:1,navigation:{nextEl:"#feedback-next",prevEl:"#feedback-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2},1024:{slidesPerView:3}}})}catch(e){console.error("Помилка завантаження відгуків:",e),_.innerHTML='<li class="swiper-slide">Не вдалося завантажити відгуки.</li>'}}function Q(e){const i="./img/sprite.svg#icon-star";let o="";for(let t=1;t<=5;t++){let s=0;e>=t?s=100:e>t-1&&e<t&&(s=(e-(t-1))*100);const a=Math.random().toString(36).slice(2,8),l=`clip-star-${t}-${a}`;o+=`
      <svg class="star" width="21" height="21" aria-hidden="true" focusable="false" viewBox="0 0 24 24" style="vertical-align: middle;">
        <defs>
          <clipPath id="${l}">
            <rect x="0" y="0" width="${s}%" height="100%"></rect>
          </clipPath>
        </defs>
        <!-- gray star background -->
        <use xlink:href="${i}" fill="#e6e6e6"></use>
        <!-- colored star clipped by fillPercent -->
        <use xlink:href="${i}" fill="black" clip-path="url(#${l})"></use>
      </svg>`}return o}J();async function X(){try{const{data:e}=await p.get("https://furniture-store.b.goit.study/api/furnitures?type=popular");console.log("Меблі:",e);const{furnitures:r,totalItems:i,page:o,limit:t}=e;console.log("Меблі:",r),console.log("Всього товарів:",i),console.log("Сторінка:",o),console.log("Ліміт:",t);const s=document.querySelector(".swiper-wrapper"),a=r.map(c=>`
      <li class="furniture-card swiper-slide">
      <div class = "furniture-card-box-img">
        <img class = "furniture-card-img" src="${c.images[1]}" alt="${c.name}"

          /></div>
          <div class = "box__product-card-info">
        <p>${c.name}</p>
        <div class = "box__color">

<div class="color" style="background-color: ${c.color[0]}; width: 24px; height: 24px;"></div>
   <div class="color" style="background-color: ${c.color[1]}; width: 24px; height: 24px;"></div>
   <div class="color" style="background-color: ${c.color[2]}; width: 24px; height: 24px;"></div>

        </div>
        <p>${c.price*42} грн</p></div>
        <button class = "btn__furniture-details-modal" type = "button">Детальніше</button>
      </li>
    `).join("");s.innerHTML=a;const l=new Swiper(".mySwiper",{slidesPerView:1.2,spaceBetween:16,pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".btn-right",prevEl:".btn-left",disabledClass:"swiper-button-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:4,spaceBetween:24}}})}catch(e){console.error("Помилка запиту:",e.message)}}X();document.addEventListener("DOMContentLoaded",()=>{new B(".accordion-container",{duration:300,showMultiple:!1,openOnInit:[]})});
//# sourceMappingURL=index.js.map
