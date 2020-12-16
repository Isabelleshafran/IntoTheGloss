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

export const fetchSearch = searchTerm => (
    $.ajax({
        method: 'GET', 
        url: `/api/products/search/${searchTerm}`
    })
)

