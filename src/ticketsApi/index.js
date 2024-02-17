// eslint-disable-next-line import/no-cycle
import { add, filter, addOnShow } from '../actions/cards';

async function getSearchId() {
    let searchId = null;
    const result = await fetch('https://aviasales-test-api.kata.academy/search')
        .then((response) => response.json())
        .catch((error) => ({ message: error.message }));

    if (!Object.prototype.hasOwnProperty.call(result, 'searchId')) searchId = await getSearchId();
    else searchId = result.searchId;
    return searchId;
}

let responsesCount = 0;
async function getPackTickets(searchId, dispatch) {
    const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
    );
    if (response.status === 502) {
        await getPackTickets(searchId, dispatch);
    } else if (response.status !== 200) {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        await getPackTickets(searchId, dispatch);
    } else {
        responsesCount += 1;
        const json = await response.json();
        await dispatch(add(json.tickets));
        await dispatch(filter(json.tickets));
        if (responsesCount === 1) await dispatch(addOnShow());
        if (json.stop) return;
        await getPackTickets(searchId, dispatch);
    }
}

export { getPackTickets, getSearchId };
