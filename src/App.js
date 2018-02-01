import React, { Component } from 'react';
import {JsonTree} from 'react-editable-json-tree'
import data from './data.json'

var jsonfile = require('jsonfile')
require('./App.sass')

class App extends Component {

	  constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        };
        this.onFullyUpdate = this.onFullyUpdate.bind(this);
    }
    
    onFullyUpdate(data) {
        this.setState({
            data,
        });
        let updatedData = JSON.stringify(data);
        console.log(updatedData);
        var file = 'tmp.json'
        
        jsonfile.writeFile(file, updatedData,function (err) {
          console.error(err)
        });
    }

  render() {
  
    return (
      <div>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <div>
          	<JsonTree data={data}  onFullyUpdate={this.onFullyUpdate}/>
        </div>
      </div>
    );
  }
}

export default App;
