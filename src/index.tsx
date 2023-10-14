import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import { images } from './components/Data'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

const visibleItems: number[] = []
const finishedItems: number[] = []

root.render(
	<React.StrictMode>
		<App images={images} visibleItems={visibleItems} finishedItems={finishedItems} />
	</React.StrictMode>
);

