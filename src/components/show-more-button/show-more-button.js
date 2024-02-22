import { useDispatch, useSelector } from 'react-redux';
import { addOnShow } from '../../actions/cards';
import classes from './show-more-button.module.scss';

function ShowMoreButton() {
    const dispatch = useDispatch();
    const activeCards = useSelector((state) => state.cardsOnShow);
    if (activeCards >= 5)
        return (
            <button
                className={classes['show-more-items-button']}
                type="button"
                onClick={() => dispatch(addOnShow(activeCards + 5))}
            >
                показать еще
            </button>
        );
    return null;
}

export default ShowMoreButton;
