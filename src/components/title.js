import React from 'react';

class Title extends React.Component {

    render() {
        const titleString = `Around ${this.props.address}`;
        return <div className="title"> {titleString}</div>;
    }
}

export default Title;