import { getSearchId } from '../ticketsApi';

const searchId = await getSearchId();

const isAllToggled = (state) => {
    const isAllActive = Object.entries(state.filters)
        .slice(1)
        .every((el) => el[1]);
    return isAllActive;
};

const initialState = {
    searchId,
    status: 'STARTED',
    filters: {
        isAllActive: true,
        isWithoutTransferActive: true,
        isOneTransferActive: true,
        isTwoTransfersActive: true,
        isThreeTransfersActive: true,
    },
    sorting: 'CHEAP',
    cards: [],
    cardsOnShow: 0,
};

const allActiveFilters = {
    isAllActive: true,
    isWithoutTransferActive: true,
    isOneTransferActive: true,
    isTwoTransfersActive: true,
    isThreeTransfersActive: true,
};

const allInactiveFilters = {
    isAllActive: false,
    isWithoutTransferActive: false,
    isOneTransferActive: false,
    isTwoTransfersActive: false,
    isThreeTransfersActive: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STATUS':
            return { ...state, status: action.payload };
        case 'FILTER':
            switch (action.filter) {
                case 'ALL':
                    if (action.value) {
                        return {
                            ...state,
                            filters: allActiveFilters,
                        };
                    }
                    return {
                        ...state,
                        filters: allInactiveFilters,
                    };
                case 'WITHOUT':
                    const newArrWo = {
                        ...state,
                        filters: { ...state.filters, isWithoutTransferActive: action.value },
                    };
                    if (isAllToggled(newArrWo)) return { ...newArrWo, filters: allActiveFilters };
                    return { ...newArrWo, filters: { ...newArrWo.filters, isAllActive: false } };
                case 'ONE':
                    const newArrOne = {
                        ...state,
                        filters: { ...state.filters, isOneTransferActive: action.value },
                    };
                    if (isAllToggled(newArrOne)) return { ...newArrOne, filters: allActiveFilters };
                    return { ...newArrOne, filters: { ...newArrOne.filters, isAllActive: false } };
                case 'TWO':
                    const newArrTwo = {
                        ...state,
                        filters: { ...state.filters, isTwoTransfersActive: action.value },
                    };
                    if (isAllToggled(newArrTwo)) return { ...newArrTwo, filters: allActiveFilters };
                    return { ...newArrTwo, filters: { ...newArrTwo.filters, isAllActive: false } };
                case 'THREE':
                    const newArrThree = {
                        ...state,
                        filters: { ...state.filters, isThreeTransfersActive: action.value },
                    };
                    if (isAllToggled(newArrThree))
                        return { ...newArrThree, filters: allActiveFilters };
                    return {
                        ...newArrThree,
                        filters: { ...newArrThree.filters, isAllActive: false },
                    };
                default:
                    return state;
            }
        case 'SORTING':
            switch (action.sorting) {
                case 'CHEAP':
                    return { ...state, sorting: 'CHEAP' };
                case 'FAST':
                    return { ...state, sorting: 'FAST' };
                case 'OPTIMAL':
                    return { ...state, sorting: 'OPTIMAL' };
                default:
                    return state;
            }
        case 'CARD':
            switch (action.card) {
                case 'ADD_ON_SHOW':
                    return { ...state, cardsOnShow: action.payload };
                case 'ADD':
                    const cards = [...state.cards];
                    if (!Array.isArray(action.body)) cards.push(action.body);
                    else cards.push(...action.body);
                    return { ...state, cards };
                case 'SORT':
                    switch (state.sorting) {
                        case 'CHEAP':
                            const cheapSorted = [...state.cards].sort(
                                (el1, el2) => el1.price - el2.price,
                            );
                            return { ...state, cards: cheapSorted };
                        case 'FAST':
                            const fastSorted = [...state.cards].sort((el1, el2) => {
                                const firstDuration =
                                    el1.segments[0].duration + el1.segments[1].duration;
                                const secondDuration =
                                    el2.segments[0].duration + el2.segments[1].duration;
                                return firstDuration - secondDuration;
                            });
                            return { ...state, cards: fastSorted };
                        case 'OPTIMAL':
                            const optimalSorted = [...state.cards].sort((el1, el2) => {
                                const firstPrice = el1.price;
                                const secondPrice = el2.price;
                                const firstDuration =
                                    el1.segments[0].duration + el1.segments[1].duration;
                                const secondDuration =
                                    el2.segments[0].duration + el2.segments[1].duration;
                                const firstStopsCount =
                                    el1.segments[0].stops.length + el1.segments[1].stops.length;
                                const secondStopsCount =
                                    el2.segments[0].stops.length + el2.segments[1].stops.length;

                                const firstTotalScore =
                                    0.25 * firstPrice +
                                    0.12 * firstDuration +
                                    firstStopsCount * 1000;
                                const secondTotalScore =
                                    0.25 * secondPrice +
                                    0.12 * secondDuration +
                                    secondStopsCount * 1000;
                                return firstTotalScore - secondTotalScore;
                            });
                            return { ...state, cards: optimalSorted };
                        default:
                            return state;
                    }
                default:
                    return state;
            }
        default:
            return state;
    }
};

export default reducer;
