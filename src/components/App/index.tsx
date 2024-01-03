import { Route, Routes } from 'react-router-dom';
import { TypeForGameTheme, TypeForGetCard, TypeForResultsTable, getCards } from '../Data';
import './../../index.css';
import StartPage from '../StartPage';
import GamePage from '../GamePage';
import ResultsPage from '../ResultsPage';
import { useState } from 'react';

type AppProps = { resultsTable: TypeForResultsTable[] }

function App({ resultsTable }: AppProps) {

	const [gameTheme, setGameTheme] = useState<TypeForGameTheme | null>(null)

	return (
		<>
			<Routes>
				<Route path='/' element={<StartPage setGameTheme={setGameTheme} />} />
				<Route path='/game/:type' element={<GamePage gameTheme={gameTheme} />} />
				{/*	<Route path='/results' element={<ResultsPage />} />*/}
			</Routes>
		</>
	)
}

export default App;
