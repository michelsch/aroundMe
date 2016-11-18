import React from 'react';
import LazyLoad from 'react-lazy-load';

const PhotoCell = (props) => {
    const photo = props.photo;
    const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    return (
        <LazyLoad className="photoCell">
            <img className="lazy fromURL" src={url}></img>
        </LazyLoad>
    );
};

export default PhotoCell;