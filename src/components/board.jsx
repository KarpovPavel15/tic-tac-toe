import React, {Component} from "react";
import BtnComponent from "./btnComponent"

export default class Board extends Component {
    static returnBtn(i) {
        return <BtnComponent value={i}/>
    }

    render() {
        const status = "next player: X";
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-line">
                    {Board.returnBtn(0)}
                    {Board.returnBtn(1)}
                    {Board.returnBtn(2)}
                </div>
                <div className="board-line">
                    {Board.returnBtn(3)}
                    {Board.returnBtn(4)}
                    {Board.returnBtn(5)}
                </div>
                <div className="board-line">
                    {Board.returnBtn(6)}
                    {Board.returnBtn(7)}
                    {Board.returnBtn(8)}
                </div>
            </div>
        )
    }
}