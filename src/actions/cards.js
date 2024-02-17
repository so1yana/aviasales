// eslint-disable-next-line import/no-cycle
import { getPackTickets } from '../ticketsApi';
import { loading, loaded } from './status';

export const add = (cards) => {
    return { type: 'CARD', card: 'ADD', body: cards };
};

export const addOnShow = () => {
    return { type: 'CARD', card: 'ADD_ON_SHOW' };
};

export const cleanOnShow = () => {
    return { type: 'CARD', card: 'CLEAN_ON_SHOW' };
};

export const sort = () => {
    return { type: 'CARD', card: 'SORT' };
};

export const filter = () => {
    return { type: 'CARD', card: 'FILTER' };
};

export const search = (value) => {
    return { type: 'SEARCH', payload: value };
};

export const loadCards = (searchId) => {
    return async (dispatch) => {
        await dispatch(loading());
        await getPackTickets(searchId, dispatch);
        await dispatch(filter());
        await dispatch(sort());
        await dispatch(cleanOnShow());
        await dispatch(addOnShow());
        await dispatch(loaded());
    };
};
