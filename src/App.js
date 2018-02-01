import React, { Component } from 'react';
import {JsonTree} from 'react-editable-json-tree'
import data from './data.json'

require('./App.sass')

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <div>
          	<JsonTree data={data} />
        </div>
      </div>
    );
  }
}

export default App;
