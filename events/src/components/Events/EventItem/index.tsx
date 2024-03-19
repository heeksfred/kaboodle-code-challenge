import React from 'react';

import { IEvent, } from 'types';

interface Props {
	event: IEvent;
	onClick: any;
}
const EventItem: React.FC<Props> = ({ event, onClick }) => {
	return (
        <div className=" item">
            <div className="content" onClick={() => onClick(event.ID)}>
                <div className="header">{event.eventName}</div>
                <div className="details">{event.eventDescription}</div>
				<div className="details">From {event.startDate} to {event.endDate}</div>
            </div>
        </div>
    );
};

export default EventItem;
