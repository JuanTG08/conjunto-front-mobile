import axios from "axios";
import { Environment } from "../../../Environment";
import { TDataResponse } from "../../shared/interfaces/DataResponse";

export const fetchListAllAdvertisement = (transmitter_id: string) => {
  const API_ADVERTISEMENTS_URL = `${Environment.API_URL}/api/advertisements`;
  return axios
    .get<TDataResponse>(
      `${API_ADVERTISEMENTS_URL}/handdler-R-advertisements/${transmitter_id}`
    )
    .then((res) => res.data);
};
