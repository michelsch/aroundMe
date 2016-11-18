import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGrid from './components/photoGrid.js';
import SearchBar from './components/searchBar.js';
import Title from './components/title.js';

//default user location, Mission District SF
const defaultLocation = {geometry:{location:{lat:37.7664, lng:-122.4172}}};
const defaultAddress = 'Mission District, San Francisco, CA, United States';

/* The primary React component, which contains the search bar and the photo grid */
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {photos:[], address:defaultAddress};
    }

    fetchPhotos(_location) {
        const API_KEY = '85fda50a266521a7da0ba89d80650f3f';
        const lat = _location.geometry.location.lat;
        const long = _location.geometry.location.lng;
        const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&lat=${lat}&lon=${long}&format=json&nojsoncallback=1`;

        fetch(API_ENDPOINT)
            .then(response => {
                return response.json()
                    .then((json) => {
                        const photos = json.photos.photo.map((photo) => {
                            return photo}
                        );
                        this.setState({photos});
                    });
            });
    }

    componentDidMount() {
        this.fetchPhotos(defaultLocation);
    }

    //will be called every time the state (in this case, the photos) is updated
    render() {
        return(
            <div>
                <SearchBar onSearchTermChange={address => this.geocode(address)}/>
                <Title address={this.state.address}/>
                <PhotoGrid photos={this.state.photos}/>
            </div>
        );
    }

    geocode(address) {
        const API_KEY = 'AIzaSyDLPwiWAjROXkOF18HtdbzqbHF5aWSEC7Q';
        const API_ENDPOINT = `http://maps.googleapis.com/maps/api/geocode/json?address=${address}?key=${API_KEY}`;
        fetch(API_ENDPOINT)
            .then(response => {
                return response.json()
                    .then((json) => {
                        if (json.status !== 'ZERO_RESULTS') {
                            //console.log(json.results[0]);
                            const obj = json.results[0];
                            this.setState({address:obj.formatted_address});
                            this.fetchPhotos(obj);
                        }
                    });
            });
    }
};

//render in index.html
ReactDOM.render(<App/>, document.querySelector('.container'));