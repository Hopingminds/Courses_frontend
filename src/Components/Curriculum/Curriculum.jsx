import React, {useState} from 'react'
import "./Curriculum.css"
import arrowIcon from "../../Assets/arrow.png";
import folderIcon from "../../Assets/folder.png";


function Curriculum() {

  const [clicked, setclicked] = useState(false);

  function ClickSection(id){
    if(!clicked){
        setclicked(true);
        let inner = document.getElementById(id);
        // console.log(inner);
        inner.style.display='none';
    }
    else{
        setclicked(false)
        let inner = document.getElementById(id);

        // console.log(inner);
        inner.style.display='flex';
    }
}


  return (
    <div className='curriculum font-nu' id='curriculum'>
      <p className='curriculum-content'>Fast track your journey to become a skilled developer in just 6 months with our best Full Stack Developer Course.</p>

      <div className='curriculum-lessons'>

        {/* lesson container - 1 */}
      <div className='lesson-container'>

      <div className='lesson-container-title' onClick={()=>ClickSection(1)}>
          <div className='lesson-container-title-left'>
            <div className='icon-arrow' ><img src={arrowIcon} /></div>
            <p >Introduction to react</p>
          </div>

          <div className='lesson-container-title-right'>
            <p>5 lessons</p>
            <p>45 Mins</p>
          </div>
      </div>

      
      <div className='lesson-container-contents' id={1}>

        <div className='lesson-container-content'>
            <div className='lesson-container-content-left'>
              <div className='icon-arrow'><img src={folderIcon}/></div>
              <p className='font-nu text-[14px]'>Lessons with video Content</p>
            </div>
            <div className='lesson-container-content-right'>
              <button>Preview</button>
              <p>12:30</p>
            </div>
        </div>


        <div className='lesson-container-content'>
            <div className='lesson-container-content-left'>
              <div className='icon-arrow'><img src={folderIcon} /></div>
              <p className='font-nu text-[14px]'>Lessons with video Content</p>
            </div>
            <div className='lesson-container-content-right'>
              <button>Preview</button>
              <p>12:30</p>
            </div>
        </div>
      </div>
      </div>

      <div className='lesson-container'>

      <div className='lesson-container-title' onClick={()=>ClickSection(2)}>
          <div className='lesson-container-title-left'>
            <div className='icon-arrow' ><img src={arrowIcon} /></div>
            <p >Introduction to react</p>
          </div>

          <div className='lesson-container-title-right'>
            <p>5 lessons</p>
            <p>45 Mins</p>
          </div>
      </div>

      
      <div className='lesson-container-contents' id={2}>

        <div className='lesson-container-content'>
            <div className='lesson-container-content-left'>
              <div className='icon-arrow'><img src={folderIcon}/></div>
              <p className='font-nu text-[14px]'>Lessons with video Content</p>
            </div>
            <div className='lesson-container-content-right'>
              <button>Preview</button>
              <p>12:30</p>
            </div>
        </div>


        <div className='lesson-container-content'>
            <div className='lesson-container-content-left'>
              <div className='icon-arrow'><img src={folderIcon} /></div>
              <p className='font-nu text-[14px]'>Lessons with video Content</p>
            </div>
            <div className='lesson-container-content-right'>
              <button>Preview</button>
              <p>12:30</p>
            </div>
        </div>
      </div>
      </div>


     </div>
    </div>
  )
}

export default Curriculum;
