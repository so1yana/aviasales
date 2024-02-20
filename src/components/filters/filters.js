import { connect } from 'react-redux';
import Loader from '../loader';
import * as actions from '../../actions/filters';
import classes from './filters.module.scss';

function Filters({ state, all, without, one, two, three }) {
    const {
        isAllActive,
        isOneTransferActive,
        isThreeTransfersActive,
        isTwoTransfersActive,
        isWithoutTransferActive,
    } = state.filters;
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ul className={classes.filters}>
                <li className={classes.filters__title}>количество пересадок</li>
                <li className={classes.filters__item}>
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
                <li className={classes.filters__item}>
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
                <li className={classes.filters__item}>
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
                <li className={classes.filters__item}>
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
                <li className={classes.filters__item}>
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
            <p className={classes.loader__text}>
                Получено:
                <span className={classes['loader__text-count']}> {state.cards.length}</span>
            </p>
            <p className={classes.loader__text}>
                Отфильтровано :
                <span className={classes['loader__text-count']}> {state.filteredCards.length}</span>
            </p>
            <p className={classes.loader__text}>
                На показ:
                <span className={classes['loader__text-count']}> {state.cardsOnShow.length}</span>
            </p>
            {state.status === 'LOADING' && <Loader />}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps, actions)(Filters);
