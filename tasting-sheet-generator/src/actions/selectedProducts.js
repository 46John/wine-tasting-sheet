export const ADD_SELECTED_PRODUCT = "ADD_SELECTED_PRODUCT";
export const ADD_ALL_PRODUCTS = "ADD_ALL_PRODUCTS";
export const REMOVE_ALL_PRODUCTS = "REMOVE_ALL_PRODUCTS";
export const REMOVE_SELECTED_PRODUCT = "REMOVE_SELECTED_PRODUCT";
export const REORDER_SELECTED_PRODUCT = "REORDER_SELECTED_PRODUCT";
export const SET_SELCTED_PRODUCT_PRICE = "SET_SELECTED_PRODUCT_PRICE";

export const addSelectedProduct = (product) => {
    return {
        type : ADD_SELECTED_PRODUCT,
        product
    }
}


export const addAllProducts = (products) => {
    return {
        type: ADD_ALL_PRODUCTS,
        products
    }
}

export const removeAllProducts = () => {
    return {
        type: REMOVE_ALL_PRODUCTS
    }
}

export const removeSelectedProduct = (id) => {
    return {
        type : REMOVE_SELECTED_PRODUCT,
        id
    }
}

export const reorderSelectedProduct = (product, direction) => {
    return {
        type : REORDER_SELECTED_PRODUCT,
        product,
        direction
    }
}

export const setSelectedProductPrice = (id, price) => {
    return {
        type: SET_SELCTED_PRODUCT_PRICE,
        id,
        price
    }
}