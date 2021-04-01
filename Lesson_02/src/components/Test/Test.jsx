import React from 'react';

class Test extends React.Component {
    render() {
        return React.createElement(
            "ul",
            null,
            React.createElement("li", null, "Первый пункт"),
            React.createElement("li", null, "Второй пункт"),
        )
    }
}

export default Test;