import React, { Fragment, Component } from 'react';

import Hello from './hello';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      flag: false
    }
  }
  handleChange() {
    this.setState({
      flag: !this.state.flag
    });
  }
  
  render() {
    return (
      <Fragment>
        <button onClick={this.handleChange}>Switch Flag</button>
        {`${this.state.flag}`}
        <Hello />
      </Fragment>
    )
  }
}

export default App;