import axios from 'axios';

export const fetchProductList = async (dispatch) => {
    try {
        const res = await axios.get(`https://demo7242716.mockable.io/products`);
        const productList = res.data.products;
        const categoryList = new Set();
        productList.forEach(item => {
            categoryList.add(item.category);
        })
        dispatch({
            type: 'FETCH_PRODUCTLIST',
            payload: { productList, categoryList: [...categoryList] }
        })
    } catch(err) {
        console.error(err);
        dispatch({
            type: 'FETCH_ERROR',
            payload: 'API Failed! Please try again later'
        })
    }
}
