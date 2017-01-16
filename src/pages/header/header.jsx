import React, { Component } from 'react'
import styles from './header.scss';
import { Trapeze } from '../../components/trapeze/trapeze.js'
// import rio from './rio.jpg'

export default class Header extends Component {

  render() {

    const {content} = styles

    const rio="https://viagem.catracalivre.com.br/wp-content/uploads/sites/11/2016/04/Rio.jpg"

    return (
      <Trapeze image={rio}>
        <div className={content}>
          <h1>Hi. I'm Hellon</h1>
        </div>
      </Trapeze>
    )
  }

}  