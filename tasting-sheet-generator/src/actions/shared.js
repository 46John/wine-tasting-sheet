
import { receiveProducts } from './products';
import fetchProducts from '../utils/data';


export const handleInitialData = () => (dispatch) => {
    return fetchProducts()
    .then((products) => {
        dispatch(receiveProducts(products));
    });
}