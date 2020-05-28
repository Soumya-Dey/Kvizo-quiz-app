import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const AltInfo = () => {
    return (
        <div className="alt-container">
            <a className="github-link">
                <GitHubIcon />
            </a>

            <p className="alt-heading">Play Kvizo if you need to...</p>

            <div className="cards-container">
                <div className="card">
                    <img src="./images/how_2.png" alt="feature-1"></img>
                    <p>Play from anywhere in the world & any device.</p>
                </div>
                <div className="card">
                    <img src="./images/usecase_6.png" alt="feature-2"></img>
                    <p>Show off your knowledge & skills to others.</p>
                </div>
                <div className="card">
                    <img src="./images/how_3.png" alt="feature-3"></img>
                    <p>Get instant feedback on how you did in the quiz.</p>
                </div>
            </div>

            <button className="start-btn alt-start-btn">
                Start Playing
                <ArrowForwardIcon />
            </button>

            <p className="footer">
                All rights reserved &copy; 2020 | Made with ❤ by Soumya
            </p>
        </div>
    );
};

export default AltInfo;
