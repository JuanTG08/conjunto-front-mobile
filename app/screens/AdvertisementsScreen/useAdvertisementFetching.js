import { useEffect, useState } from "react";
import { fetchListAllAdvertisement } from "./fetchAdvertisement";

export default function AdvertisementFetching(id) {
    const [listAdvertisements, setListAdvertisement] = useState(false);
    const [errorRequest, setErrorResponse] = useState(false);

    const setDataList = (advertisements) => {
        setListAdvertisement(advertisements);
        setErrorResponse(false);
    }

    const setError = (error) => {
        setListAdvertisement(false);
        setErrorResponse(error);
    }

    useEffect(() => {
        fetchListAllAdvertisement(id)
            .then(data => {
                if (!data.error && data.statusCode == 200) return setDataList(data.payload)
                setError(data.message);
            })
            .catch((err) => setError("Error de conexión"));
    }, []);

    return { listAdvertisements, errorRequest };
}
