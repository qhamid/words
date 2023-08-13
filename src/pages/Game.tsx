import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "../ui";
import { useEffect, useState } from "react";
import GameEngine from "../components/GameEngine/GameEngine";
import Score from "../components/Score/Score";
import { ArrayUtils, StringUtils } from "../shared";
import { wordsArr } from "../assets";

function Game() {
  const location = useLocation();
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [word, setWord] = useState("");

  const difficulty = location.state?.difficulty;
  const wordLength = location.state?.wordLength;

  useEffect(() => {
    if (!Number.isInteger(difficulty)) navigate("/");
    if (!Number.isInteger(wordLength)) navigate("/");
  }, []);

  const words = StringUtils.splitChunks(wordsArr[wordLength], wordLength + 3);
  useEffect(() => {
    setWord(ArrayUtils.randomSelect(words));
  }, []);

  return (
    <Container className="flex gap-4">
      <div className="w-fit">
        <Score score={score} />
      </div>
      <div className="flex items-center justify-center">
        <GameEngine difficulty={difficulty} setScore={setScore} word={word} />
      </div>
    </Container>
  );
}

export default Game;
