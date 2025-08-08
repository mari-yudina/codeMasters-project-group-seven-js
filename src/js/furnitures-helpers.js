import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import refs from "./refs";

export function clearFilterBtn() {
    refs.categoriesTumbs.forEach(btn =>
        btn.classList.remove('categories__thumb--active')
    );
}

export function hidden(furnitures) {
    const { page, limit, totalItems } = furnitures;

    if (page * limit < totalItems) {
        refs.loadMore.classList.remove('is-hidden');
    } else {
        refs.loadMore.classList.add('is-hidden');

    }
}



export function showLoader() {
    refs.spinner.classList.remove('loader-box-hidden');
};

export function hideLoader() {
    refs.spinner.classList.add('loader-box-hidden');
};

export function warningMessage(message) {
    iziToast.warning({
        messageColor: '#fff',
        iconUrl: caution,
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
        iconUrl: errorMessage,
        position: 'topRight',
        color: '#ef4040',
        message
    });
}



