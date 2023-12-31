import './../../index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from '../StartPage';
import GamePage from '../GamePage';
import ResultsPage from '../ResultsPage';
import { Data } from '../Data';
import { useState } from 'react';

type Props = {
	finishedItems: number[];
	cats: Data[]
	parrots: Data[]
	forKids: Data[]
	results: Result[]
}

type Result = {
	name: string;
	steps: number;
};

function App({ finishedItems, cats, parrots, forKids, results }: Props) {

	const [gameTheme, setGameTheme] = useState<string>('');

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<StartPage setGameTheme={setGameTheme} />}
					/>
					<Route
						path="/game/:gameTheme"
						element={<GamePage
							data={cats}
							finishedItems={finishedItems}
							cats={cats}
							parrots={parrots}
							forKids={forKids}
						/>}
					/>
					<Route path="/results" element={<ResultsPage results={results} />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App;
