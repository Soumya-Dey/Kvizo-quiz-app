import React, { useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import QuizPanel from "./QuizPanel";
import AltInfo from "./AltInfo";
import Headings from "./Headings";
import Timer from "./Timer";

const App = () => {
    const [isPlaying, setPlaying] = useState(false);

    return (
        <div>
            <div className="container">
                <div className="left">
                    <p className="logo">
                        Kvizo
                        <QuestionAnswerIcon />
                        quiz
                    </p>

                    {isPlaying ? <Timer /> : <Headings />}

                    <button
                        className="start-btn"
                        onClick={() => setPlaying(true)}
                    >
                        Start Playing
                        <ArrowForwardIcon />
                    </button>
                </div>

                <div className="right">
                    {isPlaying ? (
                        <QuizPanel />
                    ) : (
                        <div className="hero-image"></div>
                    )}
                </div>
            </div>

            {isPlaying ? null : <AltInfo />}
        </div>
    );
};

export default App;
