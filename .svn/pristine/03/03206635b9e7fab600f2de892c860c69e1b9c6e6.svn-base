import axios from 'axios';
import config from '../../helpers/api-urls';
import mockData from './mockData';


const FETCH_TRANSFER_LIST_URL = (id, mode) => `http://localhost:8080/transferorder/${id}/${mode}`;
const TRANSFER_ORDER_URL =  `http://localhost:8080/transferorder`;

const _fetchTransferList = (id, mode) => {


  return axios.get(FETCH_TRANSFER_LIST_URL(id, mode));
  /*return new Promise((resolve, reject) => {
    resolve(mockData.transferList);
  })*/
}

export const fetchTransferList = (id, mode) => {
  return {
    type: 'FETCH_TRANSFER_LIST',
    payload: _fetchTransferList(id, mode)
  }
}

const _createTransferOrder = (input) => {


  return axios.post(TRANSFER_ORDER_URL, input );
  /*return new Promise((resolve, reject) => {
    resolve(mockData.transferList);
  })*/
}

export const createTransferOrder = (input) => {
  return {
    type: 'CREATE_TRANSFER_ORDER',
    payload: _createTransferOrder(input)
  }
}

const _updateTransferOrder = (input) => {


  return axios.put(TRANSFER_ORDER_URL, input );

}

export const updateTransferOrder = (input) => {
  return {
    type: 'UPDATE_TRANSFER_ORDER',
    payload: _updateTransferOrder(input)
  }
}
