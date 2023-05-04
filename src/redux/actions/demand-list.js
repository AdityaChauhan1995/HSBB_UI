import axios from 'axios';
import config from '../../helpers/api-urls';
import mockData from './mockData';


const _fetchDemandList = (referenceId) => {
  return new Promise((resolve, reject) => {
    resolve(mockData.demandList);
  })
}

export const fetchDemandList = (referenceId) => {
  return {
    type: 'FETCH_DEMAND_LIST',
    payload: _fetchDemandList(referenceId)
  }
}


