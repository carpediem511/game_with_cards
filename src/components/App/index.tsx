import Card from '../Card';
import './styles.css';
import { Image } from '../Data'
import { useState } from 'react';

type Props = {
	images: Image[];

	finishedItems: number[];
}

const animationDuration = '0.8s'
const transform = 'rotateY(180deg)'


function App({ images, finishedItems }: Props) {

	const [selectedCard, setSelectedCard] = useState<string[]>([])
	const [count, setCount] = useState<number>(0)



	const handleClick = (id: string) => {

		if (!selectedCard.includes(id) && !finishedItems.includes(parseInt(id, 10))) {

			setSelectedCard((prevSelectedCard) => [...prevSelectedCard, id])
			setCount((prevCount) => prevCount + 1)
		}
	}

	return (
		<>
			<section className="game container">
				<div className='steps'>Шаги: {count}</div>
				<ul className="cards">

					{images.map((item: Image) => (

						<Card
							key={item.id}
							url={item.url}
							description={item.description}

							isFinished={finishedItems.includes(parseInt(item.id, 10))}
							animationDuration={animationDuration}
							transform={transform}
							onClick={() => handleClick(item.id)}
						/>
					))}

				</ul>
			</section>
		</>
	)
}

export default App;
