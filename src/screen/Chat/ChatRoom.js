import React, {useState} from 'react'
import messages from './dummyMessage.json'
import {useNavigate, Link} from 'react-router-dom'

function ChatRoom() {
    const [sender, setSender] = useState('1');
    const [receiver, setReceiver] = useState('3');
    const [currMessage, setCurrMessage] = useState("");
    const [thread, setThread] = useState(messages);
    const navigate = useNavigate();
    const senderName = "Alice"
    const receiverName = "Bob"

    const getUserName = (id) => {
        if(id == '1'){
            return 'Alice';
        }
        else{
            return 'Bob';
        }
    }
    // predefined style to differentiate message 
    const receiverBubble = "self-start bg-emerald-400";
    const senderBubble = "self-end bg-sky-400";

    // placeholder time before getting timestamps from backend
    // const timeElapsed = Date.now();
    // const today = new Date(timeElapsed);

    // render message bubble
    const MessageBubble = (message) =>{
        return (
            <div className={"flex flex-col py-2 px-4 my-4 rounded-xl max-w-[60%] " + (message.senderId == sender ? senderBubble : receiverBubble)} >
                <div className="msgContent">{message.messageContent}</div>
                <div className={"text-xs " + (message.senderId == sender ? senderBubble : receiverBubble)}>{new Date(parseInt(message.timestamp)).toUTCString()}</div>
            </div>
        )
    }

    const handleChange = (e) => {
        setCurrMessage(e.target.value);
    }
    const handleClickSend = () =>{
        console.log('sent message to your partner')
        const newMsg = {messageId: 10, senderId:sender, receiverId:receiver, messageContent: currMessage, timestamp: Date.now()};
        let newThread = [...thread, newMsg];
        setThread(newThread)
    }
    const handleClickBook = () => {
        navigate("/book-trip")
    }

    return ( 
    <div className="container w-full p-5 bg-slate-300 flex flex-col">
        <div className="chat_container container w-full p-5 bg-slate-300 flex flex-col max-h-[75vh] overflow-scroll">
            {thread.map((eachMsg) => {
                return (MessageBubble(eachMsg))
            })}
            
        </div>
        <div className='w-full p-5'>
            <textarea 
                id="message" 
                rows="1" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Your message..."
                onChange={handleChange}></textarea>
            <div className='w-10 rounded-lg px-10 flex justify-center items-center ml-4 bg-primary text-white hover:bg-secondary' onClick={handleClickSend}>send</div>
        </div>
        <Link to="/booking">
            <div className="flex w-full justify-center items-center h-12 rounded-lg mt-2 bg-primary text-white hover:bg-secondary">
                Book a trip
            </div>
        </Link>
    </div>
    );
}




export default ChatRoom;