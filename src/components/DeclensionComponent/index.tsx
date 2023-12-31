type Props = {
	count: number;
	words: [string, string, string];
};

const DeclensionComponent = ({ count, words }: Props) => {
	const getWordForm = (count: number): string => {
		const cases = [2, 0, 1, 1, 1, 2];
		const index = count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)];
		return words[index];
	};

	const wordForm = getWordForm(count);

	return <>{`${count} ${wordForm}`}</>;
};

export default DeclensionComponent;