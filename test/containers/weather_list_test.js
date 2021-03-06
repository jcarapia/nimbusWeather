import { renderComponent , expect } from '../test_helper';
import WeatherList from '../../src/containers/weather_list';
import weather from '../sample_props'

describe('WeatherList', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(WeatherList, null, {weather: weather});
	});

	it('should exist', () => {		
		expect(component).to.exist;
	});

	it('should render 10 weather day elements', () => {
		expect(component.find('.weather_day_container').length).to.equal(10);
	});

});
