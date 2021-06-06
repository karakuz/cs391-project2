import React, { Component } from 'react';
import Heading from './components/Heading';
import Table from './components/Table';
import * as data from './db.json';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Heading title="Movies" />
        <Table data={data.movieList} />
      </div>
    );
  }
}

export default Home;
