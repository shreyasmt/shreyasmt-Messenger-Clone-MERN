import React, { useState, useEffect } from 'react';
import {FormControl, InputClassKey, Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import axios from './axios'
import Pusher from 'pusher-js'

const pusher = new Pusher('162c2b46604a8f0e412e', {
  cluster: 'ap1'
});

function App() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState([]);
  const [username, setUser] = useState('');

  


const sync = async() => {
  await axios.get('/retrive/conversation')
  .then((res)=>{
    console.log(res.data);
    setMessage(res.data)
  })
}

useEffect(()=>{
  var channel = pusher.subscribe('messages');
    channel.bind('newMessage', function(data) {
      sync()
    });
},[username])

useEffect(()=>{
  sync()
},[])
  
useEffect(() =>{
    setUser(prompt('Please enter your message'));
  }, []) 

const sendmessage = (event) =>{
  // logic to send the message
  event.preventDefault();
  
  axios.post('/save/messages',{
    username: username,
    message: input,
    timestamp: Date.now()
  })
  
  setInput('');
}

  return (
    <div className="App">
      <img src="https://en.facebookbrand.com/wp-content/uploads/2018/09/header-e1538151782912.png?w=100&h=100" alt="the image is loading" />
      <h2>Welcome {username}</h2>
      
      <form  className="app__form">
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder='Enter a message...' type="text" value={input} onChange={event =>setInput(event.target.value)}/>
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" onClick={sendmessage} type="submit">
          <SendIcon/>
        </IconButton>

      </FormControl>
        
      </form>
      
      <FlipMove>
      {
        message.map(message=>(
         
          <Message key={message._id} username={username} message={message}/>
          
        ))

      }
      </FlipMove>
     
    </div>
  );
  
}

export default App;
