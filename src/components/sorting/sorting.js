import { connect } from 'react-redux';
import * as actions from '../../actions/sorting';
import './sorting.scss';

function Sorting({ state, cheap, fast, optimal }) {
    const classes = 'sorting__item';
    return (
        <ul className="sorting">
            <li className={state.sorting === 'CHEAP' ? `${classes} active` : classes}>
                <button
                    className="sorting__item-button"
                    type="button"
                    onClick={(e) => {
                        if (e.target.parentElement.classList.contains('active')) return;
                        cheap();
                    }}
                >
                    самый дешевый
                </button>
            </li>
            <li className={state.sorting === 'FAST' ? `${classes} active` : classes}>
                <button
                    className="sorting__item-button"
                    type="button"
                    onClick={(e) => {
                        if (e.target.parentElement.classList.contains('active')) return;
                        fast();
                    }}
                >
                    самый быстрый
                </button>
            </li>
            <li className={state.sorting === 'OPTIMAL' ? `${classes} active` : classes}>
                <button
                    className="sorting__item-button"
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
