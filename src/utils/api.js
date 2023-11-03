import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key : "AIzaSyAp57cFSM9vpli9AtQfU4SOy5uxiJt6ckI",
    cx : "b3271da1979d04a2b"
}

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params : {...params, ...payload}
    })
    return data;
};
