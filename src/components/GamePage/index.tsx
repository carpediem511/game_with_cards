import { useState } from 'react';
import { TypeForGameTheme, TypeForGetCard, getCards } from '../Data';
import './../../../src/index.css';
import Cards from '../Cards';
import { useParams } from 'react-router-dom';

type GameProps = { gameTheme: TypeForGameTheme | null }



const GamePage = ({ gameTheme }: GameProps) => {

	const [finishedCards, setFinishedCards] = useState<string[]>([])
	const [stepsCount, setStepsCount] = useState<number>(0)

	const { type } = useParams<{ type: string }>();
	const cards = type ? getCards(type) : []

	const checkCards = (firstItem: string, secondItem: string) => {

		const firstCard = cards.find(({ id }) => id === firstItem)
		const secondCard = cards.find(({ id }) => id === secondItem)

		if (firstCard && secondCard && firstCard.description === secondCard.description) {
			setFinishedCards([...finishedCards, firstItem, secondItem]);
		}
		setStepsCount(step => step + 1)
	}

	const isWin = finishedCards.length > 0 && finishedCards.length === cards.length

	const handleResultsClick = () => {

	}

	return (
		<section className="game container">
			<div className="progress-wrapper">
				<div className="progress" style={{ width: `${finishedCards.length / cards.length * 100}%` }}></div>
			</div>
			<p className="progress-description">Открыто {finishedCards.length / 2} / {cards.length / 2}</p>
			<div className="steps">Шаг {stepsCount}</div>
			<Cards cards={cards} gameTheme={gameTheme} finishedCards={finishedCards} checkCards={checkCards} />
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