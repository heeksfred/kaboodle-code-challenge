import React from 'react';

import EventItem from '../../Events/EventItem';

import { IEvent } from 'types';


import style from './event.module.scss';

interface Props {
	events: IEvent[];
	onClick: any;
}
const Events: React.FC<Props> = ({ events, onClick }) => {

	const renderedEvents = () => {
        if (events.length > 0) {
			return events.map(event => <EventItem key={event.ID} event={event} onClick={onClick} />);
        } else {
            return <div>No Events</div>;
        }
    };

	return (
        <div className={style.details}>
            <div className={style.main}>Events</div>
            <div className="ui relaxed divided list">{renderedEvents()}</div>
        </div>
    );
};

export default Events;
