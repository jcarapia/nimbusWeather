import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('Nimbus', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	it('should exist', () => {
		expect(component).to.exist;
	});

	it('should have a SearchField form component', () => {
		expect(component.find('.search-field')).to.exist;
	});

	it('should have a WeatherList component', () => {
		expect(component.find('.weather-list')).to.exist;
	});
	
});
