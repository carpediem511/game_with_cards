import { useState } from "react"

type Props = {

	url: string
	description: string
	id: number
	isFinished: boolean
	animationDuration: string
	transform: string
	onCardClick: (id: number) => void;

}

const Card = ({ url, description, id, isFinished, animationDuration, transform, onCardClick }: Props) => {



	const backImageUrl = "/img/back-cats.svg"

	const [isOpenCard, setIsOpenCard] = useState<boolean>(false)

	const handleClick = () => {
		// Передаем идентификатор карточки родительскому компоненту в колбэке.
		// Родительский компонент обновит свое состояние и карточка получит его в параметре.

		setIsOpenCard(!isOpenCard);

	};

	const className = `${isOpenCard ? 'card-show' : ''
		} ${isFinished ? 'card-finished' : ''
		}`;

	return (

		<>
			<li
				className={`card ${className}`}
				style={{
					transition: `transform ${animationDuration}`,
					backgroundImage: isOpenCard ? `url(${backImageUrl})` : "none",
				}}
				onClick={handleClick}
			>
				{isOpenCard ? (
					<img
						src={url}
						width="204"
						height="144"
						alt={description}
						style={{ transform, backfaceVisibility: "hidden" }}
					/>
				) : (
					<div className="card-back"></div>
				)}
			</li>
		</>
	)
}

export default Card