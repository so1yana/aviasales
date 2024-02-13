import './ticket-item.scss';

const calculateTime = (minutes) => {
    const remainingMinutes = minutes % 60;
    const hours = (minutes - remainingMinutes) / 60;

    return `${hours}ч ${remainingMinutes}м`;
};

export default function TicketItem(props) {
    const { ticket } = props;
    const { price, carrier, segments, display } = ticket;
    if (!display) return null;
    const [firstSeg, secSeg] = segments;
    const firstCities = `${firstSeg.origin}-${firstSeg.destination}`;
    const secondCities = `${secSeg.origin}-${secSeg.destination}`;
    const firstTime = calculateTime(firstSeg.duration);
    const secondTime = calculateTime(secSeg.duration);

    return (
        <li className="ticket">
            <div className="ticket__body">
                <div className="ticket__header">
                    <p className="ticket__price">{price} ₽</p>
                    <p className="ticket__company">{carrier}</p>
                </div>
                <div className="ticket__info">
                    <table className="ticket-table">
                        <tbody className="ticket-table__tbody">
                            <tr className="ticket-table__row">
                                <th className="ticket-table__header">{firstCities}</th>
                                <th className="ticket-table__header">В пути</th>
                                <th className="ticket-table__header">Пересадки</th>
                            </tr>
                            <tr className="ticket-table__row">
                                <td className="ticket-table__data">{firstSeg.date}</td>
                                <td className="ticket-table__data">{firstTime}</td>
                                <td className="ticket-table__data">{firstSeg.stops.join(', ')}</td>
                            </tr>
                            <tr className="ticket-table__row">
                                <th className="ticket-table__header">{secondCities}</th>
                                <th className="ticket-table__header">В пути</th>
                                <th className="ticket-table__header">Пересадки</th>
                            </tr>
                            <tr className="ticket-table__row">
                                <td className="ticket-table__data">{secSeg.date}</td>
                                <td className="ticket-table__data">{secondTime}</td>
                                <td className="ticket-table__data">{secSeg.stops.join(', ')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </li>
    );
}
