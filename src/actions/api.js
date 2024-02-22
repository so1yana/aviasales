import { getPackTickets } from '../ticketsApi';
import { loading } from './status';

const loadCards = (searchId) => {
    return async (dispatch) => {
        dispatch(loading());
        await getPackTickets(searchId, dispatch);
    };
};

export default loadCards;
