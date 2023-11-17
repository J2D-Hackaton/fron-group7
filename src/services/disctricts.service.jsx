import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const districtService = {
    index: () => {
        return axios.get(baseUrl + "/boroughs" );
    },
};
