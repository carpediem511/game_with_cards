type Data = {

	id: number
	url: string
	description: string
}

const cats: Data[] = [{
	id: 1,
	url: '/img/cats/cat1.jpg',
	description: 'red cat and bubbles',
}, {
	id: 2,
	url: '/img/cats/cat2.jpg',
	description: 'calico cat',
}, {
	id: 3,
	url: '/img/cats/cat3.jpg',
	description: 'siamese cat',
}, {
	id: 4,
	url: '/img/cats/cat4.jpg',
	description: 'cheeky cat in the city',
}, {
	id: 5,
	url: '/img/cats/cat5.jpg',
	description: 'white bride',
}, {
	id: 6,
	url: '/img/cats/cat6.jpg',
	description: 'british cat',
}, {
	id: 7,
	url: '/img/cats/cat4.jpg',
	description: 'cheeky cat in the city',
}, {
	id: 8,
	url: '/img/cats/cat2.jpg',
	description: 'calico cat',
}, {
	id: 9,
	url: '/img/cats/cat6.jpg',
	description: 'british cat',
}, {
	id: 10,
	url: '/img/cats/cat1.jpg',
	description: 'red cat and bubbles',
}, {
	id: 11,
	url: '/img/cats/cat3.jpg',
	description: 'siamese cat',
}, {
	id: 12,
	url: '/img/cats/cat5.jpg',
	description: 'white bride',
}];

const parrots: Data[] = [{
	id: 1,
	url: '/img/parrots/parrot1.jpg',
	description: 'ara parrot',
}, {
	id: 2,
	url: '/img/parrots/parrot2.jpg',
	description: 'necklace parrot',
}, {
	id: 3,
	url: '/img/parrots/parrot3.jpg',
	description: 'cockatoo',
}, {
	id: 4,
	url: '/img/parrots/parrot4.jpg',
	description: 'amazon',
}, {
	id: 5,
	url: '/img/parrots/parrot5.jpg',
	description: 'budgerigar',
}, {
	id: 6,
	url: '/img/parrots/parrot6.jpg',
	description: 'lovebirds',
}, {
	id: 7,
	url: '/img/parrots/parrot4.jpg',
	description: 'amazon',
}, {
	id: 8,
	url: '/img/parrots/parrot1.jpg',
	description: 'ara parrot',
}, {
	id: 9,
	url: '/img/parrots/parrot5.jpg',
	description: 'budgerigar',
}, {
	id: 10,
	url: '/img/parrots/parrot3.jpg',
	description: 'cockatoo',
}, {
	id: 11,
	url: '/img/parrots/parrot6.jpg',
	description: 'lovebirds',
}, {
	id: 12,
	url: '/img/parrots/parrot2.jpg',
	description: 'necklace parrot',
}];

const forKids: Data[] = [{
	id: 1,
	url: '/img/forKids/kitten1.jpg',
	description: 'programmer cat',
}, {
	id: 2,
	url: '/img/forKids/kitten2.jpg',
	description: 'cosmonaut cat',
}, {
	id: 3,
	url: '/img/forKids/kitten3.jpg',
	description: 'violinist cat',
}, {
	id: 4,
	url: '/img/forKids/kitten4.jpg',
	description: 'sleeping cat',
}, {
	id: 5,
	url: '/img/forKids/kitten5.jpg',
	description: 'cat with books',
}, {
	id: 6,
	url: '/img/forKids/kitten6.jpg',
	description: 'cat with balloons',
}, {
	id: 7,
	url: '/img/forKids/kitten2.jpg',
	description: 'cosmonaut cat',
}, {
	id: 8,
	url: '/img/forKids/kitten6.jpg',
	description: 'cat with balloons',
}, {
	id: 9,
	url: '/img/forKids/kitten4.jpg',
	description: 'sleeping cat',
}, {
	id: 10,
	url: '/img/forKids/kitten5.jpg',
	description: 'cat with books',
}, {
	id: 11,
	url: '/img/forKids/kitten1.jpg',
	description: 'programmer cat',
}, {
	id: 12,
	url: '/img/forKids/kitten3.jpg',
	description: 'violinist cat',
}];

const results = [
	{ name: "Мальвина", steps: 5 },
	{ name: "Дмитрий", steps: 3 },
	{ name: "Александр", steps: 2 },
	{ name: "Матвей", steps: 4 },
	{ name: "Павел", steps: 4 },
	{ name: "Ольга", steps: 1 },
];

export { cats };
export { parrots };
export { forKids };
export { results }
export type { Data };
