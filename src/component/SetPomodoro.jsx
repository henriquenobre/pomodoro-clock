import React, { useState } from "react";
import Button from "./button";

const SetPomodoro = () => {
    const [newTimer, setNewTimer] = useState({
        work: 0.3,
        short: 0.2,
        long: 1,
        active: 'work'
    })

    const handlechange = input => {
        const { name, value } = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;

            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;

            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;

            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        /* updateExecute(newTimer) */
    }

    return (
        <div className='form-container'>
            <form noValidate>
                <div className="input-wrapper">
                    <input className="input" name="work" onChange={handlechange} value={newTimer.work} />


                    <input className="input" name="shortBreak" onChange={handlechange} value={newTimer.short} />

                    <input className="input" name="longBreak" onChange={handlechange} value={newTimer.long} />
                </div>
                <Button tittle="Set Timer" _callback={handleSubmit} />
            </form>
        </div>
    )
}

export default SetPomodoro