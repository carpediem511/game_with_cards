import { useState } from "react"

type CardProps = { id: string, url: string, description: string }
type CardsProps = { cards: CardProps[], gameTheme: string, finishedCards: string[], checkCards: (firstCard: string, secondCard: string) => void }

const Cards = ({ cards, gameTheme, finishedCards, checkCards }: CardsProps) => {

	const [openCards, setOpenCards] = useState<string[]>([])

	const timeOut = 900;

	const handleCardClick = (id: string) => {
		if (finishedCards.includes(id) || openCards.includes(id)) {
			return
		}

		switch (openCards.length) {
			case 0:
				setOpenCards([id])
				break
			case 1:
				setOpenCards((items) => [...items, id])
				checkCards(openCards[0], id)
				setTimeout(() => {
					setOpenCards([])
				}, timeOut)
				break
			default:
				setOpenCards([])
		}
	}

	const getClassName = (id: string, openCards: string[], finishedCards: string[]) => {
		const isOpen = openCards.includes(id) ? 'card-show' : ''
		const isFinish = finishedCards.includes(id) ? 'card-finished' : ''
		return `card ${isOpen} ${isFinish}`
	}

	return (
		<>
			<ul className={`cards cards-theme-${gameTheme}`}>
				{cards.map((card) => (

					<li key={card.id} onClick={() => handleCardClick(card.id)} className={getClassName(card.id, openCards, finishedCards)}>
						<img
							width="204" height="144"
							src={card.url}
							alt={card.description}
						/>
					</li>
				))}
			</ul>
		</>
	)
}

export default Cards