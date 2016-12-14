import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGrid from './components/photoGrid.js';
import SearchBar from './components/searchBar.js';
import Title from './components/title.js';

//default user location and address, Mission District SF
const defaultLocation = {geometry:{location:{lat:37.7664, lng:-122.4172}}};
const defaultAddress = 'Mission District, San Francisco, CA, United States';

/* The primary React component, which contains the search bar and the photo grid */
class App extends React.Component {

    constructor(props) {
        super(props);
        //initialize the empty state (dynamic components)
        this.state = {photos:[], address:defaultAddress};
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

    //fetch photos from flickr in JSON format using an API key and a google geolocation
    //use _location param name to avoid interference with window.location object
    fetchPhotos(_location) {
        const lat = _location.geometry.location.lat;
        const lng = _location.geometry.location.lng;
        const API_KEY = '85fda50a266521a7da0ba89d80650f3f';
        const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}` +
        `&lat=${lat}&lon=${lng}&format=json&nojsoncallback=1`;

        //fetch response from api endpoint, then the json. two callbacks needed
        fetch(API_ENDPOINT)
            .then(response => {
                return response.json()
                    .then(json => {
                        //return array of photo object
                        const photos = json.photos.photo.map(photo => {
                            return photo;
                        });
                        //change state
                        this.setState({photos});
                    });
            });
    }

    //fetch a geolocation given a correctly formatted address string
    geocode(address) {
        const API_KEY = 'AIzaSyDLPwiWAjROXkOF18HtdbzqbHF5aWSEC7Q';
        const API_ENDPOINT = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;
        //console.log(API_ENDPOINT);
        fetch(API_ENDPOINT)
            .then(response => {
                return response.json()
                    .then((json) => {
                        //check for address match and properly defined first match
                        if (json.status !== 'ZERO_RESULTS' && json.results[0]) {
                            //console.log(json.results[0]);
                            //take first match
                            const obj = json.results[0];
                            console.log(obj.formatted_address);
                            this.setState({address:obj.formatted_address});
                            this.fetchPhotos(obj);
                        }
                    });
            });
    }
};

//render in index.html
ReactDOM.render(<App/>, document.querySelector('.container'));