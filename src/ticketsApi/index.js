import { add, addOnShow, sort } from '../actions/cards';
import { error, loaded } from '../actions/status';

async function getSearchId() {
    let searchId = null;
    const result = await fetch('https://aviasales-test-api.kata.academy/search')
        .then((response) => response.json())
        .catch((err) => ({ message: err.message }));

    if (!Object.prototype.hasOwnProperty.call(result, 'searchId')) searchId = await getSearchId();
    else searchId = result.searchId;
    return searchId;
}

let responsesCount = 0;
let errorsCount = 0;
let returnMessage = 'OK';
async function getPackTickets(searchId, dispatch) {
    const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
    );
    if (errorsCount >= 3) {
        dispatch(error());
        returnMessage = 'ERROR';
        errorsCount = 0;
        return returnMessage;
    }
    if (response.status === 502) {
        errorsCount += 1;
        if (errorsCount >= 3) {
            dispatch(error());
            returnMessage = 'ERROR';
            errorsCount = 0;
            return returnMessage;
        }
        await getPackTickets(searchId, dispatch);
    } else if (response.status !== 200) {
        errorsCount += 1;
        if (errorsCount >= 3) {
            dispatch(error());
            returnMessage = 'ERROR';
            errorsCount = 0;
            return returnMessage;
        }
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        await getPackTickets(searchId, dispatch);
    } else {
        responsesCount += 1;
        const json = await response.json();
        dispatch(add(json.tickets));
        dispatch(sort());
        if (responsesCount === 1) dispatch(addOnShow(5));
        if (json.stop) {
            dispatch(loaded());
            returnMessage = 'OK';
            errorsCount = 0;
            return returnMessage;
        }
        await getPackTickets(searchId, dispatch);
    }
    return returnMessage;
}

export { getPackTickets, getSearchId };
