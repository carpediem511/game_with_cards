import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userContext } from "../App";
import { TypeForCard, gameThemes, cardsCollection } from "../Data";

type GameProps = {
	newGameOver: number;
	stepsCount: number;
	setStepsCount: (count: number) => void;
};

const GamePage = ({ newGameOver, stepsCount, setStepsCount }: GameProps) => {
	const navigate = useNavigate();
	const [finishedCards, setFinishedCards] = useState<string[]>([]);
	const [openedCards, setOpenedCards] = useState<string[]>([]);
	const [progress, setProgress] = useState<number>(0);
	const [maxAttempts, setMaxAttempts] = useState<number>(6);
	const [cards, setCards] = useState<TypeForCard[]>([]);

	const { setUserCount } = useContext(userContext) || {
		userCount: 0,
		setUserCount: () => { },
	};

	const { type } = useParams<{ type: string }>();
	const selectedTheme = gameThemes.find((theme) => theme.type === type);

	// Загрузка карточек при изменении темы или начале новой игры
	useEffect(() => {
		if (!type) return;

		const loadCards = () => {
			const selectedTheme = cardsCollection[type];
			const identicalCards = generateIdenticalCards(selectedTheme);
			const mergedCards = [...selectedTheme, ...identicalCards];

			// Перемешиваем карточки
			const shuffledCards = mergedCards.sort(() => 0.5 - Math.random());
			setCards(shuffledCards);
		};

		loadCards();
	}, [type, newGameOver]);

	// Функция для генерации дубликатов карточек
	const generateIdenticalCards = (cards: TypeForCard[]) => {
		return cards.map((item) => ({
			...item,
			id: `${item.id}-1`,
		}));
	};

	const handleCardClick = (id: string) => {
		// Проверка, была ли карточка уже отгадана или открыта, и не превышено ли количество открытых карточек
		if (
			finishedCards.includes(id) ||
			openedCards.includes(id) ||
			openedCards.length >= 2
		)
			return;

		setStepsCount(stepsCount + 1);
		setOpenedCards((prevCards) => [...prevCards, id]); // Добавление карточки в список открытых

		if (openedCards.length === 1) {
			const firstCardId = openedCards[0];
			// Нахождение текущей и первой открытой карточки по их id
			const currentCard = cards.find((card) => card.id === id);
			const firstCard = cards.find((card) => card.id === firstCardId);
			// Если пара совпадает, добавляем их в отгаданные и увеличиваем прогресс
			if (
				currentCard &&
				firstCard &&
				currentCard.description === firstCard.description
			) {
				setFinishedCards((prevItems) => [...prevItems, id, firstCardId]);
				setProgress((prevProgress) => prevProgress + 1);
				setOpenedCards([]); // Сброс открытых карточек
			} else {
				// Если пара не совпадает, уменьшаем количество попыток и сбрасываем открытые карточки
				setMaxAttempts((prevAttempts) => prevAttempts - 1);
				setTimeout(() => {
					setOpenedCards([]);
				}, 900);
			}
		}
	};

	const isCardFinished = (id: string) => {
		// Проверка, отгадана ли карточка
		return finishedCards.includes(id);
	};

	const canClickCard = (id: string) => {
		return !finishedCards.includes(id) && openedCards.length < 2; // Проверка, можно ли кликнуть по карточке
	};

	const isWin = finishedCards.length === cards.length;

	const handleResultsClick = () => {
		setUserCount(finishedCards.length / 2);
		navigate("/results");
	};

	return (
		<section className="game container">
			<div className="progress-wrapper">
				<div
					className="progress"
					style={{ width: `${(progress / (cards.length / 2)) * 100}%` }}
				></div>
			</div>

			<div className="attempts font-bold text-2xl text-justify">
				Осталось попыток: {maxAttempts}
			</div>

			<div className={`cards cards-theme-${selectedTheme?.type}`}>
				{cards.map((card) => (
					<div
						key={card.id}
						onClick={() => canClickCard(card.id) && handleCardClick(card.id)}
						className={`card ${isCardFinished(card.id) ? "card-finished" : ""
							} ${openedCards.includes(card.id) ? "card-show" : ""}
              mt-4 md:mt-6 lg:mt-8 xl:mt-10`}
					>
						{openedCards.includes(card.id) ||
							finishedCards.includes(card.id) ? (
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
						<h3 className="modal-caption text-3xl font-extrabold">Победа!</h3>
						<p className="modal-description font-semibold">
							Теперь давайте узнаем результаты этой партии
						</p>
						<button
							className="button modal-button"
							type="button"
							onClick={handleResultsClick}
						>
							Показать результаты
						</button>
					</div>
				</div>
			)}

			{maxAttempts <= 0 && (
				<div className="modal">
					<div className="modal-box p-4 md:p-6 lg:p-8 xl:p-10">
						<h3 className="modal-caption text-lg md:text-xl lg:text-2xl xl:text-3xl">
							Игра окончена!
						</h3>
						<p className="modal-description mt-2 md:mt-4 lg:mt-6 xl:mt-8 text-sm md:text-base lg:text-lg xl:text-xl">
							Вы исчерпали все попытки.
						</p>
						<button
							className="button modal-button mt-4 md:mt-6 lg:mt-8 xl:mt-10"
							type="button"
							onClick={handleResultsClick}
						>
							Показать результаты
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default GamePage;
