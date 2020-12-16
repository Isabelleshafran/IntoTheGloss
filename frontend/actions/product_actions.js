import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS, 
    products 
})

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT, 
    product
})

export const fetchProducts = (name) => dispatch => (
    APIUtil.fetchProducts(name)
        .then(products => dispatch(receiveProducts(products)))
)

export const fetchProduct = (productId) => dispatch => (
    APIUtil.fetchProduct(productId)
        .then(product => {
            dispatch(receiveProduct(product))})
)

export const fetchSearch = searchTerm => dispatch => (
    APIUtil.fetchSearch(searchTerm)
        .then(products => dispatch(receiveProducts(products)))
)