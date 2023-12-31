import { useState } from "react"
import { useNavigate } from "react-router-dom"

type Props = {
	setGameTheme: (theme: string) => void;
}

const StartPage = ({ setGameTheme }: Props) => {

	const navigate = useNavigate()
	const [themeOfGame, setThemeOfGame] = useState<string>('')

	const handleStartGame = () => {
		setGameTheme(themeOfGame);
		navigate(`/game/${themeOfGame}`);
	}


	return (
		<>
			<div className={`start-container ${themeOfGame} `}>
				<h2>Мозаика памяти</h2>
				<p>Выберите тему изображений и начните игру!</p>
				<div className="game-theme-selection">
					<label>
						<input
							type="radio"
							value="cats"
							checked={themeOfGame === 'cats'}
							onChange={() => setThemeOfGame('cats')}
						/>
						Коты
					</label>

					<label>
						<input
							type="radio"
							value="parrots"
							checked={themeOfGame === 'parrots'}
							onChange={() => setThemeOfGame('parrots')}
						/>
						Попугаи
					</label>

					<label>
						<input
							type="radio"
							value="kids"
							checked={themeOfGame === 'kids'}
							onChange={() => setThemeOfGame('kids')}
						/>
						Для детей
					</label>
				</div>

				<button onClick={handleStartGame}>Начать игру</button>
			</div>
		</>
	)
}

export default StartPage