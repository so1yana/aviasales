import './error.scss';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/cards';

function Error({ searchId, lc }) {
    return (
        <div className="error">
            <h2 className="error__message">Не удалось загрузить данные</h2>
            <button type="button" className="error__button" onClick={() => lc(searchId)}>
                повторить
            </button>
        </div>
    );
}

const mapStateToProps = ({ searchId }) => {
    return { searchId };
};

export default connect(mapStateToProps, { lc: loadCards })(Error);
