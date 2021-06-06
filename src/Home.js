import React from 'react';
import Heading from './components/Heading';
import Table from './components/Table/Table';
import Axios from 'axios';
import './components/css/home.css';

const Home = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const fetchedData = await Axios({
      method: 'GET',
      url: 'http://localhost:5000/movieList',
    })
    setData(fetchedData.data);
  }

  React.useEffect(() => {
    getData();
  }, []);


  return (
    <div className="App">
      <Heading title="Movies" />
      <Table data={data} />
    </div>
  )
}

export default Home
