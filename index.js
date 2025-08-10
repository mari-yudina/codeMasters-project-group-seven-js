import{i as u,a as g,S as q,A as H}from"./assets/vendor-B4sZL_Dy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=document.querySelector(this.getAttribute("href"));o&&o.scrollIntoView({behavior:"smooth"}),_()})});const A=document.querySelector(".burger-btn"),y=document.querySelector(".mobile-menu"),O=document.querySelector(".mobile-close-btn");A.addEventListener("click",()=>{y.classList.add("is-open"),document.body.classList.add("no-scroll")});O.addEventListener("click",_);y.addEventListener("click",e=>{e.target===y&&_()});document.addEventListener("keydown",e=>{e.key==="Escape"&&_()});function _(){y.classList.remove("is-open"),document.body.classList.remove("no-scroll")}const n={categories:document.querySelector(".our-furnitures__categories"),categoriesItems:document.querySelectorAll(".categories__item"),categoriesTumbs:document.querySelectorAll(".categories__thumb"),furnitures:document.querySelector(".our-furnitures__list"),loadMoreBtn:document.querySelector(".our-furnitures__load-more-btn"),modal:document.querySelector(".modal"),modalFurniture:document.querySelector(".modal-furniture"),modalCloseBtn:document.querySelector(".modal__close-btn"),spinner:document.querySelector(".loader-box")};function V(e){n.categoriesItems.forEach((t,o)=>{const i=e[o],r=t.querySelector(".categories__thumb"),s=`<p class="categories__item__name" data-id="${i._id??"1"}">${i.name}</p>`;r.insertAdjacentHTML("beforeend",s)})}function M(e){return e.map(({_id:t,name:o,images:i,price:r,color:s})=>`
            <li class="furnitures__item" data-id="${t}">
                <img class="furnitures__image" src="${i[0]}" alt="${o}" height="277"/>
                <p class="furnitures__card-title">${o}</p>
                <ul class="furnitures__colors-list furnitures__colors-list__card">${Z(s)}</ul>
                <p class="furnitures__price">${r*42} грн</p>
                <button class="btn btn__furniture-details-modal furnitures__details-btn">Детальніше</button>
            </li>
        `).join("")}function j({_id:e,name:t,images:o,description:i,price:r,color:s,category:a,rate:l,sizes:c}){return`
        <div class="modal-furniture__image-list">${D(o)}</div>
        <div class="modal-furniture__content data-id="${e}">
            <p class="modal-furniture__title">${t}</p>
            <p class="modal-furniture__category">${a.name}</p>
            <p class="modal-furniture__price">${r*42} грн</p>
            <div class="modal-furniture__rate">
                <span class="rating" data-rate="${l}">★★★★★</span>
            </div>
            <p class="modal-furniture__color-title">Колір</p>
            <ul class="furnitures__colors-list">${N(s)}</ul>
            <p class="modal-furniture__description">${i}</p>
            <p class="modal-furniture__sizes">Розміри: ${c}</p>
             <button class=" btn modal-furniture__btn" type="button">
            Перейти до замовлення
        </button>
        </div>
  `}function Z(e){return e.map(t=>`
            <li class="furnitures__colors">
                <div class="furnitures__colors__item" style="background-color: ${t};"></div>
            </li>
        `).join("")}function N(e){return e.map((t,o)=>`
        <li class="furnitures__colors">
            <label class="color-radio">
                <input 
                    type="radio" 
                    name="color" 
                    value="${t}" 
                    class="color-radio__input" 
                    id="color-${o}"
                >
                <span 
                    class="color-radio__circle" 
                    style="background-color: ${t};"
                ></span>
            </label>
        </li>
    `).join("")}function D(e){return`
    <ul class="furniture-gallery">
      <li class="gallery-item big">
        <img src="${e[0]}" alt="Велике фото">
      </li>
      <li class="gallery-item small">
            <div class="gallery-item-thumb">
                <img src="${e[1]}" alt="Мале фото 1">
            </div>
            <div class="gallery-item-thumb">
                <img src="${e[2]}" alt="Мале фото 2">
            </div>
      </li>
    </ul>
  `}let p=[];const h=document.getElementById("orderModal"),R=h.querySelector(".order-modal__overlay"),z=h.querySelector(".order-modal__close"),m=h.querySelector(".order-modal__form");let B=null,F=null;function $(e,t){B=e,F=t,h.classList.remove("is-hidden"),document.body.classList.add("modal-open")}function b(){h.classList.add("is-hidden"),document.body.classList.remove("modal-open"),m.reset()}z.addEventListener("click",b);R.addEventListener("click",b);window.addEventListener("keydown",e=>{e.key==="Escape"&&b()});m.addEventListener("submit",async e=>{e.preventDefault();const t=m.email.value.trim(),o=m.phone.value.trim(),i=m.comment.value.trim();if(!t||!o){u.error({title:"Помилка",message:"Будь ласка, заповніть обов’язкові поля: пошта і телефон."});return}const r={email:t,phone:o,comment:i,modelId:B,color:F};try{const s=await fetch("https://furniture-store.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!s.ok){const a=await s.json();u.error({title:"Помилка",message:a.message||"Сталася помилка при надсиланні заявки."});return}u.success({title:"Успішно",message:"Заявку надіслано!"}),b()}catch{u.error({title:"Помилка",message:"Не вдалося надіслати заявку. Спробуйте пізніше."})}});document.addEventListener("click",e=>{const t=e.target.closest(".modal-furniture__btn");if(!t)return;const o=t.dataset.modelId||null,i=t.dataset.color||null;document.querySelectorAll(".modal.modal--is-open").forEach(s=>{s.classList.remove("modal--is-open"),document.body.classList.remove("body--no-scroll")}),$(o,i)});window.openOrderModal=$;n.modalCloseBtn.addEventListener("click",C);n.modal.addEventListener("click",e=>{e.target===n.modal&&C()});async function K(e){document.body.classList.add("body--no-scroll");const t=e.target.closest(".furnitures__details-btn");if(!t)return;const o=t.closest(".furnitures__item");if(!o)return;const i=o.dataset.id,r=p.find(({_id:s})=>s===i);n.modalFurniture.innerHTML=j(r),n.modal.classList.add("modal--is-open"),document.addEventListener("keydown",P),document.querySelectorAll(".rating").forEach(s=>{const l=parseFloat(s.dataset.rate)/5*100;s.style.setProperty("--rating-percent",`${l}%`)})}function C(){n.modal.classList.remove("modal--is-open"),n.modalFurniture.innerHTML="",document.removeEventListener("keydown",P),document.body.classList.remove("body--no-scroll")}function P(e){e.key==="Escape"&&C()}n.modalFurniture.addEventListener("click",e=>{const t=e.target.closest(".modal-furniture__btn");if(!t)return;const o=t.dataset.modelId,i=t.dataset.color;$(o,i),C()});const U=async()=>(await g.get("https://furniture-store.b.goit.study/api/categories")).data,S=async(e=1)=>(await g.get("https://furniture-store.b.goit.study/api/furnitures",{params:{limit:8,page:e}})).data,I=async(e,t=1)=>(await g.get("https://furniture-store.b.goit.study/api/furnitures",{params:{category:e,limit:8,page:t}})).data,W="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_78)'%3e%3cpath%20d='M11.907%203.02393C11.9364%203.00781%2011.9695%202.99954%2012.003%202.99993C12.0361%202.9998%2012.0686%203.00805%2012.0975%203.02393C12.1318%203.0445%2012.1599%203.07407%2012.1785%203.10943L22.464%2020.6099C22.518%2020.6999%2022.5165%2020.7959%2022.467%2020.8844C22.448%2020.9207%2022.4202%2020.9517%2022.386%2020.9744C22.3563%2020.9926%2022.3218%2021.0015%2022.287%2020.9999H1.71904C1.68422%2021.0016%201.64971%2020.9927%201.62004%2020.9744C1.58592%2020.9517%201.55807%2020.9207%201.53904%2020.8844C1.51432%2020.8428%201.50153%2020.7952%201.50206%2020.7468C1.50259%2020.6983%201.51642%2020.651%201.54204%2020.6099L11.826%203.10943C11.8448%203.07411%2011.8728%203.04456%2011.907%203.02393ZM13.473%202.34893C13.3246%202.09027%2013.1105%201.87538%2012.8524%201.72594C12.5942%201.5765%2012.3013%201.4978%2012.003%201.4978C11.7048%201.4978%2011.4118%201.5765%2011.1537%201.72594C10.8956%201.87538%2010.6815%202.09027%2010.533%202.34893L0.247541%2019.8494C-0.437959%2021.0164%200.384041%2022.4999%201.71754%2022.4999H22.287C23.6205%2022.4999%2024.444%2021.0149%2023.757%2019.8494L13.473%202.34893Z'%20fill='white'%20/%3e%3cpath%20d='M10.5031%2017.9999C10.5031%2017.8029%2010.5419%2017.6079%2010.6172%2017.4259C10.6926%2017.2439%2010.8031%2017.0786%2010.9424%2016.9393C11.0817%2016.8%2011.247%2016.6895%2011.429%2016.6141C11.611%2016.5387%2011.8061%2016.4999%2012.0031%2016.4999C12.2%2016.4999%2012.3951%2016.5387%2012.5771%2016.6141C12.7591%2016.6895%2012.9244%2016.8%2013.0637%2016.9393C13.203%2017.0786%2013.3135%2017.2439%2013.3889%2017.4259C13.4643%2017.6079%2013.5031%2017.8029%2013.5031%2017.9999C13.5031%2018.3978%2013.345%2018.7793%2013.0637%2019.0606C12.7824%2019.3419%2012.4009%2019.4999%2012.0031%2019.4999C11.6052%2019.4999%2011.2237%2019.3419%2010.9424%2019.0606C10.6611%2018.7793%2010.5031%2018.3978%2010.5031%2017.9999ZM10.6501%208.99243C10.6301%208.80319%2010.6501%208.61187%2010.7089%208.43087C10.7676%208.24988%2010.8637%208.08325%2010.991%207.94181C11.1183%207.80037%2011.2739%207.68727%2011.4478%207.60986C11.6216%207.53244%2011.8098%207.49243%2012.0001%207.49243C12.1903%207.49243%2012.3785%207.53244%2012.5523%207.60986C12.7262%207.68727%2012.8818%207.80037%2013.0091%207.94181C13.1364%208.08325%2013.2325%208.24988%2013.2913%208.43087C13.35%208.61187%2013.37%208.80319%2013.3501%208.99243L12.8251%2014.2529C12.8074%2014.4596%2012.7129%2014.6521%2012.5601%2014.7924C12.4073%2014.9327%2012.2075%2015.0105%2012.0001%2015.0105C11.7926%2015.0105%2011.5928%2014.9327%2011.44%2014.7924C11.2872%2014.6521%2011.1927%2014.4596%2011.1751%2014.2529L10.6501%208.99243Z'%20fill='white'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_78'%3e%3crect%20width='24'%20height='24'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",G="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_57)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'%20/%3e%3cpath%20d='M6.969%206.96912C7.03867%206.89927%207.12143%206.84386%207.21255%206.80605C7.30366%206.76824%207.40135%206.74878%207.5%206.74878C7.59865%206.74878%207.69633%206.76824%207.78745%206.80605C7.87857%206.84386%207.96133%206.89927%208.031%206.96912L12%2010.9396L15.969%206.96912C16.0387%206.89939%2016.1215%206.84407%2016.2126%206.80633C16.3037%206.7686%2016.4014%206.74917%2016.5%206.74917C16.5986%206.74917%2016.6963%206.7686%2016.7874%206.80633C16.8785%206.84407%2016.9613%206.89939%2017.031%206.96912C17.1007%207.03885%2017.156%207.12164%2017.1938%207.21274C17.2315%207.30385%2017.2509%207.4015%2017.2509%207.50012C17.2509%207.59874%2017.2315%207.69639%2017.1938%207.7875C17.156%207.8786%2017.1007%207.96139%2017.031%208.03112L13.0605%2012.0001L17.031%2015.9691C17.1007%2016.0389%2017.156%2016.1216%2017.1938%2016.2127C17.2315%2016.3039%2017.2509%2016.4015%2017.2509%2016.5001C17.2509%2016.5987%2017.2315%2016.6964%2017.1938%2016.7875C17.156%2016.8786%2017.1007%2016.9614%2017.031%2017.0311C16.9613%2017.1009%2016.8785%2017.1562%2016.7874%2017.1939C16.6963%2017.2316%2016.5986%2017.2511%2016.5%2017.2511C16.4014%2017.2511%2016.3037%2017.2316%2016.2126%2017.1939C16.1215%2017.1562%2016.0387%2017.1009%2015.969%2017.0311L12%2013.0606L8.031%2017.0311C7.96127%2017.1009%207.87848%2017.1562%207.78737%2017.1939C7.69626%2017.2316%207.59861%2017.2511%207.5%2017.2511C7.40138%2017.2511%207.30373%2017.2316%207.21262%2017.1939C7.12151%2017.1562%207.03873%2017.1009%206.969%2017.0311C6.89927%2016.9614%206.84395%2016.8786%206.80621%2016.7875C6.76847%2016.6964%206.74905%2016.5987%206.74905%2016.5001C6.74905%2016.4015%206.76847%2016.3039%206.80621%2016.2127C6.84395%2016.1216%206.89927%2016.0389%206.969%2015.9691L10.9395%2012.0001L6.969%208.03112C6.89915%207.96145%206.84374%207.87869%206.80593%207.78757C6.76812%207.69645%206.74866%207.59877%206.74866%207.50012C6.74866%207.40147%206.76812%207.30379%206.80593%207.21267C6.84374%207.12155%206.89915%207.03879%206.969%206.96912Z'%20fill='%23FAFAFB'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_57'%3e%3crect%20width='24'%20height='24'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";function J(){n.categoriesTumbs.forEach(e=>e.classList.remove("categories__thumb--active"))}function v(){n.spinner.classList.remove("loader-box-hidden"),T()}function L(){n.spinner.classList.add("loader-box-hidden")}function E(e){u.warning({messageColor:"#fff",iconUrl:W,iconColor:"#ffffffff",maxWidth:"350px",position:"topRight",color:"#ffa000",message:e})}function w(e){u.error({messageColor:"#fff",iconColor:"#fff",maxWidth:"350px",iconUrl:G,position:"topRight",color:"#ef4040",message:e})}function Q(){const e=document.querySelector(".furnitures__item");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}function x(e){Number(e.page)*Number(e.limit)>=e.totalItems?(E("Усі меблі завантажено!"),T()):X()}function X(){n.loadMoreBtn.classList.remove("is-hidden")}function T(){n.loadMoreBtn.classList.add("is-hidden")}let f=1,d=null;async function Y(e){var i;const t=e.target.closest("li");if(!t)return;const o=t.querySelector(".categories__thumb");if(!o.classList.contains("categories__thumb--active")){f=1,p.length=0,v(),J(),o.classList.add("categories__thumb--active"),d=((i=t.querySelector(".categories__item__name"))==null?void 0:i.dataset.id)||null;try{const r=d&&d!=="1"?await I(d,f):await S(f);if(r.furnitures.length===0){E("Sorry, there are no furnitures.");return}n.furnitures.innerHTML=M(r.furnitures),p.push(...r.furnitures),x(r)}catch(r){w(`Помилка при завантаженні меблів по категоріях: ${r}`)}finally{L()}}}async function ee(){f++,v();try{const e=d&&d!=="1"?await I(d,f):await S(f);if(e.furnitures.length===0){E("Sorry, there are no furnitures.");return}n.furnitures.insertAdjacentHTML("beforeend",M(e.furnitures)),p.push(...e.furnitures),Q(),x(e)}catch(e){w(`Помилка при завантаженні додаткових меблів: ${e}`)}finally{L()}}n.categories.addEventListener("click",Y);n.furnitures.addEventListener("click",K);n.loadMoreBtn.addEventListener("click",ee);async function te(){v();try{const e=await U(),t=[{_id:1,name:"Всі товари"},...e];V(t)}catch(e){w(`Помилка при отриманні категорій: ${e}`)}finally{L()}re()}async function re(){v();try{const e=await S();p.push(...e.furnitures),n.furnitures.innerHTML=M(e.furnitures),x(e)}catch(e){w(`Помилка при отриманні меблів: ${e}`)}finally{L()}}te();const oe=async(e=1)=>{const t=await g.get("https://furniture-store.b.goit.study/api/feedbacks",{params:{limit:8,page:e}});return console.log(t.data),t.data},k=document.querySelector("#feedback-list");async function se(){try{const e=await oe(),o=((e==null?void 0:e.feedbacks)||[]).slice(0,10);if(!o.length){k.innerHTML='<li class="swiper-slide">Відгуків поки немає.</li>';return}const i=o.map(r=>`
      <li class="swiper-slide feedback-item">
        <div class="feedback-card">
          <div class="feedback-stars">
            ${ie(r.rate)}
          </div>
          <p class="feedback-text">"${r.descr}"</p>
          <h3 class="feedback-author">${r.name}</h3>
        </div>
      </li>
    `).join("");k.innerHTML=i,new q(".feedback-swiper",{loop:!1,spaceBetween:20,slidesPerView:1,navigation:{nextEl:"#feedback-next",prevEl:"#feedback-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2},1024:{slidesPerView:3}}})}catch(e){console.error("Помилка завантаження відгуків:",e),k.innerHTML='<li class="swiper-slide">Не вдалося завантажити відгуки.</li>'}}function ie(e){const o="./img/sprite.svg#icon-star";let i="";for(let r=1;r<=5;r++){let s=0;e>=r?s=100:e>r-1&&e<r&&(s=(e-(r-1))*100);const a=Math.random().toString(36).slice(2,8),l=`clip-star-${r}-${a}`;i+=`
      <svg class="star" width="21" height="21" aria-hidden="true" focusable="false" viewBox="0 0 24 24" style="vertical-align: middle;">
        <defs>
          <clipPath id="${l}">
            <rect x="0" y="0" width="${s}%" height="100%"></rect>
          </clipPath>
        </defs>
        <!-- gray star background -->
        <use xlink:href="${o}" fill="#e6e6e6"></use>
        <!-- colored star clipped by fillPercent -->
        <use xlink:href="${o}" fill="black" clip-path="url(#${l})"></use>
      </svg>`}return i}se();async function ne(){try{const{data:e}=await g.get("https://furniture-store.b.goit.study/api/furnitures?type=popular");console.log("Меблі:",e);const{furnitures:t,totalItems:o,page:i,limit:r}=e;console.log("Меблі:",t),console.log("Всього товарів:",o),console.log("Сторінка:",i),console.log("Ліміт:",r);const s=document.querySelector(".swiper-wrapper"),a=t.map(c=>`
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
    `).join("");s.innerHTML=a;const l=new q(".mySwiper",{slidesPerView:1,spaceBetween:16,pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".btn-right",prevEl:".btn-left",disabledClass:"swiper-button-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:4,spaceBetween:24}}})}catch(e){console.error("Помилка запиту:",e.message)}}ne();document.addEventListener("DOMContentLoaded",()=>{new H(".accordion-container",{duration:300,showMultiple:!1,openOnInit:[]})});
//# sourceMappingURL=index.js.map
