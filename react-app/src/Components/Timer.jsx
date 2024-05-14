import React from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie'

function Timer() {

    const [timer, setTimer] = useState(0)
    const [cookies, setCookie, removeCookie] = useCookies([])

    const timerFuntcion = setTimeout(() => {
        setTimer(timer + 1)
        if (timer % 3 == 0){
            setCookie("name", timer)
        }
    },1000)

    const stop = () =>{
        clearTimeout(timerFuntcion)
        setTimer(0)
        removeCookie("name")
    }

    return (
        <div>
            {timer}
            <button onClick={stop}>stop</button>
        </div>
    );
}

export default Timer;