import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utilis/chatSlice';
import {generateRandomName, randomMessage} from "../utilis/helper";

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);
    const [liveMsg,setLiveMsg] = useState();

    useEffect(() => {
        const i = setInterval(() => {

            dispatch(addMessage({
                name:generateRandomName(),
                message : randomMessage(20),
            }))
        },2000);
        return () => clearInterval(i);
    },[]);

  return (
    <>
    <div className='ml-2 h-[600px] w-auto p-2 bg-slate-100 rounded-lg border border-black overflow-y-hidden overflow-y-scroll flex flex-col-reverse'>
      <div>
        {chatMessages.map(c => 
            <ChatMessage name={c.name} message={c.message} />
        )
        }
      </div>
    </div>
    <form className='w-auto p-2 ml-2 border border-black flex' onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage({
            name:"Shraddha Mistry",
            message: liveMsg,
        }))
        setLiveMsg("");
    }}>
        <input className='px-2 w-96' type="text" value={liveMsg} 
        onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button className='px-2 mx-2 bg-green-100'
        
        >Send</button>
    </form>
    </>
  )
}

export default LiveChat
