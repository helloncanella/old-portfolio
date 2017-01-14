import React, { Component } from 'react'
import styles from './form.scss'
import grid from '../../stylesheets/grid.scss'

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
        xhr.open("POST", "https://email-canella.herokuapp.com/")
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function onLoad() {
            if (xhr.status === 200) setXhrMessage('sucess!')
            else setXhrMessage('error:' + xhr.status)
        }

        xhr.send(data)
    }

    getFormData() {
        const {elements} = this.refs.form, data = {}

        for (let element of elements) {
            const {name, value} = element
            if (name) data[name] = value
        }

        return data
    }

    onSubmit(e) {
        e.preventDefault()
        const data = this.getFormData()
        this.sendXhr(JSON.stringify(data))
    }

    form() {
        const {form} = styles
            , {row, col3Of12, col4Of12, col12Of12} = grid

        return (
            <form className={`${form} ${row}`} ref="form" onSubmit={this.onSubmit.bind(this)}>
                <input name="name" type="text" placeholder="Name"/>
                <input name="email" type="email" placeholder="E-mail" />
                <textArea name="message" placeholder="Message" />
                <input className={col4Of12} type="submit" value="Send" />
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