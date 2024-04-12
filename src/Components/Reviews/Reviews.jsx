import React, { useEffect, useState } from "react";
import "./Reviews.css";
import ratings from "../../Assets/ratings.png";
import emptyratings from "../../Assets/emptyratings.png";
import RatingsBar from "../ratingsBar/ratingsBar";
import profile from "../../Assets/profile.png";
import Reply from "../../Assets/Reply.png";
import Comment from "../Comment/Comment";
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
      <div className="" id="Reviews">
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
          </div>

          {/* Section-3 Ratings */}
          <div className="main-rating-box">
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
          </div>
          {/* Person Reviews */}
          {/* Box-1 */}
          <div className="person-review-1 ">
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
                This React course was fantastic! The instructor did a great job
                breaking down complex concepts into understandable pieces. The
                hands-on projects really helped solidify my understanding, and
                the quizzes after each section were a nice touch to test my
                knowledge. Highly recommended for anyone wanting to learn React!
              </div>
            </div>
          </div>

          {/* Box-2 */}
          <div className="person-review-1 ">
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
                As someone completely new to programming, I found this React
                course to be incredibly beginner-friendly. The explanations were
                clear, and the pace was just right for me. The practical
                exercises were challenging but manageable, and I feel like I've
                gained a solid foundation in React. Thank you for making this
                course accessible to beginners like me!
              </div>
            </div>
          </div>
          <div className="person-review-1 ">
            <img
              src={
                "https://as1.ftcdn.net/v2/jpg/04/76/17/70/1000_F_476177015_gPeBHCS98B39rxSfVvMdFrszvx5yKQ85.jpg"
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
                Unfortunately, this React course fell short of my expectations.
                While the content was decent, I found the explanations to be
                lacking at times, especially for more complex topics.
                Additionally, some of the code examples were outdated, which
                made it difficult to follow along. Overall, I think there are
                better options out there for learning React.
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
                I've taken several online courses before, but this React course
                stands out as one of the best. The production quality was
                top-notch, and the content was organized in a way that made it
                easy to follow along. The instructor's teaching style kept me
                engaged throughout, and I appreciated the frequent code-along
                sessions. I'll definitely be referring back to this course as I
                continue my journey with React.
              </div>
            </div>
          </div>
          <div className="person-review-1 ">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lo-kB2hXPCLHLyEOlOxPmz_hnyqg3fDCn3VTxp48OQ&s"
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
                I've been working with React for a while now, but I wanted to
                deepen my understanding and fill in any gaps in my knowledge.
                This course exceeded my expectations! The instructor covered
                advanced topics thoroughly, and I appreciated the focus on best
                practices and real-world applications. I definitely feel more
                confident in my React skills after completing this course.
              </div>
            </div>
          </div>

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
        </div>
        {/* <Comment/> */}
      </div>
      {/* Comment-box */}
      {/* <Comment/> */}
    </>
  );
}

export default Reviews;
