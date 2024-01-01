import StartPage from '../StartPage';
import './../../index.css';
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {

	return (
		<>
			<Routes>
				<Route path='/' element={<StartPage />} />
			</Routes>
		</>
	)
}

export default App;
