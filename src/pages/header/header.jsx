import React, { Component } from 'react'
import styles from './header.scss';
import { Trapeze } from '../../components/trapeze/trapeze.js'


export default class Header extends Component {

  render() {

    const {content} = styles

    return (
      <Trapeze>
        <div className={content}>
        </div>
      </Trapeze>
    )
  }

}  