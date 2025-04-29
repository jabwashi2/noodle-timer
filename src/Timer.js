import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

/*
* there will be preset values based on a couple different noodles, then there will be a custom option where the user can set any time they want
* Date() will need to be used, values are returned in milliseconds, so things will need to be divided by 1000!!!
* note: set started back to false when the page is refreshed (there will be a back button later so do it when that is clicked)
*/

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

// times for each timer
let pasta = [0, 10, 0];
let udon = [0, 5, 0];
let ramen = [0, 3, 0];

let started = false;


function setTotalTime(id) {

    // let's try adding the time we want to get to + the current time to = totalTime
    const TOTAL_TIME = new Date();

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    switch(id) {
        default:
            hours = 0;
            minutes = 0;
            seconds = 0;
            break;
        case 'pasta':
            hours = pasta[0];
            minutes = pasta[1];
            seconds = pasta[2];
            break;
        case 'udon':
            hours = udon[0];
            minutes = udon[1];
            seconds = udon[2];
            break;
    }

    TOTAL_TIME.setHours(TOTAL_TIME.getHours() + hours);
    TOTAL_TIME.setMinutes(TOTAL_TIME.getMinutes() + minutes);
    TOTAL_TIME.setSeconds(TOTAL_TIME.getSeconds() + seconds);

    return [hours, minutes, seconds, TOTAL_TIME.getTime()];
}

function getTime (hrs, mins, secs, time_vals){ // time_vals is an array that holds starting values for hrs, mins, secs, and the total time

    if (started === true) {
        let currentTime = time_vals[3] - Date.now();

        hrs(Math.floor((currentTime / HOUR) % 24));
        mins(Math.floor((currentTime / MINUTE) % 60));
        secs(Math.floor((currentTime / SECOND) % 60));
    }
    else {
        hrs(time_vals[0]);
        mins(time_vals[1]);
        secs(time_vals[2]);
    }
    
}

export function Timer (props) { /* props will be the time the timer is set to (ex: 5 minutes, ten minutes, etc) */
/*
* this timer needs hours, minutes, and seconds
*/

    // the amount of time will be based on the id in the url
    const {id} = useParams();



    // calling our helper function!
    const TIME_VALUES = setTotalTime(id);
    //const TOTAL_TIME = TIME_VALUES[3];

    const [timeHours, setTimeHours] = useState(TIME_VALUES[0]);
    const [timeMinutes, setTimeMinutes] = useState(TIME_VALUES[1]);
    const [timeSeconds, setTimeSeconds] = useState(TIME_VALUES[2]);

    // this makes the timer work
    useEffect(() => {
        const interval = setInterval(() => getTime(setTimeHours, setTimeMinutes, setTimeSeconds, TIME_VALUES), 1000);
    
        return () => clearInterval(interval);
      }, []);

    // resets the bool
    if (timeHours === 0 && timeMinutes === 0 && timeSeconds === 0) {
        started = false;
    }


    return (
        <div className="timer-page">
            <div className="timer">
                <p>{timeHours > 0 ? timeHours : 0} : {timeMinutes > 0 ? timeMinutes : 0} : {timeSeconds > -1 ? timeSeconds : 0}</p> {/*time stops at 0*/}
            </div>
            <button id='startbtn' onClick={() => {started = true}}>Start</button>
        </div>
    )
}