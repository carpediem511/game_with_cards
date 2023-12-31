import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import { getCards, results } from './components/Data';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	<React.StrictMode>
		<App getCards={getCards} results={results} />
	</React.StrictMode>
);

