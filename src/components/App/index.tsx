import Card from '../Card';
import './styles.css';
import { images, Image } from '../Data'

const animationDuration = '0.8s'
const transform = 'rotateY(180deg)'
const cursor = 'default'

// списки выделенных и отгаданных карточек для отладки
const visibleItems = ['hX_hf2lPpUU', '3tYZjGSBwbk'];
const finishedItems = ['YdAqiUkUoWA', 'YdAqiUkUoWA1', 'w1JE5duY62M', 'w1JE5duY62M1'];

function App() {
	return (
		<>
			<section className="game container">
				<ul className="cards cards-theme-cars">

					{images.map((image: Image) => (

						<Card
							key={image.id}
							url={image.url}
							description={image.description}
							isSelected={visibleItems.includes(image.id)}
							isGuessed={finishedItems.includes(image.id)}
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
