import React from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import '../css/moviepage.css'

const MoviePage = () => {
  const { movieID } = useParams();
  const [movieData, setmMovieData] = React.useState([]);

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
  
  return (
    <Container>
      <Row>
        <h3>{movieData.Title}</h3>
        <Image />
      </Row>

      Movie ID is : {movieID}
    </Container>
  )
}

export default MoviePage
