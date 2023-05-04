import { combineReducers } from 'redux';
import {
	FETCH_USERS_PENDING, FETCH_USERS_FULFILLED, FETCH_USERS_REJECTED,
	FETCH_OPERATORS_PENDING, FETCH_OPERATORS_FULFILLED, FETCH_OPERATORS_REJECTED,
	FETCH_USER_ROLES_FULFILLED,
	SAVE_USER_PENDING, SAVE_USER_FULFILLED, SAVE_USER_REJECTED,
	DELETE_USER_PENDING, DELETE_USER_FULFILLED, DELETE_USER_REJECTED
} from '../action-types/admin'
import { PENDING, FAILED, DEFAULT, SUCCESS } from '../../helpers/constants';



const initialMetaState = {
	FETCH_OPERATORS_STATUS: DEFAULT,
	SAVE_USER_STAUS: DEFAULT,
	DELETE_USER_STATUS: DEFAULT,
	FETCH_USERS_STATUS: DEFAULT

}
function metaReducer(state = initialMetaState, action) {

	switch (action.type) {
		case FETCH_OPERATORS_PENDING:
			return { ...state, FETCH_OPERATORS_STATUS: PENDING };
		case FETCH_OPERATORS_FULFILLED:
			return { ...state, FETCH_OPERATORS_STATUS: SUCCESS };
		case FETCH_OPERATORS_REJECTED:
			return { ...state, FETCH_OPERATORS_STATUS: FAILED };
		case SAVE_USER_PENDING:
			return { ...state, SAVE_USER_STAUS: PENDING };
		case SAVE_USER_FULFILLED:
			return { ...state, SAVE_USER_STAUS: SUCCESS };
		case SAVE_USER_REJECTED:
			return { ...state, SAVE_USER_STAUS: FAILED };
		case DELETE_USER_PENDING:
			return { ...state, DELETE_USER_STATUS: PENDING };
		case DELETE_USER_FULFILLED:
			return { ...state, DELETE_USER_STATUS: SUCCESS };
		case DELETE_USER_REJECTED:
			return { ...state, DELETE_USER_STATUS: FAILED };
		case FETCH_USERS_PENDING:
			return { ...state, FETCH_USERS_STATUS: PENDING };
		case FETCH_USERS_FULFILLED:
			return { ...state, FETCH_USERS_STATUS: SUCCESS };
		case FETCH_USERS_REJECTED:
			return { ...state, FETCH_USERS_STATUS: FAILED };
		default:
			return state;
	}
}




const initialDataState = {
	usersList: [],
	userRoles: [],
	userOperators: [],
	addressList: []
}

function dataReducer(state = initialDataState, action) {

	switch (action.type) {

		case FETCH_USERS_FULFILLED:
			return {
				...state, usersList: action.payload.data
			}
		case FETCH_OPERATORS_FULFILLED:
			return {
				...state, userOperators: action.payload.data
			}
		case FETCH_USER_ROLES_FULFILLED:
			return {
				...state, userRoles: action.payload.data
			}
		default:
			return state;
	}
}


export default combineReducers({
	meta: metaReducer,
	data: dataReducer
});