import React, {Component} from 'react';
import Header from "./components/header";
import Content from "./components/main";
import Footer from "./components/footer";
import "./app.scss"

export default class App extends Component{
  render() {
    return (
        <div className="App">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
  }
}
