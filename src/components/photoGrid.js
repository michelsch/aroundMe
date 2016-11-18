import React from 'react'
import PhotoCell from './photoCell.js'

const PhotoGrid = (props) => {
    if (!props.photos) {
        return <div> </div>
    };
    const photos = props.photos.map((photo)=> {
        return <PhotoCell photo={photo} key={photo.id}/>
    });
    return (
        <div className="photoGrid">{photos}</div>
    );
};

export default PhotoGrid;