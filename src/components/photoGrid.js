import React from 'react'
import PhotoCell from './photoCell.js'

/* This component returns a grid of pictures, which are PhotoCell components declared in
photoCell.js. React handles the rendering for multiple components if we pass them as an array, as
we do with {photos}*/
const PhotoGrid = (props) => {
    //make sure we don't have an empty array
    if (!props.photos) {
        return <div> </div>
    };
    //for each photo object from the JSON, return a React PhotoCell component
    const photos = props.photos.map(photo => {
        return <PhotoCell photo={photo} key={photo.id}/>
    });
    return (
        <div className="photoGrid">{photos}</div>
    );
};

export default PhotoGrid;