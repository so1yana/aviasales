import { connect } from 'react-redux';
import './show-more-button.scss';

function ShowMoreButton({ state }) {
    const activeCards = state.cards.reduce((acc, el) => {
        if (el.display) return ++acc;
        return acc;
    }, 0);
    console.log('active cards: ', activeCards);
    if (state.cards.length > 4)
        return (
            <button className="show-more-items-button" type="button">
                показать еще
            </button>
        );
    return null;
}

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps)(ShowMoreButton);
