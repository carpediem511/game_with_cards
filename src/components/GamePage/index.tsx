import { useState } from 'react';
import './../../../src/index.css';
import Cards from '../Cards';

type CardProps = { id: string, url: string, description: string }

type GameProps = { cards: CardProps[], showResults: (stepsCount: number) => void, gameTheme: string }

const GamePage = ({ cards, showResults, gameTheme }: GameProps) => {

	const [finishedCards, setFinishedCards] = useState<CardProps[]>([])
	const [stepsCount, setStepsCount] = useState<number>(0)

	const checkCards = (firstCard: string, secondCard: string) => {

		const firstItem: CardProps | undefined = cards.find(({ id }) => id === firstCard)
		const secondItem: CardProps | undefined = cards.find(({ id }) => id === secondCard)

		if (firstItem && secondItem && firstItem.url === secondItem.url) {
			setFinishedCards((items) => [...items, firstItem, secondItem])
		}
		setStepsCount((step) => step + 1)
	}

	const isWin = finishedCards.length > 0 && finishedCards.length === cards.length

	const handleResultsClick = () => {
		showResults(stepsCount)
	}

	const halfFinishedCards = finishedCards.length / 2
	const maxStepsCount = cards.length / 2

	return (
		<>
			<section className='game-container'>
				<div className="progress-wrapper">
					<div className="progress" style={{ width: `${halfFinishedCards / maxStepsCount * 100}%` }}></div>
				</div>
				<p className="progress-description">Открыто {halfFinishedCards} / {maxStepsCount}</p>
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
		</>
	)
}

export default GamePage