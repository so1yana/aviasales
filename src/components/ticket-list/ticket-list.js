import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/cards';
import TicketItem from '../ticket-item';
import classes from './ticket-list.module.scss';

function TicketList({ state, lc }) {
    useEffect(() => {
        lc(state.searchId);
    }, []);
    const tickets = state.cardsOnShow;
    let elements = [];
    if (Array.isArray(tickets)) {
        elements = tickets.map((item) => {
            const randNum = Math.floor(Math.random() * 123456789);
            return <TicketItem key={randNum} ticket={item} />;
        });
    } else elements = null;
    return <ul className={classes['ticket-list']}>{elements}</ul>;
}

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps, { lc: loadCards })(TicketList);
