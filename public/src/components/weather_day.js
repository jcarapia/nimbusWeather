import React from 'react';

export default (props) => {
	console.log('from the component', props.code)
	const code = Number(props.code);
	let weather_class;

	if(code >=5 && code <=8 || code >=13 && code <=16 || code >=41 && code <=43 || code === 46 ){
		weather_class='weather_icon snow';
	} else if (code >=0 && code <= 6 || code >= 37 && code <= 38 || code === 45 || code === 47) {
		weather_class='weather_icon thunder';
	} else if ( code >=9 && code <=12 || code === 17 || code ===18  || code === 35 || code === 39 || code === 40) {
		weather_class='weather_icon rain'; 
	} else if (code >= 27 && code <= 30 || code === 44) {
		weather_class='weather_icon partly_cloudy';
	} else if (code === 26) {
		weather_class='weather_icon cloudy';
	} else {
		weather_class='weather_icon sunny';
	}



	return (
		<div className="weather_day_container col-lg-6 col-md-12">
			
			<div className="weather_day clearfix">

				<div className={weather_class} ></div>

				<div>
					<div className="weather_day_date">
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
}