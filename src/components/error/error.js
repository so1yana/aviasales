import { connect } from 'react-redux';
import { loadCards } from '../../actions/cards';
import classes from './error.module.scss';

function Error({ searchId, lc }) {
    return (
        <div className={classes.error}>
            <h2 className={classes.error__message}>Не удалось загрузить данные</h2>
            <button type="button" className={classes.error__button} onClick={() => lc(searchId)}>
                повторить
            </button>
        </div>
    );
}

const mapStateToProps = ({ searchId }) => {
    return { searchId };
};

export default connect(mapStateToProps, { lc: loadCards })(Error);
