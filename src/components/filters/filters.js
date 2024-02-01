import './filters.scss';

export default function Filters() {
    return (
        <ul className="filters">
            <li className="filters__title">количество пересадок</li>
            <li className="filters__item">
                <label htmlFor="all">
                    Все
                    <input type="checkbox" id="all" />
                    <span />
                </label>
            </li>
            <li className="filters__item">
                <label htmlFor="no_transfers">
                    Без пересадок
                    <input type="checkbox" id="no_transfers" />
                    <span />
                </label>
            </li>
            <li className="filters__item">
                <label htmlFor="one_transfer">
                    1 пересадка
                    <input type="checkbox" id="one_transfer" />
                    <span />
                </label>
            </li>
            <li className="filters__item">
                <label htmlFor="two_transfers">
                    2 пересадки
                    <input type="checkbox" id="two_transfers" />
                    <span />
                </label>
            </li>
            <li className="filters__item">
                <label htmlFor="three_transfers">
                    3 пересадки
                    <input type="checkbox" id="three_transfers" />
                    <span />
                </label>
            </li>
        </ul>
    );
}
