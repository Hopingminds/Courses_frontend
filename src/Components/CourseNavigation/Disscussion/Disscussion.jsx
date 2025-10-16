import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import SendIcon from "@mui/icons-material/Send";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { BASE_URL } from "../../../Api/api";

// Mock data for private chat (keeping this static for now)
const mockUsers = [
  { id: 1, name: "Alice", avatar: "", online: true, unread: 0 },
  { id: 2, name: "Bob", avatar: "", online: true, unread: 2 },
  { id: 3, name: "Charlie", avatar: "", online: false, unread: 0 },
];

const mockPrivateMessages = {
  1: [
    {
      id: 1,
      sender: "You",
      text: "Hi Alice! Can we discuss the project timeline?",
      time: "09:55",
    },
    {
      id: 2,
      sender: "Alice",
      text: "Hello! Sure, I'm available now. What do you need?",
      time: "09:56",
    },
    {
      id: 3,
      sender: "You",
      text: "Great! I wanted to go over the deliverables for next week.",
      time: "09:57",
    },
  ],
  2: [
    {
      id: 1,
      sender: "You",
      text: "Hey Bob! Did you review the design mockups?",
      time: "09:50",
    },
    {
      id: 2,
      sender: "Bob",
      text: "Hey! Yes, I have some feedback to share.",
      time: "09:51",
    },
    {
      id: 3,
      sender: "You",
      text: "Perfect! Let's schedule a quick call.",
      time: "09:52",
    },
  ],
  3: [
    {
      id: 1,
      sender: "You",
      text: "Hi Charlie, welcome to the team! 👋",
      time: "08:30",
    },
  ],
};

// API Service functions with axios and BASE_URL
const apiService = {
  // Get auth token
  getToken() {
    return localStorage.getItem("COURSES_USER_TOKEN");
  },

  // Get all threads for a course
  async getThreads(courseId) {
    if (!courseId) {
      throw new Error("Course ID is required");
    }

    const token = this.getToken();
    if (!token) {
      throw new Error("Authentication token not found");
    }

    const response = await axios.get(
      `${BASE_URL}/forum/threads?courseId=${courseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  },

  // Get thread details with replies
  async getThread(threadId) {
    if (!threadId) {
      throw new Error("Thread ID is required");
    }

    const token = this.getToken();
    if (!token) {
      throw new Error("Authentication token not found");
    }

    const response = await axios.get(`${BASE_URL}/forum/threads/${threadId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  },

  // Create new thread
  async createThread(threadData) {
    if (!threadData.courseId) {
      throw new Error("Course ID is required");
    }

    const token = this.getToken();
    if (!token) {
      throw new Error("Authentication token not found");
    }

    const response = await axios.post(`${BASE_URL}/forum/threads`, threadData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  },

  // Add reply to thread
  async addReply(threadId, replyData) {
    // Validate threadId to prevent "undefined" in URL
    if (!threadId || threadId === "undefined" || threadId === "null") {
      throw new Error("Valid thread ID is required");
    }

    if (!replyData.content || !replyData.content.trim()) {
      throw new Error("Reply content is required");
    }

    const token = this.getToken();
    if (!token) {
      throw new Error("Authentication token not found");
    }

    const response = await axios.post(
      `${BASE_URL}/forum/threads/${threadId}/replies`,
      replyData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  },
};

// Utility functions to get user details
const getUserDetails = () => {
  try {
    const userDetails = localStorage.getItem("COURSE_USER_DETAILS");

    if (!userDetails) {
      return null;
    }

    // Handle the case where it's already an object (shouldn't happen with localStorage)
    if (typeof userDetails === "object") {
      return userDetails.userDetails || userDetails;
    }

    // Handle the case where it's stringified "[object Object]"
    if (userDetails === "[object Object]") {
      console.warn("Invalid data format in COURSE_USER_DETAILS");
      return null;
    }

    // Normal case: parse JSON string
    const parsedData = JSON.parse(userDetails);
    return parsedData.userDetails || parsedData;
  } catch (error) {
    console.error("Error parsing user details:", error);

    // Check if there's any data we can salvage
    const rawValue = localStorage.getItem("COURSE_USER_DETAILS");
    if (rawValue && rawValue !== "[object Object]") {
      console.log("Attempting to salvage data:", rawValue);
      // Try to handle as plain string data
      try {
        return { name: rawValue, _id: "unknown" };
      } catch (e) {
        console.error("Could not salvage user data:", e);
      }
    }

    return null;
  }
};

const getCurrentUserId = () => {
  const userDetails = getUserDetails();
  return userDetails?._id || userDetails?.id || "unknown-user";
};

const getCurrentUserName = () => {
  const userDetails = getUserDetails();
  return userDetails?.name || "You";
};

const getCurrentUserInitial = () => {
  const userName = getCurrentUserName();
  return userName ? userName[0].toUpperCase() : "Y";
};

const isCurrentUser = (sender) => {
  if (!sender) return false;

  const currentUserId = getCurrentUserId();

  if (typeof sender === "object") {
    return sender._id === currentUserId || sender.id === currentUserId;
  }

  if (typeof sender === "string") {
    return sender === currentUserId || sender === "You";
  }

  return false;
};

const getSenderDisplayName = () => {
  const userDetails = getUserDetails();
  return userDetails?.name || "You";
};

const getSenderImage = (sender) => {
  const userDetails = getUserDetails(sender);
  return (
    userDetails?.image ||
    "https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png"
  );
};

const getSenderInitial = (sender) => {
  if (!sender) return "Y"; // fallback
  const userDetails = getUserDetails(sender);
  const name = userDetails?.name || sender || "You";
  return name[0].toUpperCase();
};

function ChatMessages({ messages, isGroup = false }) {
  // Memoize user details to prevent excessive calls
  const currentUserDetails = useMemo(() => getUserDetails(), []);

  // Helper function to format time
  const formatTime = useCallback((timestamp) => {
    if (!timestamp) return "";

    try {
      const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      console.error("Error formatting time:", error);
      return typeof timestamp === "string" ? timestamp : "";
    }
  }, []);

  // Ensure messages is always an array
  const safeMessages = useMemo(
    () => (Array.isArray(messages) ? messages : []),
    [messages]
  );

  return (
    <div className="max-h-80 md:max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 p-3 md:p-4 space-y-3">
      {safeMessages.length === 0 ? (
        <div className="text-center py-6 md:py-8 text-gray-500 text-sm md:text-base">
          No messages yet. Start the conversation!
        </div>
      ) : (
        safeMessages.map((msg, index) => {
          const isYou = isCurrentUser(msg.sender);
          const senderName = getSenderDisplayName(msg.sender);
          const senderInitial = getSenderInitial(msg.sender);

          return (
            <div
              key={msg.id || msg._id || index}
              className={`flex ${
                isYou ? "justify-end" : "justify-start"
              } transition-all duration-200`}
            >
              {/* Other person's message (left side) */}
              {!isYou && (
                <div className="flex items-start max-w-xs md:max-w-md lg:max-w-2xl">
                  {/* Avatar - Show in group chats */}
                  {isGroup && (
                    <div className="relative mr-2 flex-shrink-0">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden shadow-sm bg-gray-200 flex items-center justify-center">
                        {getSenderImage(msg.sender) ? (
                          <img
                            src={getSenderImage(msg.sender)}
                            alt={getSenderInitial(msg.sender)}
                            className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-white font-semibold text-xs">
                            {getSenderInitial(msg.sender)}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Message bubble */}
                  <div className="flex flex-col">
                    {/* Show sender name in group chats */}
                    {isGroup && (
                      <span className="text-xs font-medium text-gray-700 mb-1 ml-1">
                        {senderName}
                      </span>
                    )}
                    <div className="bg-white rounded-2xl rounded-tl-none px-3 py-2 md:px-4 md:py-2 shadow-sm border border-gray-200">
                      <p className="text-gray-800 text-sm leading-relaxed break-words">
                        {msg.content || msg.text}
                      </p>
                      <div className="flex justify-end mt-1">
                        <span className="text-xs text-gray-500">
                          {formatTime(msg.createdAt || msg.time)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Your message (right side) */}
              {isYou && (
                <div className="flex flex-col items-end max-w-xs md:max-w-md lg:max-w-lg">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl rounded-tr-none px-3 py-2 md:px-4 md:py-2 shadow-md">
                    <p className="text-white text-sm leading-relaxed break-words">
                      {msg.content || msg.text}
                    </p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-indigo-200 mr-2">
                        {formatTime(msg.createdAt || msg.time)}
                      </span>
                      {/* Read receipt indicator */}
                      <span className="text-xs text-indigo-200">✓✓</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

function OnlineIndicator({ online, small = false }) {
  const size = small ? "w-2 h-2" : "w-3 h-3";
  return (
    <div
      className={`absolute -bottom-1 -right-1 ${size} rounded-full border-2 border-white ${
        online ? "bg-green-500" : "bg-gray-400"
      }`}
    />
  );
}

function EmojiModal({ show, onClose, onEmojiSelect, position }) {
  const [emojis, setEmojis] = useState({});
  const [loading, setLoading] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        const response = await axios.get("https://api.github.com/emojis");
        setEmojis(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching emojis:", error);
        setLoading(false);
      }
    };

    if (show) {
      fetchEmojis();
    }
  }, [show]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      ref={modalRef}
      className="fixed z-50 w-80 h-80 md:w-96 md:h-96 bg-white border border-gray-300 rounded-xl shadow-2xl flex flex-col"
      style={{
        top: position.top,
        left: position.left,
        transform: "translateX(-50%)",
      }}
    >
      {/* Modal Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
        <h3 className="font-semibold text-gray-700">Choose an emoji</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <CloseIcon className="text-lg" />
        </button>
      </div>

      {/* Emoji Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-6 md:grid-cols-8 gap-2">
            {Object.entries(emojis).map(([name, url]) => (
              <button
                key={name}
                onClick={() => onEmojiSelect(name)}
                className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                title={name}
              >
                <img
                  src={url}
                  alt={name}
                  className="w-6 h-6 md:w-7 md:h-7"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Discussion() {
  const [tab, setTab] = useState(0);
  const [privateUser, setPrivateUser] = useState(mockUsers[0].id);
  const [groupInput, setGroupInput] = useState("");
  const [privateInput, setPrivateInput] = useState("");

  // State for dynamic group chat data
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const [threadMessages, setThreadMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [newThreadTitle, setNewThreadTitle] = useState("");
  const [newThreadContent, setNewThreadContent] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [showNewThreadForm, setShowNewThreadForm] = useState(false);
  const [showEmojiModal, setShowEmojiModal] = useState(false);
  const [activeInput, setActiveInput] = useState(""); // "group" or "private"
  const [emojiModalPosition, setEmojiModalPosition] = useState({
    top: 0,
    left: 0,
  });

  // Refs for emoji buttons
  const groupEmojiButtonRef = useRef(null);
  const privateEmojiButtonRef = useRef(null);

  // Get current user info
  const [currentUser, setCurrentUser] = useState(null);

  const currentCourseId = localStorage.getItem("COURSE_ID");

  // Load current user from localStorage on component mount
  useEffect(() => {
    const loadCurrentUser = () => {
      const userDetails = getUserDetails();

      if (userDetails && typeof userDetails === "object") {
        setCurrentUser({
          id: userDetails._id || userDetails.id,
          name: userDetails.name || "You",
          email: userDetails.email,
          profileImage: userDetails.profile,
          role: userDetails.role,
        });
      } else {
        // Fallback user
        setCurrentUser({
          id: 1,
          name: "You",
          role: "student",
        });
      }
    };

    loadCurrentUser();
  }, []);

  // Fetch threads when component mounts or course changes
  useEffect(() => {
    if (tab === 0 && currentCourseId) {
      fetchThreads();
    }
  }, [tab, currentCourseId]);

  // Fetch threads list
  const fetchThreads = async () => {
    if (!currentCourseId) {
      setError("Course ID not found");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const data = await apiService.getThreads(currentCourseId);

      // Ensure data is always an array
      const threadsData = Array.isArray(data) ? data : [];
      console.log("Fetched threads:", threadsData);

      setThreads(threadsData);

      // Auto-select first thread if available and valid
      if (threadsData.length > 0 && !selectedThread) {
        const firstThread = threadsData[0];
        if (firstThread && (firstThread.id || firstThread._id)) {
          const threadWithId = {
            ...firstThread,
            id: firstThread.id || firstThread._id,
          };
          setSelectedThread(threadWithId);
          fetchThreadMessages(threadWithId.id);
        }
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to load discussions";
      setError(errorMessage);
      console.error("Error fetching threads:", err);
      setThreads([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch messages for a specific thread
  const fetchThreadMessages = async (threadId) => {
    if (!threadId) {
      console.error("No thread ID provided");
      return;
    }

    setLoading(true);
    try {
      const threadData = await apiService.getThread(threadId);

      // Ensure replies is always an array
      const replies = Array.isArray(threadData.replies)
        ? threadData.replies
        : [];
      setThreadMessages(replies);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "Failed to load messages";
      setError(errorMessage);
      console.error("Error fetching thread:", err);
      setThreadMessages([]);
    } finally {
      setLoading(false);
    }
  };

  // Create new thread
  const handleCreateThread = async () => {
    if (!newThreadTitle.trim()) {
      setError("Discussion title is required");
      return;
    }

    if (!currentCourseId) {
      setError("Course ID not found");
      return;
    }

    setLoading(true);
    try {
      // Parse tags from input
      const tags = tagsInput
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag);
      const finalTags = tags.length > 0 ? tags : ["general"];

      const newThread = await apiService.createThread({
        title: newThreadTitle,
        content: newThreadContent,
        courseId: currentCourseId,
        tags: finalTags,
      });

      const threadWithId = {
        ...newThread,
        id: newThread.id || newThread._id,
      };

      setThreads((prev) => [threadWithId, ...prev]);
      setSelectedThread(threadWithId);
      setThreadMessages([]);
      setNewThreadTitle("");
      setNewThreadContent("");
      setTagsInput("");
      setShowNewThreadForm(false);
      setError("");

      await fetchThreads();
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to create discussion";
      setError(errorMessage);
      console.error("Error creating thread:", err);
    } finally {
      setLoading(false);
    }
  };

  // Send message to group (add reply to thread)
  const handleSendGroup = async () => {
    if (!groupInput.trim()) {
      setError("Message cannot be empty");
      return;
    }

    if (!selectedThread) {
      setError("Please select a discussion first");
      return;
    }

    const threadId = selectedThread.id;
    if (!threadId || threadId === "undefined" || threadId === "null") {
      setError("Invalid discussion selected");
      return;
    }

    try {
      setError("");

      const newReply = await apiService.addReply(threadId, {
        content: groupInput,
      });

      // Optimistically update the UI
      setThreadMessages((prev) => [...prev, newReply]);
      setGroupInput("");

      // Refresh messages from server to ensure consistency
      await fetchThreadMessages(threadId);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "Failed to send message";
      setError(errorMessage);
      console.error("Error sending message:", err);
    }
  };

  // Handle thread selection
  const handleThreadSelect = (thread) => {
    if (!thread) {
      setError("Invalid discussion selected");
      return;
    }

    const threadId = thread.id || thread._id;
    if (!threadId) {
      setError("Invalid discussion selected");
      return;
    }

    const threadWithId = {
      ...thread,
      id: threadId,
    };

    setSelectedThread(threadWithId);
    setError("");
    fetchThreadMessages(threadId);
  };

  // Private chat handlers (keeping these static)
  const handleSendPrivate = () => {
    if (privateInput.trim()) {
      setPrivateInput("");
    }
  };

  // Emoji handler functions
  const handleEmojiSelect = (emojiName) => {
    const emojiCode = `:${emojiName}:`;

    if (activeInput === "group") {
      setGroupInput((prev) => prev + emojiCode);
    } else if (activeInput === "private") {
      setPrivateInput((prev) => prev + emojiCode);
    }

    setShowEmojiModal(false);
  };

  const openEmojiModal = (inputType) => {
    setActiveInput(inputType);

    // Get the position of the emoji button
    const emojiButtonRef =
      inputType === "group" ? groupEmojiButtonRef : privateEmojiButtonRef;

    if (emojiButtonRef.current) {
      const rect = emojiButtonRef.current.getBoundingClientRect();
      setEmojiModalPosition({
        top: rect.bottom + window.scrollY + 10,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }

    setShowEmojiModal(true);
  };

  const closeEmojiModal = () => {
    setShowEmojiModal(false);
  };

  const getActiveUser = () =>
    mockUsers.find((u) => u.id === privateUser) || mockUsers[0];
  const onlineUsersCount = mockUsers.filter((u) => u.online).length;
  const getValidThreadId = (thread) => thread?.id || thread?._id;

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    try {
      return new Date(dateString).toLocaleDateString();
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid date";
    }
  };

  return (
    <div className="w-full mx-auto mt-4 md:mt-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 md:py-6 px-4 md:px-6">
        <h1 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
          Team Discussion
        </h1>
        <p className="text-indigo-100 text-sm md:text-base">
          Connect and collaborate with your team
        </p>
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b border-gray-200">
        <button
          onClick={() => setTab(0)}
          className={`flex-1 flex items-center justify-center py-3 md:py-4 font-medium transition-all text-sm md:text-base ${
            tab === 0
              ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          }`}
        >
          <GroupIcon className="mr-1 md:mr-2 text-lg md:text-xl" />
          <span className="hidden xs:inline">Group Discussion</span>
          <span className="xs:hidden">Group</span>
        </button>
        <button
          onClick={() => setTab(1)}
          className={`flex-1 flex items-center justify-center py-3 md:py-4 font-medium transition-all text-sm md:text-base ${
            tab === 1
              ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          }`}
        >
          <PersonIcon className="mr-1 md:mr-2 text-lg md:text-xl" />
          <span className="hidden xs:inline">Private Chat</span>
          <span className="xs:hidden">Private</span>
        </button>
      </div>

      <div className="p-4 md:p-6">
        {tab === 0 && (
          <>
            {/* Group Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
              <div className="flex flex-row sm:flex-col sm:items-center justify-between gap-3 flex-wrap">
                {/* Left Section */}
                <div className="flex flex-row items-center gap-3 flex-wrap">
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-0">
                    Team Discussions
                  </h2>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                      {onlineUsersCount} online
                    </span>
                    <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                      {threads.length} discussions
                    </span>
                    {currentUser && (
                      <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                        {currentUser.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Section (Button) */}
                <button
                  onClick={() => setShowNewThreadForm(true)}
                  className="px-3 py-2 md:px-4 md:py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm md:text-base sm:w-auto"
                  disabled={!currentCourseId}
                >
                  New Discussion
                </button>
              </div>

              {/* New Thread Button */}
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* New Thread Form */}
            {showNewThreadForm && (
              <div className="mb-6 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold mb-3">
                  Start New Discussion
                </h3>
                <input
                  type="text"
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm md:text-base"
                  placeholder="Discussion title..."
                  value={newThreadTitle}
                  onChange={(e) => setNewThreadTitle(e.target.value)}
                />
                <textarea
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm md:text-base"
                  placeholder="What would you like to discuss?..."
                  value={newThreadContent}
                  onChange={(e) => setNewThreadContent(e.target.value)}
                  rows={3}
                />
                <input
                  type="text"
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm md:text-base"
                  placeholder="Tags (comma separated, e.g., css, grid, help)..."
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                />
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleCreateThread}
                    disabled={
                      loading || !newThreadTitle.trim() || !currentCourseId
                    }
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50 transition-colors flex-1 text-sm md:text-base"
                  >
                    {loading ? "Creating..." : "Create Discussion"}
                  </button>
                  <button
                    onClick={() => setShowNewThreadForm(false)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex-1 text-sm md:text-base"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Threads List */}
            {threads.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Select Discussion:
                </h3>
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
                  {threads.map((thread) => {
                    const threadId = getValidThreadId(thread);
                    const isSelected =
                      getValidThreadId(selectedThread) === threadId;

                    return (
                      <button
                        key={threadId}
                        onClick={() => handleThreadSelect(thread)}
                        className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                          isSelected
                            ? "bg-indigo-500 text-white shadow-md"
                            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <span className="truncate max-w-32 md:max-w-48">
                          {thread.title}
                        </span>
                        {thread.tags && thread.tags.length > 0 && (
                          <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex-shrink-0">
                            {thread.tags[0]}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
                <div className="border-t border-gray-200 mb-4" />
              </div>
            )}

            {/* Selected Thread Info */}
            {selectedThread && getValidThreadId(selectedThread) && (
              <div className="mb-4 p-3 md:p-4 bg-white rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                  {selectedThread.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {selectedThread.content}
                </p>
                {selectedThread.tags && selectedThread.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {selectedThread?.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center mt-2 text-xs text-gray-500 flex-wrap gap-1">
                  <span>Started by</span>
                  {currentUser && (
                    <span className="px-2 bg-gray-300 text-gray-900 rounded-full">
                      {currentUser.name}
                    </span>
                  )}
                  <span>•</span>
                  <span>{formatDate(selectedThread.createdAt)}</span>
                </div>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center py-6 md:py-8">
                <div className="animate-spin rounded-full h-6 w-6 md:h-8 md:w-8 border-b-2 border-indigo-500"></div>
              </div>
            )}

            {/* Messages */}
            {!loading && selectedThread && getValidThreadId(selectedThread) && (
              <ChatMessages messages={threadMessages} isGroup={true} />
            )}

            {/* No Thread Selected */}
            {!loading &&
              (!selectedThread || !getValidThreadId(selectedThread)) &&
              threads.length === 0 && (
                <div className="text-center py-6 md:py-8 text-gray-500 text-sm md:text-base">
                  No discussions yet. Start the first one!
                </div>
              )}

            {/* No Course ID Warning */}
            {!currentCourseId && (
              <div className="text-center py-6 md:py-8 text-red-500 text-sm md:text-base">
                Course ID not found. Please make sure you're in a course.
              </div>
            )}

            {/* Input Area */}
            {selectedThread && getValidThreadId(selectedThread) && (
              <div className="flex items-center mt-4 md:mt-6 p-3 md:p-4 bg-white rounded-xl border border-gray-200 shadow-sm gap-2 md:gap-3 relative">
                <button
                  ref={groupEmojiButtonRef}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                  onClick={() => openEmojiModal("group")}
                >
                  <EmojiEmotionsIcon className="text-lg md:text-xl" />
                </button>
                <input
                  type="text"
                  className="flex-1 px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm md:text-base"
                  placeholder="Type your message..."
                  value={groupInput}
                  onChange={(e) => setGroupInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendGroup();
                    }
                  }}
                />
                <button
                  onClick={handleSendGroup}
                  disabled={
                    loading ||
                    !groupInput.trim() ||
                    !selectedThread ||
                    !getValidThreadId(selectedThread)
                  }
                  className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50 transition-colors flex-shrink-0"
                >
                  <SendIcon className="text-lg md:text-xl" />
                </button>
              </div>
            )}
          </>
        )}

        {tab === 1 && (
          <>
            {/* Private Chat Section - Remains Static */}
            <div className="mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Private Messages
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Chat one-on-one with team members
              </p>
            </div>

            {/* User Selection */}
            <div className="flex gap-2 mb-4 md:mb-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 justify-start">
              {mockUsers.map((user) => (
                <button
                  key={user.id}
                  onClick={() => setPrivateUser(user.id)}
                  className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                    privateUser === user.id
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="relative mr-2 flex-shrink-0">
                    <div
                      className={`w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                        privateUser === user.id
                          ? "bg-white text-indigo-600"
                          : "bg-indigo-500 text-white"
                      }`}
                    >
                      {user.name[0]}
                    </div>
                    <OnlineIndicator online={user.online} small={true} />
                  </div>
                  <span className="hidden xs:inline">{user.name}</span>
                  <span className="xs:hidden">{user.name.split(" ")[0]}</span>
                  {user.unread > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center flex-shrink-0">
                      {user.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="border-t border-gray-200 mb-4" />

            {/* Chat Header for Selected User */}
            <div className="flex items-center mb-4 p-3 md:p-4 bg-white rounded-xl shadow-sm">
              <div className="relative mr-3 md:mr-4 flex-shrink-0">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-sm md:text-base">
                  {getActiveUser().name[0]}
                </div>
                <OnlineIndicator online={getActiveUser().online} />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 truncate text-sm md:text-base">
                  {getActiveUser().name}
                </h3>
                <p className="text-sm text-gray-500">
                  {getActiveUser().online ? "Online" : "Last seen recently"}
                </p>
              </div>
            </div>

            {/* Messages */}
            <ChatMessages messages={mockPrivateMessages[privateUser] || []} />

            {/* Input Area */}
            <div className="flex items-center mt-4 md:mt-6 p-3 md:p-4 bg-white rounded-xl border border-gray-200 shadow-sm gap-2 md:gap-3 relative">
              <button
                ref={privateEmojiButtonRef}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                onClick={() => openEmojiModal("private")}
              >
                <EmojiEmotionsIcon className="text-lg md:text-xl" />
              </button>
              <input
                type="text"
                className="flex-1 px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm md:text-base"
                placeholder={`Message ${getActiveUser().name}...`}
                value={privateInput}
                onChange={(e) => setPrivateInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendPrivate();
                  }
                }}
              />
              <button
                onClick={handleSendPrivate}
                className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors flex-shrink-0"
              >
                <SendIcon className="text-lg md:text-xl" />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Emoji Modal */}
      <EmojiModal
        show={showEmojiModal}
        onClose={closeEmojiModal}
        onEmojiSelect={handleEmojiSelect}
        position={emojiModalPosition}
      />
    </div>
  );
}
