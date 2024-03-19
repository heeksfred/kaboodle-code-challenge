import { Router } from 'express';

import { version } from '../endpoints/version';
import { getEvents } from '../endpoints/get-events';
import { postEvent } from '../endpoints/post-event';
import { deleteEvent } from '../endpoints/delete-event';
import { getTickets } from '../endpoints/get-tickets';
import { putEvent } from '../endpoints/put-event';

const router = Router();

router.get('/version', version);
router.get('/events', getEvents);
router.get('/tickets/:eventID', getTickets);
router.post('/events', postEvent);
router.delete('/events/:eventID', deleteEvent);
router.put('/events/:eventID', putEvent);

export default router;