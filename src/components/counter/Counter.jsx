import React, {useMemo} from 'react';
import CounterController from "../../store/CounterController";
import {observer} from "mobx-react-lite";
import {useInterval} from "../../hooks/useInterval";

const TIMER_TICK = 1000

const Counter = observer(() => {
    const {
        timer,
        attempts,
        successfulAttempts,
        isTimerStarted,
        incrementTimer
    } = CounterController


    useInterval(async () => {
        if (isTimerStarted) {
            incrementTimer(TIMER_TICK)
        }
    }, TIMER_TICK)

    const formattedTimer = useMemo(() => {
        const hourMs = 60000
        const secMs = 1000
        let min = Math.floor(timer / hourMs)
        let sec = ((timer % hourMs) / secMs).toFixed(0);
        return `${min}:${sec.padStart(2, "0")}`
    }, [timer])

    return (
        <div className='counter'>

            <div className='counter__index counter__timer'>
                <label>Timer: </label>
                <span>{formattedTimer}</span>
            </div>

            <div className='counter__index counter__attempts'>
                <label>Attempts: </label>
                <span>{attempts}</span>
            </div>

            <div className='counter__index counter__success'>
                <label>Success: </label>
                <span>{successfulAttempts}</span>
            </div>
        </div>
    );
});

export default Counter;