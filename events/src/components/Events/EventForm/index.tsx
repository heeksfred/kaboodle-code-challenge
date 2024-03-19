import React, { useState } from 'react';

import { IBaseEvent } from 'types';

import style from './events.module.scss';

interface Props {
    onSubmit;
}

const EventForm: React.FC<Props> = ({ onSubmit }) => {
    const [eventName, setEventName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        const { eventName, eventStart, eventEnd, eventDescription } = formJson;

        const event: IBaseEvent = {
            eventName: eventName as string,
            startDate: eventStart as string,
            endDate: eventEnd as string,
            eventDescription: eventDescription as string,
        };

		onSubmit(event);
		
		setEventName('');
		setStartDate('');
		setEndDate('');
		setEventDescription('');
    };

    return (
        <div className={style.form}>
            <div> Enter an Event</div>
            <form method="post" className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Name of Event:</label>
                    <input
                        name="eventName"
                        value={eventName}
                        type="text"
                        onChange={e => setEventName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Start of Event:</label>
                    <input
                        name="eventStart"
                        value={startDate}
                        type="text"
                        onChange={e => setStartDate(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>End of Event:</label>
					<input
						name="eventEnd"
						value={endDate}
						type="text"
						onChange={e => setEndDate(e.target.value)} />
                </div>
                <div className="field">
                    <label>Description:</label>
                    <input
                        name="eventDescription"
                        value={eventDescription}
                        onChange={e => setEventDescription(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="button">
                    <input value="Add Event" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default EventForm;
