import { useNavigate } from "react-router-dom";
import { gameThemes, TypeForGameTheme } from "../Data"
import { useState } from "react";

const StartPage = () => {

	const navigate = useNavigate()
	const [selectedTheme, setSelectedTheme] = useState<TypeForGameTheme | null>(null)

	const handleStartGame = (theme: TypeForGameTheme) => {
		setSelectedTheme(theme);
		navigate(`/game/${theme.type}`)
	}

	return (
		<section className="rules container">
			<h2>Добро пожаловать!</h2>
			<p>Мозаика памяти — игра для тренировки визуальной памяти</p>
			<div className="rules-panel">
				<h3>Правила игры</h3>
				<ul className="rules-list">
					<li>В наборе есть множество карточек – по две штуки с одним и тем же рисунком.</li>
					<li>Нужно разложить карточки «рубашкой» вверх на столе, а затем переворачивать по две.</li>
					<li>Если они совпадают – игрок забирает их и получает ещё один ход.</li>
				</ul>
			</div>

			<div>
				<h3>Выберите тему игры:</h3>
				{gameThemes.map(({ type, text }) => (
					<button
						key={type}
						className={`ico-button ico-button-${type}`}
						onClick={() => handleStartGame({ type, text })}>
						{text}
					</button>
				))}
			</div>
		</section >
	)
}

export default StartPage