import { getFurnitureByCategory, getFurnitures } from "./furnitures-api";
import { clearFilterBtn, errorMessage, hideLoader, lastPage, lastPageMessage, showLoader, smoothScrollLoadMore, warningMessage } from "./furnitures-helpers";
import { furnituresCardMarkup } from "./render-functions";
import { data } from "./furniture-data";
import refs from "./refs";

let page = 1;
let currentCategoryId = null;


export async function handlerCategoriesFilter(event) {
    const target = event.target.closest('li');
    if (!target) return;

    const selectedThumb = target.querySelector('.categories__thumb');
    if (selectedThumb.classList.contains('categories__thumb--active')) return;

    page = 1;
    data.length = 0;
    showLoader();

    clearFilterBtn();
    selectedThumb.classList.add('categories__thumb--active');

    currentCategoryId = target.querySelector('.categories__item__name')?.dataset.id || null;

    try {
        const filteredData = currentCategoryId && currentCategoryId !== '1'
            ? await getFurnitureByCategory(currentCategoryId, page)
            : await getFurnitures(page);
        if (filteredData.furnitures.length === 0) {
            warningMessage("Sorry, there are no furnitures.")
            return;
        }

        refs.furnitures.innerHTML = furnituresCardMarkup(filteredData.furnitures);
        data.push(...filteredData.furnitures);
        lastPage(filteredData);

    } catch (error) {
        errorMessage(`Помилка при завантаженні меблів по категоріях: ${error}`);
    } finally {
        hideLoader();
    }
}


export async function onLoadMore() {
    page++;
    showLoader();

    try {
        const filteredData = currentCategoryId && currentCategoryId !== '1'
            ? await getFurnitureByCategory(currentCategoryId, page)
            : await getFurnitures(page);

        if (filteredData.furnitures.length === 0) {
            warningMessage("Sorry, there are no furnitures.")
            return;
        }

        refs.furnitures.insertAdjacentHTML('beforeend', furnituresCardMarkup(filteredData.furnitures));
        data.push(...filteredData.furnitures);
        smoothScrollLoadMore();
        lastPageMessage(filteredData);

    } catch (error) {
        errorMessage(`Помилка при завантаженні додаткових меблів: ${error}`);
    } finally {
        hideLoader();
    }
}