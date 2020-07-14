import { items } from "./items";
import { shoppingCart } from "./shoppingCart";

export const reducer = (state: any, action: any) => {
    return {
        itemList: items(state, action),
        shoppingCartList: shoppingCart(state, action),
    };
};