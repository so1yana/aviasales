import './sorting.scss';

export default function Sorting() {
    return (
        <ul className="sorting">
            <li className="sorting__item active">
                <button className="sorting__item-button" type="button">
                    самый дешевый
                </button>
            </li>
            <li className="sorting__item">
                <button className="sorting__item-button" type="button">
                    самый быстрый
                </button>
            </li>
            <li className="sorting__item">
                <button className="sorting__item-button" type="button">
                    оптимальный
                </button>
            </li>
        </ul>
    );
}
