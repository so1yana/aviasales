import Filters from '../filters';
import Sorting from '../sorting';
import TicketList from '../ticket-list';
import logo from '../../img/logo/Logo.svg';
import ShowMoreButton from '../show-more-button';
import classes from './app.module.scss';

function App() {
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
                </section>
            </main>
        </div>
    );
}

export default App;
