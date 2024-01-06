import { Route, Routes } from 'react-router-dom';
import { TypeForResultsTable } from '../Data';
import './../../index.css';
import StartPage from '../StartPage';
import GamePage from '../GamePage';
import ResultsPage from '../ResultsPage';
import { useState } from 'react';
import WelcomePage from '../WelcomePage';

type AppProps = { resultsTable: TypeForResultsTable[] }

function App({ resultsTable }: AppProps) {

	const [userName, setUserName] = useState<string>("");

	return (
		<Routes>
			<Route path='/' element={<WelcomePage handleCloseWelcome={setUserName} />} />
			<Route path="/rules" element={<StartPage />} />
			<Route path='/game/:type' element={<GamePage />} />
			<Route path="/results" element={<ResultsPage results={resultsTable} />} />
		</Routes>
	)
}

export default App;
