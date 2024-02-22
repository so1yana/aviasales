export const add = (cards) => {
    return { type: 'CARD', card: 'ADD', body: cards };
};

export const sort = () => {
    return { type: 'CARD', card: 'SORT' };
};

export const addOnShow = (payload) => {
    return { type: 'CARD', card: 'ADD_ON_SHOW', payload };
};
