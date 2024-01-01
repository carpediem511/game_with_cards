import { useEffect, useState } from 'react';
import { TypeForGameTheme, TypeForGetCard } from '../Data';
import './../../../src/index.css';
import { useNavigate } from 'react-router-dom';
import Cards from '../Cards';

type GameProps = { gameTheme: TypeForGameTheme | null, getCards: { [key: string]: TypeForGetCard[] } }
const timeOut = 900

const GamePage = ({ gameTheme, getCards }: GameProps) => {

	const [cards, setCards] = useState<TypeForGetCard[]>([])
	const [selectedCard, setSelectedCard] = useState<string[]>([]);
	const [finishedCards, setFinishedCards] = useState<number>(0)
	const [stepsCount, setStepsCount] = useState<number>(0)
	const [progress, setProgress] = useState<number>(0)

	const navigate = useNavigate()

	//Перемешиваем карточки при смене темы игры
	useEffect(() => {
		if (gameTheme && getCards[gameTheme.type]) {
			setCards(getCards[gameTheme.type])
		}
	}, [gameTheme, getCards])

	//Обновляем прогресс игры на основе совпадения пары карточек
	useEffect(() => {
		const totalPairs = cards.length / 2
		const progress = (finishedCards / totalPairs) * 100
		setProgress(progress)
	}, [cards, finishedCards])

	//Обработка клика по карточке
	const handleCardClick = (id: string) => {
		if (selectedCard.length === 2) { // Если выбрано две карты, сбросить их
			setSelectedCard([])
			return
		}

		if (selectedCard.includes(id)) {// Если карта уже выбрана, игнорировать клик
			return
		}

		setSelectedCard(prevItem => [...prevItem, id]) // Добавляем ID выбранной карты
		setStepsCount(prevStep => prevStep + 1)
	}

	//Проверка совпадения двух выбранных карточек
	useEffect(() => {
		if (selectedCard.length === 2) {
			const [firstCardID, secondCardID] = selectedCard
			const [firstCard, secondCard] = cards.filter(card => card.id === firstCardID || card.id === secondCardID)

			if (firstCard.description === secondCard.description) {
				setFinishedCards(prevPairs => prevPairs + 1)
				setSelectedCard([])
			} else {
				setTimeout(() => {
					setSelectedCard([])
				}, timeOut)
			}
		}
	}, [selectedCard, cards])

	return (
		<>
			<section className='game-container'>
				<div className="progress-wrapper">
					<div className="progress" style={{ width: `${progress}%` }}></div>
				</div>
				<p className="progress-description">Открыто {finishedCards} из {cards.length / 2} пар </p>
				<div className="steps">Количество ходов: {stepsCount} </div>
				<ul className={`cards cards-theme-${gameTheme}`}>
					{cards.map((card: TypeForGetCard) => (
						<Cards key={card.id} handleCardClick={handleCardClick} />
					))}

				</ul>

				{/*		<div className="modal">
					<div className="modal-box">
						<h3 className="modal-caption">Победа!</h3>
						<p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
						<button className="button modal-button" type="button" >Показать результаты</button>
					</div>
				</div>*/}

			</section>
		</>
	)
}

export default GamePage