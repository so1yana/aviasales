import { connect } from 'react-redux';
import Filters from '../filters';
import Sorting from '../sorting';
import TicketList from '../ticket-list';
import Error from '../error';
import logo from '../../img/logo/Logo.svg';
import ShowMoreButton from '../show-more-button';
import classes from './app.module.scss';

function App({ state }) {
    return (
        <div className={classes.app}>
            <header>
                <img src={logo} alt="logo" />
            </header>
            <main>
                <Filters />
                <section>
                    <Sorting />
                    <TicketList />
                    <ShowMoreButton />
                    {state.status === 'ERROR' && <Error />}
                    {state.cardsOnShow.length === 0 && state.status === 'READY' ? (
                        <p style={{ textAlign: 'center' }}>Ничего не найдено</p>
                    ) : null}
                </section>
            </main>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps)(App);
