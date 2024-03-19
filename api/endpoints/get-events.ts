import { Request, Response } from 'express';

import { IEvent, IMySQLError } from '../types';
import { mySQL, sendError } from '../utils';

export const getEvents = (req: Request, res: Response) => {
	mySQL.execute('SELECT * FROM test_database.events', (error: IMySQLError, results: IEvent[]) => {
        if (error) {
            sendError(res, error.sqlMessage);
        } else {
            res.send(results);
        }
    });
}