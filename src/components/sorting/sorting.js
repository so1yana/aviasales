import { connect } from 'react-redux';
import * as actions from '../../actions/sorting';
import classes from './sorting.module.scss';

function Sorting({ state, cheap, fast, optimal }) {
    return (
        <ul className={classes.sorting}>
            <li
                className={
                    state.sorting === 'CHEAP'
                        ? `${classes.sorting__item} ${classes.active}`
                        : classes.sorting__item
                }
            >
                <button
                    className={classes['sorting__item-button']}
                    type="button"
                    onClick={(e) => {
                        if (e.target.parentElement.classList.contains('active')) return;
                        cheap();
                    }}
                >
                    самый дешевый
                </button>
            </li>
            <li
                className={
                    state.sorting === 'FAST'
                        ? `${classes.sorting__item} ${classes.active}`
                        : classes.sorting__item
                }
            >
                <button
                    className={classes['sorting__item-button']}
                    type="button"
                    onClick={(e) => {
                        if (e.target.parentElement.classList.contains('active')) return;
                        fast();
                    }}
                >
                    самый быстрый
                </button>
            </li>
            <li
                className={
                    state.sorting === 'OPTIMAL'
                        ? `${classes.sorting__item} ${classes.active}`
                        : classes.sorting__item
                }
            >
                <button
                    className={classes['sorting__item-button']}
                    type="button"
                    onClick={(e) => {
                        if (e.target.parentElement.classList.contains('active')) return;
                        optimal();
                    }}
                >
                    оптимальный
                </button>
            </li>
        </ul>
    );
}

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps, actions)(Sorting);
