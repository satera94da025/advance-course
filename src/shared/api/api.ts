import axios from "axios";
import { USER_LOCALSTORAGE } from "../const/localstorage";

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE) || '',
    },
});
