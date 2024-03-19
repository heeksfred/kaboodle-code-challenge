CREATE TABLE events (
	ID varchar(38) NOT NULL PRIMARY KEY,
    eventName varchar(255) NOT NULL,
    startDate varchar(10) NOT NULL,
    endDate varchar(10) NOT NULL,
    eventDescription varchar(255)
);