import { createConnection } from 'mysql2';

import { Response } from 'express';

export const mySQL = createConnection({
    user: 'test_user',
    database: 'test_database',
    password: 'test_password',
    host: 'localhost',
});

export const sendError = (res: Response, message: String) => res.status(500).send(`Error - ${message}`);
