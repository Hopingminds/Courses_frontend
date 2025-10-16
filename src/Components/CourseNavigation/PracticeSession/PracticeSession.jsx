import React, { useState, useRef, useEffect } from "react";

const PracticeSession = () => {
    const [activeTab, setActiveTab] = useState("chat");
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hello! I'm your AI study assistant. You can ask me anything about your course or subjects you're learning." }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedModule, setSelectedModule] = useState("");
    const [questionCount, setQuestionCount] = useState(10);
    const [assessmentStarted, setAssessmentStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeRemaining, setTimeRemaining] = useState(1800);
    const messagesEndRef = useRef(null);

    // Enhanced modules data with realistic subjects
    const modules = [
        { id: "mathematics", name: "Mathematics", icon: "🧮", description: "Algebra, Calculus, Geometry", questions: 150, color: "from-blue-500 to-cyan-500" },
        { id: "physics", name: "Physics", icon: "⚡", description: "Mechanics, Thermodynamics, Optics", questions: 120, color: "from-purple-500 to-pink-500" },
        { id: "chemistry", name: "Chemistry", icon: "🧪", description: "Organic, Inorganic, Physical", questions: 130, color: "from-green-500 to-emerald-500" },
        { id: "programming", name: "Programming", icon: "💻", description: "DSA, OOP, Web Development", questions: 200, color: "from-orange-500 to-red-500" },
        { id: "biology", name: "Biology", icon: "🧬", description: "Botany, Zoology, Genetics", questions: 110, color: "from-lime-500 to-green-500" },
        { id: "english", name: "English", icon: "📚", description: "Grammar, Comprehension, Vocabulary", questions: 90, color: "from-indigo-500 to-purple-500" }
    ];

    // Realistic mock questions for demonstration
    const mockQuestions = {
        mathematics: [
            {
                id: 1,
                question: "If f(x) = 3x² - 2x + 5, what is the value of f'(2)?",
                options: ["10", "12", "14", "16"],
                correct: 0,
                explanation: "The derivative f'(x) = 6x - 2, so f'(2) = 6(2) - 2 = 10"
            },
            {
                id: 2,
                question: "What is the solution to the equation: 2x + 5 = 3x - 2?",
                options: ["x = 7", "x = 5", "x = 3", "x = 9"],
                correct: 0,
                explanation: "2x + 5 = 3x - 2 → 5 + 2 = 3x - 2x → 7 = x"
            }
        ],
        programming: [
            {
                id: 1,
                question: "What is the time complexity of binary search?",
                options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                correct: 1,
                explanation: "Binary search divides the search space in half each time, giving O(log n) complexity"
            },
            {
                id: 2,
                question: "Which data structure uses LIFO (Last-In-First-Out) principle?",
                options: ["Queue", "Stack", "Tree", "Graph"],
                correct: 1,
                explanation: "Stack follows LIFO principle while Queue follows FIFO"
            }
        ]
    };

    // Timer effect
    useEffect(() => {
        if (assessmentStarted && timeRemaining > 0) {
            const timer = setInterval(() => {
                setTimeRemaining(time => time - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [assessmentStarted, timeRemaining]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ 
            behavior: "smooth",
            block: "nearest"
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const mockAIResponse = (userMessage) => {
        const responses = [
            "I understand your question about studying. Could you provide more details so I can help you better?",
            "That's an interesting topic! I'd be happy to help you understand this concept better.",
            "As a study assistant, I recommend breaking down complex topics into smaller parts for better understanding.",
            "I can help you with that! What specific aspect would you like me to explain?",
            "Great question! Let me provide you with some detailed explanation about this topic."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        
        setMessages((msgs) => [...msgs, userMessage]);
        setInput("");
        setLoading(true);

        await new Promise(resolve => setTimeout(resolve, 50));

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const aiReply = mockAIResponse(input);
            setMessages((msgs) => [...msgs, { role: "assistant", content: aiReply }]);
        } catch (error) {
            console.error("Error:", error);
            setMessages((msgs) => [
                ...msgs,
                { 
                    role: "assistant", 
                    content: "Sorry, I'm having trouble responding right now. Please check your internet connection and try again." 
                }
            ]);
        }
        setLoading(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(e);
        }
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const startAssessment = () => {
        if (!selectedModule) return;
        setAssessmentStarted(true);
        setCurrentQuestion(0);
        setAnswers({});
        setTimeRemaining(1800); // Reset to 30 minutes
    };

    const resetAssessment = () => {
        setAssessmentStarted(false);
        setSelectedModule("");
        setCurrentQuestion(0);
        setAnswers({});
    };

    const handleAnswerSelect = (questionId, answerIndex) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answerIndex
        }));
    };

    const nextQuestion = () => {
        if (currentQuestion < (mockQuestions[selectedModule]?.length - 1 || 0)) {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    const submitAssessment = () => {
        // Here you can integrate with your backend
        alert('Assessment submitted! Integration ready for your backend.');
        resetAssessment();
    };

    const currentQuestions = mockQuestions[selectedModule] || [];

    return (
        <div className="max-w-6xl h-[800px] mx-4 md:mx-auto my-8 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
            {/* Enhanced Header */}
            <div className="bg-green-500  text-white">
                <div className="px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                           
                            <div>
                                <h1 className="text-3xl font-bold">EduMaster AI</h1>
                                <p className="text-indigo-100 text-sm">Smart Learning • Unlimited Assessments</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm opacity-90">Study Mode: Active</div>
                            <div className="text-xs opacity-70">Premium Access</div>
                        </div>
                    </div>
                </div>
                
                {/* Feature Tabs */}
                <div className="flex border-b border-white/20">
                    <button
                        onClick={() => setActiveTab("chat")}
                        className={`flex-1 py-5 px-8 text-center font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                            activeTab === "chat" 
                            ? "bg-white/15 text-white border-b-2 border-white shadow-lg" 
                            : "text-indigo-100 hover:bg-white/10 backdrop-blur-sm"
                        }`}
                    >
                        <span className="text-xl">🤖</span>
                        <div className="text-left">
                            <div className="font-bold">Ask with AI</div>
                            <div className="text-xs opacity-80">Instant Help & Explanations</div>
                        </div>
                    </button>
                    <button
                        onClick={() => setActiveTab("assessment")}
                        className={`flex-1 py-5 px-8 text-center font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                            activeTab === "assessment" 
                            ? "bg-white/15 text-white border-b-2 border-white shadow-lg" 
                            : "text-indigo-100 hover:bg-white/10 backdrop-blur-sm"
                        }`}
                    >
                        <span className="text-xl">📊</span>
                        <div className="text-left">
                            <div className="font-bold">Take Assessment</div>
                            <div className="text-xs opacity-80">Test Your Knowledge</div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
                {activeTab === "chat" ? (
                    /* Chat Interface - Unchanged */
                    <>
                        <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex mb-6 items-end animate-fade-in ${
                                        msg.role === "user" ? "justify-end" : "justify-start"
                                    }`}
                                >
                                    {msg.role === "assistant" && (
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 shadow-lg">
                                            AI
                                        </div>
                                    )}
                                    <div className={`max-w-[75%] p-4 rounded-3xl shadow-lg relative break-words transition-all duration-300 ${
                                        msg.role === "user" 
                                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-br-none" 
                                        : "bg-white border border-gray-100 rounded-bl-none"
                                    }`}>
                                        <div className="leading-relaxed mb-2 whitespace-pre-wrap break-words font-medium">
                                            {msg.content}
                                        </div>
                                        <div className={`text-xs opacity-70 text-right ${
                                            msg.role === "user" ? "text-white/80" : "text-gray-500"
                                        }`}>
                                            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    </div>
                                    {msg.role === "user" && (
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white flex items-center justify-center text-sm font-bold ml-3 flex-shrink-0 shadow-lg">
                                            You
                                        </div>
                                    )}
                                </div>
                            ))}
                            
                            {loading && (
                                <div className="flex mb-6 items-end justify-start">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 shadow-lg">
                                        AI
                                    </div>
                                    <div className="max-w-[75%] bg-white p-4 rounded-3xl rounded-bl-none shadow-lg border border-gray-100">
                                        <div className="flex items-center h-6 py-2">
                                            <span className="h-3 w-3 bg-indigo-400 rounded-full inline-block mx-1 animate-bounce"></span>
                                            <span className="h-3 w-3 bg-indigo-400 rounded-full inline-block mx-1 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                            <span className="h-3 w-3 bg-indigo-400 rounded-full inline-block mx-1 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} className="h-0 w-full" />
                        </div>

                        <form onSubmit={sendMessage} className="p-6 bg-white border-t border-gray-200 flex-shrink-0">
                            <div className="flex gap-4 items-center">
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={handleInputChange}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Ask me anything about your studies..."
                                        disabled={loading}
                                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-full outline-none text-base transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 font-sans pr-12"
                                        autoFocus
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={loading || !input.trim()} 
                                    className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 border-none rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:from-indigo-600 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed flex-shrink-0 hover:scale-105 disabled:scale-100 shadow-lg"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    /* Enhanced Assessment Interface */
                    <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-gray-50 to-green-50">
                        {!assessmentStarted ? (
                            /* Module Selection Screen */
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-10">
                                    <h2 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        Unlimited Assessments
                                    </h2>
                                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                        Test your knowledge with our comprehensive question bank. Get detailed analytics and personalized feedback.
                                    </p>
                                </div>

                                {/* Stats Overview */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                                        <div className="text-gray-600">Total Questions</div>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
                                        <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                                        <div className="text-gray-600">Subjects</div>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
                                        <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                                        <div className="text-gray-600">Progress Tracking</div>
                                    </div>
                                </div>

                                {/* Module Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                    {modules.map((module) => (
                                        <div
                                            key={module.id}
                                            onClick={() => setSelectedModule(module.id)}
                                            className={`bg-white grid grid-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 border-2 ${
                                                selectedModule === module.id
                                                ? `border-indigo-500 shadow-xl bg-gradient-to-br ${module.color} text-white`
                                                : "border-gray-200 shadow-lg hover:shadow-xl"
                                            }`}
                                        >
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-3xl">{module.icon}</span>
                                                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    selectedModule === module.id 
                                                    ? "bg-white/20 text-white" 
                                                    : "bg-gray-100 text-gray-600"
                                                }`}>
                                                    {module.questions} Qs
                                                </div>
                                            </div>
                                            <h3 className={`text-xl font-bold mb-2 ${
                                                selectedModule === module.id ? "text-white" : "text-gray-800"
                                            }`}>
                                                {module.name}
                                            </h3>
                                            <p className={`text-sm ${
                                                selectedModule === module.id ? "text-white/90" : "text-gray-600"
                                            }`}>
                                                {module.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Assessment Settings */}
                                {selectedModule && (
                                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-6">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                                            Start Your Assessment
                                        </h3>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                                    <span className="text-gray-700 font-medium">Questions:</span>
                                                    <select
                                                        value={questionCount}
                                                        onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                                                        className="border-2 border-gray-200 rounded-xl px-4 py-2 outline-none focus:border-indigo-500 bg-white"
                                                    >
                                                        <option value={5}>5 Questions</option>
                                                        <option value={10}>10 Questions</option>
                                                        <option value={15}>15 Questions</option>
                                                        <option value={20}>20 Questions</option>
                                                        <option value={25}>25 Questions</option>
                                                    </select>
                                                </div>
                                                
                                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                                    <span className="text-gray-700 font-medium">Time Limit:</span>
                                                    <span className="text-gray-800 font-semibold">30 minutes</span>
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                                    <span className="text-gray-700 font-medium">Difficulty:</span>
                                                    <span className="text-gray-800 font-semibold">Adaptive</span>
                                                </div>
                                                
                                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                                    <span className="text-gray-700 font-medium">Passing Score:</span>
                                                    <span className="text-gray-800 font-semibold">70%</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={startAssessment}
                                            className="w-full mt-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 shadow-lg"
                                        >
                                            🚀 Start Assessment Now
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Assessment Questions Screen */
                            <div className="max-w-4xl mx-auto h-full flex flex-col">
                                {/* Assessment Header */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800">
                                                {modules.find(m => m.id === selectedModule)?.name} Assessment
                                            </h2>
                                            <p className="text-gray-600">Test your knowledge and track your progress</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-500">Time Remaining</div>
                                            <div className={`text-2xl font-bold ${
                                                timeRemaining < 300 ? 'text-red-500' : 'text-green-500'
                                            }`}>
                                                {formatTime(timeRemaining)}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Progress Bar */}
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div 
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                                            style={{ 
                                                width: `${((currentQuestion + 1) / questionCount) * 100}%` 
                                            }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                                        <span>Question {currentQuestion + 1} of {questionCount}</span>
                                        <span>{Math.round(((currentQuestion + 1) / questionCount) * 100)}% Complete</span>
                                    </div>
                                </div>

                                {/* Question Card */}
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex-1 flex flex-col">
                                    {currentQuestions[currentQuestion] && (
                                        <>
                                            <div className="flex-1">
                                                <div className="flex items-start mb-6">
                                                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl font-bold text-lg mr-4">
                                                        Q{currentQuestion + 1}
                                                    </span>
                                                    <h3 className="text-xl font-semibold text-gray-800 flex-1">
                                                        {currentQuestions[currentQuestion].question}
                                                    </h3>
                                                </div>
                                                
                                                <div className="space-y-4">
                                                    {currentQuestions[currentQuestion].options.map((option, optIndex) => (
                                                        <label 
                                                            key={optIndex}
                                                            className={`flex items-center space-x-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                                                                answers[currentQuestions[currentQuestion].id] === optIndex
                                                                ? 'border-indigo-500 bg-indigo-50 shadow-md'
                                                                : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                                                            }`}
                                                        >
                                                            <input
                                                                type="radio"
                                                                name={`question-${currentQuestions[currentQuestion].id}`}
                                                                checked={answers[currentQuestions[currentQuestion].id] === optIndex}
                                                                onChange={() => handleAnswerSelect(currentQuestions[currentQuestion].id, optIndex)}
                                                                className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
                                                            />
                                                            <span className="text-gray-700 text-lg flex-1">{option}</span>
                                                            <div className={`w-6 h-6 rounded-full border-2 ${
                                                                answers[currentQuestions[currentQuestion].id] === optIndex
                                                                ? 'border-indigo-500 bg-indigo-500'
                                                                : 'border-gray-300'
                                                            }`}></div>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Navigation Buttons */}
                                            <div className="flex justify-between items-center pt-6 mt-6 border-t border-gray-200">
                                                <button
                                                    onClick={prevQuestion}
                                                    disabled={currentQuestion === 0}
                                                    className="px-8 py-3 bg-gray-500 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                                                >
                                                    ← Previous
                                                </button>
                                                
                                                <div className="flex gap-4">
                                                    <button
                                                        onClick={resetAssessment}
                                                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold transition-all duration-300 hover:border-red-400 hover:text-red-600"
                                                    >
                                                        Exit Assessment
                                                    </button>
                                                    
                                                    {currentQuestion === currentQuestions.length - 1 ? (
                                                        <button
                                                            onClick={submitAssessment}
                                                            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-green-600 hover:to-emerald-700 transform hover:scale-105"
                                                        >
                                                            Submit Assessment
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={nextQuestion}
                                                            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105"
                                                        >
                                                            Next Question →
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { 
                        opacity: 0; 
                        transform: translateY(10px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-in;
                }
            `}</style>
        </div>
    );
};

export default PracticeSession;