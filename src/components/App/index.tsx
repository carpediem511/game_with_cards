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
	const [guessedCard, setGuessedCard] = useState<number>()

	const checkItems = () => setCount((i) => i + 1)

	// Объявляем один обработчик клика для всех карточек,
	// а чтобы обработчик «узнал», на какой карточке произошло событие,
	// передадим ему идентификатор карточки в параметре.
	const handleCardClick = (id: any) => {
		//Проверка - не выбрана ли уже эта карточка или она уже перевернута
		if (finishedItems.includes(id) || selectedCard.includes(id)) {
			return;
		}
		//Если карточка не выбрана и не перевернута, увеличиваем счетчик
		checkItems();
		// Добавляем идентификатор в список выбранных.
		// Для вычисления нового состояния используем функцию обновления.
		// Создаем новый массив из копии текущего и добавляем элемент.
		setSelectedCard((items) => [...items, id])

		switch (selectedCard.length) {

			case 0:
				setSelectedCard([id])
				break
			default:
				setSelectedCard([])
		}
	};



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
							id={item.id}

							isFinished={finishedItems.includes(item.id)}
							onCardClick={handleCardClick}
							animationDuration={animationDuration}
							transform={transform}

						/>
					))}

				</ul>
			</section>
		</>
	)
}

export default App;
