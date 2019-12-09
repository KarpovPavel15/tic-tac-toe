import React,{Component} from "react";
import "./btnComponent.scss"
export default class BtnComponent extends Component{
    render() {
        return(
            <button className="btn">{this.props.value}</button>
        )
    }
}