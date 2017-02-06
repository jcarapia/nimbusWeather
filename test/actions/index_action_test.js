
import {expect} from '../test_helper';
import {GET_FORECAST, getWeather} from '../../public/src/actions';


describe('actions', () => {
	describe('getWeather', () => {

		it('has the correct type', () => {
			const action = getWeather();
			expect(action.type).to.equal(GET_FORECAST);
		});

		it('has the correct payload', () => {
			const payload = typeof(getWeather('Oakland').payload);
			expect(payload).to.equal('object');
		});

	})

})