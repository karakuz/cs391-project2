import React from 'react';
import '../css/table.css'
import {Row, Col, Card} from 'react-bootstrap';

const TableBody = (props) => {
  const list = props.list;
  
  return (
    <Row>
      {list.map((item) => {
        return (
          <Col sm={12} md={6} lg={4} xl={3} className="d-flex align-items-stretch movieCardDiv">
            <Card key={item.id}>
              <a href={`/movie/${item.id}`}>
                <Card.Img variant="top" src={`${item.img}`} alt={item.alt} />
              </a>
              <Card.Body className="d-flex flex-column">
                <a href={`/movie/${item.id}`}>
                  <Card.Title>{item.Title}</Card.Title>
                </a>
                <Card.Subtitle className="mb-2 text-muted">{item.Year} | {item.Genre} | {item.Language} | {item.Runtime}</Card.Subtitle>
                <Card.Text>{item.Plot}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default TableBody