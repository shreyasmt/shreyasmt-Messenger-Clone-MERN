import React, {forwardRef} from 'react'
import { Card, CardContent, Typography} from '@material-ui/core';
import './Message.css';
const Message = forwardRef((props, ref) => {
    const isUser = props.username === props.message.username;
    
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent >
                    <Typography align="left" className="chat__name" color="textSecondary">{!isUser && `${props.message.username || `Unknown User`} `}</Typography>
                    <Typography  color="textSecondary" variant="h5" component="h2">
                    {props.message.message}
                    </Typography>
                    
                </CardContent>
             </Card>
            
      </div>      
        
    )
})

export default Message
