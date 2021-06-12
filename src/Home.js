import React from 'react';
import Heading from './components/Heading';
import Table from './components/Table/Table';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import './components/css/home.css';
import "../node_modules/bootswatch/dist/solar/bootstrap.min.css";

const Home = () => {
  const [data, setData] = React.useState([]);
  /* const [userID, setUserID] = React.useState("");
  const refBoolean = React.useRef(true);
  const history = useHistory();

  const user_id = localStorage.getItem("userID") || sessionStorage.getItem("userID");
  if(user_id !== null)
    setUserID(user_id); */

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

  /* React.useEffect(() => {
    if(refBoolean.current){
      history.push("/");
      refBoolean.current = false;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userID]); */


  return (
    <div className="App">
      <Heading title="Movies" />
      <Table data={data} />
    </div>
  )
}

export default Home
