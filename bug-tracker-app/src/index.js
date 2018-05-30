import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import appStore from './store';
import Spinner from './spinner';
import BugTracker from './bugTracker';

ReactDOM.render(
			<Provider store={appStore} >
				<div>
					<Spinner />
					<hr/>
					<BugTracker />
				</div>
			</Provider>,
				document.getElementById('root'));
registerServiceWorker();
