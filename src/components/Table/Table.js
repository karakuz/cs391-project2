import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import '../css/table.css';

const Table = (props) => {
  const { data } = props;

  return (
    <table>
      <TableHeader />
      <TableBody list={data}/>
    </table>
  );
}

export default Table