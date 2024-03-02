import React, {useState} from 'react'
import "./Curriculum.css"
import arrowIcon from "../../Assets/arrow.png";
import folderIcon from "../../Assets/folder.png";


function Curriculum() {

  const [isVisible, setIsVisible] = useState({
    lesson1: false,
    lesson2: false,
  });

  const toggleVisibility = (displayLesson) => {
    setIsVisible(prev => ({
      ...prev,
      [displayLesson]: !prev[displayLesson]
    }));
  };


  return (
    <div className='curriculum'>
      <p>Fast track your journey to become a skilled developer in just 6 months with our best Full Stack Developer Course.</p>

      <div className='curriculum-lessons'>

        {/* lesson container - 1 */}
      <div className='lesson-container'>

      <div className='lesson-container-title'>
          <div className='lesson-container-title-left'>
            <div className='icon-arrow' onClick={() => toggleVisibility('lesson1')}><img src={arrowIcon} className={isVisible.lesson1 ? 'icon-rotated' : ''}/></div>
            <p className={isVisible ? 'para-color' : ''}>Lessons With Video Content</p>
          </div>

          <div className='lesson-container-title-right'>
            <p>5 lessons</p>
            <p>45 Mins</p>
          </div>
      </div>

      {isVisible.lesson1 && (
      <div className={`lesson-container-contents ${isVisible ? 'visible' : ''}`}>

        <div className='lesson-container-content'>
            <div className='lesson-container-content-left'>
              <div className='icon-arrow'><img src={folderIcon}/></div>
              <p>Lessons with video Content</p>
            </div>
            <div className='lesson-container-content-right'>
              <button>Preview</button>
              <p>12:30</p>
            </div>
        </div>


        <div className='lesson-container-content'>
            <div className='lesson-container-content-left'>
              <div className='icon-arrow'><img src={folderIcon} /></div>
              <p>Lessons with video Content</p>
            </div>
            <div className='lesson-container-content-right'>
              <button>Preview</button>
              <p>12:30</p>
            </div>
        </div>
      </div>
      )}
      </div>


      {/* lesson container - 2 */}
        <div className='lesson-container'>

          <div className='lesson-container-title'>
              <div className='lesson-container-title-left'>
                <div className='icon-arrow' onClick={() => toggleVisibility('lesson2')}><img src={arrowIcon} className={isVisible.lesson2 ? 'icon-rotated' : ''}/></div>
                <p className={isVisible ? 'para-color' : ''}>Lessons With Video Content</p>
              </div>

              <div className='lesson-container-title-right'>
                <p>5 lessons</p>
                <p>45 Mins</p>
              </div>
          </div>

        {isVisible.lesson2 && (
          <div className={`lesson-container-contents ${isVisible ? 'visible' : ''}`}>

            <div className='lesson-container-content'>
                <div className='lesson-container-content-left'>
                  <div className='icon-arrow'><img src={folderIcon}/></div>
                  <p>Lessons with video Content</p>
                </div>
                <div className='lesson-container-content-right'>
                  <button>Preview</button>
                  <p>12:30</p>
                </div>
            </div>
            
            <div className='lesson-container-content'>
                <div className='lesson-container-content-left'>
                  <div className='icon-arrow'><img src={folderIcon} /></div>
                  <p>Lessons with video Content</p>
                </div>
                <div className='lesson-container-content-right'>
                  <button>Preview</button>
                  <p>12:30</p>
                </div>
            </div>


            <div className='lesson-container-content'>
                <div className='lesson-container-content-left'>
                  <div className='icon-arrow'><img src={folderIcon} /></div>
                  <p>Lessons with video Content</p>
                </div>
                <div className='lesson-container-content-right'>
                  <button>Preview</button>
                  <p>12:30</p>
                </div>
            </div>
         </div>
        )}
      </div>
     </div>
    </div>
  )
}

export default Curriculum;
