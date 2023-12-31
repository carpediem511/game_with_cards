import { useState } from 'react';
import { Data, gameTypes } from '../Data';
import './../../index.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
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
	const [result, setResult] = useState<number>(0)
	const navigate = useNavigate()

	const handleStart = (type: string): void => {
		const themeIndex = gameTypes.findIndex(t => t.type === type)
		const selectedTheme = getCards(themeIndex)
		setGameTheme(type)
		setCards(selectedTheme)
	}

	const showResults = (stepsCount: number) => {
		setResult(stepsCount)
		navigate('/results')
	}

	const handleRestart = () => {
		navigate('/')
	}

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<StartPage setGameTheme={setGameTheme} handleStart={handleStart} />} />
					<Route path='/game/:gameTheme' element={<GamePage cards={cards} gameTheme={gameTheme} showResults={showResults} />} />
					<Route path='/result' element={<ResultsPage stepsCount={result} onResetGame={handleRestart} results={results} />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App;
