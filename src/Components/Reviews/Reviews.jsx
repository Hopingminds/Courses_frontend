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
                        <span><h2>4.0</h2></span>
                        <div className="img">
                            <div className="flex mt-5 xsm:mt-0 md:mt-0"><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /></div>
                            <p className="review-head-rating">based on 146,951 ratings</p>
                        </div>

                    </div>

                    {/* Section-3 Ratings */}
                    <div className="main-rating-box">
                        <div className="ratings-box">
                            <div className="ratings">
                                <img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><span>90%</span>
                            </div>
                            <div className="ratings">
                                <img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><span>5%</span>
                            </div>
                            <div className="ratings">
                                <img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><span>2%</span>
                            </div>
                            <div className="ratings">
                                <img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><span>2%</span>
                            </div>
                            <div className="ratings">
                                <img src={ratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><span>10%</span>
                            </div>
                        </div>
                        <div className="ratings-box-value">
                            <RatingsBar />
                        </div>
                    </div>
                    {/* Person Reviews */}
                    {/* Box-1 */}
                    <div className="person-review-1 ">
                        <img src={profile} alt="profile" />
                        <div className="person-content space-y-2 xsm:space-y-0">
                            <div className="person-review-box">
                                <span className="h-1">Laura Hipster</span>
                                <span className="h-2">October 03, 2022</span>
                            </div>
                            <div className="content-para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt odit quod adipisci obcaecati esse cum totam quia aliquam vitae sequi, consequatur delectus officia perspiciatis voluptatem libero? Culpa, maiores? Ratione quod suscipit delectus. Error mollitia molestias doloribus ad vero perspiciatis ipsam, sequi consequuntur recusandae suscipit optio provident iure sunt nemo.</div>
                            <div className="h-3">
                                <img src={Reply} alt="reply" />
                                <span>Reply</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Box-2 */}
                    <div className="person-review-1 ">
                        <img src={profile} alt="profile" />
                        <div className="person-content space-y-2 xsm:space-y-0">
                            <div className="person-review-box">
                                <span className="h-1">Laura Hipster</span>
                                <span className="h-2">October 03, 2022</span>
                            </div>
                            <div className="content-para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt odit quod adipisci obcaecati esse cum totam quia aliquam vitae sequi, consequatur delectus officia perspiciatis voluptatem libero? Culpa, maiores? Ratione quod suscipit delectus. Error mollitia molestias doloribus ad vero perspiciatis ipsam, sequi consequuntur recusandae suscipit optio provident iure sunt nemo.</div>
                            <div className="h-3">
                                <img src={Reply} alt="reply" />
                                <span>Reply</span>
                            </div>
                        </div>
                    </div>

                    <div className='Reviews-pages'>
                        <button type='submit' >
                            <img src="../Icons/leftarrow.svg" alt="left-arrow"></img>
                        </button>
                        <button type='submit' >
                            1
                        </button>
                        <button type='submit' >
                            2
                        </button>
                        <button type='submit' >
                            3
                        </button>
                        <button type='submit' >
                            <img src="../Icons/rightarrow.svg" alt="right-arrow"></img>
                        </button>
                    </div>

                </div>
                {/* <Comment/> */}

            </div>
            {/* Comment-box */}
            {/* <Comment/> */}
        </>
    );
}

export default Reviews;
