import classes from './ticket-item.module.scss';

const calculateTime = (minutes) => {
    const remainingMinutes = minutes % 60;
    const hours = (minutes - remainingMinutes) / 60;

    return `${hours}ч ${remainingMinutes}м`;
};

const toNormalTime = (initDate, duration) => {
    const firstDate = new Date(initDate);
    const secDate = new Date(duration * 60 * 1000 + firstDate.getTime());
    let firstHours = firstDate.getHours();
    let firstMinutes = firstDate.getMinutes();
    let secondHours = secDate.getHours();
    let secondMinutes = secDate.getMinutes();
    if (firstHours < 10) firstHours = `0${firstHours}`;
    if (firstMinutes < 10) firstMinutes = `0${firstMinutes}`;
    if (secondHours < 10) secondHours = `0${secondHours}`;
    if (secondMinutes < 10) secondMinutes = `0${secondMinutes}`;
    return `${firstHours}:${firstMinutes} - ${secondHours}:${secondMinutes}`;
};

export default function TicketItem(props) {
    const { ticket } = props;
    const { price, carrier, segments } = ticket;
    const [firstSeg, secSeg] = segments;
    const firstCities = `${firstSeg.origin}-${firstSeg.destination}`;
    const secondCities = `${secSeg.origin}-${secSeg.destination}`;
    const firstTime = calculateTime(firstSeg.duration);
    const secondTime = calculateTime(secSeg.duration);
    const firstSegTime = toNormalTime(new Date(firstSeg.date).getTime(), firstSeg.duration);
    const secSegTime = toNormalTime(new Date(secSeg.date).getTime(), secSeg.duration);
    return (
        <li className={classes.ticket}>
            <div className={classes.ticket__body}>
                <div className={classes.ticket__header}>
                    <p className={classes.ticket__price}>{price} ₽</p>
                    <img
                        className={classes.ticket__company}
                        alt="logo"
                        src={`//pics.avs.io/99/36/${carrier}.png`}
                    />
                </div>
                <div className={classes.ticket__info}>
                    <table className={classes['ticket-table']}>
                        <tbody className={classes['ticket-table__tbody']}>
                            <tr className={classes['ticket-table__row']}>
                                <th className={classes['ticket-table__header']}>{firstCities}</th>
                                <th className={classes['ticket-table__header']}>В пути</th>
                                <th className={classes['ticket-table__header']}>Пересадки</th>
                            </tr>
                            <tr className={classes['ticket-table__row']}>
                                <td className={classes['ticket-table__data']}>{firstSegTime}</td>
                                <td className={classes['ticket-table__data']}>{firstTime}</td>
                                <td className={classes['ticket-table__data']}>
                                    {firstSeg.stops.join(', ')}
                                </td>
                            </tr>
                            <tr className={classes['ticket-table__row']}>
                                <th className={classes['ticket-table__header']}>{secondCities}</th>
                                <th className={classes['ticket-table__header']}>В пути</th>
                                <th className={classes['ticket-table__header']}>Пересадки</th>
                            </tr>
                            <tr className={classes['ticket-table__row']}>
                                <td className={classes['ticket-table__data']}>{secSegTime}</td>
                                <td className={classes['ticket-table__data']}>{secondTime}</td>
                                <td className={classes['ticket-table__data']}>
                                    {secSeg.stops.join(', ')}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </li>
    );
}
