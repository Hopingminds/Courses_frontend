import React, { useEffect, useRef, useState } from "react";
import "./chatbot.css";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

const ChatBot = () => {
    const chatboxRef = useRef(null);
    const chatInputRef = useRef(null);
    const [isopen, setisopen] = useState(true)
    useEffect(() => {
        const chatbox = chatboxRef.current;
        const chatInput = chatInputRef.current;
        if (!chatInput || !chatbox) return;

        const chatbotToggler = document.querySelector(".chatbot-toggler");
        const CloseButton = document.querySelector(".closebutton");
        const chatSearchIcon = document.getElementById("send-btn");

        let userMessage = null;
        const inputInitHeight = chatInput.scrollHeight;

        const handleSearch = () => {
            console.log("Searching...");
        };

        chatSearchIcon.addEventListener("click", handleSearch);

        const handleToggle = () => {
            document.body.classList.toggle("show-chatbot");
        };

        chatbotToggler.addEventListener("click", handleToggle);
        CloseButton.addEventListener("click", handleToggle);

        const createChatLi = (message, className, isBot) => {
            const chatLi = document.createElement("li");
            chatLi.classList.add("chat", `${className}`);

            if (isBot) {
                chatLi.innerHTML = `<span class="material-symbols-outlined chat-icon"><img src="/chatbot.svg" /></span><p></p>`;
            } else {
                let chatContent =
                    className === "outgoing"
                        ? `<p></p><span class="material-symbols-outlined user-icon pl-2"><img src="/usergreen.svg" class="w-[20px] h-full" /></span>`
                        : `<span class="material-symbols-outlined chat-icon bg-green-600 rounded-full"><img src="/hopingbot.png" /></span><p></p>`;
                chatLi.innerHTML = chatContent;
            }

            chatLi.querySelector("p").textContent = message;
            return chatLi;
        };

        const generateResponse = (chatElement, data) => {
            const API_URL = "https://api.hopingminds.com/api/get-bot-response";
            const messageElement = chatElement.querySelector("p");

            axios.post(API_URL, { user_input: data }).then((response) => {
                messageElement.textContent = response.data.response;
                chatbox.scrollTo(0, chatbox.scrollHeight);
            }).catch(() => {
                messageElement.classList.add("error");
                messageElement.textContent = "Oops! Something went wrong. Please try again.";
            });
        };

        const handleChat = () => {
            userMessage = chatInput.value.trim();
            if (!userMessage) return;

            chatInput.value = "";
            chatInput.style.height = `${inputInitHeight}px`;

            const chatLi = createChatLi(userMessage, "outgoing");
            chatbox.appendChild(chatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);

            const incomingChatLi = createChatLi("Thinking...", "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);

            setTimeout(() => {
                generateResponse(incomingChatLi, userMessage);
            }, 600);
        };

        const handleKeyDown = (e) => {
            if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
                e.preventDefault();
                handleChat();
            }
        };

        const handleClick = () => {
            handleChat();
        };

        chatInput.addEventListener("keydown", handleKeyDown);

        // Remove the event listener from the textarea
        // chatInput.addEventListener("click", handleClick);

        // Attach event listener to send button
        chatSearchIcon.addEventListener("click", handleClick);

        return () => {
            chatbotToggler.removeEventListener("click", handleToggle);
            CloseButton.removeEventListener("click", handleToggle);
            chatInput.removeEventListener("keydown", handleKeyDown);
            chatSearchIcon.removeEventListener("click", handleSearch);
            chatSearchIcon.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div>

            <div className="h-[80%] z-[999999999] font-pop">
                <button className="chatbot-toggler">
                    <span className="material-symbols-rounded pt-2 ">
                        <img src="/chat.svg" />
                    </span>
                    <span className="material-symbols-outlined pt-2">
                        <img src="/chat.svg" />
                    </span>
                </button>
                <div className="chatbot mb-16 mr-8 " style={{ zIndex: "9999999" }}>
                    <div className="flex justify-between w-full h-10  items-center px-4 shadow-md">
                        <h2 className="text-[#000]">CHAT With US</h2>
                        <IoMdClose className="text-3xl closebutton cursor-pointer" />
                    </div>



                    {/* <img src="/chatmenu.svg" /> */}

                    <ul className="chatbox" ref={chatboxRef}>
                        <li className="chat incoming flex items-center">
                            <span className="material-symbols-outlined pb-10 bg-green-600 rounded-full ">
                                <img src="/hopingbot.png" />
                            </span>
                            <p className="bg-[#FFFFFF] text-[#848484]">
                                Hi, I'm Kabby
                                <br />
                                How can I help you today?
                            </p>
                        </li>
                    </ul>
                    <div className="chat-input bg-black">
                        <textarea
                            className="rounded-2xl text-[#000000]"
                            ref={chatInputRef}
                            placeholder="Enter a message..."
                            spellCheck="false"
                            required
                            defaultValue={""}

                        />
                        <span
                            id="send-btn"
                            className="material-symbols-rounded absolute right-6 "

                        >
                            <img src="/chatsearch.svg" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;
