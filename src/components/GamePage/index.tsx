import './../../../src/index.css';
import { TypeForCard, gameThemes, getCards } from '../Data';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const GamePage = () => {
	const navigate = useNavigate();
	const [finishedCards, setFinishedCards] = useState<string[]>([]); //Отгаданные карточки
	const [openedCards, setOpenedCards] = useState<string[]>([]);
	const [stepsCount, setStepsCount] = useState<number>(0);//Количество попыток юзера
	const [progress, setProgress] = useState<number>(0);
	const [maxAttempts, setMaxAttempts] = useState<number>(9);

	const { type } = useParams<{ type: string }>();
	const selectedTheme = gameThemes.find(theme => theme.type === type);
	if (!selectedTheme) {
		return <div>Тема не найдена</div>;
	}

	// Получение списка карточек для выбранной темы
	const cards: TypeForCard[] = getCards(selectedTheme.type);

	const handleCardClick = (id: string) => {
		// Проверка, была ли карточка уже отгадана или открыта, и не превышено ли количество открытых карточек
		if (finishedCards.includes(id) || openedCards.includes(id) || openedCards.length >= 2) return;

		setStepsCount(prevCount => prevCount + 1);
		setOpenedCards(prevCards => [...prevCards, id]); // Добавление карточки в список открытых

		if (openedCards.length === 1) {
			const firstCardId = openedCards[0];
			// Нахождение текущей и первой открытой карточки по их id
			const currentCard = cards.find(card => card.id === id);
			const firstCard = cards.find(card => card.id === firstCardId);
			// Если пара совпадает, добавляем их в отгаданные и увеличиваем прогресс
			if (currentCard && firstCard && currentCard.description === firstCard.description) {
				setFinishedCards(prevItems => [...prevItems, id, firstCardId]);
				setProgress(prevProgress => prevProgress + 1);
				setOpenedCards([]); // Сброс открытых карточек
			} else {// Если пара не совпадает, уменьшаем количество попыток и сбрасываем открытые карточки 
				setMaxAttempts(prevAttempts => prevAttempts - 1);
				setTimeout(() => {
					setOpenedCards([]);
				}, 900);
			}
		}
	};

	const isCardFinished = (id: string) => {	// Проверка, отгадана ли карточка
		return finishedCards.includes(id);
	};

	const canClickCard = (id: string) => {
		return !finishedCards.includes(id) && openedCards.length < 2; // Проверка, можно ли кликнуть по карточке
	};

	const isWin = finishedCards.length === cards.length;

	const handleResultsClick = () => {
		navigate('/results');
	};

	return (
		<section className="game container">
			<div className="progress-wrapper">
				<div className="progress" style={{ width: `${(progress / cards.length) * 100}%` }}></div>
			</div>

			<div className="attempts">Осталось попыток: {maxAttempts}</div>

			<div className={`cards cards-theme-${selectedTheme.type}`}>
				{cards.map(card => (
					<div
						key={card.id}
						onClick={() => handleCardClick(card.id)}
						className={`card ${isCardFinished(card.id) ? 'card-finished' : ''} ${openedCards.includes(card.id) ? 'card-show' : ''} mt-4 md:mt-6 lg:mt-8 xl:mt-10`}
						style={{ pointerEvents: canClickCard(card.id) ? 'auto' : 'none' }}
					>
						{openedCards.includes(card.id) || finishedCards.includes(card.id) ? (
							<img src={card.url} alt={card.description} className="" />
						) : (
							<div className="card-back"></div>
						)}
					</div>
				))}
			</div>

			{isWin && (
				<div className="modal">
					<div className="modal-box">
						<h3 className="modal-caption ">Победа!</h3>
						<p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
						<button className="button modal-button" type="button" onClick={handleResultsClick}>Показать результаты</button>
					</div>
				</div>
			)}

			{maxAttempts <= 0 && (
				<div className="modal">
					<div className="modal-box">
						<h3 className="modal-caption">Игра окончена!</h3>
						<p className="modal-description">Вы исчерпали все попытки.</p>
						<button className="button modal-button" type="button" onClick={handleResultsClick}>Показать результаты</button>
					</div>
				</div>
			)}
		</section>

	);
};

export default GamePage;
