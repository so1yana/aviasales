const initialState = {
    filters: {
        isAllActive: true,
        isWithoutTransferActive: true,
        isOneTransferActive: true,
        isTwoTransfersActive: true,
        isThreeTransfersActive: true,
    },
    sorting: {
        isCheap: true,
        isFast: false,
        isOptimal: false,
    },
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

const allInactiveSorting = {
    isCheap: false,
    isFast: false,
    isOptimal: false,
};

const isAllToggled = (state) => {
    const isAllActive = Object.entries(state.filters)
        .slice(1)
        .every((el) => el[1]);
    return isAllActive;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
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
                    return { ...state, sorting: { ...allInactiveSorting, isCheap: true } };
                case 'FAST':
                    return { ...state, sorting: { ...allInactiveSorting, isFast: true } };
                case 'OPTIMAL':
                    return { ...state, sorting: { ...allInactiveSorting, isOptimal: true } };
                default:
                    return state;
            }
        default:
            return state;
    }
};

export default reducer;
