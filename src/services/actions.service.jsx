import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const actionsService = {
    index: () => {
        return axios.get(baseUrl + "/all" );
    },
    show: ( id) => {
        return axios.get(baseUrl + "/intervention/" + id);
    },
    post: (dataForm, id) => {
        return axios.post(baseUrl + "/all" + id, dataForm);
    }
};

export default actionsService;