import axios from 'axios';

export default async function getFeedback(page = 1) {

    const response = await axios.get('https://furniture-store.b.goit.study/api/feedbacks');

    return response.data;
}