import { Request, Response } from 'express';

import { IMySQLError } from '../types';
import { mySQL, sendError } from '../utils';

export const putEvent = (req: Request, res: Response) => {
	const { eventID } = req.params;
	const { eventName, startDate, endDate, eventDescription } = req.body;

	if (eventID === undefined || eventID === '') {
		res.status(400).send('No event ID provided');
	} else if (!eventName || !startDate || !endDate || !eventDescription) {
        res.status(400).send('Invalid input');
    } else {
        const command = `update test_database.events
					set eventName = '${eventName}', startDate='${startDate}', endDate='${endDate}', 
					eventDescription='${eventDescription}'
					where ID = '${eventID}'`;

        mySQL.execute(command, (error: IMySQLError) => {
            if (error) {
                sendError(res, error.sqlMessage);
            } else {
                res.send(`Updated event ${eventID}`);
            }
        });
    }
}