import React from "react";
import "./btnComponent.scss"

export default function Section(props) {
        return (
            <button onClick={() => props.onClick()} className="btn">{props.value}</button>
        )
}