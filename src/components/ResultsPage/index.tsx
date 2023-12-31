import DeclensionComponent from "../DeclensionComponent";
import { Result } from "../Data";

type ResultsProps = { gameResult: number, onResetGame: () => void, results: Result[] }

const ResultsPage = ({ gameResult, onResetGame, results }: ResultsProps) => {

	const sortedResults = [...results, { name: 'Ваш результат', steps: gameResult.toString() }]
		.sort((a, b) => a.steps.length - b.steps.length)

	return (
		<>
			<section className="result container">
				<h2>Лучшие результаты:</h2>
				<p>Вы завершили игру за <b><DeclensionComponent steps={gameResult} results={['шаг', 'шага', 'шагов']} /></b>, так держать!</p>
				<table className="result-table">
					<thead>
						<tr className="result-table-row">
							<th>Место</th>
							<th>Имя</th>
							<th>Шаги</th>
						</tr>
					</thead>
					<tbody>
						{sortedResults.map(({ name, steps }, i) => (
							<tr key={name} className={`result-table-row ${gameResult === steps.length ? 'active' : ''}`}>
								<td>{i + 1}</td>
								<td>{name}</td>
								<td>{steps.length}</td>
							</tr>
						))}
					</tbody>
				</table>
				<p>Хотите попробовать ещё раз?</p>
				<button onClick={onResetGame} className="button result-button" type="button">Новая игра</button>
			</section>
		</>
	)
}

export default ResultsPage;