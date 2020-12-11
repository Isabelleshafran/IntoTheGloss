export const fetchProducts = (name) => (
    $.ajax({
        method: 'GET', 
        url: 'api/products',
        data: { name }
    })
)

export const fetchProduct = productId => (
    $.ajax({
        method: 'GET', 
        url: `api/products/${productId}`
    })
)

