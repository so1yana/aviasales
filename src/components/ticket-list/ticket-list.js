import { connect } from 'react-redux';
import TicketItem from '../ticket-item';
import './ticket-list.scss';

function TicketList({ state }) {
    const tickets = state.cards;
    let elements = [];
    if (Array.isArray(tickets)) {
        elements = tickets.map((item) => {
            const randNum = Math.floor(Math.random() * 12345);
            return <TicketItem key={randNum} ticket={item} />;
        });
    } else elements = null;

    return <ul className="ticket-list">{elements}</ul>;
}

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps)(TicketList);
