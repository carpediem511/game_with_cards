import { useState } from 'react';
import { TypeForGetCard, gameThemes, getCards, TypeForGameTheme } from '../Data';
import StartPage from '../StartPage';
import './../../index.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

type AppProps = { getCards: (type: number) => TypeForGetCard[] }

function App({ getCards }: AppProps) {

	const [cards, setCards] = useState<TypeForGetCard[]>([])
	const [gameTheme, setGameTheme] = useState<TypeForGameTheme | ''>('')
	const navigate = useNavigate()

	return (
		<>
			<Routes>
				<Route path='/' element={<StartPage setGameTheme={setGameTheme} />} />
			</Routes>
		</>
	)
}

export default App;
