import { createStore, applyMiddleware, compose } from 'redux';
/*import { routerMiddleware } from 'react-router-redux';*/

import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import createRootReducer from '../reducers';

import promise from 'redux-promise-middleware'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'// defaults to localStorage for web and AsyncStorage for react-native
export const history = createBrowserHistory();


const middleware = [thunk, promise, routerMiddleware(history)];
const enhancers = [];
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

/*const persistConfig = {
  key: 'hsbbportal',
  storage,
}
*/
//const persistedReducer = persistReducer(persistConfig, createRootReducer(history))
export const store = createStore( createRootReducer(history) , composedEnhancers);
//export const persistor = persistStore(store);