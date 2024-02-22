import { sort } from './cards';

export const cheap = () => {
    return (dispatch) => {
        dispatch({ type: 'SORTING', sorting: 'CHEAP' });
        dispatch(sort());
    };
};
export const fast = () => {
    return (dispatch) => {
        dispatch({ type: 'SORTING', sorting: 'FAST' });
        dispatch(sort());
    };
};
export const optimal = () => {
    return (dispatch) => {
        dispatch({ type: 'SORTING', sorting: 'OPTIMAL' });
        dispatch(sort());
    };
};
