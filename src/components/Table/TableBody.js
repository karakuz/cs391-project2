import React from 'react';
import Thumbnail from '../Thumbnail';
import images from '../../images/index';

const TableBody = (props) => {
  const list = props.list;
  
  return (
    <tbody>
      {list.map((item, index) => {
        return (
          <div className="card" style={{width: "18rem"}} key={`movie-${index}`}>
            <div className="card-body">
              <td><Thumbnail src={images[item.img]} alt={item.alt} /></td>
              <h5 className="card-title">{item.Title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{item.Year} | {item.Genre} | {item.Language} | {item.Runtime}</h6>
              <p className="card-text">{item.Plot}</p>
              <a href="#" class="btn btn-primary">Goto movie</a>
            </div>
          </div>
        );
      })}
    </tbody>);
}

export default TableBody