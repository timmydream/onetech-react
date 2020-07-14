export const shoppingCart = (state: any, action: any) => {
    if (state === undefined) {
        return {
            shoppingCart: [],
        };
    }
    switch (action.type) {
        case "ADD_TO_CART":
            const item = state.itemList.items.find((i: any) => i.id === action.payload);
            const cartItemInd = state.shoppingCartList.shoppingCart.findIndex((i: any) => i.id === action.payload);
            const cartItem = state.shoppingCartList.shoppingCart[cartItemInd];

            let newItem;
            if (cartItem) {
                newItem = {
                    ...cartItem,
                    count: cartItem.count + 1,
                    price:
                        Math.round((item.price + cartItem.price) * 100) / 100,
                };
                return {
                    ...state,
                    shoppingCart: [
                        ...state.shoppingCartList.shoppingCart.slice(
                            0,
                            cartItemInd
                        ),
                        newItem,
                        ...state.shoppingCartList.shoppingCart.slice(
                            cartItemInd + 1
                        ),
                    ],
                };
            } else {
                newItem = {
                    ...item,
                    count: 1,
                    price: item.price,
                };
                return {
                    ...state,
                    shoppingCart: [
                        ...state.shoppingCartList.shoppingCart,
                        newItem,
                    ],
                };
            }
        case "DEL_FROM_CART":
            const delItem = state.itemList.items.find((i: any) => i.id === action.payload);
            const delCartItemInd = state.shoppingCartList.shoppingCart.findIndex((i: any) => i.id === action.payload);
            const delCartItem = state.shoppingCartList.shoppingCart[delCartItemInd];
            if (delCartItem.count < 2) {
                return {
                    ...state,
                    shoppingCart: [
                        ...state.shoppingCartList.shoppingCart.slice(0, delCartItemInd),
                        ...state.shoppingCartList.shoppingCart.slice(delCartItemInd + 1),
                    ],
                };
            }
            let consItem = {
                ...delCartItem,
                count: delCartItem.count - 1,
                price: Math.round((delCartItem.price - delItem.price) * 100) / 100,
            };
            return {
                shoppingCart: [
                    ...state.shoppingCartList.shoppingCart.slice(0, delCartItemInd),
                    consItem,
                    ...state.shoppingCartList.shoppingCart.slice(delCartItemInd + 1),
                ],
            };
        case "DEL_ALL_FROM_CART":
            const itemInd = state.shoppingCartList.shoppingCart.findIndex((i: any) => i.id === action.payload);
            return {
                shoppingCart: [
                    ...state.shoppingCartList.shoppingCart.slice(0, itemInd),
                    ...state.shoppingCartList.shoppingCart.slice(itemInd + 1),
                ],
            };
        default:
            return state.shoppingCartList;
    }
};