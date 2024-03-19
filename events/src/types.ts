export interface IBaseEvent {
    eventName: string;
    startDate: string;
    endDate: string;
    eventDescription: string;
}

export interface IEvent extends IBaseEvent {
	ID: string;
}

export interface ITicket {
    ID: string;
    ticketName: string;
    ticketType: string;
    pricePence: number;
    bookingFeePence: number;
    available: number;
}
