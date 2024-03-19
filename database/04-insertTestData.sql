INSERT INTO tickets(ID, ticketName, ticketType, pricePence, bookingFeePence, available)
VALUES('f87ec98e-33fb-4c95-b084-8f07dbd68586', 'Weekend Camping', 'Adult', 19000, 1000, 4000);

INSERT INTO tickets(ID, ticketName, ticketType, pricePence, bookingFeePence, available)
VALUES('798c6305-3f54-4edc-8c94-7511035515df', 'Weekend', 'Child 10 to 16', 9000, 500, 2000);

INSERT INTO tickets(ID, ticketName, ticketType, pricePence, bookingFeePence, available)
VALUES('aa821ed4-390d-4b6a-a5ab-9b0468d8fb18', 'Weekend', 'Child 5 to 10', 6500, 500, 1500);

INSERT INTO tickets(ID, ticketName, ticketType, pricePence, bookingFeePence, available)
VALUES('3feba6c0-c43a-4c7c-ba50-ac911e56d584', 'Weekend', 'Child under 5', 2000, 500, 1000);

INSERT INTO tickets(ID, ticketName, ticketType, pricePence, bookingFeePence, available)
VALUES('bb2460ba-285b-40e0-bf0c-a7ef37e74680', 'All Days', 'Adult', 35500, 500, 40000);

INSERT INTO tickets(ID, ticketName, ticketType, pricePence, bookingFeePence, available)
VALUES('71cdd10d-c4d4-4f7f-a560-e9f0dd441692', 'Sunday Only', 'Adult', 19000, 500, 20000);

INSERT INTO ticketAllocations(eventID, ticketID)
VALUES('089d009b3-f21a-4a6d-8ea5-269d33df87ff', 'f87ec98e-33fb-4c95-b084-8f07dbd68586');

INSERT INTO ticketAllocations(eventID, ticketID)
VALUES('89d009b3-f21a-4a6d-8ea5-269d33df87ff', '798c6305-3f54-4edc-8c94-7511035515df');

INSERT INTO ticketAllocations(eventID, ticketID)
VALUES('89d009b3-f21a-4a6d-8ea5-269d33df87ff', 'aa821ed4-390d-4b6a-a5ab-9b0468d8fb18');

INSERT INTO ticketAllocations(eventID, ticketID)
VALUES('89d009b3-f21a-4a6d-8ea5-269d33df87ff', '3feba6c0-c43a-4c7c-ba50-ac911e56d584');

INSERT INTO ticketAllocations(eventID, ticketID)
VALUES('1343f3a9-118d-452e-8c9c-812e17ed10b3', 'bb2460ba-285b-40e0-bf0c-a7ef37e74680');

INSERT INTO ticketAllocations(eventID, ticketID)
VALUES('1343f3a9-118d-452e-8c9c-812e17ed10b3', '71cdd10d-c4d4-4f7f-a560-e9f0dd441692');

INSERT INTO events(ID, eventName, startDate, endDate, eventDescription)
VALUES('89d009b3-f21a-4a6d-8ea5-269d33df87ff', 'Beautiful Days', '2024-08-16', '2024-08-18', 'Escot Park, Devon');

INSERT INTO events(ID, eventName, startDate, endDate, eventDescription)
VALUES('1343f3a9-118d-452e-8c9c-812e17ed10b3', 'Glastonbury', '2024-07-26', '2024-07-30', 'Worthy Farm, Pilton, Somerset');