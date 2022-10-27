import axios from "axios";
import { Environment } from "../../../Environment";

export const fetchListAllAdvertisement = (transmitter_id) => {
  const API_ADVERTISEMENTS_URL = `${Environment.API_URL}/api/advertisements`;
  return axios
    .get(
      `${API_ADVERTISEMENTS_URL}/handdler-R-advertisements/${transmitter_id}`
    )
    .then((res) => res.data);
};
