export const add = (text: string) => ({ type: "ADD_ITEM", text });
export const toggle = (id: number) => ({ type: "TOGGLE_PROPERTY", id });
export const all = () => ({ type: "ALL_ITEMS" });
export const active = () => ({ type: "ACTIVE_ITEMS" });
export const complete = () => ({ type: "COMPLETE_ITEMS" });
