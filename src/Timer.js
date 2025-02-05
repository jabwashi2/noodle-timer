import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

/*
* there will be preset values based on a couple different noodles, then there will be a custom option where the user can set any time they want
* Date() will need to be used, values are returned in milliseconds, so things will need to be divided by 1000!!!
*/

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

// times for each timer
let pasta = [0, 10, 0];
let udon = [0, 5, 0];
let ramen = [0, 3, 0];


function setTotalTime(id) {

    // let's try adding the time we want to get to + the current time to = totalTime
    const totalTime = new Date();

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (id === 'pasta'){
        hours = pasta[0];
        minutes = pasta[1];
        seconds = pasta[2];
    }
    else if (id === 'udon'){
        hours = udon[0];
        minutes = udon[1];
        seconds = udon[2];
    }

    totalTime.setHours(totalTime.getHours() + hours);
    totalTime.setMinutes(totalTime.getMinutes() + minutes);
    totalTime.setSeconds(totalTime.getSeconds() + seconds);

    return totalTime.getTime();
}

export function Timer (props) { /* props will be the time the timer is set to (ex: 5 minutes, ten minutes, etc) */
/*
* this timer needs hours, minutes, and seconds
*/

    // the amount of time will be based on the id in the url
    const {id} = useParams();
    console.log(id)

    const [timeHours, setTimeHours] = useState(0);
    const [timeMinutes, setTimeMinutes] = useState(0);
    const [timeSeconds, setTimeSeconds] = useState(0);

    // calling our helper function!
    const totalTime = setTotalTime(id);

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


    return (
        <div className="timer">
            <p>{timeHours > 0 ? timeHours : 0} : {timeMinutes > 0 ? timeMinutes : 0} : {timeSeconds > -1 ? timeSeconds : 0}</p> {/*time stops at 0*/}
        </div>
    )
}