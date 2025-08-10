import { openModal } from "./furniture-modal";
import { getCategoryList, getFurnitures } from "./furnitures-api";
import { handlerCategoriesFilter, onLoadMore } from "./furnitures-handlers";
import { hideLoader, showLoader, errorMessage, showLoadMoreButton, lastPageMessage } from "./furnitures-helpers";
import { categoriesItemRender, furnituresCardMarkup } from "./render-functions";
import refs from "./refs";
import { data } from "./furniture-data";




refs.categories.addEventListener('click', handlerCategoriesFilter);
refs.furnitures.addEventListener('click', openModal);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

async function initPage() {
    showLoader();
    try {
        const categoryList = await getCategoryList();
        const allCategories = [{ _id: 1, name: 'Всі товари' }, ...categoryList];
        categoriesItemRender(allCategories);
    } catch (error) {
        errorMessage(`Помилка при отриманні категорій: ${error}`)
    } finally {
        hideLoader();
    }

    initFurnitures();
}

async function initFurnitures() {
    showLoader();

    try {
        const furnitures = await getFurnitures();
        data.push(...furnitures.furnitures);
        refs.furnitures.innerHTML = furnituresCardMarkup(furnitures.furnitures);
        lastPageMessage(furnitures);
    } catch (error) {
        errorMessage(`Помилка при отриманні меблів: ${error}`)
    } finally {
        hideLoader();
    }
}

initPage();