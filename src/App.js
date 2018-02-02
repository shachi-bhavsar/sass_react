import React, { Component } from 'react';
import {JsonTree} from 'react-editable-json-tree'
import jsonData from './data.json'
import data from './data.json'
import JSONTree from 'react-json-tree'
require('./App.sass')
//var jsonfile = require('jsonfile')
//const writeJsonFile = require('write-json-file');
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
       /* var file = 'tmp.json'
       
        writeJsonFile(file, updatedData).then(() => {
          console.log('done');
        });
        jsonfile.writeFile(file, updatedData,function (err) {
          console.error(err)
        });*/
    }

  render() {
    
    return (
      <div>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <div style={{float:'left',width:"45%"}}>
        Original Data:
            <JSONTree data={jsonData} />
        </div>
        <div style={{float:'right',width:"50%"}}>
        Updated Data:
            <JsonTree data={data}  
              onFullyUpdate={this.onFullyUpdate} 
              readOnly={(name, value, keyPath) => (keyPath[keyPath.length - 1] === 'id')}
            />
        </div>
      </div>
    );
  }
}

export default App;
