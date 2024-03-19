import axios, { AxiosPromise } from 'axios';
import { IBaseEvent, IEvent, ITicket } from '../types';

const stage = 'dev';

const stageURLs: { [key: string]: string } = {
    dev: 'http://localhost:5000'
};

export const baseURL = stageURLs[stage];

interface IMakeRequest {
    url: string;
    data?: any;
    headers?: any;
    method?: 'get' | 'put' | 'post' | 'delete' | 'patch';
}

const makeRequest = <T = any>({ url, method = 'get', data, headers }: IMakeRequest) => {
    return axios({
        baseURL,
        url,
        method,
        data,
        headers,
    }) as AxiosPromise<T>;
}

export const getEvents = () => {
    const response = makeRequest<IEvent[]>({
        url: `/events`,
        method: 'get',
    });

    return response
}

export const getTickets = (eventID: string) => {
    const response = makeRequest<ITicket[]>({
        url: `/tickets/${eventID}`,
        method: 'get',
    });

    return response
}

export const postEvent = (event: IBaseEvent) => {
    const response = makeRequest<string>({
        url: `/events`,
        method: 'post',
        data: event,
    });

    return response;
};





