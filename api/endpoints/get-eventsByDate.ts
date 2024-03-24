import { Request, Response } from 'express';

import { IEvent, IMySQLError } from '../types';
import { mySQL, sendError } from '../utils';

export const getEvents = (req: Request, res: Response) => {
    const { searchDate } = req.params;
    if (!searchDate) {
        res.status(400).send('No data supplied to search by');
    } else {
        const query = `SELECT * FROM test_database.events WHERE DATE('${searchDate}') BETWEEN DATE(startDate) AND DATE(endDate)`;
        mySQL.execute(query, (error: IMySQLError, results: IEvent[]) => {
            if (error) {
                sendError(res, error.sqlMessage);
            } else {
                res.send(results);
            }
        });
    }
}