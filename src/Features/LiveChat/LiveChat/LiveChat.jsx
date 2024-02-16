/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import avatar1 from "../../../assets/user-circle.svg"
import call from "../../../assets/phone-outgoing.svg"
import send from "../../../assets/send.svg"
import plus from "../../../assets/plus.svg"
import { io } from 'socket.io-client'
import { RxAvatar } from "react-icons/rx";
import useTheme from "../../../Providers/ThemeContext";


const LiveChat = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user:details')));
    const [conversations, setConversations] = useState([]);
    const [message, setMessage] = useState('')
    const [users, setUsers] = useState([]);
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState({});
    const { themeMode, darkTheme, lightTheme } = useTheme()
    // console.log(themeMode)
    // console.log(messages, 'messages');

    useEffect(() => {
        setSocket(io('http://localhost:8080'))
    }, [])


    useEffect(() => {
        socket?.emit('addUser', user?.id)
        socket?.on('getUsers', users => {
            // console.log('activeUsers :>>', users);
        })
        socket?.on('getMessage', (data) => {
            // console.log('data :>>', data);
            setMessages(prev => ({
                ...prev,
                messages: [
                    ...prev.messages,
                    { user: data.user, message: data.message }
                ]
            }));
        });
    }, [socket, messages, user?.id]);


    // fetch conversations
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user:details'))
        const fetchConversations = async () => {
            const res = await fetch(`http://localhost:8000/api/conversations/${loggedInUser.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const resData = await res.json()
            setConversations(resData)
        };

        fetchConversations();

    }, []);
    // fetch users
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch(`https://property-hunter-server-roan.vercel.app/api/v1/users/${user?.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const resData = await res.json()
            setUsers(resData)
        }
        fetchUsers()
    }, [user?.id])

    const fetchMessages = async (conversationId, receiver) => {
        const res = await fetch(`http://localhost:8000/api/message/${conversationId}?senderId = ${user?.id}&& receiverId=${receiver?.receiverId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const resData = await res.json()
        // console.log('resData :>>', resData);
        setMessages({ messages: resData, receiver, conversationId })
    }


    const sendMessage = async (e) => {
        socket?.emit('sendMessage', {
            senderId: user?.id,
            receiverId: messages?.receiver?.receiverId,
            message,
            conversationId: messages?.conversationId,
        });

        // Send the message to the server
        const res = await fetch(`http://localhost:8000/api/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                conversationId: messages?.conversationId,
                senderId: user?.id,
                message,
                receiverId: messages?.receiver?.receiverId,
            }),
        });

        // After sending the message, fetch the updated messages
        fetchMessages(messages?.conversationId, messages?.receiver);

        // Clear the input field
        setMessage('');
    };



    return (
        <div className="w-full flex bg-white dark:bg-primary-dark overflow-x-hidden">
            {/* all users on the right */}
            <div className="w-[22%] border-2 dark:bg-primary-dark dark:border-primary-dark border-white h-screen  overflow-y-scroll">
                <div className="flex justify-center items-center my-8">
                    <img className="h-14 w-14 text-white" src={user?.image ? user.image : avatar1} alt="User Avatar" />
                    <div className="text-black mr-8">
                        <h3 className="font-bold">{user?.name}</h3>
                        <p className="font-bold dark:text-[#8f9396]">My Account</p>
                    </div>
                </div>
                {
                    themeMode === 'dark' ? "" : <hr />
                }

                {/* conversations div */}
                <div className="ml-5 font-bold text-black text-2xl dark:text-[#8f9396] ">Messages</div>
                <div>
                    {
                        conversations.length > 0 ?
                            conversations.map(({ conversationId, user }, i) => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <div key={i} className="hover:bg-gray-300 dark:hover:bg-[#313233]">
                                        <div className="flex cursor-pointer gap-4 ml-5 text-sm items-center mt-2 py-4 " onClick={() =>
                                            fetchMessages(conversationId, user)
                                        }>
                                            <img className="h-10 w-10 text-white" src={user?.image ? user.image : avatar1} alt="User Avatar" />
                                            <div className=" font-medium mr-8">
                                                <h3 className="dark:text-[#f0f8ff] text-black">{user?.name}</h3>
                                                <p className="dark:text-[#8f9396] text-gray-500">{user?.email}</p>
                                            </div>

                                        </div>
                                        <hr />
                                    </div>
                                );
                            }) : <div className="text-center text-lg font-semibold text-black mt-24 dark:text-[#8f9396]"> No Conversation</div>

                    }
                </div>


            </div>
            <div className="w-[58%] border-2 dark:bg-primary-dark border-white dark:border-primary-dark flex flex-col items-center bg-white h-screen">
                {
                    messages?.receiver?.fullName &&
                    <div className="border-2 w-[75%] bg-gray-300 dark:border-primary-dark flex  items-center mt-6  rounded-full px-14">
                        <div>
                            <img className="h-16 w-16 text-white" src={user?.image ? user.image : avatar1} alt="User Avatar" />
                        </div>
                        <div className="ml-6 mr-auto">
                            <h3 className="text-lg font-semibold  text-black">{messages?.receiver?.name}</h3>
                            <p className="text-sm font-light text-black">{messages?.receiver?.email}</p>
                        </div>
                        <div >
                            <img src={call} alt="" />
                        </div>
                    </div>
                }
                {/* main live chat section where chats will be shown */}
                <div className="  w-full dark:bg-primary-dark  overflow-y-scroll shadow-sm ">
                    <div className="h-[800px] px-10 py-14 text-black text-xs">

                        {
                            messages?.messages?.length > 0 ?
                                messages.messages.map(({ message, user: { id } = {} }) => {
                                    return (
                                        <div className={` max-w-[40%] mb-6 rounded-b-xl p-4 ${id === user?.id ? 'bg-[#0084ff] text-[#e4e6cd] rounded-tl-xl ml-auto' : 'dark:bg-[#303030] text-black bg-[#f0f0f0] dark:text-[#e4e6cd] rounded-tr-xl'}    dark:bg-[#242526] rounded-b-xl rounded-tr-xl p-2`}>
                                            {message}
                                        </div>
                                    )


                                }
                                ) : <div className=" bg-gray-600 ml-auto rounded-b-xl rounded-xl p-2 text-center"> No message</div>
                        }
                    </div>
                </div>
                {/* send message section */}
                {
                    messages?.receiver?.fullName &&
                    <div className="w-full flex justify-between dark:bg-[#242526] items-center shadow-2xl py-5 ">
                        <input
                            placeholder="Type a message...."
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault(); // Prevents adding a new line
                                    sendMessage();
                                }
                            }}
                            className='w-full p-2 rounded-box bg-gray-200 focus:ring-0 focus-border-0 text-black dark:text-white dark:bg-[#3a3b3c]  shadow-2xl'
                        />
                        <div className="cursor-pointer p-2" onClick={() => sendMessage()} disabled={!message}>
                            <img src={send} alt="" />
                        </div>
                        <div className="cursor-pointer p-2">
                            <img className="rounded-box border-2 border-black cursor pointer" src={plus} alt="" />
                        </div>
                    </div>
                }

            </div>
            <div className="w-[20%] border-2 dark:bg-primary-dark border-white dark:border-primary-dark h-screen  overflow-y-scroll">
                <h3 className="text-black text-center font-bold text-xl mt-5 dark:text-[#8f9396]">People</h3>
                <div>
                    {
                        users.length > 0 ?
                            users.map(({ userId, user }) => {
                                return (
                                    <div className="hover:bg-gray-300">
                                        <div className="flex cursor-pointer gap-4 ml-5 text-sm items-center mt-2 py-4 " onClick={() =>
                                            fetchMessages('new', user)
                                        }>
                                            <img className="w-10" src={avatar1} alt="User Avatar" />
                                            <div className="text-black font-medium mr-8">
                                                <h3 className="dark:text-[#f0f8ff] text-black">{user?.name}</h3>
                                                <p className="dark:text-[#8f9396] text-gray-500">{user?.email}</p>

                                            </div>

                                        </div>
                                        <hr />

                                    </div>

                                );
                            }) : <div className="text-center text-lg font-semibold text-black mt-24 dark:text-[#8f9396]"> No Conversation</div>

                    }

                </div>
            </div>


        </div>
    );
};

export default LiveChat;