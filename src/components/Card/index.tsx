type Props = {

	url: string
	description: string
}

const Card = ({ url, description }: Props) => {

	return (

		<>
			<li className="card card-show">
				<img src={url} width="204" height="144" alt={description} />
			</li>
		</>
	)
}

export default Card