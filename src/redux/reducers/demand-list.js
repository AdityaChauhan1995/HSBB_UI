import { combineReducers } from 'redux';
import { PENDING, FAILED, DEFAULT, SUCCESS } from '../../helpers/constants';
import {
	FETCH_DEMAND_LIST_PENDING,
	FETCH_DEMAND_LIST_FULFILLED,
	FETCH_DEMAND_LIST_REJECTED
} from '../action-types/demand-list';


const initialMetaState = {

}
function metaReducer(state = initialMetaState, action) {

	switch (action.type) {
		default:
			return state;
	}
}


const initialDataState = {
	demandList: []

}
function dataReducer(state = initialDataState, action) {

	switch (action.type) {
		case FETCH_DEMAND_LIST_FULFILLED:
			return{
				...state, demandList: action.payload
			}
		default:
			return state;
	}
}


export default combineReducers({
	meta: metaReducer,
	data: dataReducer
});