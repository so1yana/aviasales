import TicketItem from '../ticket-item';
import './ticket-list.scss';

export default function TicketList() {
    // const { tickets } = props;
    const tickets = [
        {
            price: 13400,
            carrier: 'aeroflot',
            segments: [
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '10:45 - 08:00',
                    stops: ['HKG', 'JNB'],
                    duration: 1275,
                },
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '11:20 - 00:50',
                    stops: ['HKG'],
                    duration: 810,
                },
            ],
        },
        {
            price: 13400,
            carrier: 'aeroflot',
            segments: [
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '10:45 - 08:00',
                    stops: ['HKG', 'JNB'],
                    duration: 1275,
                },
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '11:20 - 00:50',
                    stops: ['HKG'],
                    duration: 810,
                },
            ],
        },
        {
            price: 13400,
            carrier: 'aeroflot',
            segments: [
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '10:45 - 08:00',
                    stops: ['HKG', 'JNB'],
                    duration: 1275,
                },
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '11:20 - 00:50',
                    stops: ['HKG'],
                    duration: 810,
                },
            ],
        },
        {
            price: 13400,
            carrier: 'aeroflot',
            segments: [
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '10:45 - 08:00',
                    stops: ['HKG', 'JNB'],
                    duration: 1275,
                },
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '11:20 - 00:50',
                    stops: ['HKG'],
                    duration: 810,
                },
            ],
        },
        {
            price: 13400,
            carrier: 'aeroflot',
            segments: [
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '10:45 - 08:00',
                    stops: ['HKG', 'JNB'],
                    duration: 1275,
                },
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '11:20 - 00:50',
                    stops: ['HKG'],
                    duration: 810,
                },
            ],
        },
    ];
    const elements = tickets.map((item) => {
        return <TicketItem key={item.carrier} ticket={item} />;
    });

    return (
        <>
            <ul className="ticket-list">{elements}</ul>
            {tickets.length > 4 && (
                <button className="show-more-items-button" type="button">
                    показать еще
                </button>
            )}
        </>
    );
}
