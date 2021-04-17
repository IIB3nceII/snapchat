import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Preview.scss";
import { resetCameraImage, selectCameraImage } from "./store/cameraSlice";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import CloseIcon from "@material-ui/icons/Close";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import CreateIcon from "@material-ui/icons/Create";
import NoteIcon from "@material-ui/icons/Note";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CropIcon from "@material-ui/icons/Crop";
import TimerIcon from "@material-ui/icons/Timer";
import SendIcon from "@material-ui/icons/Send";
import { db, storage } from "./firebase";
import firebase from "firebase";

const Preview = () => {
  const cameraImage = useSelector(selectCameraImage);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cameraImage === "") {
      history.replace("/");
    }
  }, [cameraImage, history]);

  const closePreview = () => {
    dispatch(resetCameraImage());
    history.replace("/");
  };

  const sendPost = () => {
    const id = uuid();
    const uploadTask = storage
      .ref(`post/${id}`)
      .putString(cameraImage, "data_url");

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.log(error);
      },
      () => {
        // on complete function
        storage
          .ref("post")
          .child(id)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              imageRul: url,
              usernames: "Igen",
              read: false,
              // profilePic
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            history.replace("/chats");
          });
      }
    );
  };

  return (
    <div className="preview">
      <CloseIcon className="preview_close" onClick={closePreview} />
      <div className="preview_toolbarRight">
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>
      <img src={cameraImage} alt="" />
      <div onClick={sendPost} className="preview_footer">
        <h2>Send Now</h2>
        <SendIcon className="preview_sendIcon" fontSize="small" />
      </div>
    </div>
  );
};

export default Preview;
