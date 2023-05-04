import axios from 'axios';

const FETCH_LOV_URL = (type) => `http://localhost:8080/lovs/${type}`;

const _fetchLOV = (type) => {

	return axios.get(FETCH_LOV_URL(type));
}

export const fetchLOV = (type) => {

	return {
		type: 'FETCH_LOV',
		payload: _fetchLOV(type)
	}
}