import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import { cats, parrots, forKids, results } from './components/Data';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

const finishedItems: number[] = []

root.render(
	<React.StrictMode>
		<App finishedItems={finishedItems} cats={cats} parrots={parrots} forKids={forKids} results={results} />
	</React.StrictMode>
);

