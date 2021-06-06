import React from 'react';
import TableBody from './TableBody';
import '../css/table.css';

const Table = (props) => {
  const { data } = props;

  return (
    <div className="container">
      <div className="row">
      <div className="col-md-3"> <TableBody list={data}/></div>
        <div className="col-md-3"> <TableBody list={data}/></div>
        <div className="col-md-3"> <TableBody list={data}/></div>
        <div className="col-md-3"> <TableBody list={data}/></div>
      </div>
    </div>
  );
}

export default Table