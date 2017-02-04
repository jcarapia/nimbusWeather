import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getWeather} from '../actions/index'

class SearchField extends Component {
	constructor(props) {
		super(props);

		this.state = {city: ''}
	}

	componentWillMount() {
		this.setState({city: localStorage.getItem("weather_city")});
	}

	componentDidMount() {
		if(this.state.city) {
			this.props.getWeather(this.state.city);
			console.log(this.state.city)
		}
	}

	onInputChange(e) {
		this.setState({city: e.target.value});
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.props.getWeather(this.state.city);
		localStorage.setItem('weather_city', this.state.city);
	}

	render() {
		return (
			<form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
				<input 
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
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getWeather}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchField);