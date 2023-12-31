import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import { getCards, results } from './components/Data';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App getCards={getCards} results={results} />
		</BrowserRouter>
	</React.StrictMode>
);

