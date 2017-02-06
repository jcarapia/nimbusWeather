import { renderComponent , expect } from '../test_helper';
import WeatherList from '../../public/src/containers/weather_list';
import WeatherDay from '../../public/src/components/weather_day';
import weather from '../sample_props';

describe('WeatherDay', () => {

	let component;

	beforeEach(() => {
		const props = {'weather':  weather}
		component = renderComponent(WeatherList, null, props );
	});
	
	it('should exist', () => {
		expect(component).to.exist;
	})

	it('should render the correct weather information', () => {
		expect(component.find('.weather_day_location').first()).to.contain('Oakland');
		expect(component.find('.weather_day_date').first()).to.contain('Sun, 05 Feb 2017');
		expect(component.find('.weather_day_temp').first()).to.contain('hi: 58');
		expect(component.find('.weather_day_temp').first()).to.contain('lo: 50');
		expect(component.find('.weather_day_desc').first()).to.contain('Rain');
	});
})