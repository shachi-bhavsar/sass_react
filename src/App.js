import React, { Component } from 'react';
import {JsonTree} from 'react-editable-json-tree'
import data from './data.json'
require('./App.sass')

var fs = require("fs")
var writeJsonFile = require('write-json-file')
var jsonfile = require('jsonfile')


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
        //first approach
        fs.writeFile(file, updatedData, function(error) {
          if (error) {
            console.error("write error:  " + error.message);
          } else {
            console.log("Successful Write to ");
          }
        });
        //second approach
        writeJsonFile(file, updatedData).then(() => {
          console.log('done');
        });
        //third approach
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
