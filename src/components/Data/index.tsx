import uuid4 from "uuid4";

type Data = {
	id: string
	url: string
	description: string
}

// карточки сгруппированы по темам картинок
// в наборах карточки указаны в одном экземпляре
// парные карточки нужно сгенерировать

const cats: Data[] = [{
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

const parrots: Data[] = [{
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

const forKids: Data[] = [{
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

const results = [
	{ name: "Мальвина", stepsCount: 5 },
	{ name: "Дмитрий", stepsCount: 3 },
	{ name: "Александр", stepsCount: 2 },
	{ name: "Матвей", stepsCount: 4 },
	{ name: "Павел", stepsCount: 4 },
	{ name: "Ольга", stepsCount: 1 },
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
const gameTypes = [
	{ type: 'cats', text: 'Котики' },
	{ type: 'parrots', text: 'Попугаи' },
	{ type: 'forKids', text: 'Для детей' },
];

const timeOut = 900;
const randomized = false

export type { Data };

export { cats, parrots, forKids, cardsCollection, results, getCards, gameTypes, timeOut, randomized };
