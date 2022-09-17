import React from "react";
import css from "./Notify.module.css";

const Nostat = ({text}) => {
    return (
        <h3 className={css.h2}>{text}</h3>
    );
}
export default Nostat;