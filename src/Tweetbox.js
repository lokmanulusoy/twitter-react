import React,{useState} from 'react';
import './TweetBox.css';
import {Avatar,Button} from "@mui/material";
import db from './firebase';


function Tweetbox () {
  const[tweetMessage,setTweetMessage]=useState("");
  const[tweetImage,setTweetImage]=useState("");

  const sendTweet = e =>{
    e.preventDefault();
    db.collection('posts').add({
      displayName:'Lokman Ulusoy',
      username:'l.ulusoy',
      verified:true,
      text:tweetMessage,
      ımage:tweetImage,
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Aa69Ql7DM_DQ7_MzecAIasRt-e5B5l-VTA&usqp=CAU"

    })
  }

  return <div className='tweetBox'>
    <form>
        <div className='tweetBox__input'>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Aa69Ql7DM_DQ7_MzecAIasRt-e5B5l-VTA&usqp=CAU" />
        <input
        onChange={(e)=>setTweetMessage(e.target.value)}
        value={tweetMessage} 
        placeholder='Whats happening?'
        type="text"
        />
        </div>
        <input 
        onChange={(e)=>setTweetImage(e.target.value)}
        value={tweetImage}
        className='tweetBox__imageInput' 
        placeholder='Optional:Enter image Url' 
        type="text"/> 
        <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
    </form>
  </div>
}

export default Tweetbox;
