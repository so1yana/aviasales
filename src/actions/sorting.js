import { sort, addOnShow, cleanOnShow } from './cards';

export const cheap = () => {
    return (dispatch) => {
        dispatch({ type: 'SORTING', sorting: 'CHEAP' });
        dispatch(sort());
        dispatch(cleanOnShow());
        dispatch(addOnShow());
    };
};
export const fast = () => {
    return (dispatch) => {
        dispatch({ type: 'SORTING', sorting: 'FAST' });
        dispatch(sort());
        dispatch(cleanOnShow());
        dispatch(addOnShow());
    };
};
export const optimal = () => {
    return (dispatch) => {
        dispatch({ type: 'SORTING', sorting: 'OPTIMAL' });
        dispatch(sort());
        dispatch(cleanOnShow());
        dispatch(addOnShow());
    };
};
