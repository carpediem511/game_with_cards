type CardsProps = { handleCardClick: (id: string) => void }

const Cards = ({ handleCardClick }: CardsProps) => {

	return (
		<>
			<>
				<li
					className={`card `}
					style={{
						//transition: `transform ${animationDuration}`,
						//backgroundImage: isOpenCard ? `url(${backImageUrl})` : "none",
					}}
				//onClick={handleClick}
				>

					<img
						//src={url}
						width="204"
						height="144"
					//alt={description}
					//style={{ transform, backfaceVisibility: "hidden" }}
					/>

					<div className="card-back"></div>

				</li>
			</>
		</>
	)
}

export default Cards