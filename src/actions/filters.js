export const all = (value) => ({ type: 'FILTER', filter: 'ALL', value });
export const without = (value) => ({ type: 'FILTER', filter: 'WITHOUT', value });
export const one = (value) => ({ type: 'FILTER', filter: 'ONE', value });
export const two = (value) => ({ type: 'FILTER', filter: 'TWO', value });
export const three = (value) => ({ type: 'FILTER', filter: 'THREE', value });
// export const add = (cards) => {
//     return { type: 'CARD', card: 'ADD', body: cards };
// };
export const add = (cards) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: 'CARD', card: 'ADD', body: cards });
        }, 2000);
    };
};
