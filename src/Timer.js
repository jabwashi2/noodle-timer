import React from "react";
import { useState, useEffect } from "react";

/*
* there will be preset values based on a couple different noodles, then there will be a custom option where the user can set any time they want
* Date() will need to be used, values are returned in milliseconds, so things will need to be divided by 1000!!!
*/

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;


function setTotalTime(props) {

    // let's try adding the time we want to get to + the current time to = totalTime
    const totalTime = new Date();

    totalTime.setHours(totalTime.getHours() + props.hours);
    totalTime.setMinutes(totalTime.getMinutes() + props.minutes);
    totalTime.setSeconds(totalTime.getSeconds() + props.seconds);

    return totalTime.getTime();
}

export function Timer (props) { /* props will be the time the timer is set to (ex: 5 minutes, ten minutes, etc) */
/*
* this timer needs hours, minutes, and seconds
*/

    const [timeHours, setTimeHours] = useState(0);
    const [timeMinutes, setTimeMinutes] = useState(0);
    const [timeSeconds, setTimeSeconds] = useState(0);

    // calling our helper function!
    const totalTime = setTotalTime(props);

    const getTime = () => {
        const currentTime = totalTime - Date.now();

        setTimeHours(Math.floor((currentTime / HOUR) % 24));
        setTimeMinutes(Math.floor((currentTime / MINUTE) % 60));
        setTimeSeconds(Math.floor((currentTime / SECOND) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(totalTime), 1000);
    
        return () => clearInterval(interval);
      }, []);

    //   console.log("hours: " + timeHours, "minutes: " + timeMinutes, "seconds: " + timeSeconds)

    return (
        <div className="timer">
            <p>{timeHours > 0 ? timeHours : 0} : {timeMinutes > 0 ? timeMinutes : 0} : {timeSeconds > -1 ? timeSeconds : 0}</p> {/*time stops at 0*/}
        </div>
    )
}