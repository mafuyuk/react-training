import React, { Component, Fragment } from 'react';
import SwitchFlag from './switchFlag';
import ViewFlagValue from './viewFlagValue';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flag: false
    }
  }

  render() {
    return(
      <Fragment>
        <SwitchFlag />
        <ViewFlagValue
          flag={this.state.flag}
        />
      </Fragment>
    );
  }
}

export default App;