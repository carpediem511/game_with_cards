import Card from '../Card';
import './styles.css';
import { images, Image } from '../Data'


function App() {
	return (
		<>
			<section className="game container">
				<ul className="cards cards-theme-cars">

					{images.map((image: Image) => (

						<Card key={image.id} url={image.url} description={image.description} />
					))}

				</ul>
			</section>
		</>
	)
}

export default App;
