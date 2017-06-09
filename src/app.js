import React from 'react';
import { Fragment } from 'redux-little-router';

import Album from './containers/album';
import Home from './containers/home';

class App extends React.Component {
  render() {
    return (
      <Fragment forRoute='/'>
        <div className="App">
          <h1 className="text-center">Album finder</h1>
          <Fragment forRoute='/'><Home /></Fragment>
          <Fragment forRoute='/album'><Album /></Fragment>
        </div>
      </Fragment>
    );
  }
}

export default App;
