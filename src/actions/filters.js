import { filter, addOnShow, cleanOnShow, sort } from './cards';

export const all = (value) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER', filter: 'ALL', value });
        dispatch(filter());
        dispatch(sort());
        dispatch(cleanOnShow());
        dispatch(addOnShow());
    };
};
export const without = (value) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER', filter: 'WITHOUT', value });
        dispatch(filter());
        dispatch(sort());
        dispatch(cleanOnShow());
        dispatch(addOnShow());
    };
};
export const one = (value) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER', filter: 'ONE', value });
        dispatch(filter());
        dispatch(sort());
        dispatch(cleanOnShow());
        dispatch(addOnShow());
    };
};
export const two = (value) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER', filter: 'TWO', value });
        dispatch(filter());
        dispatch(sort());
        dispatch(cleanOnShow());
        dispatch(addOnShow());
    };
};
export const three = (value) => {
    return (dispatch) => {
        dispatch({ type: 'FILTER', filter: 'THREE', value });
        dispatch(filter());
        dispatch(sort());
        dispatch(cleanOnShow());
        dispatch(addOnShow());
    };
};
