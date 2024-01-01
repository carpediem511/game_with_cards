import { useState } from 'react';
import { TypeForGetCard, gameThemes, getCards, TypeForGameTheme, cats, parrots, forKids } from '../Data';
import StartPage from '../StartPage';
import './../../index.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import GamePage from '../GamePage';

type AppProps = { getCards: (type: number) => TypeForGetCard[] }

function App({ getCards }: AppProps) {

	const [gameTheme, setGameTheme] = useState<TypeForGameTheme | null>(null)
	const navigate = useNavigate()

	return (
		<>
			<Routes>
				<Route path='/' element={<StartPage setGameTheme={setGameTheme} />} />
				<Route path='/game/:type' element={<GamePage gameTheme={gameTheme} getCards={{ "cats": cats, "parrots": parrots, "forKids": forKids }} />} />
			</Routes>
		</>
	)
}

export default App;
