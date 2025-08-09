import axios from 'axios';

export const getFeedback = async (page = 1) => {

    const response = await axios.get('https://furniture-store.b.goit.study/api/feedbacks');

    console.log(response.data);//---------------------------log
    return response.data;
}