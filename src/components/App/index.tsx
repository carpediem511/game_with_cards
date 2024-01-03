import { Route, Routes } from 'react-router-dom';
import { TypeForGameTheme, TypeForResultsTable } from '../Data';
import './../../index.css';
import StartPage from '../StartPage';
import GamePage from '../GamePage';
import ResultsPage from '../ResultsPage';
import { useState } from 'react';

type AppProps = { resultsTable: TypeForResultsTable[] }

function App({ resultsTable }: AppProps) {



	return (
		<>
			<Routes>
				<Route path='/' element={<StartPage />} />
				<Route path='/game/:type' element={<GamePage />} />
				<Route path='/results' element={<ResultsPage />} />
			</Routes>
		</>
	)
}

export default App;
