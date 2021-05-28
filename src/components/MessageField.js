import React from "react"
import ReactDOM from "react-dom"
import Message from './message/Message.js'

export default class MessageField extends React.Component {
    state = {
        messages: [
            {
                author: 'Bot',
                text: "Привет!"
            },
            {
                author: 'Bot',
                text: "Как дела?"
            }
        ]
    };

    sendMessage = (author, text) => {
        this.setState({ messages: [...this.state.messages, { author: 'Art', text: 'Привет, я Артур' }] });
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].author !== 'Bot') {
            setTimeout(() =>
                this.setState(
                    { messages: [...this.state.messages, { author: 'Bot', text: 'Привет, я робот!' }] }), 1000);
        }
    }

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message text={message.text} author={message.author} key={index} isVisible={true} />
        ))

        return (
            <>
                <button onClick={this.sendMessage}>Send</button>
                {messageElements}
            </>
        )
    }
}