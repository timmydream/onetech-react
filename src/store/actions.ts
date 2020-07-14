export const itemsLoad = (items: any) => (
    { type: "ITEMS_LOAD", payload: items }
);

export const addToCart = (id: any) => (
    { type: "ADD_TO_CART", payload: id }
);

export const delFromCart = (id: any) => (
    { type: "DEL_FROM_CART", payload: id }
);

export const delAllFromCart = (id: any) => (
    { type: "DEL_ALL_FROM_CART", payload: id }
);