import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Store from './store/Store';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={Store}>
			<Toaster position="top-center" reverseOrder={false} />
			<App />
		</Provider>
	</React.StrictMode>
);
