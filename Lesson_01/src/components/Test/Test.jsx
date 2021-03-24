import React from "react";

const Test = () => {
    return React.createElement(
        "ul",
        null,
        React.createElement("li", null, "Первый пункт"),
        React.createElement("li", null, "Второй пункт"),
    )
}

export default Test;