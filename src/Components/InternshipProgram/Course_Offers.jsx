import React, { useEffect, useState } from "react";
import "./Courses.css";
import { COURSESURL } from "../confidential";
import { BASE_URL } from "../../Api/api";
import { Link } from "react-router-dom";
import Skeleton from "../Skeleton/Skeletoncard";
import Internshipcard from './internshipcard'
// import { COURSESURL } from '../Confidential';

const Course_Offers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [cardsToShow, setCardsToShow] = useState(4); // State to keep track of number of cards to display
  const [showAllCards, setShowAllCards] = useState(false);
  const [courses, setcourses] = useState([]);
  const [show, setshow] = useState(false)
  useEffect(() => {
    async function Fetchdata() {
  try {
    setshow(true)
    let url = BASE_URL + "/getInternships";
    const data = await fetch(url);
    const response = await data.json();
    // console.log(response);
    setcourses(response?.courses);
    setshow(false)
  } catch (error) {
    console.log(error);
  }
    }
    Fetchdata();
  }, []);

  let filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  useEffect(() => {
    function handleResize() {
      // Check screen size and set the number of cards to show
      if (window.innerWidth <= 480) {
        setCardsToShow(4); // For screens smaller than 480px, show only 4 cards
      } else if (window.innerWidth >= 481 && window.innerWidth <= 720) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 1500 && window.innerWidth <= 1999) {
        setCardsToShow(courses?.length || 50);
      }
      else {
        setCardsToShow(courses?.length || 50);
      }
    }

    // Call handleResize initially and add event listener for resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCategoryClick = (category) => {
    
    setSelectedCategory(category);
    setSelectedCourse("");
    // setCardsToShow(4); 
  };

  const handleCourseClick = (courseTitle) => {
    setSelectedCourse(courseTitle);
  };

  const handleShowMoreLessClick = () => {
    if (showAllCards) {
      setCardsToShow(4);
    } else {
      setCardsToShow(filteredCourses.length);
    }
    setShowAllCards(!showAllCards);
  };

  return (
    <>
      {/* <h1 className='text-[40px] mt-16 font-semibold' style={{ textAlign: 'center' }}> Our Feature Courses</h1> */}

      <div className="h-[100%] w-full px-16 py-8 font-pop bg-[#E2FFF1] sm:px-4 xsm:px-2 xsm:py-4 xsm:mt-0 xsm:space-y-0 md:px-6 md:space-y-2">
        <div className="h-12 md:h-8 sm:h-8 xsm:h-fit flex w-full font-semibold space-x-10 font-pop xl:space-x-12 xsm:space-x-1 xsm:flex-nowrap xsm:gap-y-2 xsm:gap-x-[8px] xsm:justify-between xsm:text-[8px] sm:space-x-4 sm:gap-y-2 sm:text-[10px] sm:flex-wrap md:text-[12px] md:space-x-6 xsm:overflow-x-auto xsm:w-[90vw] xsm:overflow-y-hidden xsm:py-[6px]">
          {[
            "All",
            "App Development",
            "Full Stack Development",
            "AI/ML",
            "Data Science",
            "Management",
            "Networking",
            
          ].slice(0,(window.innerWidth >=320 && window.innerWidth<=480 ? 6 : 6)).map((category,index) => (
            <button
              key={category+index}
              onClick={() => handleCategoryClick(category)}
              className={
                selectedCategory === category
                  ? "px-5 py-[6px] afterclick rounded-full xsm:py-1 sm:py-[4px] xsm:px-4 whitespace-nowrap"
                  : "beforeclick whitespace-nowrap py-[6px]"
              }
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex justify-end w-full items-center xsm:hidden">
          <Link
            to={selectedCategory == "All" ? "/courses" : "/courses?category=" + selectedCategory}
            className="text-[#1DBF73] text-[16px] font-bold xsm:text-[8px] sm:text-[12px] md:text-[14px] md:pr-3"
          >
            More
          </Link>
        </div>
       
        <div className="grid grid-cols-4 xsm:grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 mt-3">
          {" "}
          {/* Changed flex to flex-wrap */}
          {
           show ? [1,2,3,4].map((item)=>{
            return(<Skeleton/>)
          }):
          filteredCourses?.slice(0, cardsToShow)?.map((val, ind) => (
            <Internshipcard
              course={val}
            // Pass category to CourseCard component
            />
          ))}
          {/* {filteredCourses.length === 1 && ( // Render additional cards if there is only one course
                        <>
                            <CourseCard 
                                title={`${selectedCategory} Course Title 2`} 
                                price="$99" 
                                duration="6 weeks"
                                slug={courses.slug} 
                                image="https://burst.shopifycdn.com/photos/laptop-from-above.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                                onClick={() => handleCourseClick(`${selectedCategory} Course Title 2`)}
                                isSelected={selectedCourse === `${selectedCategory} Course Title 2`}
                                category={selectedCategory}
                            />
                            <CourseCard 
                                title={`${selectedCategory} Course Title 3`} 
                                price="$99" 
                                duration="6 weeks" 
                                image="https://burst.shopifycdn.com/photos/laptop-from-above.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                                onClick={() => handleCourseClick(`${selectedCategory} Course Title 3`)}
                                isSelected={selectedCourse === `${selectedCategory} Course Title 3`}
                                category={selectedCategory}
                            />
                            <CourseCard 
                                title={`${selectedCategory} Course Title 4`} 
                                price="$99" 
                                duration="6 weeks" 
                                image="https://burst.shopifycdn.com/photos/laptop-from-above.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                                onClick={() => handleCourseClick(`${selectedCategory} Course Title 4`)}
                                isSelected={selectedCourse === `${selectedCategory} Course Title 4`}
                                category={selectedCategory}
                            />
                        </>
                    )} */}
        </div>
        {/* {filteredCourses?.length > 4 && ( // Render 'Show more' button if there are more than 4 courses
                    <div className="flex justify-center mt-5" style={{float:'right'}}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleShowMoreLessClick}>
                        {showAllCards ? 'Show Less' : 'Show More'}
                    </button>
                </div>
                )} */}
      </div>
    </>
  );
};

export default Course_Offers;
