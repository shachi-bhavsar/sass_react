import React, { Component } from 'react';
import {JsonTree} from 'react-editable-json-tree'
import data from './data.json'

require('./App.sass')
var jsonfile = require('jsonfile')
const writeJsonFile = require('write-json-file');
//var fs = require("fs");
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
       
        writeJsonFile(file, updatedData).then(() => {
          console.log('done');
        });
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
