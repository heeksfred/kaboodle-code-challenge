import { Request, Response } from 'express';

import { ITicket, IMySQLError } from '../types';
import { mySQL, sendError } from '../utils';

export const getTickets = (req: Request, res: Response) => {
	const { eventID } = req.params;
	if (!eventID) {
		res.status(400).send('No event ID provided');
	} else {
		const query = `SELECT ticketName, ticketType, pricePence, bookingFeePence, available 
					FROM test_database.ticketAllocations ta JOIN test_database.tickets t ON ta.ticketID = t.ID
					WHERE eventID = '${eventID}'`;

		mySQL.execute(query, (error: IMySQLError, results: ITicket[]) => {
            if (error) {
                sendError(res, error.sqlMessage);
            } else {
                res.send(results);
            }
        });
	}
}