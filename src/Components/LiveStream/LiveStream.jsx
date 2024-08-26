import React, { useState, useEffect, useRef } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import io from 'socket.io-client';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { BASE_URL } from '../../Api/api';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import LiveVideoPlayer from './LiveVideoPlayer';

const socket = io('http://localhost:3009', {
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
    const [students, setStudents] = useState([]); // State for students list
    
    const liveClassKey=localStorage.getItem('sk')
    const chatboxRef = useRef(null);
    const navigate = useNavigate();
    const params = useParams();

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

    const handleLeaveGroup = () => {
        if (groupId && studentId) {
            socket.emit('leave group', { groupId, studentId });
        }
    }

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            // Perform your cleanup here
            socket.emit('leave group', { groupId, studentId });
            
            // Optionally, you can show a confirmation dialog to the user
            event.preventDefault();
            event.returnValue = ''; // This line is necessary for the dialog to appear
        };
    
        if (liveClassKey) {
            setGroupId(liveClassKey);
            // Join group with studentId
            if (studentId) {
                socket.emit('join group', { groupId, studentId });
            }

            socket.on('chat message', (messageData) => {
                addMessage(messageData, 'live');
            });

            socket.on('private message', (messageData) => {
                addMessage(messageData, 'teacher');
            });          

            socket.on('group users', (users) => {
                // Set students with the list of users in the group
                setStudents(users);
            });

            socket.on('student joined', (student) => {
                setStudents(prevStudents => [...prevStudents, student]);
            });

            socket.on('student left', ({ studentId, name }) => {
                setStudents(prevStudents => prevStudents.filter(student => student.studentId !== studentId));
                if (name !== 'Unknown') {
                    toast.success(`${name} has left the group`);
                }
            });
    
            // Add event listener for beforeunload
            window.addEventListener('beforeunload', handleBeforeUnload);
    
            return () => {
                socket.off('chat message');
                socket.off('private message');
                socket.off('student joined');
                socket.off('student left');
                // Clean up the beforeunload event listener
                window.removeEventListener('beforeunload', handleBeforeUnload);
            };
        }
        else{
            navigate('/')
        }

        if (instructorId) {
            socket.emit('join teacher chat', instructorId);
        }
    }, [liveClassKey, instructorId, studentId, groupId]);

    useEffect(() => {
        const token = localStorage.getItem('COURSES_USER_TOKEN');
        const decoded = jwtDecode(token);
        fetchUserData(decoded?.email);
        fetchCourseData(decoded?.email);
        
        if (studentId) {
            socket.emit('join student room', studentId);
        }

        return () => {
            handleLeaveGroup(); // Ensure the user leaves the group on token change
        }

    }, [studentId]);


    return (
        <div className='flex w-full h-max'>
            <div className='w-[75%]'>
                <LiveVideoPlayer liveClassKey={liveClassKey} />
            </div>
            <div className='w-[25%] h-max'>
                <div id="chat-container" className="w-full h-full">
                    <div className="bg-white shadow-md rounded-lg max-w-lg w-full h-[506px] flex flex-col justify-between">
                        <div className='h-[350px]'>
                            <div className="p-4 border-b bg-[#1DBF73] text-white flex justify-between items-center">
                                <p className={`text-lg font-semibold cursor-pointer ${chatMode === 'live' ? 'border-b-2 text-red-500' : ''}`} onClick={() => setChatMode('live')}>Live Chat <span className='text-[10px]'>({students.length} Students)</span></p>
                                <p className={`text-lg font-semibold cursor-pointer ${chatMode === 'teacher' ? 'border-b-2 text-red-500' : ''}`} onClick={handleTeacherChatClick}>Teacher Chat</p>
                            </div>
                            <div className='h-[290px]'>
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
                        <div className="p-4 border-t bg-gray-100">
                            <label htmlFor="students-dropdown" className="block text-sm font-semibold text-gray-700 mb-2">Students:</label>
                            <select id="students-dropdown" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]">
                                {students.map(student => (
                                    <option key={student._id} value={student._id}>
                                        {student.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    );
}

export default LiveStream;
