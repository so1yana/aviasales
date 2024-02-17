export const loaded = () => {
    return { type: 'STATUS', payload: 'READY' };
};

export const loading = () => {
    return { type: 'STATUS', payload: 'LOADING' };
};

export const error = () => {
    return { type: 'STATUS', payload: 'ERROR' };
};
