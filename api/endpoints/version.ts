import { Request, Response } from 'express';
import { version as apiVersion } from '../package.json';

export const version = (req: Request, res: Response) => {
	res.send(apiVersion);
};
