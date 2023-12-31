import { useState } from 'react';
import { Data, gameTypes } from '../Data';
import './../../index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from '../StartPage';
import GamePage from '../GamePage';
import ResultsPage from '../ResultsPage';

type AppProps = {
	getCards: (type: number) => Data[],
	results: { name: string, stepsCount: number }[]
}

function App({ getCards, results }: AppProps) {

	const [gameTheme, setGameTheme] = useState<string>('')
	const [cards, setCards] = useState<Data[]>([])

	const handleStart = (type: string): void => {
		const themeIndex = gameTypes.findIndex(t => t.type === type)
		const selectedTheme = getCards(themeIndex)
		setGameTheme(type)
		setCards(selectedTheme)
	}

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<StartPage setGameTheme={setGameTheme} handleStart={handleStart} />} />
					<Route path='/game/:gameTheme' element={<GamePage cards={cards} />} />
					<Route path='/result' element={<ResultsPage results={results} />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App;
