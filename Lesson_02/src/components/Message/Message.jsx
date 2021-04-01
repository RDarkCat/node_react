import React from 'react';
import MessageField from "./MessageField"

class Message extends React.Component {
    state = {
        messages: [{ author: "User", value: "Тест сообщение" }],
        value: "",
    }

    sendMessage = ({ author, value }) => {
        const { messages } = this.state

        this.setState({
            messages: [...messages, { author, value }],
            value: "",
        })
    }

    handleChangeInput = ({ target }) => {
        this.setState({
            value: target.value,
        })
    }

    componentDidUpdate(_, state) {
        const { messages } = this.state

        const lastMessage = messages[messages.length - 1]

        if (lastMessage.author === "User" && state.messages !== messages) {
            setTimeout(() => {
                this.sendMessage({ author: "bot", value: "Как дела ?" })
            }, 500)
        }
    }

    render() {
        const { messages, value } = this.state
        return (
            <div>
                <h1>Messages</h1>
                {messages.map((message, index) => (
                    <MessageField message={message} key={index} />
                ))}
                <input type="text"
                       onChange={this.handleChangeInput}
                       value={value} />
                <button onClick={() => {this.sendMessage({ author: "User", value })}}>Отправить сообщение</button>
            </div>

        )
    }
}

export default Message;