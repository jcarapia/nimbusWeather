import {expect} from '../test_helper';
import weatherReducer from '../../public/src/reducers/weather_reducer';
import sample_props from '../sample_props'

import {GET_FORECAST} from '../../public/src/actions';

describe('Weather Reducer', () => {
	it('should return empty array for invalid action type', () => {
		expect(weatherReducer(undefined, {})).to.eql([]);	
	});

	it('should handle actions of type GET_FORECAST', () => {
		const action = {type: GET_FORECAST, payload: {data: sample_props}};
		expect(weatherReducer([], action)).to.eql([sample_props]);
	})
});