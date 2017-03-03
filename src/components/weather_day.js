import React from 'react';

export default (props) => {
	
	const code = Number(props.code);
	
	let weather_class = (function(code){

		const snow = [5, 6, 7, 8, 13, 14, 15, 16, 41, 42, 43, 46];
		const thunder = [0, 1, 2, 3, 4, 5, 6, 37, 38, 45, 47];
		const rain = [9, 10, 11, 12, 17, 18, 35, 39, 40];
		const partly_cloudy = [27, 28, 29, 30, 44];
		const cloudy = [26];
		const sunny = [32];
		
		let weather_class = 'weather_icon ';

		if (snow.indexOf(code) !== -1) {
			weather_class += 'snow';
		} else if (thunder.indexOf(code) !== -1) {
			weather_class += 'thunder';
		} else if (rain.indexOf(code) !== -1) {
			weather_class += 'rain'
		} else if (partly_cloudy.indexOf(code) !== -1) {
			weather_class += 'partly_cloudy'; 
		} else if (cloudy.indexOf(code) !== -1) {
			weather_class += 'cloudy';
		} else {
			weather_class += 'sunny'; 
		}

		return weather_class;

	}(code));

	return (
		<div className="weather_day_container col-lg-6 col-md-12">
			
			<div className="weather_day clearfix">

				<div className={weather_class} ></div>

				<div>
					<div className="weather_day_location">
						<p>{props.location}</p>
					</div>

					<div className="weather_day_date">
						<p>For {props.week_day}, {props.date}</p>
					</div>

					<div className="weather_day_temp">
						<span className="temp">
							<h3>hi: {props.high} &deg;F</h3>
						</span>

						<span className="temp">
							<h3>lo: {props.low} &deg;F</h3>
						</span>
					</div>

				 	<div className="weather_day_desc">
				 		<p>{props.desc}</p>
				 	</div>
				</div> 	
			</div>
		</div>
	)
};