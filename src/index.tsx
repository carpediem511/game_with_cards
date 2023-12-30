import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import { imagesCats } from './components/Data'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)


const finishedItems: number[] = []

root.render(
	<React.StrictMode>
		<App images={imagesCats} finishedItems={finishedItems} />
	</React.StrictMode>
);

