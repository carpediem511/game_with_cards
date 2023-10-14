import Card from '../Card';
import './styles.css';
import { Image } from '../Data'

type Props = {
	images: Image[];
	visibleItems: number[];
	finishedItems: number[];
}

const animationDuration = '0.8s'
const transform = 'rotateY(180deg)'
const cursor = 'default'

function App({ images, visibleItems, finishedItems }: Props) {

	return (
		<>
			<section className="game container">
				<ul className="cards">

					{images.map((item: Image) => (

						<Card
							key={item.id}
							url={item.url}
							description={item.description}
							isVisible={visibleItems.includes(parseInt(item.id, 10))}
							isFinished={finishedItems.includes(parseInt(item.id, 10))}
							animationDuration={animationDuration}
							transform={transform}
							cursor={cursor}
						/>
					))}

				</ul>
			</section>
		</>
	)
}

export default App;
