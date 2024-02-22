import { addOnShow } from './cards';

export const all = (value) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER', filter: 'ALL', value });
        dispatch(addOnShow(5));
    };
};
export const without = (value) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER', filter: 'WITHOUT', value });
        dispatch(addOnShow(5));
    };
};
export const one = (value) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER', filter: 'ONE', value });
        dispatch(addOnShow(5));
    };
};
export const two = (value) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER', filter: 'TWO', value });
        dispatch(addOnShow(5));
    };
};
export const three = (value) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER', filter: 'THREE', value });
        dispatch(addOnShow(5));
    };
};
