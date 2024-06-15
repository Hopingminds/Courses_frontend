import React, {useState} from "react";
import { Link } from "react-router-dom";

const Instruction = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

  return (
    <div className="flex flex-col gap-8 p-[5%] py-10 font-pop">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-[#1dbf73] font-bold">
          General Instructions
        </h1>
        <ul className="list-inside pl-6 flex flex-col gap-2">
          <li>The duration of the examinatio is 20 minutes.</li>
          <li>Read all questions carefully before answering.</li>
          <li>Answer all questions in the space provided.</li>
          <li>
            Manage your time wisely; note the point value of each question.
          </li>
          <li>Review your answers before submitting the exam.</li>
          <li>
            Do not switch tabs during the exam. You will receive a warning each
            time you switch tabs.
          </li>
          <li>
            After receiving three warnings for switching tabs, your exam will be
            terminated.
          </li>
          <li>
            Camera detection is active during the exam. Ensure your camera is on
            and functioning properly.
          </li>
          <li>
            Only one person is allowed in the camera frame. Having more than one
            person will result in disqualification.
          </li>
          <li>
            Do not press any keys on the keyboard unless instructed to do so.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-[#1dbf73] font-bold ">
          Answering a Question
        </h1>
        <p>
          For multiple-choice questions (MCQs):
          <ol className="list-inside list-decimal pl-6 flex flex-col gap-2 mt-2">
            <li>Read each question thoroughly before selecting an answer.</li>
            <li>Select the best possible answer from the given options.</li>
            <li>
              Use the mouse to click on the radio button or checkbox
              corresponding to your choice.
            </li>
            <li>
              Ensure your selection is saved before moving to the next question.
            </li>
            <li>
              If you need to change an answer, click on a different option or
              clear your previous selection if allowed.
            </li>
          </ol>
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <input 
          type='checkbox' 
          id='declaration' 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
        />
        <label htmlFor='declaration'>
          I declare that I have read and understood the instructions, and I agree to abide by the rules.
        </label>
      </div>
      <div>
      <Link to='/modules'
        className={`mt-4 px-4 py-2 bg-[#1dbf73] text-white font-bold rounded ${isChecked ? '' : 'opacity-50 cursor-not-allowed'}`} 
        disabled={!isChecked}
      >
        Ready to Begin
      </Link>
      </div>
    </div> 
  );
};

export default Instruction;
 