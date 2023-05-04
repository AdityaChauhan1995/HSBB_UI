import { combineReducers } from 'redux';
import { PENDING, FAILED, DEFAULT, SUCCESS } from '../../helpers/constants';
import {
	FETCH_TRANSFER_LIST_PENDING, FETCH_TRANSFER_LIST_FULFILLED, FETCH_TRANSFER_LIST_REJECTED,
	CREATE_TRANSFER_ORDER_PENDING, CREATE_TRANSFER_ORDER_FULFILLED, CREATE_TRANSFER_ORDER_REJECTED,
	UPDATE_TRANSFER_ORDER_PENDING, UPDATE_TRANSFER_ORDER_FULFILLED, UPDATE_TRANSFER_ORDER_REJECTED
} from '../action-types/transfer';


const initialMetaState = {
	FETCH_TRANSFER_LIST_STATUS: DEFAULT,
	CREATE_TRANSFER_ORDER_STATUS: DEFAULT,
	UPDATE_TRANSFER_ORDER_STATUS: DEFAULT
}
function metaReducer(state = initialMetaState, action) {

	switch (action.type) {
		case FETCH_TRANSFER_LIST_PENDING:
			return { ...initialMetaState, FETCH_TRANSFER_LIST_STATUS: PENDING };
		case FETCH_TRANSFER_LIST_FULFILLED:
			return { ...initialMetaState, FETCH_TRANSFER_LIST_STATUS: SUCCESS };
		case FETCH_TRANSFER_LIST_REJECTED:
			return { ...initialMetaState, FETCH_TRANSFER_LIST_STATUS: FAILED };
		case CREATE_TRANSFER_ORDER_PENDING:
			return { ...initialMetaState, CREATE_TRANSFER_ORDER_STATUS: PENDING };
		case CREATE_TRANSFER_ORDER_FULFILLED:
			return { ...initialMetaState, CREATE_TRANSFER_ORDER_STATUS: SUCCESS };
		case CREATE_TRANSFER_ORDER_REJECTED:
			return { ...initialMetaState, CREATE_TRANSFER_ORDER_STATUS: FAILED };
		case UPDATE_TRANSFER_ORDER_PENDING:
			return { ...initialMetaState, UPDATE_TRANSFER_ORDER_STATUS: PENDING };
		case UPDATE_TRANSFER_ORDER_FULFILLED:
			return { ...initialMetaState, UPDATE_TRANSFER_ORDER_STATUS: SUCCESS };
		case UPDATE_TRANSFER_ORDER_REJECTED:
			return { ...initialMetaState, UPDATE_TRANSFER_ORDER_STATUS: FAILED };
		default:
			return state;
	}
}


const initialDataState = {
	transferList: [],
	id:null

}
function dataReducer(state = initialDataState, action) {

	switch (action.type) {
		case FETCH_TRANSFER_LIST_FULFILLED:
			return {
				...state, transferList: action.payload.data
			}
		case CREATE_TRANSFER_ORDER_FULFILLED:
			return{
				...state, id:action.payload.data.id
			}
		default:
			return state;
	}
}


export default combineReducers({
	meta: metaReducer,
	data: dataReducer
});