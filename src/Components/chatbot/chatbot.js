import React, { useEffect, useRef, useState } from "react";
import "./chatbot.css";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { BASE_URL } from "../../Api/api";

const ChatBot = () => {
    const chatboxRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [question, setQuestion] = useState('Greeting');
    const [data, setData] = useState();
    const [chatHistory, setChatHistory] = useState([]); // Store chat history
const [id, setid] = useState('670e46a245b4616f7770cf9e')
const [option, setoption] = useState()
    // Fetch data from API
    async function fetchData(newQuestion = question,tempid=id) {
        try {
            let url=""
            if(question=="Greeting"){
                url=`${BASE_URL}/getChatBotResponse?selectedOption=${newQuestion}`
            }
            else{
                url=`${BASE_URL}/getChatBotResponse?selectedOption=${newQuestion}&quesionId=${tempid}`
            }

            
            const response = await fetch(url);
            const json = await response.json();
            const newResponse = json?.chatBotResponse;
            
            if (newResponse?.options?.length > 0) {
                // Update question and response for the next interaction
                setQuestion(newResponse.options[0]?.dropOffQuestion || newQuestion);
                setoption(newResponse.options[0]?.optTitle);
                setData(newResponse);
                setid(newResponse?._id)

                // Append the bot's response to the chat history
                setChatHistory((prevHistory) => [
                    ...prevHistory,
                    { message: question, response: question=="Greeting"?'': newResponse.options, isUser: false }
                ]);
            }
        } catch (error) {
            console.error("Error fetching chatbot data:", error);
        }
    }

    // API call only when chatbot is opened
    useEffect(() => {
        if (isOpen) {
            fetchData();  // Fetch data when chatbot is opened
        }
    }, [isOpen]);

    useEffect(() => {
        if (data?.type === "statement") {
            fetchData(option,id);  // Fetch data when chatbot is opened
        }
    }, [data]);

    // API call when user clicks on an option
    const handleOptionClick = (newQuestion, optTitle,qid) => {
        // Append the user's selected option to the chat history
        setChatHistory((prevHistory) => [
            ...prevHistory,
            { message: optTitle, isUser: true }
        ]);
        fetchData(optTitle,qid);  // Fetch new data based on the selected option
    };

    // Toggle chatbot visibility
    const handleToggle = () => {
        setIsOpen(!isOpen);  // Toggle open state
        document.body.classList.toggle("show-chatbot");
    };

    // Scroll to bottom on new messages
    useEffect(() => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    }, [chatHistory]);

    return (
        <div>
            <div className="h-[100%] z-[999999999] font-pop">
                <button className="chatbot-toggler" onClick={handleToggle}>
                    <span className="material-symbols-rounded pt-2 ">
                        <img src="/chat.svg" alt="Chat Icon" />
                    </span>
                    <span className="material-symbols-outlined pt-2">
                        <img src="/chat.svg" alt="Chat Icon" />
                    </span>
                </button>
                {isOpen && (
                    <div className="chatbot mb-16 mr-8" style={{ zIndex: "9999999" }}>
                        <div className="flex justify-between w-full h-10 items-center px-4 shadow-md">
                            <h2 className="text-[#000]">CHAT With US</h2>
                            <IoMdClose className="text-3xl closebutton cursor-pointer" onClick={handleToggle} />
                        </div>

                        <ul className="chatbox flex flex-col gap-5" ref={chatboxRef}>
                            {chatHistory.map((chat, index) => (
                                <li 
                                    key={index} 
                                    className={`chat ${chat.isUser ? "outgoing" : "incoming"} flex items-center justify-${chat.isUser ? "end" : "start"}`}
                                >
                                    {chat.isUser ? (
                                        // User's selected option on the right
                                        <div className="bg-green-500 text-white  rounded-md p-2 rounded-t-2xl rounded-bl-2xl rounded-br-none mr-2">
                                            {chat.message}
                                        </div>
                                    ) : (
                                        // Bot's response on the left
                                        <div className="bg-[#FFFFFF] text-[#848484] p-2 rounded-md">
                                            <p >{chat.message}</p>
                                            <div className="flex flex-wrap max-w-[90%]">
                                                {chat.response?.length > 0 && chat.response.map((item, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleOptionClick(item.dropOffQuestion, item.optTitle,id)}
                                                        className="p-1 text-black rounded border border-black m-1"
                                                    >
                                                        {item.optTitle}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatBot;
