import React from 'react';

class Thumbnail extends React.Component {
    render() {
        return <img src={this.props.src} alt={this.props.alt} width="206" height="305"/>
    }
}

export default Thumbnail;