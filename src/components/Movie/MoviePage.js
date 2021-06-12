import React from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom'
import { Container, Row, Form, Button, Image } from 'react-bootstrap';
import '../css/moviepage.css';

const times = ["09:00", "12:00", "15:00", "18:00", "21:00", "24:00", "03:00"];

const MoviePage = () => {
  const { movieID } = useParams();
  const [movieData, setmMovieData] = React.useState([]);
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  const userID = localStorage.getItem("userID") || sessionStorage.getItem("userID");

  const getMovie = async () => {
    const fetchedData = await Axios({
      method: 'GET',
      url: `http://localhost:5000/movieList/${movieID}`,
    })
    setmMovieData(fetchedData.data);
  }

  React.useEffect(() => {
    getMovie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reserve = async (e) => {
    e.preventDefault();
    const today = new Date();
    const month = (today.getMonth() < 9) ? `0${today.getMonth()+1}` : `${today.getMonth()+1}`;
    const day = (today.getDate() < 10) ? `0${today.getDate()}` : `${today.getDate()}`;

    const formatted_today = `${today.getFullYear()}-${month}-${day}`;


    if(time === ""){
      alert("Select a time");
      return;
    }
    else if(date === ""){
      alert("Select a date");
      return;
    }

    if(new Date(date) <= new Date(formatted_today)){
      alert("Select a day other than today and before today")
      return;
    }

    const user = await Axios({
      method: 'GET',
      url: `http://localhost:5000/users?id=${userID}`,
    });

    const existence = await Axios({
      method: 'GET',
      url: `http://localhost:5000/reservations?email=${user.data[0].email}&&time=${time}&&date=${date}`,
    });


    if(existence.data.length !== 0){
      const splitDate = date.split('-');
      alert(`You have already reserved a seat for a movie on ${splitDate[2]}-${splitDate[1]}-${splitDate[0]} at ${time}. Check profile for details`);
      return;
    }

    const res = await Axios.post(
      `http://localhost:5000/reservations`,
      {
        email: user.data[0].email,
        Title: movieData.Title,
        movieID: movieData.id,
        date: date,
        time: time
      }
    );
    if(res.status === 201){
      alert("Reservation has been made");
      window.location.href = `/`;
    }
    else
      alert("Server error");
  }
  
  return (
    <Container>
      <Row>
        <h3>{movieData.Title}</h3>
        <Image src={movieData.img} className="movieImage"/>
      </Row>
      <Row className="movie-details">
        <span>Released: {movieData.Released}</span>
        <span>Duration: {movieData.Runtime}</span>
        <span>IMDB: {movieData.imdbRating}</span>
        <span>Genre: {movieData.Genre}</span>
        <span>Descripton: {movieData.Plot}</span>
      </Row>
      <Row>
        <h4>Reservation</h4>
        {
          (userID === null) ? 
            <span className="loginMessage">In order to make a reservation, <a href="/login">Login</a></span>
          : 
          <>
            <Form onSubmit={ e => reserve(e)}>
              <Row className="mb-3 reservationDiv">
                <Form.Group as={Row} controlId="formGridDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" onChange={ e => setDate(e.target.value)} />
                </Form.Group>

                <Form.Group as={Row} controlId="formGridTime">
                  <Form.Label>Time</Form.Label>

                  <Form.Control as="select" className="form-control" onChange={ e => setTime(e.target.value)} defaultValue="">
                    <option selected="selected" value=""></option>
                    {
                      times.map( time => {
                        return <option value={time}>{time}</option>
                      })
                    }
                  </Form.Control>
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit" className="submitReservation">
                Submit
              </Button>
            </Form>
          </>
        }
      </Row>
    </Container>
  )
}

export default MoviePage
