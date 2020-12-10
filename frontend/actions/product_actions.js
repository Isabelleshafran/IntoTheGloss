import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS, 
    products 
})

const receiveProduct = product => ({
    type: RECEIVE_PRODUCT, 
    product
})


export const fetchProducts = () => dispatch => (
    APIUtil.fetchProducts()
        .then(products => dispatch(receiveProducts(products)))
)

export const fetchProduct = (productId) => dispatch => (
    APIUtil.fetchProduct(productId)
        .then(product => dispatch(receiveProduct(product)))
)