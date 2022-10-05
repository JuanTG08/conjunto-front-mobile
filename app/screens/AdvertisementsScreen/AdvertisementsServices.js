import { Environment } from "../../../Environment";
import axios from "axios";
export default class AdvertisementsService {
    API_ADVERTISEMENTS_URL = `${Environment.API_URL}/api/advertisements`;
    constructor() { }

    async listAdvertisements(transmitter_id) {
        let response = false;
        const endUrl = `${this.API_ADVERTISEMENTS_URL}/handdler-R-advertisements/${transmitter_id}`;
        return await axios.get(endUrl)
        return response;
    }
}