import React, { Component, Fragment } from 'react';
import SwitchFlag from './switchFlag';
import ViewFlagValue from './viewFlagValue';

class App extends Component {
  constructor() {
    super();
    this.handleUpdateFlag = this.handleUpdateFlag.bind(this);
    this.state = {
      flag: false
    }
  }

  handleUpdateFlag() {
    this.setState({
      flag: !this.state.flag
    });
  }

  render() {
    return(
      <Fragment>
        <SwitchFlag
          handleUpdateFlag={this.handleUpdateFlag}
        />
        <ViewFlagValue
          flag={this.state.flag}
        />
      </Fragment>
    );
  }
}

export default App;