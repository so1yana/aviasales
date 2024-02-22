import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOnShow } from '../../actions/cards';
import loadCards from '../../actions/api';
import TicketItem from '../ticket-item';
import classes from './ticket-list.module.scss';

function filterItems(array, filters) {
    if (filters.isAllActive) {
        return array;
    }
    const filteredItems = [
        ...array.filter((card) => {
            let isReturnWithout = false;
            let isReturnOne = false;
            let isReturnTwo = false;
            let isReturnThree = false;
            const stopsSum = card.segments[0].stops.length + card.segments[1].stops.length;
            if (filters.isWithoutTransferActive) {
                isReturnWithout = stopsSum === 0;
            }
            if (filters.isOneTransferActive) {
                isReturnOne = stopsSum === 1;
            }
            if (filters.isTwoTransfersActive) {
                isReturnTwo = stopsSum === 2;
            }
            if (filters.isThreeTransfersActive) {
                isReturnThree = stopsSum === 3;
            }
            return isReturnOne || isReturnWithout || isReturnTwo || isReturnThree;
        }),
    ];

    return filteredItems;
}

function TicketList() {
    const dispatch = useDispatch();
    const searchId = useSelector((state) => state.searchId);
    const filters = useSelector((state) => state.filters);
    const cards = filterItems(
        useSelector((state) => state.cards),
        filters,
    );
    const cardsOnShow = useSelector((state) => state.cardsOnShow);
    useEffect(() => {
        dispatch(loadCards(searchId));
    }, []);

    useEffect(() => {
        if (!cards.length) dispatch(addOnShow(0));
    }, [cards]);
    const tickets = cards.slice(0, cardsOnShow);
    let elements = [];
    if (Array.isArray(tickets)) {
        elements = tickets.map((item) => {
            const randNum = Math.floor(Math.random() * 123456789);
            return <TicketItem key={randNum} ticket={item} />;
        });
    } else elements = null;
    if (!cards.length) {
        return <p style={{ textAlign: 'center', marginTop: '16px' }}>Ничего не найдено</p>;
    }
    return <ul className={classes['ticket-list']}>{elements}</ul>;
}

export default TicketList;
