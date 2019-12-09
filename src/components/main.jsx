import React,{Component} from "react";
import "./main.scss"
import Board from "./board"

export default class Content extends Component{
    render() {
        return(
            <main className="app-content">
                <Board/>
            </main>
        )
    }
}