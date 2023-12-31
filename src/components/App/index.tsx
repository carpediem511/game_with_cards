import { useState } from 'react';
import { Data, gameTypes, GameType, Result, getCards, results } from '../Data';
import './../../index.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import StartPage from '../StartPage';
import GamePage from '../GamePage';
import ResultsPage from '../ResultsPage';

type AppProps = {
	getCards: (type: number) => Data[],
	results: Result[]
}

function App({ getCards, results }: AppProps) {

	const [gameTheme, setGameTheme] = useState<string>('')
	const [cards, setCards] = useState<Data[]>([])
	const [gameResult, setGameResult] = useState<number>(0)
	const navigate = useNavigate()

	const handleStart = (type: string): void => {
		const themeIndex = gameTypes.findIndex(t => t.type === type)
		const selectedTheme = getCards(themeIndex)
		setGameTheme(type)
		setCards(selectedTheme)
	}

	const showResults = (steps: number) => {
		setGameResult(steps)
		navigate('/result')
	}

	const handleRestart = () => {
		navigate('/')
	}

	return (
		<>
			<Routes>
				<Route path='/' element={<StartPage setGameTheme={setGameTheme} handleStart={handleStart} />} />
				<Route path='/game/:gameTheme' element={<GamePage cards={cards} gameTheme={gameTheme} showResults={showResults} />} />
				<Route path='/result' element={<ResultsPage gameResult={gameResult} onResetGame={handleRestart} results={results} />} />
			</Routes>

		</>
	)
}

export default App;
