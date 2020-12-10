export const asArray = ({ products }) => (
    Object.keys(products).map(key => products[key])
);