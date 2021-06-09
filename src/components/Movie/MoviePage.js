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

    console.log("Time: " + time);
    console.log("Date: " + date);

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

    const existence = await Axios({
      method: 'GET',
      url: 'http://localhost:5000/movieList',
    })
  }
  
  return (
    <Container>
      <Row>
        <h3>{movieData.Title}</h3>
        <Image src={movieData.img} className="movieImage"/>
        <span>Released: {movieData.Released}</span>
        <span>Duration: {movieData.Runtime}</span>
        <span>IMDB: {movieData.imdbRating}</span>
        <span>Genre: {movieData.Genre}</span>
        <p>Descripton: {movieData.Plot}</p>
      </Row>
      <Row>
        <h4>Reservation</h4>
        <span className="loginMessage">In order to make a reservation, <a href="/login">Login</a></span>

        <Form onSubmit={ e => reserve(e)}>
          <Row className="mb-3 reservationDiv">
            <Form.Group as={Row} controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" onChange={ e => setDate(e.target.value)} />
            </Form.Group>

            <Form.Group as={Row} controlId="formGridTime">
              <Form.Label>Time</Form.Label>

              {/* <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select> */}

              <select className="form-control" onChange={ e => setTime(e.target.value)}>
                <option selected="selected" value=""></option>
                {
                  times.map( time => {
                    return <option value={time}>{time}</option>
                  })
                }
              </select>
            </Form.Group>
          </Row>

          

          <Button variant="primary" type="submit" className="submitReservation">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  )
}

export default MoviePage
