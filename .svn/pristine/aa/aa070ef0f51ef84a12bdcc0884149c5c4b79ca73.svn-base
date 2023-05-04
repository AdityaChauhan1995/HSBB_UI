import { combineReducers } from 'redux';
import { PENDING, FAILED, DEFAULT, SUCCESS } from '../../helpers/constants';
import {
	FETCH_SUPPORT_LIST_PENDING,
	FETCH_SUPPORT_LIST_FULFILLED,
	FETCH_SUPPORT_LIST_REJECTED
} from '../action-types/ticket-support';


const initialMetaState = {

}
function metaReducer(state = initialMetaState, action) {

	switch (action.type) {
		default:
			return state;
	}
}


const initialDataState = {
	supportList: []

}
function dataReducer(state = initialDataState, action) {

	switch (action.type) {
		case FETCH_SUPPORT_LIST_FULFILLED:
			return{
				...state, supportList: action.payload
			}
		default:
			return state;
	}
}


export default combineReducers({
	meta: metaReducer,
	data: dataReducer
});