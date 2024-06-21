import React, { useEffect, useState } from "react";
import "./Reviews.css";

import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Api/api";

function Reviews() {
  const [Data, setData] = useState();
  const params = useParams();
  useEffect(() => {
    async function Fetchdata() {
      let url = BASE_URL + "/course/" + params.slug;
      const data = await fetch(url);
      const response = await data.json();
      console.log(response);
      setData(response.course);
      // console.log(response.course.curriculum);
      // setVideoUrl(response?.course?.curriculum[0]?.lessons[0]?.video);
    }
    Fetchdata();
  }, []);
  return (
    <>
      {/* <div className="" id="Reviews">
        <div className="reviews">
          <h3>Comments</h3>
          <div className="review-head">
            <span>
              <h2>5.0</h2>
            </span>
            <div className="img">
              <div className="flex mt-5 xsm:mt-0 md:mt-0">
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
              </div>
              <p className="review-head-rating">based on 1,469 ratings</p>
            </div>
          </div> */}

          {/* Section-3 Ratings */}
          {/* <div className="main-rating-box">
            <div className="ratings-box">
              <div className="ratings">
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
                <span>90%</span>
              </div>
              <div className="ratings">
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
                <img src={emptyratings} alt="ratings" />
                <span>5%</span>
              </div>
              <div className="ratings">
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
                <img src={emptyratings} alt="ratings" />
                <img src={emptyratings} alt="ratings" />
                <span>2%</span>
              </div>
              <div className="ratings">
                <img src={ratings} alt="ratings" />
                <img src={ratings} alt="ratings" />
                <img src={emptyratings} alt="ratings" />
                <img src={emptyratings} alt="ratings" />
                <img src={emptyratings} alt="ratings" />
                <span>2%</span>
              </div>
              <div className="ratings">
                <img src={ratings} alt="ratings" />
                <img src={emptyratings} alt="ratings" />
                <img src={emptyratings} alt="ratings" />
                <img src={emptyratings} alt="ratings" />
                <img src={emptyratings} alt="ratings" />
                <span>10%</span>
              </div>
            </div>
            <div className="ratings-box-value">
              <RatingsBar />
            </div>
          </div> */}
          {/* Person Reviews */}
          {/* Box-1 */}
          {/* <div className="person-review-1 ">
            <img
              src={
                "https://i.pinimg.com/550x/7a/74/49/7a744949cbdb01fca6fa3a9df9d1259c.jpg"
              }
              alt="profile"
              className="object-cover"
            />
            <div className="person-content space-y-2 xsm:space-y-0">
              <div className="person-review-box">
                <span className="h-1">Ayushi Srivastava</span>
                <span className="h-2">October 03, 2022</span>
              </div>
              <div className="content-para1">
              This course was fantastic! The instructor did a great job breaking down complex concepts into understandable pieces. The hands-on projects really helped solidify my understanding, and the quizzes after each section were a nice touch to test my knowledge. Highly recommended for anyone wanting to deepen their expertise!
              </div>
            </div>
          </div> */}

          {/* Box-2 */}
          {/* <div className="person-review-1 ">
            <img
              src={
                "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg"
              }
              alt="profile"
              className="object-cover"
            />
            <div className="person-content space-y-2 xsm:space-y-0">
              <div className="person-review-box">
                <span className="h-1">Prakash Patel</span>
                <span className="h-2">June 15, 2023</span>
              </div>
              <div className="content-para1">
              Absolutely enlightening experience! The instructor managed to simplify challenging topics and provided thorough hands-on practice. The projects were engaging and significantly enhanced my learning, while the quizzes effectively tested my grasp of the material. This course is a must for anyone looking to advance their skills.
              </div>
            </div>
          </div>
          <div className="person-review-1 ">
            <img
              src={
                Blank
              }
              alt="profile"
              className="object-cover"
            />
            <div className="person-content space-y-2 xsm:space-y-0">
              <div className="person-review-box">
                <span className="h-1">Laxmikant </span>
                <span className="h-2">June 15, 2023</span>
              </div>
              <div className="content-para1">
              I thoroughly enjoyed this course! The teaching method was excellent, making difficult topics easy to understand. The real-world projects added immense value, and the periodic quizzes were great for reinforcing what we learned. Highly recommended for anyone interested in expanding their knowledge base!
              </div>
            </div>
          </div>
          <div className="person-review-1 ">
            <img
              src={
                "https://www.shutterstock.com/image-photo/young-student-carrying-his-backpack-600nw-1042491547.jpg"
              }
              alt="profile"
              className="object-cover"
            />
            <div className="person-content space-y-2 xsm:space-y-0">
              <div className="person-review-box">
                <span className="h-1">Anurag Shukla</span>
                <span className="h-2">january 15, 2023</span>
              </div>
              <div className="content-para1">
              Superb course with an excellent curriculum! The instructor was very knowledgeable and presented the material in an easy-to-follow manner. Practical assignments were particularly useful, and the quizzes helped consolidate the information learned. Anyone looking to master new skills should consider this course.
              </div>
            </div>
          </div>
          <div className="person-review-1 ">
            <img
              src={
                Blank
              }
              alt="profile"
              className="object-cover"
            />
            <div className="person-content space-y-2 xsm:space-y-0">
              <div className="person-review-box">
                <span className="h-1">Avina Sharma</span>
                <span className="h-2">August 2, 2023</span>
              </div>
              <div className="content-para1">
              Outstanding course! The clear explanations of complex principles were impressive, and the hands-on challenges deepened my understanding significantly. The inclusion of quizzes after each section was a thoughtful touch that helped reinforce the learning. Highly recommend this course to anyone eager to learn and grow!
              </div>
            </div>
          </div> */}

          {/* <div className="Reviews-pages">
            <button type="submit">
              <img src="../Icons/leftarrow.svg" alt="left-arrow"></img>
            </button>
            <button type="submit">1</button>
            <button type="submit">2</button>
            <button type="submit">3</button>
            <button type="submit">
              <img src="../Icons/rightarrow.svg" alt="right-arrow"></img>
            </button>
          </div> */}
        {/* </div> */}
        {/* <Comment/> */}
      {/* </div> */}
      {/* Comment-box */}
      {/* <Comment/> */}
    </>
  );
}

export default Reviews;
