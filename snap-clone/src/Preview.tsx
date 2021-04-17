import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Preview.scss";
import { resetCameraImage, selectCameraImage } from './store/cameraSlice';
import { useHistory } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';

const Preview =()=> {
    const cameraImage =useSelector(selectCameraImage);
    const history=useHistory();
    const dispatch=useDispatch();

    useEffect(()=>{
        if(cameraImage===""){
            history.replace('/');
        }
    },[cameraImage, history])

    const closePreview =()=>{
        dispatch(resetCameraImage());
        history.replace('/');
    }

    return (
        <div className="preview">
            <CloseIcon className="preview_close" onClick={closePreview} />
           <img src={cameraImage} alt="" />
        </div>
    )
}

export default Preview;