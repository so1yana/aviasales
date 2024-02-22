import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader';
import Error from '../error';
import { all, without, one, two, three } from '../../actions/filters';
import classes from './filters.module.scss';

function Filters() {
    const dispatch = useDispatch();
    const {
        isAllActive,
        isOneTransferActive,
        isThreeTransfersActive,
        isTwoTransfersActive,
        isWithoutTransferActive,
    } = useSelector((state) => state.filters);
    const status = useSelector((state) => state.status);
    const cardsLength = useSelector((state) => state.cards.length);
    const cardsOnShow = useSelector((state) => state.cardsOnShow);
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
                            onChange={(e) => dispatch(all(e.target.checked))}
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
                            onChange={(e) => dispatch(without(e.target.checked))}
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
                            onChange={(e) => dispatch(one(e.target.checked))}
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
                            onChange={(e) => dispatch(two(e.target.checked))}
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
                            onChange={(e) => dispatch(three(e.target.checked))}
                            checked={isThreeTransfersActive}
                        />
                        <span />
                    </label>
                </li>
            </ul>
            <p className={classes.loader__text}>
                Получено:
                <span className={classes['loader__text-count']}> {cardsLength}</span>
            </p>
            {/* <p className={classes.loader__text}>
                Отфильтровано :
                <span className={classes['loader__text-count']}> {state.filteredCards.length}</span>
            </p> */}
            <p className={classes.loader__text}>
                На показ:
                <span className={classes['loader__text-count']}> {cardsOnShow}</span>
            </p>
            {status === 'LOADING' && <Loader />}
            {status === 'ERROR' && <Error />}
        </div>
    );
}

export default Filters;
