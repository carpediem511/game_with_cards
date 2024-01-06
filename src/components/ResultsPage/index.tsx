import { useNavigate } from "react-router-dom";
import { TypeForResultsTable } from '../Data';

type ResultsProps = { results: TypeForResultsTable[] };

const ResultsPage = ({ results }: ResultsProps) => {
	const navigate = useNavigate();

	/*	const sortedResults = [...results, { name: userName, steps: parsedStepsCount }]
		.sort((a, b) => {
			if (a.steps === undefined || b.steps === undefined) {
				return 0;
			}
			return a.steps - b.steps;
		});*/

	const onResetGame = () => {
		navigate('/');
	};

	return (
		<section className="result container">
			<h2>Лучшие результаты:</h2>
			{/*			<p>{userName}, Вы завершили игру за <b>{parsedStepsCount}</b>, так держать!</p>
*/}			<table className="result-table">
				<thead>
					<tr className="result-table-row">
						<th>Место</th>
						<th>Имя</th>
						<th>Шаги</th>
					</tr>
				</thead>
				{/*	<tbody>
					{sortedResults.map(({ name, steps }, i) => (
						<tr key={`${name}-${i}`} className={`result-table-row ${steps === parsedStepsCount ? 'active' : ''}`}>
							<td>{i + 1}</td>
							<td>{name}</td>
							<td>{steps}</td>
						</tr>
					))}
				</tbody>
*/}
			</table>
			<p>Хотите попробовать ещё раз?</p>
			<button onClick={onResetGame} className="button result-button" type="button">Новая игра</button>
		</section>
	);
}

export default ResultsPage;
