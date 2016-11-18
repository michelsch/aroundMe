import React from 'react';
import LazyLoad from 'react-lazy-load';

/*This component returns a lazily loaded single image*/
const PhotoCell = (props) => {
    const photo = props.photo;
    const imgUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    return (
        <LazyLoad className="photoCell">
            <img className="lazy fromURL" src={imgUrl}></img>
        </LazyLoad>
    );
};

export default PhotoCell;