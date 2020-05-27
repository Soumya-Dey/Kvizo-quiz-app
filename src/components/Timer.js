import React, { useState, useEffect } from "react";
import { Zoom } from "@material-ui/core";

const Timer = () => {
    const [time, setTime] = useState(20);
    const [timerWH, setTimerWH] = useState(0);
    const [timerColor, setTimerColor] = useState("#3bc985");

    const timerStyle = {
        height: `${timerWH}%`,
        width: `${timerWH}%`,
        backgroundColor: timerColor,
    };

    useEffect(() => {
        if (time > 11)
            setTimeout(() => {
                setTime(time - 1);
                setTimerWH(timerWH + 5);
            }, 1000);
        else if (time > 6 && time <= 11) {
            setTimerColor("#ff8c00");
            setTimeout(() => {
                setTime(time - 1);
                setTimerWH(timerWH + 5);
                setTimerColor("#ff8c00");
            }, 1000);
        } else if (time > 0 && time <= 6) {
            setTimerColor("#ff5e00");
            setTimeout(() => {
                setTime(time - 1);
                setTimerWH(timerWH + 5);
            }, 1000);
        } else {
            setTimerWH(0);
            setTimeout(() => setTimerColor("transparent"), 1000);
        }
    }, [time, timerWH]);

    return (
        <Zoom in={true}>
            <div className="timer-container">
                <div className="inner-timer" style={timerStyle}></div>
                <p>{time}</p>
            </div>
        </Zoom>
    );
};

export default Timer;
