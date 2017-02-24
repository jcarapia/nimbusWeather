import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getWeather} from '../actions/index';

class SearchField extends Component {
	constructor(props) {
		super(props);
		this.state = {city: ''}
	}

	componentWillMount() {

		function getCookie(cname) {
	    var name = cname + "=";
	    var decodedCookie = decodeURIComponent(document.cookie);
	    var ca = decodedCookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
			};

			let city = getCookie('weatherCookie');

			this.setState({city: city});
	};

	componentDidMount() {
		if(this.state.city) {
			this.props.getWeather(this.state.city);
			this.setState({city: ''})
		}
	};

	onInputChange(e) {
		this.setState({city: e.target.value});
	};

	onFormSubmit(e) {
		e.preventDefault();
		this.props.getWeather(this.state.city);
		document.cookie = `weatherCookie=${this.state.city}`;
		localStorage.setItem('weather_city', this.state.city);
		this.setState({city: ''});
	};

	render() {
		return (
			<form className="search-field input-group col-md-6 col-sm-8" onSubmit={this.onFormSubmit.bind(this)}>
				<input 
					value={this.state.city}
					className="form-control"
					placeholder="Enter the name of a city..."
					onChange={this.onInputChange.bind(this)}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getWeather}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchField);