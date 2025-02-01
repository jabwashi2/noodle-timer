import React from "react";
import { useState } from "react";

/*
* there will be preset values based on a couple different noodles, then there will be a custom option where the user can set any time they want
*/

function Timer () {
/*
* this timer needs hours, minutes, and seconds
*/

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    return (
        <div className="timer">

        </div>
    )
}

export default Timer;