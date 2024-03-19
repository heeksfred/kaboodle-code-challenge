CREATE TABLE ticketAllocations (
    eventID varchar(38) NOT NULL,
    ticketID varchar(38) NOT NULL,
	description varchar(255),
	PRIMARY KEY (eventID, ticketID)
);
