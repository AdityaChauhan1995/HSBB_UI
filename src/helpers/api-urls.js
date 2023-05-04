const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const DELETE_USER_URL=(userId)=> `http://localhost:8080/users/${userId}`;

export default {
  useMocks: false,
  useAuthentication: false,
  apiBaseUrl: `${API_BASE_URL}`,
  USER_OPERATORS_URL: `http://localhost:8080/operators/`,
  USER_ROLE_URL: `http://localhost:8080/roles/`,
  FETCH_USER_URL: `http://localhost:8080/users/`,
  CREATE_USER_URL: `http://localhost:8080/users/`,
  DELETE_USER_URL: DELETE_USER_URL
};
