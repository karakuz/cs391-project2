import React from 'react';
import TableBody from './TableBody';
import '../css/table.css';
import { Container } from 'react-bootstrap';

const Table = (props) => {
  const { data } = props;

  return (
    <Container>
      <TableBody list={data}/>
    </Container>
  );
}

export default Table