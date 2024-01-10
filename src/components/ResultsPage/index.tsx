import { useNavigate } from "react-router-dom";
import { TypeForResultsTable } from "../Data";
import { useContext } from "react";
import { userContext } from "../App";

type ResultsProps = { results: TypeForResultsTable[] };

const ResultsPage = ({ results }: ResultsProps) => {
  const navigate = useNavigate();
  const context = useContext(userContext);
  const userCount = context?.userCount || 0;
  const { stepsCount, setStepsCount } = useContext(userContext) || {
    stepsCount: 0,
    setStepsCount: () => {},
  };

  const { userName } = context || { userName: "" };

  const sortedResults = [
    ...results,
    { name: userName, steps: stepsCount, pairsCount: userCount },
  ].sort((a, b) => {
    if (a.pairsCount !== b.pairsCount) {
      return b.pairsCount - a.pairsCount;
    }
    return a.steps - b.steps;
  });

  const onResetGame = () => {
    setStepsCount(0);
    navigate("/");
  };
  return (
    <section className="result container">
      <h2>Лучшие результаты:</h2>
      <p className="text-green-600 text-xl">
        <b>{userName},</b> Вы завершили игру за <b>{stepsCount} ходов,</b>{" "}
        отгадав <b>{userCount} пар карточек,</b> так держать!
      </p>
      <table className="result-table">
        <thead>
          <tr className="result-table-row">
            <th>Место</th>
            <th>Имя</th>
            <th>Шаги</th>
            <th>Пары </th>
          </tr>
        </thead>
        <tbody>
          {sortedResults.map(({ name, steps, pairsCount }, i) => (
            <tr
              key={`${name}-${i}`}
              className={`result-table-row ${
                name === userName ? "active" : ""
              }`}
            >
              <td>{i + 1}</td>
              <td>{name}</td>
              <td>{steps}</td>
              <td>{pairsCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-green-600 text-2xl font-bold">
        Хотите попробовать ещё раз?
      </p>
      <button
        onClick={onResetGame}
        className="button result-button"
        type="button"
      >
        Новая игра
      </button>
    </section>
  );
};

export default ResultsPage;
