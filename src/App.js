import React, { Component } from 'react';
import {Button , Card} from 'antd'
import './App.css';
import SongList from './SongList'
import SearchForm from './SearchForm'

class App extends Component {
  constructor(){
    super();
    this.state = {
      songs : []
    }
  }
  setSongData = (songs) => {  
    console.log(songs)
    this.setState({songs:songs})
  }
  render() {
    return (
      <div className="App" style={{padding:30}}>
       <Card>
        <SearchForm setSongData={this.setSongData}/>
        <SongList songs={this.state.songs}/>
       </Card>
      </div>
    );
  }
}

export default App;