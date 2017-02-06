
import {expect} from '../test_helper';
import {GET_FORECAST, getWeather} from '../../public/src/actions';


describe('actions', () => {
	describe('getWeather', () => {

		it('has the correct type', () => {
			const action = getWeather();
			expect(action.type).to.equal(GET_FORECAST);
		});

		it('should retrieve data from Yahoo Weather API', () => {
			const weather = getWeather('Oakland');
			expect(Promise.resolve(weather.payload)).to.eventually.have.property('status', 200);
			expect(Promise.resolve(weather.payload)).to.eventually.have.property('data');
		});

	})

})