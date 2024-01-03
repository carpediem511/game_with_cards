import uuid4 from "uuid4";

type TypeForCardData = {
	url: string;
	description: string;
};

type TypeForGetCard = TypeForCardData & {
	id: string;
};

type TypeForResultsTable = { name: string; steps: string };
type TypeForGameTheme = { type: string; text: string };

// карточки сгруппированы по темам картинок
// в наборах карточки указаны в одном экземпляре
// парные карточки нужно сгенерировать

const cats: TypeForCardData[] =
	[{
		url: '/img/cats/cat1.jpg',
		description: 'red cat and bubbles',
	},
	{
		url: '/img/cats/cat2.jpg',
		description: 'calico cat',
	}, {
		url: '/img/cats/cat3.jpg',
		description: 'siamese cat',
	}, {
		url: '/img/cats/cat4.jpg',
		description: 'cheeky cat in the city',
	}, {
		url: '/img/cats/cat5.jpg',
		description: 'white bride',
	}, {
		url: '/img/cats/cat6.jpg',
		description: 'british cat',
	}];

const parrots: TypeForCardData[] = [{
	url: '/img/parrots/parrot1.jpg',
	description: 'ara parrot',
}, {
	url: '/img/parrots/parrot2.jpg',
	description: 'necklace parrot',
}, {
	url: '/img/parrots/parrot3.jpg',
	description: 'cockatoo',
}, {
	url: '/img/parrots/parrot4.jpg',
	description: 'amazon',
}, {
	url: '/img/parrots/parrot5.jpg',
	description: 'budgerigar',
}, {
	url: '/img/parrots/parrot6.jpg',
	description: 'lovebirds',
}];

const forKids: TypeForCardData[] = [{
	url: '/img/forKids/kitten1.jpg',
	description: 'programmer cat',
}, {
	url: '/img/forKids/kitten2.jpg',
	description: 'cosmonaut cat',
}, {
	url: '/img/forKids/kitten3.jpg',
	description: 'violinist cat',
}, {
	url: '/img/forKids/kitten4.jpg',
	description: 'sleeping cat',
}, {
	url: '/img/forKids/kitten5.jpg',
	description: 'cat with books',
}, {
	url: '/img/forKids/kitten6.jpg',
	description: 'cat with balloons',
}];

const generateCards = (cardsData: TypeForCardData[]): TypeForGetCard[] => {
	return cardsData.map((cardData) => ({
		id: uuid4(),
		...cardData,
	}));
};

const catsData = generateCards(cats);
const parrotsData = generateCards(parrots);
const forKidsData = generateCards(forKids);

const cardsCollection = [catsData, parrotsData, forKidsData];

const resultsTable: TypeForResultsTable[] = [
	{ name: "Мальвина", steps: '5' },
	{ name: "Дмитрий", steps: '3' },
	{ name: "Александр", steps: '2' },
	{ name: "Матвей", steps: '4' },
	{ name: "Павел", steps: '4' },
	{ name: "Ольга", steps: '1' },
];

const getTypeIndex = (type: string): number | null => {
	switch (type) {
		case 'cats':
			return 0;
		case 'parrots':
			return 1;
		case 'forKids':
			return 2;
		default:
			return null
	}
}

// функция для доступа к данным из приложения
// принимает в параметре название набора данных
const getCards = (type: string): TypeForGetCard[] => {

	const index = getTypeIndex(type)
	if (index !== null && cardsCollection[index]) {
		let identicalCards = cardsCollection[index].map((item) => ({ ...item }));
		const mergedCards = [...cardsCollection[index], ...identicalCards];
		mergedCards.sort(() => 0.5 - Math.random());

		return mergedCards;
	} else {
		return []
	}
	// Проверяем, существует ли массив с указанным индексом
	// Копируем каждый элемент массива, чтобы избежать мутации исходных данных


	// Соединяем оригинальные и копированные карточки


	// Перемешиваем массив


	// Возвращаем значение по умолчанию (в данном случае, пустой массив)


}


// создадим константу для списка типов игры
// каждый элемент содержит название набора данных и подпись для кнопки
const gameThemes: TypeForGameTheme[] = [
	{ type: 'cats', text: 'Котики' },
	{ type: 'parrots', text: 'Попугаи' },
	{ type: 'forKids', text: 'Для детей' },
];

export type { TypeForGetCard, TypeForResultsTable, TypeForGameTheme };

export { cats, parrots, forKids, cardsCollection, resultsTable, getCards, gameThemes };
