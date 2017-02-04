import {GET_FORECAST} from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case GET_FORECAST:
			return [action.payload.data]
	}
	return state;
};