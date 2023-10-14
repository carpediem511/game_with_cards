type Props = {

	url: string
	description: string
	isSelected: boolean
	isGuessed: boolean
	animationDuration: string
	transform: string
	cursor: string
}

const Card = ({ url, description, isSelected, isGuessed, animationDuration, transform, cursor }: Props) => {

	return (

		<>
			<li
				className={`card ${isSelected ? 'card-show' : 'card'}} ${isGuessed ? 'card-finished' : 'card'}`}
				style={{ animationDuration, transform, cursor }}
			>
				<img src={url} width="204" height="144" alt={description} />
			</li>
		</>
	)
}

export default Card