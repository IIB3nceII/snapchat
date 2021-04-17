import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Chats.scss";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { db } from "./firebase";

interface IPosts{
    id:string;
    data:any;
}

function Chats() {
  const [posts, setPosts] = useState([] as IPosts[]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot: any) =>
        setPosts(
          snapshot.docs.map((doc: any) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="chats">
      <div className="chats_header">
        <Avatar className="chats_avatar" />
        <div className="chats_search">
          <SearchIcon />
          <input placeholder="Friends" type="text" />
        </div>
        <ChatBubbleIcon className="chats_chatIcon" />
      </div>

      <div className="chats_posts">
          {posts.map(({id, data: {profilePic, username, timestamp,imageUrl,read},}))=>(

          ))}
      </div>
    </div>
  );
}

export default Chats;
