import React, { useState, useCallback, useRef } from "react";
import "./WebcamCapture.scss";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { setCameraImage } from "./store/cameraSlice";
import { useHistory } from "react-router-dom";

import { useSelector } from 'react-redux';
import { selectCameraImage } from './store/cameraSlice';

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

function WebcamCapture() {
  const image =useSelector(selectCameraImage);
  const webcamRef = useRef<any>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const capture = useCallback(() => {
    if (webcamRef && webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc, typeof(imageSrc));
      dispatch(setCameraImage(imageSrc));
      history.push("/preview");
    }
  }, [webcamRef]);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        width={videoConstraints.width}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <RadioButtonUncheckedIcon
        className="webcamCapture_button"
        onClick={capture}
        fontSize="large"
      />
      <div style={{marginLeft:"70%"}}>
      </div>
    </div>
  );
}

export default WebcamCapture;
