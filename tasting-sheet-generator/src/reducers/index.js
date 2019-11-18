import { combineReducers } from 'redux';
import { products } from './products';
import { selectedProducts } from './selectedProducts';
import { eventInfo } from './eventInfo';
import { sheetOptions } from './sheetOptions';

export default combineReducers({
    allWines : products,
    selectedProducts,
    eventInfo,
    sheetOptions
});