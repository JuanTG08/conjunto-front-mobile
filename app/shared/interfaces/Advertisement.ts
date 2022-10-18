export interface IAdvertisementTransmitter {
    _id: string;
    nameTransmitter: string;
    role: string;
}

export type TAdvertisement = {
    _id: string;
    title: string;
    description: string;
    miniature: string;
    transmitter: IAdvertisementTransmitter;
    status: boolean;
    created_at: string;
}

export interface IAdvertisement {
    _id: string;
    title: string;
    description: string;
    miniature: string;
    transmitter: IAdvertisementTransmitter;
    status: boolean;
    created_at: string;
}