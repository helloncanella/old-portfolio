import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Home from './home.jsx';
import typography from './stylesheets/typography.scss'

render( <AppContainer><Home/></AppContainer>, document.querySelector("#home"));

if (module && module.hot) {
  module.hot.accept('./home.jsx', () => {
    const App = require('./home.jsx').default;
    render(
      <AppContainer>
        <Home/>
      </AppContainer>,
      document.querySelector("#home")
    );
  });
}
