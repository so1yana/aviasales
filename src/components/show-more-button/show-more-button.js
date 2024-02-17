import { connect } from 'react-redux';
import { addOnShow } from '../../actions/cards';
import './show-more-button.scss';

function ShowMoreButton({ state, add }) {
    const activeCards = state.cardsOnShow.length;
    if (activeCards > 4)
        return (
            <button className="show-more-items-button" type="button" onClick={add}>
                показать еще
            </button>
        );
    return null;
}

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps, { add: addOnShow })(ShowMoreButton);
