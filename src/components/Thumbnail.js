import React from 'react';

const Thumbnail = (props) => {
  return (
    <img src={props.src} alt={props.alt} width="206" height="305"/>
  )
}

export default Thumbnail