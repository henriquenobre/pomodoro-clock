import react from "react";

const Button = ({tittle, activeClass, _callback}) => {
    return(
        <button className={activeClass} onClick={_callback}>{tittle}</button>
    )
}

export default Button