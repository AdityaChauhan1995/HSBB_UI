import { combineReducers } from 'redux' ;

import { PENDING, FULFILLED, FAILED, SUCCESS } from '../../helpers/constants'
import { USER_LOGIN_PENDING, USER_LOGIN_FULFILLED,  USER_LOGIN_REJECTED,
		USER_LOG_OUT_PENDING, USER_LOG_OUT_FULFILLED, USER_LOG_OUT_REJECTED,
		USER_LOGGED_IN_PENDING, USER_LOGGED_IN_FULFILLED } from '../action-types/login';

const initialMetaState = {
		LOGIN_STATUS : 'DEFAULT',
		USER_LOG_OUT_STATUS : 'DEFAULT',
		USER_LOGGED_IN_STATUS: 'DEFAULT'
}

const initialDataState = {
	loggedInUser : '',
	loggedInTime : '',
	loggedOutTime : '',
	userLoggedIn : false,
	statusCode : '',
	userRole: ''
/*	authorizationCode : '',
	profile:'',
	dbUrl:''*/
}

function metaReducer ( state = initialMetaState , action ){

	switch(action.type){
		case USER_LOGIN_PENDING:
			return { ...state, LOGIN_STATUS : PENDING };
		case USER_LOGIN_FULFILLED : 
		 	return { ...state, LOGIN_STATUS : SUCCESS };
		 case USER_LOGIN_REJECTED :
		 	return { ...state, LOGIN_STATUS : FAILED };
		 case USER_LOG_OUT_PENDING:
		 	return { ...state, USER_LOG_OUT_STATUS : PENDING};
		 case USER_LOG_OUT_FULFILLED:
		 	return { ...state, USER_LOG_OUT_STATUS : SUCCESS };
		 case USER_LOGGED_IN_PENDING:
		 	return { ...state, USER_LOGGED_IN_STATUS : PENDING};
		 case USER_LOGGED_IN_FULFILLED:
		 	return { ...state, USER_LOGGED_IN_STATUS : SUCCESS };
		 default :
		 	return state;
	}

}

function dataReducer ( state = initialDataState, action) {

	switch(action.type){
		case USER_LOGIN_FULFILLED:
			return { ...state,
				userLoggedIn: true,
				statusCode: '201',
				userRole: 'ADMIN'
			};
		 case USER_LOG_OUT_FULFILLED:
		 	return {
		 		...state, loggedInUser: '',
		 	 userRole: '',
		 	 userLoggedIn:false,
		 	 SET_LOGIN_STATUS : FAILED
		 	};
		 case USER_LOGGED_IN_FULFILLED:
		 console.log(action.payload);
		 	return {
		 	...state, loggedInUser: action.payload.userName
		 	};
		default :
			return state ;
	}
}

export default combineReducers ({
	meta : metaReducer ,
	data : dataReducer
});