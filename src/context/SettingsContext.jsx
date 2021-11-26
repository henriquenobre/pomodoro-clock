import { createContext, useState } from "react"

export const SettingContext = createContext()

const SettingsContextProvider = (props) => {

    const [pomodoro, setPomodoro] = useState()
    const [executing, setExecuting] = useState()
    const [startAnimation, setStartAnimation] = useState(false)

    function startTimer() {
        setStartAnimation(true)
    }

    function pauseTimer() {
        setStartAnimation(false)
    }

    function stopTimer() {
        setStartAnimation(false)
    }

    const updateExecute = (updateExecute) => {
        setExecuting(updateExecute)
    }

    return(
        <SettingContext.Provider value={{stopTimer}}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingsContextProvider