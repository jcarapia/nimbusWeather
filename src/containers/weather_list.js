import React, {Component} from 'react';
import {connect} from 'react-redux'; 

import WeatherDay from '../components/weather_day';

class WeatherList extends Component {

	renderWeather(data){

		if(data.query.results.channel){

		const temps_array = data.query.results.channel;

		return (
			temps_array.map(function(day){

				const location = day.title.split('-')[1];
				const date = day.item.forecast.date;
				const week_day = day.item.forecast.day;
				const high = day.item.forecast.high;
				const low = day.item.forecast.low;
				const desc = day.item.forecast.text;
				const code = day.item.forecast.code;
				
				return (
					<WeatherDay 
						location={location}
						date={date}
						week_day={week_day}
						high={high}
						low={low}
						desc={desc}
						code={code}
					/>
				)
			})
		)
	} else {
		return (<div>Loading</div>)
	}
};

	render() {

		return (
			<div className="container weather-list">
				{this.props.weather.map(this.renderWeather)}
				<div className="credits">
					App icons created by <a href="http://www.flaticon.com" target="_blank">Flaticon</a><span> - </span>
					Weather Forecast<a href="https://www.yahoo.com/?ilc=401" target="_blank"> <img src="https://poweredby.yahoo.com/purple.png" width="134" height="29"/> </a>
    		</div>
			</div>
		)
	}
};

function mapStateToProps({weather}) {
	return {weather};
};

export default connect(mapStateToProps)(WeatherList);