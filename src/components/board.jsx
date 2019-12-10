import React, {Component} from "react";
import Section from "./section"

export default class Board extends Component {
    state = {
        values: Array(9).fill(null),
        xNext: true
    };

    handleClick(i) {
        const values = this.state.values.slice();
        if(values[i]==null){
            values[i] = this.state.xNext ? 'X' : 'O';
        }

        this.setState({
            values: values,
            xNext: !this.state.xNext
        })
    }

    returnBtn(i) {
        return (<Section
            value={this.state.values[i]}
            onClick={() => this.handleClick(i)}
        />)
    }

    render() {
        const status = this.state.xNext ? "next player: X" : "next player: O";
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-line">
                    {this.returnBtn(0)}
                    {this.returnBtn(1)}
                    {this.returnBtn(2)}
                </div>
                <div className="board-line">
                    {this.returnBtn(3)}
                    {this.returnBtn(4)}
                    {this.returnBtn(5)}
                </div>
                <div className="board-line">
                    {this.returnBtn(6)}
                    {this.returnBtn(7)}
                    {this.returnBtn(8)}
                </div>
            </div>
        )
    }
}