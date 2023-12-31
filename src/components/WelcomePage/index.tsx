import { Dialog } from '@headlessui/react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type WelcomeProps = {
	handleCloseWelcome: (name: string) => void;
};

const WelcomePage = ({ handleCloseWelcome }: WelcomeProps) => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState<string>("Аноним");
	const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

	const handleStartButtonClick = () => {
		setIsInputVisible(true);
	};

	const handlePlayButtonClick = () => {
		handleCloseWelcome(userName);
		navigate(`/rules`);
	};

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			{!isInputVisible && (
				<div className='text-center mx-auto'>
					<h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold  md:text-left">Готовы начать?</h1>
					<button
						onClick={handleStartButtonClick}
						className="mt-4 ico-button text-white font-bold py-2 px-4 rounded-lg shadow-xl md:py-3 md:px-6 lg:py-4 lg:px-8"
					>
						Да
					</button>
				</div>
			)}

			{isInputVisible && (
				<Dialog open={true} onClose={() => { }}>
					<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
						<Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
							<Dialog.Title className="mb-10 text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">Как Вас зовут?</Dialog.Title>
							<TextField
								id="outlined-basic"
								label="Имя"
								variant="outlined"
								value={userName}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
								className="w-full mb-2 md:mb-4"
							/>
							<button
								onClick={handlePlayButtonClick}
								className="w-full mt-10 ico-button text-white font-bold py-2 px-4 rounded shadow-md md:py-3 md:px-6 lg:py-4 lg:px-8"
							>
								Играем!
							</button>
						</Dialog.Panel>
					</div>
				</Dialog>
			)}
		</div>
	);
};

export default WelcomePage;
