import React from 'react';

class Heading extends React.Component {
    render() {    
        return <h1 className="text-center">{this.props.title}</h1>;
    }
}

export default Heading;