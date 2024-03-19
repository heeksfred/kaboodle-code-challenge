import React, { useEffect, useState } from 'react';

import Header from '../Header';
import EventDetails from '../Events/EventDetails';
import EventForm from '../Events/EventForm';
import EventTickets from '../Events/EventTickets';

import { IEvent } from 'types';

import { getEvents, postEvent } from '../../services/api';

import style from './main.module.scss';

const Main: React.FC<{}> = () => {
	const [events, setEvents] = useState<IEvent[]>([]);
	const [selectedEvent, setSelectedEvent] = useState<string>('');
	const[message, setMessage] = useState<string>('');

	const getAllEvents = async () => {
		try {
			const events = await getEvents();

			setEvents(events.data);

		} catch (error) {
			setMessage(`Error getting event data - ${error}`);
		}
	};

	const addEvent = async (event: IEvent) => {
        try {
			const { data } = await postEvent(event);
			
			setEvents([...events, { ...event, ID: data.slice(15) }]);
        } catch (error) {
			setMessage(`Error adding event - ${error}`);
        }
	};
	
	const onClick = (eventID: string) => {
		setSelectedEvent(eventID);
	}

	useEffect(() => {
        getAllEvents();
    }, [events]);

    return (
        <div className={style.wrapper}>
            <Header />
            <main className={style.main}>
                <EventForm onSubmit={addEvent} />
                <EventDetails events={events} onClick={onClick} />
            </main>
            <EventTickets eventID={selectedEvent} />
            <footer className={style.footer}>{message}</footer>
        </div>
    );
};

export default Main;