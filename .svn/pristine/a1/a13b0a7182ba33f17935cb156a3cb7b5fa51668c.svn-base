import axios from 'axios';


const _loginToPortal = (username, password) => {
	return new Promise((resolve, reject) => {
		resolve();
	})
/*	return axios.post('https://bxevpug9a1.execute-api.ap-southeast-1.amazonaws.com/dev/login', { userName: username, password: password });
*/}

export const loginToPortal = (username, password) => {
	return dispatch => {
		dispatch({
			type: 'USER_LOGIN',
			payload: _loginToPortal(username, password)
		})
	}
}

const _logOutReportingPortal = () => {
	return new Promise((resolve, reject) => {
		resolve();
	})
}

export const logOutReportingPortal = () => {
	return dispatch => {
		dispatch({
			type: 'USER_LOG_OUT',
			payload: _logOutReportingPortal()
		})
	};
}

const _userLoggedIn = (userName) => {
	return new Promise((resolve, reject) => {
		resolve({ userName });
	})
}

export const userLoggedIn = (userName) => {
	console.log(userName);
	return dispatch => {
		dispatch({
			type: 'USER_LOGGED_IN',
			payload: _userLoggedIn(userName)
		})
	}
}

