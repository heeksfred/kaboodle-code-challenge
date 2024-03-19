CREATE TABLE tickets (
	ID varchar(38) NOT NULL PRIMARY KEY,
    ticketName varchar(255) NOT NULL,
    ticketType varchar(20) NOT NULL,
    pricePence int,
	bookingFeePence int,
	available int
);

