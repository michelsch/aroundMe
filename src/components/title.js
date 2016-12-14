import React from 'react';

/*This component is a title including the address corresponding to imgs shown*/
class Title extends React.Component {

    render() {
        const titleString = `Around ${this.props.address}`;
        console.log(titleString);
        return <div className="title"> {titleString}</div>;
    }
}

export default Title;