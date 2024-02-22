import { useDispatch, useSelector } from 'react-redux';
import loadCards from '../../actions/api';
import classes from './error.module.scss';

function Error() {
    const dispatch = useDispatch();
    const searchId = useSelector((state) => state.searchId);
    return (
        <div className={classes.error}>
            <h2 className={classes.error__message}>Не удалось загрузить все данные</h2>
            <button
                type="button"
                className={classes.error__button}
                onClick={() => dispatch(loadCards(searchId))}
            >
                повторить
            </button>
        </div>
    );
}

export default Error;
