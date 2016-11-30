import styles from './index.scss';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Wrks!</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p>eu não sei mais o que fazer</p>
      </div>
    )
  }
}
