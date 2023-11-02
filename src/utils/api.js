import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key : "AIzaSyCfcoY9VL87wsZOAxpIQkwd7Ca7z5Lpkeo",
    cx : "77e4c1a501cf1443c"
}

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params : {...params, ...payload}
    })
    return data;
};
