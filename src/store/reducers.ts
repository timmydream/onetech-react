import { combineReducers } from "redux";

const list = (state: any = [], action: any) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [
                ...state,
                {
                    id: state.length,
                    text: action.text,
                    complete: false,
                },
            ];
        case "TOGGLE_PROPERTY":
            const i = state.findIndex((item: any) => item.id === action.id);
            const item = { ...state[i], complete: !state[i].complete };
            return [...state.slice(0, i), item, ...state.slice(i + 1)];
        default:
            return state;
    }
};

const visibility = (state: any = "ALL_ITEMS", action: any) => {
    switch (action.type) {
        case "ALL_ITEMS":
            return action.type;
        case "ACTIVE_ITEMS":
            return action.type;
        case "COMPLETE_ITEMS":
            return action.type;
        default:
            return state;
    }
};

export const reducer = combineReducers({ list, visibility });
