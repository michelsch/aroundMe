import React from 'react';

const PhotoCell = (props) => {
    const photo = props.photo;
    const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    return (
        <div className="photoCell">
            <img className="fromURL" src={url}></img>
        </div>
    );
};

export default PhotoCell;