import React, { useState } from "react";

const modules = [
    {
        name: "Module 1: Basics",
        questions: [
            { id: 1, title: "Hello World", difficulty: "Easy", description: "Write a program that prints 'Hello, World!'", code: "// Your code here\nconsole.log('Hello, World!');" },
            { id: 2, title: "Variables and Data Types", difficulty: "Easy", description: "Create variables of different data types and print them", code: "// Define variables here\nlet name = 'John';\nlet age = 25;" },
        ],
    },
    {
        name: "Module 2: Control Flow",
        questions: [
            { id: 3, title: "If-Else Practice", difficulty: "Easy", description: "Check if a number is positive, negative, or zero", code: "function checkNumber(num) {\n  // Your code here\n}" },
            { id: 4, title: "Loops Challenge", difficulty: "Medium", description: "Print numbers from 1 to 10 using different loops", code: "// Use for loop, while loop, and do-while loop" },
        ],
    },
    {
        name: "Module 3: Functions",
        questions: [
            { id: 5, title: "Function Basics", difficulty: "Easy", description: "Create a function that adds two numbers", code: "function add(a, b) {\n  // Return sum\n}" },
            { id: 6, title: "Recursion", difficulty: "Hard", description: "Calculate factorial using recursion", code: "function factorial(n) {\n  // Your recursive code here\n}" },
        ],
    },
];

const Coding = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [userCode, setUserCode] = useState("");
    const [isTestActive, setIsTestActive] = useState(false);
    const [testResults, setTestResults] = useState(null);

    const handleStartTest = (question) => {
        setSelectedQuestion(question);
        setUserCode(question.code);
        setIsTestActive(true);
        setTestResults(null);
    };

    const handleCloseTest = () => {
        setIsTestActive(false);
        setSelectedQuestion(null);
        setUserCode("");
        setTestResults(null);
    };

    const handleRunCode = () => {
        // Simulate code execution and testing
        const isCorrect = Math.random() > 0.3; // Random success for demo
        setTestResults({
            passed: isCorrect,
            message: isCorrect 
                ? "🎉 All tests passed! Great job!" 
                : "❌ Some tests failed. Try again!",
            output: isCorrect 
                ? "Hello, World!\nTest cases: 5/5 passed" 
                : "Expected: 'Hello, World!'\nGot: 'Hello World'\nTest cases: 3/5 passed"
        });
    };

    const handleSubmitCode = () => {
        const isPerfect = Math.random() > 0.5;
        setTestResults({
            passed: isPerfect,
            message: isPerfect 
                ? "🏆 Perfect! Code submitted successfully!" 
                : "⚠️ Code submitted with some test failures",
            output: isPerfect 
                ? "All test cases passed! Score: 100%" 
                : "Some test cases failed. Score: 70%"
        });
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case "Easy": return "bg-green-100 text-green-800 border-green-200";
            case "Medium": return "bg-orange-100 text-orange-800 border-orange-200";
            case "Hard": return "bg-red-100 text-red-800 border-red-200";
            default: return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-gray-800 bg-clip-text text-transparent mb-4">
                    Coding Challenges
                </h1>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                    Master programming concepts through hands-on practice. Solve problems module by module.
                </p>
            </header>

            {/* Modules */}
            {modules.map((module, idx) => (
                <div 
                    key={idx} 
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 mb-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
                >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-4 border-green-500 inline-block">
                        {module.name}
                    </h3>
                    
                    <div className="overflow-hidden rounded-xl shadow-sm">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-green-500 text-white">
                                    <th className="text-left py-4 px-4 font-semibold text-sm">#</th>
                                    <th className="text-left py-4 px-4 font-semibold text-sm">Question Title</th>
                                    <th className="text-left py-4 px-4 font-semibold text-sm">Difficulty</th>
                                    <th className="text-left py-4 px-4 font-semibold text-sm">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {module.questions.map((q, qIdx) => (
                                    <tr 
                                        key={q.id} 
                                        className={`transition-colors duration-200 cursor-pointer ${
                                            qIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                        } hover:bg-green-50`}
                                    >
                                        <td className="py-4 px-4 text-gray-700 font-medium">
                                            {qIdx + 1}
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="font-semibold text-gray-800">
                                                {q.title}
                                            </div>
                                            <div className="text-sm text-gray-600 mt-1">
                                                {q.description}
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(q.difficulty)}`}>
                                                {q.difficulty}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <button 
                                                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                                                onClick={() => handleStartTest(q)}
                                            >
                                                Start Test
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}

            {/* Test Modal */}
            {isTestActive && selectedQuestion && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-green-500 to-gray-800 text-white p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">
                                        {selectedQuestion.title}
                                    </h2>
                                    <p className="text-green-100 opacity-90">
                                        {selectedQuestion.description}
                                    </p>
                                </div>
                                <button 
                                    onClick={handleCloseTest}
                                    className="text-white hover:text-gray-200 text-3xl font-light transition-colors duration-200"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                        
                        {/* Modal Content */}
                        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                            {/* Code Editor */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                    Your Code:
                                </h3>
                                <textarea
                                    value={userCode}
                                    onChange={(e) => setUserCode(e.target.value)}
                                    className="w-full h-80 font-mono text-sm border border-gray-300 rounded-lg p-4 resize-y bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                    spellCheck="false"
                                />
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <button 
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                                    onClick={handleRunCode}
                                >
                                    Run Code
                                </button>
                                <button 
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                                    onClick={handleSubmitCode}
                                >
                                    Submit
                                </button>
                                <button 
                                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                                    onClick={() => setUserCode(selectedQuestion.code)}
                                >
                                    Reset
                                </button>
                            </div>
                            
                            {/* Test Results */}
                            {testResults && (
                                <div className={`p-4 rounded-xl border-2 ${
                                    testResults.passed 
                                        ? 'bg-green-50 border-green-200 text-green-800' 
                                        : 'bg-red-50 border-red-200 text-red-800'
                                }`}>
                                    <h4 className="font-semibold text-lg mb-2">
                                        {testResults.message}
                                    </h4>
                                    <pre className="font-mono text-sm whitespace-pre-wrap mt-2">
                                        {testResults.output}
                                    </pre>
                                </div>
                            )}
                            
                            {/* Tips Section */}
                            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                    <span className="text-xl mr-2">💡</span>
                                    Tips for Success
                                </h4>
                                <ul className="text-gray-600 space-y-1">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        Read the problem statement carefully
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        Test your code with different inputs
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        Check for edge cases
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        Make sure your output matches the expected format
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Coding;