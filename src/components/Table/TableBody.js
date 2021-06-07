import React from 'react';
/*import Thumbnail from '../Thumbnail';*/
import images from '../../images/index';
import {Row, Col, Card, Button} from 'react-bootstrap';

const TableBody = (props) => {
  const list = props.list;
  
  return (
    <Row>
      {list.map((item, index) => {
        return (
          <Col>
          <Card style={{width: "18rem"}} key={`movie-${index}`}>
           <Card.Img variant="top" src={images[item.img]} alt={item.alt} />
            <Card.Body>
              <Card.Title>{item.Title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{item.Year} | {item.Genre} | {item.Language} | {item.Runtime}</Card.Subtitle>
              <Card.Text>{item.Plot}</Card.Text>
              <Button variant="primary">Goto movie</Button>
            </Card.Body>
          </Card>
          </Col>
        );
      })}
    </Row>);
}

export default TableBody