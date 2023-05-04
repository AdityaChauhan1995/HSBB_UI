import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import  { store, history } from './redux/store';
import routes from './components/common/routes';
import Login from './components/login'; 

import "semantic-ui-css/semantic.min.css";
import 'react-calendar/dist/Calendar.css';
import './index.css';

const provider = (
	<Provider store={store}>

		<ConnectedRouter history={history}>
			<Switch>
				<Route path="/HSBBPortal/" component={Login} exact/>
				<Route path="/HSBBPortal/" component={routes} />
			</Switch>
		</ConnectedRouter>

	</Provider>
);

ReactDOM.render(provider, document.getElementById('root'));
//registerServiceWorker();
console.log('running with env:', process.env.REACT_APP_ENV)