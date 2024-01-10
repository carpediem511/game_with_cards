import { Dialog } from "@headlessui/react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type WelcomeProps = {
  handleCloseWelcome: (name: string) => void;
  newUserName: string;
};

const WelcomePage = ({ handleCloseWelcome, newUserName }: WelcomeProps) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleStartButtonClick = () => {
    setIsInputVisible(true);
  };

  const handlePlayButtonClick = () => {
    const nameWithoutSpaces = userName.replace(/\s/g, ""); // Удаление пробелов из имени
    const onlyLettersRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/; // Регулярное выражение для проверки только букв

    if (!nameWithoutSpaces) {
      setError("Введите имя");
    } else if (!onlyLettersRegex.test(nameWithoutSpaces)) {
      setError("Должны использоваться только буквы!");
    } else {
      setError(null);
      handleCloseWelcome(userName);
      navigate(`/rules`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {!isInputVisible && (
        <div className="text-center mx-auto">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold md:text-left">
            Готовы начать?
          </h1>
          <button
            onClick={handleStartButtonClick}
            className="mt-4 ico-button text-white font-bold py-2 px-4 rounded-lg shadow-xl md:py-3 md:px-6 lg:py-4 lg:px-8"
          >
            Да
          </button>
        </div>
      )}

      {isInputVisible && (
        <Dialog open={true} onClose={() => {}}>
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
              <Dialog.Title className="mb-10 text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">
                Как Вас зовут?
              </Dialog.Title>
              <TextField
                id="outlined-basic"
                label="Имя"
                variant="outlined"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                  setError(null);
                }}
                error={!!error}
                helperText={error}
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
