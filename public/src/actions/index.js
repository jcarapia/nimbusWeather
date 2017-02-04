import axios from 'axios';

// const ROOT_URL = `https://query.yahooapis.com/v1/public/yql?
// 									format=json&q=select+title%2C+units.temperature%2C+
// 									item.forecast%0Afrom+weather.forecast%0Awhere+woeid+in
// 									+%28select+woeid+from+geo.places+where+text%3D%22Oakland%2C+US
// 									%22%29%0Aand+u+%3D+%27F%27%0Alimit+10%0A%7C%0Asort%28field%3D%22
// 									item.forecast.date%22%2C+descending%3D%22false%22%29%0A%3B`;

export const GET_FORECAST = 'GET_FORECAST';

export function getWeather(city) {
	const url = `https://query.yahooapis.com/v1/public/yql?
									format=json&q=select+title%2C+units.temperature%2C+
									item.forecast%0Afrom+weather.forecast%0Awhere+woeid+in
									+%28select+woeid+from+geo.places+where+text%3D%22${city}%2C+US
									%22%29%0Aand+u+%3D+%27F%27%0Alimit+10%0A%7C%0Asort%28field%3D%22
									item.forecast.date%22%2C+descending%3D%22false%22%29%0A%3B`;
	const request = axios.get(url);
	console.log('Request', request);

	return {
		type: GET_FORECAST,
		payload: request
	}
}

