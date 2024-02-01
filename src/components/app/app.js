import Filters from '../filters';
import Sorting from '../sorting';
import TicketList from '../ticket-list';
import logo from '../../img/logo/Logo.svg';

export default function App() {
    return (
        <div className="App">
            <header>
                <img src={logo} alt="logo" />
            </header>
            <main>
                <Filters />
                <section>
                    <Sorting />
                    <TicketList />
                </section>
            </main>
        </div>
    );
}