import React from 'react';
import { useSelector } from 'react-redux';
import "./Preview.scss";
import { selectCameraImage } from './store/cameraSlice';

function Preview() {
    const cameraImage=useSelector(selectCameraImage);

    return (
        <div className="preview">
            <img src={cameraImage} alt=""/>
        </div>
    )
}

export default Preview;