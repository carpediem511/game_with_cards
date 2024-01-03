import { Key, useState } from "react";
import { TypeForGameTheme, TypeForGetCard } from "../Data"

type CardsProps = {
	cards: TypeForGetCard[] | [], finishedCards: string[];
	checkCards: (firstItem: string, secondItem: string) => void;
	gameTheme: TypeForGameTheme | null;
}

const timeOut = 1000;

const Cards = ({ cards, gameTheme, finishedCards, checkCards }: CardsProps) => {

	const [openedCards, setOpenedCards] = useState<string[]>([])

	const handleCardClick = (id: string) => {
		if (finishedCards.includes(id) || openedCards.includes(id)) {
			return
		}

		switch (openedCards.length) {

			case 0:
				setOpenedCards([id])
				break
			case 1:
				setOpenedCards((items) => [...items, id])
				checkCards(openedCards[0], id)
				setTimeout(() => {
					setOpenedCards([])
				}, timeOut)
				break
			default:
				setOpenedCards([])
		}
	}

	return (
		<>
			<ul className={`cards cards-theme-${gameTheme}`}>
				{cards.map((card: { id: string; url: string; description: string; }) => {
					console.log("Generated key:", card.id);
					const isOpened = openedCards.includes(card.id);
					const isFinished = finishedCards.includes(card.id);

					return (
						<div
							key={card.id}
							onClick={() => handleCardClick(card.id)}
							className={`card ${isOpened ? 'card-show' : ''} ${isFinished ? 'card-finished' : ''}`}
						>
							<img width="204" height="144" src={card.url} alt={card.description} />
						</div>
					);
				})}
			</ul>
		</>
	)
}

export default Cards