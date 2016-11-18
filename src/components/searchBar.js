import React from 'react';

/*This component is a search bar, with google autocomplete for addresses*/
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
                    placeholder="Enter an address to explore..."
                    type="text"
                    value={this.state.term}
                    //when input field changes, onInputChange() is called
                    onChange={event => this.onInputChange(event.target.value)}>
                </input>
            </div>
        );
    }

    //change state to current input, perform onSearchTerm in index.js, which calls geolocate()
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;