import { useNavigate } from "react-router-dom"
import DeclensionComponent from "../DeclensionComponent"

type Result = {
	name: string;
	steps: number;
}

type Props = {
	results: Result[];
}

const ResultsPage = ({ results }: Props) => {

	const navigate = useNavigate()

	const handleRestart = () => {
		navigate('/')
	}

	return (
		<>
			<div className="results-container">
				<table>
					<thead>
						<tr>
							<th>Имя игрока</th>
							<th>Шаги</th>
						</tr>
					</thead>
					<tbody>
						{results.map((player, index) => (
							<tr key={index}>
								<td>{player.name}</td>
								<td><DeclensionComponent count={player.steps} words={['шаг', 'шага', 'шагов']} /></td>
							</tr>
						))}
					</tbody>
				</table>
				<button onClick={handleRestart}>Начать новую игру</button>
			</div>
		</>
	)
}

export default ResultsPage;