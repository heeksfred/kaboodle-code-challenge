import { Request, Response } from 'express';

import { v4 as uuidv4 } from 'uuid';

import { IMySQLError } from '../types';
import { mySQL, sendError } from '../utils';

export const postEvent = (req: Request, res: Response) => {
	const { eventName, startDate, endDate, eventDescription } = req.body;

	if (!eventName || !startDate || !endDate || !eventDescription) {
        res.status(400).send('Invalid input');
    } else {
        const id = uuidv4();
        const command = `INSERT INTO test_database.events(ID, eventName, startDate, endDate, eventDescription) VALUES('${id}', '${eventName}', '${startDate}', '${endDate}', '${eventDescription}')`;

        mySQL.execute(command, (error: IMySQLError) => {
            if (error) {
                sendError(res, error.sqlMessage);
            } else {
                res.send(`Created event ${id}`);
            }
        });
    }
}