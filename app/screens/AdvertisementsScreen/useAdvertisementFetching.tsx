import { useEffect, useState } from "react";
import { IAdvertisement, TAdvertisement } from "../../shared/interfaces/Advertisement";
import { fetchListAllAdvertisement } from "./fetchAdvertisement";

export default function AdvertisementFetching(id: string) {
    const [listAdvertisements, setListAdvertisement] = useState<TAdvertisement[] | boolean>(false);
    const [errorRequest, setErrorResponse]: any = useState<string | boolean>(false);

    const setDataList = (advertisements: IAdvertisement[]) => {
        setListAdvertisement(advertisements);
        setErrorResponse(false);
    }

    const setError = (error: string) => {
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
