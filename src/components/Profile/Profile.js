import React from 'react'
import Axios from 'axios'
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import '../css/profile.css';

const Profile = () => {
  const [userData, setUserData] = React.useState({});
  const [userReservations, setUserReservations] = React.useState([]);
  const userID = localStorage.getItem("userID") || sessionStorage.getItem("userID");

  const getUserData = async () => {
    const userdata = await Axios({
      method: 'GET',
      url: `http://localhost:5000/users?id=${userID}`,
    });
    setUserData(userdata.data[0]);
    
  }

  const getReservations = async () => {
    const userReservations = await Axios({
      method: 'GET',
      url: `http://localhost:5000/reservations?email=${userData.email}&_sort=date,time`,
    });
    setUserReservations(userReservations.data);
  }

  React.useEffect(()=>{
    getUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  React.useEffect(()=>{
    getReservations();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userData]);
  
  
  return (
    <Container>
      <Card className="text-center profile-card">
        <Card.Header>Profile Info</Card.Header>
        <Card.Body>
          <Card.Text> Email: {userData.email}</Card.Text>
          <Card.Text> Name: {userData.name}</Card.Text>
          <Card.Text> Surname: {userData.surname}</Card.Text>
        </Card.Body>
      </Card>
      <h3>Reservations</h3>
      {(userReservations.length === 0) ? <p>You have no reservation</p> 
      : 
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Movie Name</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {userReservations.map((reservation,index) => {
              const date = reservation.date.split('-'); 
              return (
                <tr>
                  <td>{index+1}</td>
                  <td><a href={`/movie/${reservation.movieID}`}>{reservation.Title}</a></td>
                  <td>{`${date[2]}-${date[1]}-${date[0]}`}</td>
                  <td>{reservation.time}</td>
                </tr>
              )
            })}
            
          </tbody>
        </Table>
      </>
      }
    </Container>
  )
}

export default Profile
