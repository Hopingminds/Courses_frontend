import React, {useState} from 'react'
import "./Curriculum.css"
import arrowIcon from "../../Assets/arrow.png";
import folderIcon from "../../Assets/folder.png";



function Curriculum(props) {
let {data}=props;
// console.log(data);
// let {BeforeSubscriptiondata}=useContext(globalProvider)
// console.log(BeforeSubscriptiondata());
// console.log(temp);
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
    <div className='curriculum' id='curriculum'>
      <p>Fast track your journey to become a skilled developer in just 6 months with our best Full Stack Developer Course.</p>

      <div className='curriculum-lessons'>
{
  data?.map((item)=>{
    let {lessons}=item;
    return(<>
    <div className='lesson-container'>

<div className='lesson-container-title'>
    <div className='lesson-container-title-left'>
      <div className='icon-arrow' onClick={() => toggleVisibility('lesson1')}><img src={arrowIcon} className={isVisible.lesson1 ? 'icon-rotated' : ''}/></div>
      <p className={isVisible ? 'para-color' : ''}>{item.chapter_name}</p>
    </div>

    <div className='lesson-container-title-right'>
      <p>{item.lessons.length} lessons</p>
      <p>45 Mins</p>
    </div>
</div>

{isVisible.lesson1 && (
<div className={`lesson-container-contents ${isVisible ? 'visible' : ''}`}>

{
  lessons?.map((it)=>{
    return(<>
    <div className='lesson-container-content'>
      <div className='lesson-container-content-left'>
        <div className='icon-arrow'><img src={folderIcon}/></div>
        <p>{it.lesson_name}</p>
      </div>
      <div className='lesson-container-content-right'>
        <button>Preview</button>
        <p>{it.duration}</p>
      </div>
  </div>
    </>)
  })
}
</div>
)}
</div>
    </>)
  })
}      
     </div>
    </div>
  )
}

export default Curriculum;
