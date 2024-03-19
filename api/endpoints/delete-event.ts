
import { Request, Response } from 'express';

import { IMySQLError } from '../types';
import { mySQL, sendError } from '../utils';

export const deleteEvent = (req: Request, res: Response) => {
	const { eventID } = req.params;
    if (!eventID) {
        res.status(400).send('No event ID provided');
    } else {
        const command = `DELETE FROM test_database.events WHERE ID = '${eventID}'`;

        mySQL.execute(command, (error: IMySQLError) => {
            if (error) {
                sendError(res, error.sqlMessage);
            } else {
                res.send(`Deleted event ${eventID}`);
            }
        });
    }
}
