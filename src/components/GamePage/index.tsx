import './../../../src/index.css';
import { Data, cats, parrots, forKids } from '../Data'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import DeclensionComponent from '../DeclensionComponent';
import Card from '../Card';

type Props = {
	data: Data[];
	finishedItems: number[];
	cats: Data[];
	parrots: Data[];
	forKids: Data[];
}

const timeOut = 1000;
const animationDuration = '0.8s'
const transform = 'rotateY(180deg)'

const getGameData = (theme: string): Data[] => {
	switch (theme) {
		case 'cats':
			return cats;
		case 'parrots':
			return parrots;
		case 'kids':
			return forKids;
		default:
			return [];
	}
}

const GamePage = ({ data, finishedItems }: Props) => {

	const { gameTheme } = useParams<{ gameTheme: string }>();
	const [cards, setCards] = useState<Data[]>([]);
	const [selectedCard, setSelectedCard] = useState<number[]>([]);
	const [stepsCount, setStepsCount] = useState<number>(0)
	const [identicalCards, setIdenticalCards] = useState<number>(0)
	const [progress, setProgress] = useState<number>(0)
	const [modalFinish, setModalFinish] = useState<boolean>(false)

	const navigate = useNavigate()

	// Перемешиваем карточки при каждом изменении списка изображений
	useEffect(() => {
		if (gameTheme) {
			setCards(getGameData(gameTheme));
		}
	}, [gameTheme]);


	// Обновляем прогресс игры при каждом совпадении пары карточек
	useEffect(() => {
		const totalPairs = data.length / 2
		const progress = (identicalCards / totalPairs) * 100
		setProgress(progress)
	}, [identicalCards, data])

	const handleCardClick = (id: number) => {
		// Если выбрано две карты и пользователь кликнул по третьей, сбросить выбор
		if (selectedCard.length === 2) {
			setSelectedCard([]);
			return;
		}

		// Если карта уже выбрана, игнорировать клик
		if (selectedCard.includes(id)) {
			return;
		}

		setSelectedCard(prevSelected => [...prevSelected, id]);
		setStepsCount(prevStep => prevStep + 1);
	}


	// Проверка совпадения двух выбранных карточек
	useEffect(() => {
		if (selectedCard.length === 2) {
			const [firstCardID, secondCardID] = selectedCard;
			const [firstCard, secondCard] = cards.filter(card => card.id === firstCardID || card.id === secondCardID);

			if (firstCard.description === secondCard.description) {
				console.log('Совпадение!');
				setIdenticalCards(prevPairs => prevPairs + 1);
				setSelectedCard([]);  // Сбросить выбор
			} else {
				console.log('Не совпадает...');
				setTimeout(() => {
					setSelectedCard([]);  // Сбросить выбор после задержки
				}, timeOut);
			}
		}
	}, [selectedCard, cards]);



	// Показываем модалку, если все пары собраны
	useEffect(() => {
		if (identicalCards === data.length / 2) {
			setModalFinish(true);
		}
	}, [identicalCards, data]);


	const handleRestart = () => {
		setStepsCount(0)
		setIdenticalCards(0)
		setModalFinish(false)
		setSelectedCard([])
		navigate('/')
	}

	return (
		<>
			<div className='game-container'>
				<div>Количество ходов: <DeclensionComponent count={stepsCount} words={['ход', 'хода', 'ходов']} /> </div>
				<div>Собрано пар: {identicalCards}</div>
				<div>Прогресс: {progress.toFixed(2)}%</div>
				<div className='cards'>
					{cards.map((card) => (

						<Card
							key={card.id}
							url={card.url}
							description={card.description}
							id={card.id}
							isFinished={finishedItems.includes(card.id)}
							onCardClick={handleCardClick}
							animationDuration={animationDuration}
							transform={transform}
						/>
					))}
				</div>
				{modalFinish && (

					<div className='popup'>
						<p>Игра завершена!</p>
						<button onClick={handleRestart}>Начать заново</button>
					</div>
				)}
			</div>
		</>
	)
}

export default GamePage