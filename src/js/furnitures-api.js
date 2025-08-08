import axios from 'axios';

export const getCategoryList = async () => {
    const response = await axios.get('https://furniture-store.b.goit.study/api/categories');
    console.log(response.data);  //-------------------log
    return response.data;
}

export const getFurnitures = async (page = 1) => {

    const response = await axios.get('https://furniture-store.b.goit.study/api/furnitures', {
        params: {
            limit: 8,
            page
        }
    })
    console.log(response.data);  //-------------------log
    return response.data;
}

export const getFurnitureByCategory = async (category, page = 1) => {

    const response = await axios.get(`https://furniture-store.b.goit.study/api/furnitures`, {
        params: {
            category,
            limit: 8,
            page
        }
    })
    console.log(response.data);  //-------------------log
    return response.data;
}