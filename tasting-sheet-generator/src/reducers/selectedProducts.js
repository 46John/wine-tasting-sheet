import {
    ADD_ALL_PRODUCTS,
    ADD_SELECTED_PRODUCT,
    REMOVE_ALL_PRODUCTS,
    REMOVE_SELECTED_PRODUCT,
    REORDER_SELECTED_PRODUCT,
    SET_SELCTED_PRODUCT_PRICE
} from '../actions/selectedProducts';
import { reorderArrayByOne } from '../utils/helpers';

export const selectedProducts = (state=[], action) => {
    switch(action.type){
        case ADD_SELECTED_PRODUCT:
            return [...state, action.product];
        case ADD_ALL_PRODUCTS:
            return [...action.products];
        case REMOVE_ALL_PRODUCTS:
            return [];
        case REMOVE_SELECTED_PRODUCT:
            return [...state.filter((item)=> item.id !== action.id)];
        case REORDER_SELECTED_PRODUCT:
            const currentIndex = state.indexOf(action.product);
            if(action.direction === 'UP'){
                if(currentIndex - 1 >= 0){
                    return reorderArrayByOne(state, currentIndex, currentIndex - 1);
                }else{
                    return state;
                }
            }else{
                if(currentIndex + 1 < state.length){
                    return reorderArrayByOne(state, currentIndex, currentIndex + 1);
                }else{
                    return state;
                }
            }
            return state;
        case SET_SELCTED_PRODUCT_PRICE:
            return [...state.map((product) => {
                    if(product.id === action.id){
                        product.customPrice = action.price;
                    }
                    return product;
                })]
        default:
            return state;
    }
}