import { renderComponent , expect } from '../test_helper';
import WeatherDay from '../../public/src/components/weather_day';

describe('WeatherDay', () => {

	let component;

	beforeEach(() => {
		const props = {}
		component = renderComponent(WeatherDay);
	});
	
	it('should exist', () => {
		expect(component).to.exist;
	})

	xit('should render the correct weather information', () => {
		//expect(component.find()
	});
})