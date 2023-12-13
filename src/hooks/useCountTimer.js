import { useEffect, useState } from "react";

function callback() {
    console.log("Hello, I'm done");
}

export const useCountdown = (initialTimer, interval = 1000) => {
    const [time, setTime] = useState(initialTimer * 60);
    const [pause, setPause] = useState(false);
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    let countdownInterval;

    const handlePlayPause = () => {
        setPause(!pause);
    };
    const handleReset = () =>{
        setTime(initialTimer * 60);
    }
    function updateCountdown() {
        minutes = Math.floor(time / 60);
        seconds = time % 60;
        if (time > 0 && !pause) {
            setTime((prev) => prev - 1);
        }
    }

    useEffect(() => {
        if (!pause) {

            countdownInterval = setInterval(updateCountdown, interval);
        }

        return () => {
            clearInterval(countdownInterval);

            
            if (time === 0) {
                callback();
            }
        };
    }, [time, interval, pause]);

    useEffect(() => {
       
        setTime(initialTimer * 60);
    }, [initialTimer]);

    return { minutes, seconds, handlePlayPause,  handleReset };
};
