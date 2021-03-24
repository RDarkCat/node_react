import React, { Component } from "react";
import ReactDOM from "react-dom";
import Test from "./components/Test"

const App = () => {
    return <div className="app">Hello React</div>;
}

ReactDOM.render(
    <>
    <App />
    <Test title="title" />
    </>,
    document.querySelector("#root"));