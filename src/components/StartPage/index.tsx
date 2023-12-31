import { GameType, gameTypes } from "../Data";

type StartProps = {
	setGameTheme: (theme: string) => void;
	handleStart: (type: string) => void;
};

const StartPage = ({ setGameTheme, handleStart }: StartProps) => {

	const handleThemeSelection = (type: string) => {
		setGameTheme(type);
		handleStart(type);
	};

	return (
		<>
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
				{gameTypes.map(({ type, text }) => (
					<button
						key={type}
						className={`ico-button ico-button-${type}`}
						onClick={() => handleThemeSelection(type)}
					>
						{text}
					</button>
				))}
			</section>
		</>
	)
}

export default StartPage