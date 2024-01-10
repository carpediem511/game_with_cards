import { Route, Routes } from "react-router-dom";
import { TypeForResultsTable } from "../Data";
import "./../../index.css";
import StartPage from "../StartPage";
import GamePage from "../GamePage";
import ResultsPage from "../ResultsPage";
import { useState, createContext } from "react";
import WelcomePage from "../WelcomePage";

type AppProps = { resultsTable: TypeForResultsTable[] };
type UserProps = {
  userName: string;
  userCount: number;
  setUserCount: (count: number) => void;
  stepsCount: number;
  setStepsCount: (count: number) => void;
};

export const userContext = createContext<UserProps | undefined>(undefined);

function App({ resultsTable }: AppProps) {
  const [userName, setUserName] = useState<string>("");
  const [userCount, setUserCount] = useState<number>(0);
  const [stepsCount, setStepsCount] = useState<number>(0);

  return (
    <userContext.Provider
      value={{ userName, userCount, setUserCount, stepsCount, setStepsCount }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <WelcomePage
              handleCloseWelcome={setUserName}
              newUserName={userName}
            />
          }
        />
        <Route path="/rules" element={<StartPage />} />
        <Route
          path="/game/:type"
          element={
            <GamePage
              newGameOver={userCount}
              stepsCount={stepsCount}
              setStepsCount={setStepsCount}
            />
          }
        />
        <Route
          path="/results"
          element={<ResultsPage results={resultsTable} />}
        />
      </Routes>
    </userContext.Provider>
  );
}

export default App;
