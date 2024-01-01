import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import { BrowserRouter } from 'react-router-dom';
import { getCards } from './components/Data';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App getCards={getCards} />
		</BrowserRouter>
	</React.StrictMode>
);

