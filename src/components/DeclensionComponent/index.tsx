type Props = {
	steps: number;
	results: string[];
};

const DeclensionComponent = ({ steps, results }: Props) => {
	const getWordForm = (steps: number): string => {
		const cases = [2, 0, 1, 1, 1, 2];
		const index = steps % 100 > 4 && steps % 100 < 20 ? 2 : cases[Math.min(steps % 10, 5)];
		return results[index];
	};

	const wordForm = getWordForm(steps);

	return <>{`${steps} ${wordForm}`}</>;
};

export default DeclensionComponent;