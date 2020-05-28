import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Slide } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";

const QuizPanel = () => {
    const [questions, setQuestions] = useState([]);
    const [qIndex, setQIndex] = useState(0);
    const [isLoaded, setLoaded] = useState(false);
    const [score, setScore] = useState(0);

    // for suffleing the options array
    const shuffle = (array) => {
        var m = array.length,
            t,
            i;

        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    };

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple")
            .then((res) => res.json())
            .then(
                (result) => {
                    setQuestions(result.results);
                    setLoaded(true);
                },
                (error) => console.log(error)
            );
    }, []);

    return isLoaded ? (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <div className="quiz-container">
                <h1 className="heading quiz-question">
                    {ReactHtmlParser(questions[qIndex].question)}
                </h1>

                <div className="options-container">
                    {shuffle([
                        ...questions[qIndex].incorrect_answers,
                        questions[qIndex].correct_answer,
                    ]).map((option, i) => (
                        <button
                            key={i}
                            value={ReactHtmlParser(option)}
                            onClick={(e) => {
                                console.log(e.target.value);
                                console.log(questions[qIndex].correct_answer);
                                if (
                                    e.target.value ===
                                    questions[qIndex].correct_answer
                                )
                                    setScore(score + 10);
                                else setScore(score - 5);

                                setQIndex(qIndex + 1);
                            }}
                        >
                            {ReactHtmlParser(option)}
                        </button>
                    ))}
                    <p>{score}</p>
                </div>

                <button
                    className="start-btn quiz-next-btn"
                    onClick={() => setQIndex(qIndex + 1)}
                >
                    Next
                    <ArrowForwardIcon />
                </button>
            </div>
        </Slide>
    ) : null;
};

export default QuizPanel;
