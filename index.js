import{a as g,i as w}from"./assets/vendor-CyHMW-y7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=document.querySelector(this.getAttribute("href"));o&&o.scrollIntoView({behavior:"smooth"}),_()})});const x=document.querySelector(".burger-btn"),p=document.querySelector(".mobile-menu"),C=document.querySelector(".mobile-close-btn");x.addEventListener("click",()=>{p.classList.add("is-open"),document.body.classList.add("no-scroll")});C.addEventListener("click",_);p.addEventListener("click",e=>{e.target===p&&_()});document.addEventListener("keydown",e=>{e.key==="Escape"&&_()});function _(){p.classList.remove("is-open"),document.body.classList.remove("no-scroll")}const i={categories:document.querySelector(".our-furnitures__categories"),categoriesItems:document.querySelectorAll(".categories__item"),categoriesTumbs:document.querySelectorAll(".categories__thumb"),furnitures:document.querySelector(".our-furnitures__list"),loadMore:document.querySelector(".our-furnitures__load-more-btn"),modal:document.querySelector(".modal"),modalFurniture:document.querySelector(".modal-furniture"),openOredrBtn:document.querySelector(".modal-furniture__btn"),modalCloseBtn:document.querySelector(".modal__close-btn"),spinner:document.querySelector(".loader-box")};function T(e){i.categoriesItems.forEach((t,o)=>{const n=e[o],r=t.querySelector(".categories__thumb"),s=`<p class="categories__item__name" data-id="${n._id??"1"}">${n.name}</p>`;r.insertAdjacentHTML("beforeend",s)})}function b(e){return e.map(({_id:t,name:o,images:n,price:r,color:s})=>`
            <li class="furnitures__item" data-id="${t}">
                <img class="furnitures__image" src="${n[0]}" alt="${o}" height="277"/>
                <p class="furnitures__title">${o}</p>
                <ul class="furnitures__colors__list">${$(s)}</ul>
                <p class="furnitures__price">${r} грн</p>
                <button class="furnitures__details-btn">Детальніше</button>
            </li>
        `).join("")}function I({_id:e,name:t,images:o,description:n,price:r,color:s,category:c,rate:m,sizes:a}){return`
        <ul class="modal-furniture__image-list">${o.map(k=>`
      <li class="modal-furniture__image">
        <div class="modal-furniture__thumb">
          <img class="modal-furniture__img" src=${k} alt="${t}" width="166" height="122">
        </div>
      </li>
    `).join("")}</ul>
        <div class="modal-furniture__content data-id="${e}">
            <p class="modal-furniture__title">${t}</p>
            <p class="modal-furniture__category">${c.name}</p>
            <p class="modal-furniture__price">${r} грн</p>
            <div class="modal-furniture__rate">
                <span class="rating" data-rate="${m}">★★★★★</span>
            </div>
            <p class="modal-furniture__color-title">Колір</p>
            <ul class="furnitures__colors__list">${$(s)}</ul>
            <p class="modal-furniture__description">${n}</p>
            <p class="modal-furniture__sizes">Розміри: ${a}</p>
        </div>
  `}function $(e){return e.map(t=>`
            <li class="furnitures__colors">
                <div class="furnitures__colors__item" style="background-color: ${t};"></div>
            </li>
        `).join("")}let l=[];i.modalCloseBtn.addEventListener("click",v);i.modal.addEventListener("click",e=>{e.target===i.modal&&v()});i.modal.addEventListener("click",F);async function B(e){document.body.classList.add("body--no-scroll");const t=e.target.closest(".furnitures__details-btn");if(!t)return;const o=t.closest(".furnitures__item");if(!o)return;const n=o.dataset.id,r=l.find(({_id:s})=>s===n);console.log(r),i.modalFurniture.innerHTML=I(r),i.modal.classList.add("modal--is-open"),document.addEventListener("keydown",S),document.querySelectorAll(".rating").forEach(s=>{const m=parseFloat(s.dataset.rate)/5*100;s.style.setProperty("--rating-percent",`${m}%`)})}function v(){i.modal.classList.remove("modal--is-open"),i.modalFurniture.innerHTML="",document.removeEventListener("keydown",S),document.body.classList.remove("body--no-scroll")}function S(e){e.key==="Escape"&&v()}function F(e){const t=e.target.closest(".furnitures__colors__item");t&&(document.querySelectorAll(".furnitures__colors__item").forEach(o=>o.classList.remove("furnitures__colors__item--pressed")),t.classList.add("furnitures__colors__item--pressed"))}const A=async()=>{const e=await g.get("https://furniture-store.b.goit.study/api/categories");return console.log(e.data),e.data},L=async(e=1)=>{const t=await g.get("https://furniture-store.b.goit.study/api/furnitures",{params:{limit:8,page:e}});return console.log(t.data),t.data},E=async(e,t=1)=>{const o=await g.get("https://furniture-store.b.goit.study/api/furnitures",{params:{category:e,limit:8,page:t}});return console.log(o.data),o.data};function P(){i.categoriesTumbs.forEach(e=>e.classList.remove("categories__thumb--active"))}function M(e){const{page:t,limit:o,totalItems:n}=e;t*o<n?i.loadMore.classList.remove("is-hidden"):i.loadMore.classList.add("is-hidden")}function y(){i.spinner.classList.remove("loader-box-hidden")}function h(){i.spinner.classList.add("loader-box-hidden")}function q(e){w.warning({messageColor:"#fff",iconUrl:caution,iconColor:"#ffffffff",maxWidth:"350px",position:"topRight",color:"#ffa000",message:e})}function f(e){w.error({messageColor:"#fff",iconColor:"#fff",maxWidth:"350px",iconUrl:f,position:"topRight",color:"#ef4040",message:e})}let d=1,u=null;async function H(e){var n;const t=e.target.closest("li");if(!t)return;const o=t.querySelector(".categories__thumb");if(!o.classList.contains("categories__thumb--active")){d=1,l.length=0,y(),P(),o.classList.add("categories__thumb--active"),u=((n=t.querySelector(".categories__item__name"))==null?void 0:n.dataset.id)||null;try{const r=u&&u!=="1"?await E(u,d):await L(d);if(r.furnitures.length===0){q("Sorry, there are no furnitures.");return}i.furnitures.innerHTML=b(r.furnitures),l.push(...r.furnitures),M(r),l.length>=+r.totalItems&&alert("Усі меблі завантажено!")}catch(r){f(`Помилка при завантаженні меблів по категоріях: ${r}`)}finally{h()}}}async function O(){d++,y();try{const e=u&&u!=="1"?await E(u,d):await L(d);if(e.furnitures.length===0){q("Sorry, there are no furnitures.");return}i.furnitures.insertAdjacentHTML("beforeend",b(e.furnitures)),l.push(...e.furnitures),M(e),j(),l.length>=+e.totalItems&&alert("Усі меблі завантажено!")}catch(e){f(`Помилка при завантаженні додаткових меблів: ${e}`)}finally{h()}}function j(){const e=i.furnitures.lastElementChild;e&&e.scrollIntoView({behavior:"smooth",block:"start"})}i.categories.addEventListener("click",H);i.furnitures.addEventListener("click",B);i.loadMore.addEventListener("click",O);async function V(){y();try{const e=await A(),t=[{_id:1,name:"Всі товари"},...e];T(t)}catch(e){f(`Помилка при отриманні категорій: ${e}`)}finally{h()}N()}async function N(){y();try{const e=await L();l.push(...e.furnitures),console.log("data",l),i.furnitures.innerHTML=b(e.furnitures)}catch(e){f(`Помилка при отриманні меблів: ${e}`)}finally{h()}}V();async function D(){try{const{data:e}=await g.get("https://furniture-store.b.goit.study/api/furnitures?type=popular");console.log("Меблі:",e);const{furnitures:t,totalItems:o,page:n,limit:r}=e;console.log("Меблі:",t),console.log("Всього товарів:",o),console.log("Сторінка:",n),console.log("Ліміт:",r);const s=document.querySelector(".swiper-wrapper"),c=t.map(a=>`
      <div class="furniture-card swiper-slide">
      <div class = "furniture-card-box-img">
        <img class = "furniture-card-img" src="${a.images[1]}" alt="${a.name}"

          /></div>
          <div class = "box__product-card-info">
        <p>${a.name}</p>
        <div class = "box__color">

<div class="color" style="background-color: ${a.color[0]}; width: 24px; height: 24px;"></div>
   <div class="color" style="background-color: ${a.color[1]}; width: 24px; height: 24px;"></div>
   <div class="color" style="background-color: ${a.color[2]}; width: 24px; height: 24px;"></div>

        </div>
        <p>${a.price*42} грн</p></div>
        <button class = "btn__furniture-details-modal" type = "button">Детальніше</button>
      </div>
    `).join("");s.innerHTML=c;const m=new Swiper(".mySwiper",{slidesPerView:1.2,spaceBetween:16,pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".btn-right",prevEl:".btn-left",disabledClass:"swiper-button-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:4,spaceBetween:24}}})}catch(e){console.error("Помилка запиту:",e.message)}}D();
//# sourceMappingURL=index.js.map
