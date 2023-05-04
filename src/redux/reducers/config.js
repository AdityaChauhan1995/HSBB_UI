import { combineReducers } from 'redux';
import { PENDING, FAILED, DEFAULT, SUCCESS } from '../../helpers/constants';
import { FETCH_LOV_PENDING, FETCH_LOV_FULFILLED, FETCH_LOV_REJECTED }
	from '../action-types/config';


const initialMetaState = {
	FETCH_LOV_STATUS: DEFAULT
}


const initialDataState = {
	lovList: []
}


function metaReducer(state = initialMetaState, action) {

	switch (action.type) {
		case FETCH_LOV_PENDING:
			return { initialMetaState, FETCH_LOV_STATUS: PENDING };
		case FETCH_LOV_FULFILLED:
			return { initialMetaState, FETCH_LOV_STATUS: SUCCESS };
		case FETCH_LOV_REJECTED:
			return { initialMetaState, FETCH_LOV_STATUS: FAILED };
		default:
			return state;
	}
}


function dataReducer(state = initialDataState, action) {

	switch (action.type) {
		case FETCH_LOV_FULFILLED:
			return { ...state, lovList: action.payload.data };
		default:
			return state;
	}
}



export default combineReducers({
	meta: metaReducer,
	data: dataReducer
});