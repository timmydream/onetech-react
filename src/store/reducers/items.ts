export const items = (state: any, action: any) => {
    if (state === undefined) {
        return {
            items: [],
            loading: true,
        };
    }
    switch (action.type) {
        case "ITEMS_LOAD":
            return {
                loading: false,
                items: action.payload,
            };
        default:
            return state.itemList;
    }
};