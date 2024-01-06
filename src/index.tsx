import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import { BrowserRouter } from 'react-router-dom';
import { resultsTable } from './components/Data';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App resultsTable={resultsTable} />
		</BrowserRouter>
	</React.StrictMode>
);

