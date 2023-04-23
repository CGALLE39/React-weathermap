const API_KEY = '4b777c819f9704c0099d5c9dc91e95ff';
const BASE_URL = "http://api.openweatermap.org/data/2.5";


const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY}
    );

    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
};

export default getWeatherData;