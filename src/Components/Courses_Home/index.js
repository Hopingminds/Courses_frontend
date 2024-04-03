import React, { useEffect, useState } from "react";
import "./Courses.css";
import CourseCard from "./CourseCard";
import { COURSESURL } from "../confidential";
import { BASE_URL } from "../../Api/api";
import { Link } from "react-router-dom";
// import { COURSESURL } from '../Confidential';

const Courses_Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [cardsToShow, setCardsToShow] = useState(4); // State to keep track of number of cards to display
  const [showAllCards, setShowAllCards] = useState(false);
  const [courses, setcourses] = useState([]);

  useEffect(() => {
    async function Fetchdata() {
      let url = BASE_URL + "/courses";
      const data = await fetch(url);
      const response = await data.json();
      console.log(response);
      setcourses(response.courses);
    }
    Fetchdata();
  }, []);

  let filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

      useEffect(() => {
        function handleResize() {
          // Check screen size and set the number of cards to show
          if (window.innerWidth <= 480) {
            setCardsToShow(3); // For screens smaller than 480px, show only 4 cards
          } else {
            setCardsToShow(4); // For larger screens, show 4 cards
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

<<<<<<< HEAD
      <div className="h-[100%] w-full px-20 py-8 mt-12 font-pop bg-[#E2FFF180] space-y xsm:px-2 xsm:py-4 xsm:mt-0 xsm:space-y-0 md:px-10 md:space-y-2">
        <div className="flex w-full font-semibold space-x-14 font-pop xl:space-x-12 xsm:space-x-2 xsm:flex-wrap xsm:gap-y-2 xsm:gap-x-[1px] xsm:justify-between xsm:text-[8px] md:text-[12px] md:space-x-6">
=======
      <div className="h-[100%] w-full px-20 py-8 mt-12 font-pop bg-[#E2FFF1] space-y-5 xsm:px-2 xsm:py-4 xsm:mt-0 xsm:space-y-0 md:px-10 md:space-y-2">
        <div className="flex w-full space-x-10 font-pop xl:space-x-12 xsm:space-x-2 xsm:flex-wrap xsm:gap-y-2 xsm:gap-x-[1px] xsm:justify-between xsm:text-[8px] md:text-[12px] md:space-x-6">
>>>>>>> 17f8a82f79d917352bdffd61aeae8c2ad38227f8
          {[
            "All Courses",
            "Full Stack Development",
            "AI & ML",
            "Data science",
            "Cyber Security",
            "Management",
          ].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={
                selectedCategory === category
                  ? "px-3 py-2 afterclick rounded-full xsm:py-1"
                  : "beforeclick"
              }
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex justify-end w-full items-center">
          {/* <div className="text-4xl font-semibold mt-3 xsm:text-[8px] xsm:mt-0 xsm:ml-2">
        <div className="flex justify-between w-full items-center">
          <div className="text-4xl font-semibold mt-3 xsm:text-[8px] xsm:mt-0 xsm:ml-2 md:text-[20px]">
            {selectedCategory}
          </div> */}
          <Link
            to={"/course"}
            className="text-[#1DBF73] text-[16px] font-bold xsm:text-[8px] md:text-[16px]"
          >
            See all
          </Link>
        </div>
        {/* <div className="text-[#333333] text-[20px] mt-1">Our training covers everything you need for a successful career, from basic job skills to advanced tech know-how.</div> */}
<<<<<<< HEAD
        <div className="my-6  grid grid-cols-4 gap-6 xsm:grid-cols-3 xsm:gap-3 xsm:my-[2%]">
=======
        <div className="my-10  grid grid-cols-4 gap-4 xsm:grid-cols-3 xsm:gap-3 xsm:my-[2%]">
>>>>>>> 17f8a82f79d917352bdffd61aeae8c2ad38227f8
          {" "}
          {/* Changed flex to flex-wrap */}
          {filteredCourses?.slice(0, cardsToShow)?.map((course,ind) => (
            <CourseCard
              key={course.title}
              title={course.title}
              featured_video={course.featured_video}
              price={course.base_price}
              firstName={course.instructor.firstName}
              lastName={course.instructor.lastName}
              duration={course.duration}
              image={course.featured_image}
              slug={course.slug}
              onClick={() => handleCourseClick(course.title)}
              isSelected={selectedCourse === course.title}
              category={course.category}
              description={course.whatWillILearn}
              ind={ind}
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

export default Courses_Home;
