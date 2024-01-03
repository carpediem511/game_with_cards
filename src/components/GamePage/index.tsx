import './../../../src/index.css';
import { TypeForCard, TypeForGameTheme, gameThemes, getCards } from '../Data';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const GamePage = () => {
	const navigate = useNavigate()
	const [finishedCards, setFinishedCards] = useState<string[]>([])
	const [stepsCount, setStepsCount] = useState<number>(0);
	let [resultsGame, setResultsGame] = useState<number>(0);
	const [progress, setProgress] = useState<number>(0);

	const { type } = useParams<{ type: string }>();
	const selectedTheme = gameThemes.find(theme => theme.type === type)
	if (!selectedTheme) {
		return <div>Тема не найдена</div>;
	}
	const cards: TypeForCard[] = getCards(selectedTheme.type);


	// Обработчик клика по карточке
	const handleCardClick = (id: string) => {
		if (finishedCards.includes(id)) return // Если карточка уже открыта, выходим
		setStepsCount(prevCount => prevCount + 1)

		// Если это первая карточка в паре
		if (finishedCards.length % 2 === 0) {
			setFinishedCards(prevItems => [...prevItems, id])

			// Обновление индикатора прогресса
			const newProgress = ((finishedCards.length + 1) / (cards.length / 2)) * 100;
			setProgress(newProgress);
		} else {
			const lastOpened = finishedCards[finishedCards.length - 1]
			const currentCard = cards.find(card => card.id === id)
			const lastCard = cards.find(card => card.id === lastOpened)

			// Проверка на совпадение изображений карточек
			if (currentCard && lastCard && currentCard.description === lastCard.description) {
				setFinishedCards(prevItems => [...prevItems, id])
			} else {
				// Закрытие карточек после короткой задержки
				setTimeout(() => {
					setFinishedCards(prevItems => prevItems.filter(item => item !== lastOpened))
					setFinishedCards(prevItems => prevItems.filter(item => item !== id))
				}, 900)
			}
		}
	}

	const isWin = finishedCards.length > 0 && finishedCards.length === cards.length;

	// Обработчик клика по кнопке "Показать результаты"
	const handleResultsClick = () => {
		setResultsGame(stepsCount);
		navigate('/results')
	};

	return (
		<section className="game container">
			<div className="progress-wrapper">
				<div className="progress" style={{ width: `${progress}%` }}></div>
			</div>
			{/*	<p className="progress-description">Открыто {value} / {max}</p>*/}

			<div className="steps">Шаг {stepsCount}</div>

			<div className={`cards cards-theme-${selectedTheme}`}>
				{cards.map(card => (
					<div key={card.id} onClick={() => handleCardClick(card.id)} className={`card ${finishedCards.includes(card.id) ? 'card-show' : 'card-finished'}`}
					>
						{finishedCards.includes(card.id) ? (
							<img src={card.url} alt={card.description} />
						) : (
							<div className="card-back">?</div>
						)}
					</div>
				))}
			</div>

			{isWin && (
				<div className="modal">
					<div className="modal-box">
						<h3 className="modal-caption">Победа!</h3>
						<p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
						<button className="button modal-button" type="button" onClick={handleResultsClick}>Показать результаты</button>
					</div>
				</div>
			)}
		</section>
	)
}

export default GamePage