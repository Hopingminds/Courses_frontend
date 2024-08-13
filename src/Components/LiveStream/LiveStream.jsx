import React, { useState, useEffect, useRef, useContext } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { Globalinfo } from '../../App';
import io from 'socket.io-client';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { BASE_URL } from '../../Api/api';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const socket = io('https://api.hopingminds.com', {
    secure: true,
    reconnectionAttempts: 5,
    withCredentials: true,
});

const LiveStream = () => {
    const [liveChat, setLiveChat] = useState([]);
    const [teacherChat, setTeacherChat] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [groupId, setGroupId] = useState('');
    const [user, setUser] = useState('');
    const [chatMode, setChatMode] = useState('live'); // 'live' or 'teacher'
    const [course, setCourse] = useState();
    const [instructorId, setInstructorId] = useState("");
    const [studentId, setStudentId] = useState();

    const chatboxRef = useRef(null);
    const params = useParams();
    const navigate = useNavigate();
    const { liveClassKey } = useContext(Globalinfo);

    const addMessage = (messageData, mode) => {
        const { msg, user, timestamp } = messageData;
        if (mode === 'live') {
            setLiveChat(prevMessages => [
                ...prevMessages,
                { message: msg, user, timestamp }
            ]);
        } else {
            setTeacherChat(prevMessages => [
                ...prevMessages,
                { message: msg, user, timestamp }
            ]);
        }
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    };

    const handleSendMessage = () => {
        if (userInput.trim() !== '') {
            if (chatMode === 'live') {
                socket.emit('chat message', { groupId, msg: userInput, user });
            } else if (chatMode === 'teacher') {
                if (studentId) {
                    socket.emit('private message', { 
                        msg: userInput, 
                        user, 
                        isTeacher: false, 
                        teacherId: instructorId, 
                        studentId 
                    });
                    console.log("sent to server private message")
                } else {
                    alert('Please select a student to send a private message.');
                }
            }
            setUserInput('');
        }
    };

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleTeacherChatClick = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/isteacherchatavailable?groupId=${groupId}`,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem(
                            "COURSES_USER_TOKEN"
                        )}`,
                    },
                }
            );
            if(res.data.success === true){
                setChatMode('teacher');
            }
            else{
                setChatMode('live');
                toast.error('Teacher chat is not available.');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchUserData = async (email) => {
        try {
            const res = await axios.get(`${BASE_URL}/user/${email}`);
            setUser(res?.data?.userDetails?.name);
            setStudentId(res?.data?.userDetails?._id);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchCourseData = async (email) => {
        try {
            const res = await axios.get(`${BASE_URL}/user/${email}/${params.slug}`);
            // console.log(res?.data?.data?.course?.instructor?._id)
            setCourse(res?.data?.data?.course);
            setInstructorId(res?.data?.data?.course?.instructor?._id);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (liveClassKey) {
            setGroupId(liveClassKey);
            socket.emit('join group', liveClassKey);

            socket.on('chat message', (messageData) => {
                addMessage(messageData, 'live');
            });

            socket.on('private message', (messageData) => {
                addMessage(messageData, 'teacher');
            });          

            return () => {
                socket.off('chat message');
                socket.off('private message');
            };
        }
        else{
            navigate('/')
        }

        if (instructorId) {
            socket.emit('join teacher chat', instructorId);
        }
    }, [liveClassKey, instructorId, studentId]);

    useEffect(() => {
        const token = localStorage.getItem('COURSES_USER_TOKEN');
        const decoded = jwtDecode(token);
        fetchUserData(decoded?.email);
        fetchCourseData(decoded?.email);
        
        if (studentId) {
            socket.emit('join student room', studentId);
        }
    }, [studentId]);


    return (
        <div className='flex w-full h-max'>
            <div className='w-[75%]'>
                <ReactHlsPlayer
                    src={`https://stream.hopingminds.com/hls/${liveClassKey}.m3u8`} // Assuming this URL is correct
                    autoPlay={true}
                    controls={true}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className='w-[25%] h-max'>
                <div id="chat-container" className="w-full h-full">
                    <div className="bg-white shadow-md rounded-lg max-w-lg w-full h-[506px] flex flex-col justify-between">
                        <div>
                            <div className="p-4 border-b bg-[#1DBF73] text-white flex justify-between items-center">
                                <p className={`text-lg font-semibold cursor-pointer ${chatMode === 'live' ? 'border-b-2 text-red-500' : ''}`} onClick={() => setChatMode('live')}>Live Chat</p>
                                <p className={`text-lg font-semibold cursor-pointer ${chatMode === 'teacher' ? 'border-b-2 text-red-500' : ''}`} onClick={handleTeacherChatClick}>Teacher Chat</p>
                            </div>
                            <div className='h-full'>
                                <div
                                    id="chatbox"
                                    ref={chatboxRef}
                                    className="p-4 overflow-y-auto h-full"
                                >
                                    {(chatMode === 'live' ? liveChat : teacherChat).map((msg, index) => (
                                        <div key={index} className={`mb-1 ${msg.user === user ? 'text-right' : ''}`}>
                                            <p className={`rounded-md px-2 inline-block ${msg.user === user ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                                                {msg.message}
                                            </p>
                                            <p className={`font-bold leading-none text-[9px] pt-[2px] ${msg.user === user ? 'text-blue-500' : 'text-gray-700'}`}>
                                                {msg.user} <span className="text-gray-400 ">({new Date(msg.timestamp).toLocaleTimeString()})</span>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t flex">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyUp={handleKeyUp}
                                placeholder="Type a message"
                                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-[#1DBF73] text-white px-4 py-2 rounded-r-md hover:bg-[#1dbf73b4] transition duration-300"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    );
}

export default LiveStream;