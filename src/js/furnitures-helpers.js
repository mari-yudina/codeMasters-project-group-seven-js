import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import refs from "./refs";
import cautionIcon from '../img/icons/caution.svg';
import errorIcon from '../img/icons/error.svg';

export function clearFilterBtn() {
    refs.categoriesTumbs.forEach(btn =>
        btn.classList.remove('categories__thumb--active')
    );
}

export function showLoader() {
    refs.spinner.classList.remove('loader-box-hidden');
    hideLoadMoreButton()
}

export function hideLoader() {
    refs.spinner.classList.add('loader-box-hidden');
}

export function warningMessage(message) {
    iziToast.warning({
        messageColor: '#fff',
        iconUrl: cautionIcon,
        iconColor: '#ffffffff',
        maxWidth: '350px',
        position: 'topRight',
        color: '#ffa000',
        message
    });
}
export function errorMessage(message) {
    iziToast.error({
        messageColor: '#fff',
        iconColor: '#fff',
        maxWidth: '350px',
        iconUrl: errorIcon,
        position: 'topRight',
        color: '#ef4040',
        message
    });
}


export function smoothScrollLoadMore() {
    const galleryCard = document.querySelector('.furnitures__item');

    if (!galleryCard) return;

    const cardHeight = galleryCard.getBoundingClientRect().height;

    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth'
    });
}

export function lastPage(data) {
    if (Number(data.page) * Number(data.limit) >= data.totalItems) {
        hideLoadMoreButton();
    } else {
        showLoadMoreButton();
    }
}

export function lastPageMessage(data) {
    if (Number(data.page) * Number(data.limit) >= data.totalItems) {
        warningMessage("Усі меблі завантажено!");
        hideLoadMoreButton();
    } else {
        showLoadMoreButton();
    }
}


export function showLoadMoreButton() {
    refs.loadMoreBtn.classList.remove('is-hidden');
};
export function hideLoadMoreButton() {
    refs.loadMoreBtn.classList.add('is-hidden');
};

