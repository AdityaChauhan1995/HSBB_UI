import { combineReducers } from 'redux';
import LoginReducer from './login';
import AdminReducer from './admin';
import OrderReducer from './order';
import ConfigReducer from './config';
import DemandListReducer from './demand-list';
import TicketSupportReducer from './ticket-support';
import TransferReducer from './transfer';
import { connectRouter } from 'connected-react-router'


/*export default combineReducers({
  router: routerReducer,
  login : LoginReducer,
  config : ConfigReducer,
  order: OrderReducer
});

*/
const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  login: LoginReducer,
  admin: AdminReducer,
  order: OrderReducer,
  demandList: DemandListReducer,
  supportList: TicketSupportReducer,
  transferList: TransferReducer,
  config: ConfigReducer
})
export default createRootReducer