import React from "react";
import ReactDOM from "react-dom";
import Message from "./components/Message"

const App = () => {
    return (
        <div>
            <h1>Сообщения</h1>
          <Message/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root"));