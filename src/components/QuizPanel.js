import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Slide } from "@material-ui/core";

const QuizPanel = () => {
    const [questions, setQuestions] = useState([]);
    const [qIndex, setQIndex] = useState(0);
    const [isLoaded, setLoaded] = useState(false);

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
                    {questions[qIndex].question}
                </h1>

                <div className="options-container">
                    <div>option a</div>
                    <div>option b</div>
                    <div>option c</div>
                    <div>option d</div>
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
