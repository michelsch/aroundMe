import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term:''}
    }
    render() {
        return (
            <div id="inputField">
                <input
                    id="autocomplete"
                    placeholder="Enter your address"
                    type="text"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}>
                </input>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;