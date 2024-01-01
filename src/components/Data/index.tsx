import uuid4 from "uuid4";

type TypeForGetCard = {
	id: string
	url: string
	description: string
}

type TypeForResultsTable = { name: string; steps: string };
type TypeForGameTheme = { type: string; text: string };

// карточки сгруппированы по темам картинок
// в наборах карточки указаны в одном экземпляре
// парные карточки нужно сгенерировать

const cats: TypeForGetCard[] = [{
	id: uuid4(),
	url: '/img/cats/cat1.jpg',
	description: 'red cat and bubbles',
}, {
	id: uuid4(),
	url: '/img/cats/cat2.jpg',
	description: 'calico cat',
}, {
	id: uuid4(),
	url: '/img/cats/cat3.jpg',
	description: 'siamese cat',
}, {
	id: uuid4(),
	url: '/img/cats/cat4.jpg',
	description: 'cheeky cat in the city',
}, {
	id: uuid4(),
	url: '/img/cats/cat5.jpg',
	description: 'white bride',
}, {
	id: uuid4(),
	url: '/img/cats/cat6.jpg',
	description: 'british cat',
}];

const parrots: TypeForGetCard[] = [{
	id: uuid4(),
	url: '/img/parrots/parrot1.jpg',
	description: 'ara parrot',
}, {
	id: uuid4(),
	url: '/img/parrots/parrot2.jpg',
	description: 'necklace parrot',
}, {
	id: uuid4(),
	url: '/img/parrots/parrot3.jpg',
	description: 'cockatoo',
}, {
	id: uuid4(),
	url: '/img/parrots/parrot4.jpg',
	description: 'amazon',
}, {
	id: uuid4(),
	url: '/img/parrots/parrot5.jpg',
	description: 'budgerigar',
}, {
	id: uuid4(),
	url: '/img/parrots/parrot6.jpg',
	description: 'lovebirds',
}];

const forKids: TypeForGetCard[] = [{
	id: uuid4(),
	url: '/img/forKids/kitten1.jpg',
	description: 'programmer cat',
}, {
	id: uuid4(),
	url: '/img/forKids/kitten2.jpg',
	description: 'cosmonaut cat',
}, {
	id: uuid4(),
	url: '/img/forKids/kitten3.jpg',
	description: 'violinist cat',
}, {
	id: uuid4(),
	url: '/img/forKids/kitten4.jpg',
	description: 'sleeping cat',
}, {
	id: uuid4(),
	url: '/img/forKids/kitten5.jpg',
	description: 'cat with books',
}, {
	id: uuid4(),
	url: '/img/forKids/kitten6.jpg',
	description: 'cat with balloons',
}];

const cardsCollection = [cats, parrots, forKids]

const resultsTable: TypeForResultsTable[] = [
	{ name: "Мальвина", steps: '5' },
	{ name: "Дмитрий", steps: '3' },
	{ name: "Александр", steps: '2' },
	{ name: "Матвей", steps: '4' },
	{ name: "Павел", steps: '4' },
	{ name: "Ольга", steps: '1' },
];

// функция для доступа к данным из приложения
// принимает в параметре название набора данных
const getCards = (type: number) => {
	// Берем набор картинок по индексу и делаем копию каждой картинки.
	let identicalCards = cardsCollection[type].map((item) => ({ ...item }))

	// Теперь соединяем оригинальные картинки с их копиями
	const mergedCards = [...cardsCollection[type], ...identicalCards]

	// Перемешиваем все картинки
	mergedCards.sort(() => 0.5 - Math.random())

	// Возвращаем готовый список картинок для игры
	return mergedCards
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
