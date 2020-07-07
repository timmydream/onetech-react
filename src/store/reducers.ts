export const reducer = (state: number = 0, action: { type: any }) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;                
        default:
            return state;            
    }
}