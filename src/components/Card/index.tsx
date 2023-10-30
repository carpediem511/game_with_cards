import { useState } from "react"

type Props = {

	url: string
	description: string

	isFinished: boolean
	animationDuration: string
	transform: string
	onClick: () => void
}

const Card = ({ url, description, isFinished, animationDuration, transform, onClick }: Props) => {



	const backImageUrl = "/img/back-cats.svg"

	const [isOpenCard, setIsOpenCard] = useState<boolean>(false)

	const handleClick = () => {
		if (!isFinished) {
			setIsOpenCard(!isOpenCard);
			onClick();
		}
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