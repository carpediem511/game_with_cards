type Props = {

	url: string
	description: string
	isVisible: boolean
	isFinished: boolean
	animationDuration: string
	transform: string
	cursor: string
}

const Card = ({ url, description, isVisible, isFinished, animationDuration, transform, cursor }: Props) => {

	const className = `${isVisible ? 'card-show' : ''
		} ${isFinished ? 'card-finished' : ''
		}`;

	return (

		<>
			<li
				className={`card ${className}`} style={{ transition: `transform ${animationDuration}` }}
			>
				<img src={url} width="204" height="144" alt={description} style={{ transform, backfaceVisibility: 'hidden' }} />

			</li>
		</>
	)
}

export default Card