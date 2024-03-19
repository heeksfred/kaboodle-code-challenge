import React, { useEffect, useState } from 'react';

import { getTickets } from '../../../services/api';

import { ITicket } from 'types';

import style from './ticket.module.scss';

interface Props {
    eventID: string;
}
const EventTickets: React.FC<Props> = ({ eventID }) => {
    const [tickets, setTickets] = useState<ITicket[]>([]);

    const getAllTickets = async () => {
        try {
            if (!eventID) return;

            const tickets = await getTickets(eventID);

            setTickets(tickets.data);
        } catch (error) {
            console.log(`Error getting event data - ${error}`);
        }
    };

	const formatPrice = (price: number) => {
		return `£${(price / 100).toFixed(2)}`;
	}

    useEffect(() => {
        getAllTickets();
    }, [eventID]);

    const renderedTickets = () => {
        if (tickets.length > 0) {
            return tickets.map(ticket => {
                return (
                    <div className="item">
                        <div className="content">
                            <div className="header">{ticket.ticketName}</div>
                            <div className="details">{ticket.ticketType}</div>
                            <div className="details">Price: {formatPrice(ticket.pricePence)}</div>
                            <div className="details">Booking Fee: {formatPrice(ticket.bookingFeePence)}</div>
                            <div className="details">Available: {ticket.available}</div>
                        </div>
                    </div>
                );
            });
        } else {
            return <div className="item">No Tickets available</div>;
        }
    };

    return (
        <div className={style.main}>
            <div>Tickets</div>
            <div className="ui relaxed list">{renderedTickets()}</div>
        </div>
    );
};

export default EventTickets;
