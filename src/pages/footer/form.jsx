import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';

export default class Contact extends Component {

    constructor() {
        super()
        this.state = {
            xhrMessage: ''
        }
        this.setXhrMessage = this.setXhrMessage.bind(this)
    }

    setXhrMessage(message) {
        this.setState({ xhrMessage: message })
    }

    sendXhr(data) {

        const {setXhrMessage} = this

        const xhr = new XMLHttpRequest()

        xhr.open("POST", "http://localhost:3000")
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function onLoad() {
            if (xhr.status === 200) setXhrMessage('sucess!')
            else setXhrMessage('error:' + xhr.status)
        }
        xhr.send(data)
    }

    onSubmit(e) {
        e.preventDefault()

        const {elements} = this.refs.form
            , data = {}

        for (let element of elements) {
            const {name, value} = element
            if (name) data[name] = value
        }

        this.sendXhr(JSON.stringify(data))
    }

    form() {
        return (
            <form className="contact" ref="form" onSubmit={this.onSubmit.bind(this)}>
                <input name="name" type="text" />
                <input name="email" type="email" />
                <textArea name="message" /> 
                <input type="submit" value="Send" />
            </form>
        )
    }

    xhrMessage() {
        return <h3>{this.state.xhrMessage}</h3>
    }

    render() {
        return this.state.xhrMessage ? this.xhrMessage() : this.form()
    }

}