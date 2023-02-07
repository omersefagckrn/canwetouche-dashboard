import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { StoreProvider as BannerContext } from './context/BannerContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<BannerContext>
			<App />
		</BannerContext>
	</BrowserRouter>
);
