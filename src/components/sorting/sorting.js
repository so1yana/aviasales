import { connect } from 'react-redux';
import * as actions from '../../actions/sorting';
import './sorting.scss';

function Sorting({ state, cheap, fast, optimal }) {
    const { isCheap, isFast, isOptimal } = state.sorting;
    const classes = 'sorting__item';
    return (
        <ul className="sorting">
            <li className={isCheap ? `${classes} active` : classes}>
                <button className="sorting__item-button" type="button" onClick={cheap}>
                    самый дешевый
                </button>
            </li>
            <li className={isFast ? `${classes} active` : classes}>
                <button className="sorting__item-button" type="button" onClick={fast}>
                    самый быстрый
                </button>
            </li>
            <li className={isOptimal ? `${classes} active` : classes}>
                <button className="sorting__item-button" type="button" onClick={() => optimal()}>
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
