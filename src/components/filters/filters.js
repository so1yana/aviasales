import './filters.scss';
import { connect } from 'react-redux';
import * as actions from '../../actions/filters';

function Filters({ state, all, without, one, two, three, add }) {
    const testTicket1 = {
        display: true,
        price: 13400,
        carrier: 'aeroflot',
        segments: [
            {
                origin: 'MOW',
                destination: 'HKT',
                date: '10:45 - 08:00',
                stops: ['HKG', 'JNB'],
                duration: 1275,
            },
            {
                origin: 'MOW',
                destination: 'HKT',
                date: '11:20 - 00:50',
                stops: ['HKG'],
                duration: 810,
            },
        ],
    };

    const testTicket2 = {
        display: false,
        price: 13400,
        carrier: 'aeroflot',
        segments: [
            {
                origin: 'MOW',
                destination: 'HKT',
                date: '10:45 - 08:00',
                stops: ['HKG', 'JNB'],
                duration: 1275,
            },
            {
                origin: 'MOW',
                destination: 'HKT',
                date: '11:20 - 00:50',
                stops: ['HKG'],
                duration: 810,
            },
        ],
    };

    const tickets = [testTicket1, testTicket2];

    const {
        isAllActive,
        isOneTransferActive,
        isThreeTransfersActive,
        isTwoTransfersActive,
        isWithoutTransferActive,
    } = state.filters;
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ul className="filters">
                <li className="filters__title">количество пересадок</li>
                <li className="filters__item">
                    <label htmlFor="all">
                        Все
                        <input
                            type="checkbox"
                            id="all"
                            onChange={(e) => all(e.target.checked)}
                            checked={isAllActive}
                        />
                        <span />
                    </label>
                </li>
                <li className="filters__item">
                    <label htmlFor="no_transfers">
                        Без пересадок
                        <input
                            type="checkbox"
                            id="no_transfers"
                            onChange={(e) => without(e.target.checked)}
                            checked={isWithoutTransferActive}
                        />
                        <span />
                    </label>
                </li>
                <li className="filters__item">
                    <label htmlFor="one_transfer">
                        1 пересадка
                        <input
                            type="checkbox"
                            id="one_transfer"
                            onChange={(e) => one(e.target.checked)}
                            checked={isOneTransferActive}
                        />
                        <span />
                    </label>
                </li>
                <li className="filters__item">
                    <label htmlFor="two_transfers">
                        2 пересадки
                        <input
                            type="checkbox"
                            id="two_transfers"
                            onChange={(e) => two(e.target.checked)}
                            checked={isTwoTransfersActive}
                        />
                        <span />
                    </label>
                </li>
                <li className="filters__item">
                    <label htmlFor="three_transfers">
                        3 пересадки
                        <input
                            type="checkbox"
                            id="three_transfers"
                            onChange={(e) => three(e.target.checked)}
                            checked={isThreeTransfersActive}
                        />
                        <span />
                    </label>
                </li>
            </ul>
            <button
                className="temp-button"
                type="button"
                onClick={() => {
                    const index = Math.floor(Math.random() + 0.5);
                    console.log(index);
                    add(tickets[index]);
                }}
            >
                ADD CARD
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps, actions)(Filters);
