import React from 'react';

export default (props) => {
	console.log('from the component', props)
	return (
		<div className="weather_day_container col-md-6 col-sm-12">
			
			<div className="weather_day clearfix">

				<div className="weather_icon"></div>

				<div>
					<div className="weather_day_date">
						<p>For {props.week_day}, {props.date}</p>
					</div>

					<div className="weather_day_temp">
						<span className="high_temp">
							<h3>hi: {props.high}</h3>
						</span>

						<span className="low_temp">
							<h3>lo: {props.low}</h3>
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