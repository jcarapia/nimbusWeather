import React, {Component} from 'react';
import {connect} from 'react-redux'; 

import WeatherDay from '../components/weather_day';

class WeatherList extends Component {

	renderWeather(data){

		const temps_array = data.query.results.channel;
		console.log('the temps array', temps_array);


		return (
			temps_array.map(function(day){
				 //return (<div>{day.item.forecast.text}</div>)

				const date = day.item.forecast.date;
				const week_day = day.item.forecast.day;
				const high = day.item.forecast.high;
				const low = day.item.forecast.low;
				const desc = day.item.forecast.text;
				return (
					<WeatherDay 
						date={date}
						week_day={week_day}
						high={high}
						low={low}
						desc={desc}
					/>
				)
			})
		)
	}

	render() {
		return (
			<div>
				{this.props.weather.map(this.renderWeather)}
			</div>
		)
	}
}

function mapStateToProps({weather}) {
	return {weather};
};

export default connect(mapStateToProps)(WeatherList);