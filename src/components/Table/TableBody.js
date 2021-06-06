import React from 'react';
import Thumbnail from '../Thumbnail';
import images from '../../images/index';

const TableBody = (props) => {
  const list = props.list;
  
  return (
    <tbody>
      {list.map((item, index) => {
        return (
          <tr key={`movie-${index}`}>
            <td><Thumbnail src={images[item.img]} alt={item.alt} /></td>
            <td>{item.Title}</td>
            <td>{item.Year}</td>
            <td>{item.Released}</td>
            <td>{item.Runtime}</td>
            <td>{item.Genre}</td>
            <td>{item.Director}</td>
            <td>{item.Plot}</td>
            <td>{item.Language}</td>
            <td>{item.Metascore}</td>
            <td>{item.imdbRating}</td>
            <td>{item.totalSeasons}</td>
          </tr>
        );
      })}
    </tbody>);
}

export default TableBody