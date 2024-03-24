import request from 'supertest';

import app, { server } from '../server';

import events from './json/events.json';
import tickets from './json/tickets.json';
import updatedEvent from './json/eventUpdate.json';

import { version as apiVersion } from '../package.json';

describe('endpoint tests', () => {
	afterAll(function (done) {
		server.close(done);
	});
	
    it('GETs /version', async () => {
        const res = await request(app).get('/version');

        expect(res.statusCode).toBe(200);
        expect(res.text).toBe(apiVersion);
    });

	it('GETs /events', async () => {
		const res = await request(app).get('/events');

		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual(events);
	});
	
	it('GETs /events by date', async () => {
		const res = await request(app).get('/events?searchDate=2024-08-01');

		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual(events);
	});

	it('GETs /tickets', async () => {
		const res = await request(app).get('/tickets/89d009b3-f21a-4a6d-8ea5-269d33df87ff');

		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual(tickets);
	});

	let eventID = '';

	it('POSTs /event', async () => {
		const res = await request(app).post('/events').send(updatedEvent);

		expect(res.statusCode).toBe(200);
		expect(res.text).toContain('Created event ');
		eventID = res.text.slice(14);
	});

	it('PUTs /event', async () => {
		const body = {
            eventName: 'My Festival',
            startDate: '2024/08/21',
            endDate: '2024/08/22',
            eventDescription: 'A stunning festival in the Rossendale countryside',
        };
		const res = await request(app).put(`/events/${eventID}`).send(body);

		expect(res.statusCode).toBe(200);
		expect(res.text).toContain('Updated event ');
	});

	it('DELETEs /events', async () => {
        const res = await request(app).delete(`/events/${eventID}`);

        expect(res.statusCode).toBe(200);
		expect(res.text).toContain('Deleted event ');
	});

	it('fails to POST /events', async () => {
		const body = {
            eventName: 'Missing data'
        };
        const res = await request(app).post('/events').send(body);

        expect(res.statusCode).toBe(400);
		expect(res.text).toEqual('Invalid input');
	});

	it('fails to PUT /events without all data', async () => {
		const body = {
            eventName: 'Missing data'
        };
        const res = await request(app).put('/events/1343f3a9-118d-452e-8c9c-812e17ed10b3').send(body);

        expect(res.statusCode).toBe(400);
		expect(res.text).toEqual('Invalid input');
	});
	
});
