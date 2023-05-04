import axios from 'axios';
import config from '../../helpers/api-urls';
import mockData from './mockData';



const _fetchOperators = () => {

  if (config.useMocks) {
    return Promise.resolve(mockData.users)
  }else{
    return axios.get(config.USER_OPERATORS_URL);
  }
  
  /*return new Promise((resolve, reject) => {

    resolve(mockData.userOperators);
  })*/
}

export const fetchOperators = () => {
  return {
    type: 'FETCH_OPERATORS',
    payload: _fetchOperators()
  }
}


const _fetchUserRoles = () => {

  return axios.get(config.USER_ROLE_URL);
  /*return new Promise((resolve, reject) => {


    resolve(mockData.userRoles);
  })*/
}
export const fetchUserRoles = () => {
  return {
    type: 'FETCH_USER_ROLES',
    payload: _fetchUserRoles()
  }
}


const _fetchUsers = () => {

  return axios.get(config.FETCH_USER_URL);

  /*return new Promise((resolve, reject) => {
    resolve(mockData.users);
  })*/
}

export const fetchUsers = () => {
  return {
    type: 'FETCH_USERS',
    payload: _fetchUsers()
  }
}


const _saveUser = (userDetail) => {

  console.log(userDetail);
  return axios.post(config.CREATE_USER_URL, userDetail);
/*  return new Promise((resolve, reject) => {
    resolve({userDetail});
  })*/
}


export const saveUser = (userDetail)=>{

  return{
    type:'SAVE_USER',
    payload:_saveUser(userDetail)
  }
}


const _deleteExistingUser = (userId) => {


  return axios.delete(config.DELETE_USER_URL(userId));
/*  return new Promise((resolve, reject) => {
    resolve({userDetail});
  })*/
}


export const deleteExistingUser = (userId)=>{

  return{
    type:'DELETE_USER',
    payload:_deleteExistingUser(userId)
  }
}
