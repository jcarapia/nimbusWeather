import React, {Component} from 'react';
import {connect} from 'react-redux'; 

class WeatherList extends Component {

	renderWeather(data){

		const temps_array = data.query.results.channel;
		console.log(temps_array);


		return (
			temps_array.map(function(day){
				return (<div>{day.item.forecast.text}</div>)
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