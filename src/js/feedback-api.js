import axios from 'axios';

export const getFeedback = async (page = 1) => {

    const response = await axios.get('https://furniture-store.b.goit.study/api/feedbacks', {
        params: {
            limit: 10,
            page
        }
    });

    return response.data;
}