import axios from 'axios';
import config from '../../helpers/api-urls';
import mockData from './mockData';

const _fetchSupportList = (referenceId) => {
  return new Promise((resolve, reject) => {
    resolve(mockData.supportList);
  })
}

export const fetchSupportList = (referenceId) => {
  return {
    type: 'FETCH_SUPPORT_LIST',
    payload: _fetchSupportList(referenceId)
  }
}


