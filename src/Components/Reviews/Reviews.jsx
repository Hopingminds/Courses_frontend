import React from "react";
import "./Reviews.css";
import ratings from "../../Assets/ratings.png";
import emptyratings from "../../Assets/emptyratings.png";
import RatingsBar from "../ratingsBar/ratingsBar";
import profile from "../../Assets/profile.png";
import Reply from "../../Assets/Reply.png";
import Comment from "../Comment/Comment";


const Reviews = () => {
    return (
        <>
        <div className="" id="Reviews">
            <div className="reviews">
                <h3>Comments</h3>
                <div className="review-head">
                    <span><h2>4.0</h2></span>
                    <div className="img">
                        <div className="flex mt-5"><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /></div>
                        <div>based on 146,951 ratings</div>
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
                            <img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><span>2%</span>
                        </div>
                        <div className="ratings">
                            <img src={ratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><span>2%</span>
                        </div>
                        <div className="ratings">
                            <img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><span>90%</span>
                        </div>
                    </div>
                    <div className="ratings-box-value">
                        <RatingsBar />
                    </div>
                </div>
                {/* Person Reviews */}
                {/* Box-1 */}
                    <div className="person-review-1 ">
                        <img src = {profile} alt = "profile"/>
                        <div className="person-content">
                            <div className="person-review-box">
                                <span className="h-1">nnn</span>
                                <span className="h-2">kkkl</span>
                            </div>
                            <span className="content-para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt odit quod adipisci obcaecati esse cum totam quia aliquam vitae sequi, consequatur delectus officia perspiciatis voluptatem libero? Culpa, maiores? Ratione quod suscipit delectus. Error mollitia molestias doloribus ad vero perspiciatis ipsam, sequi consequuntur recusandae suscipit optio provident iure sunt nemo.</span>
                            <div className="h-3">
                                <img src={Reply} alt="reply"/>
                                <span>Reply</span>
                            </div>
                    </div>
                </div>
                    <div className="person-review-1">
                        <img src = {profile} alt = "profile"/>
                        <div className="person-content">
                            <div className="person-review-box">
                                <span className="h-1">nnn</span>
                                <span className="h-2">kkkl</span>
                            </div>
                            <span className="content-para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt odit quod adipisci obcaecati esse cum totam quia aliquam vitae sequi, consequatur delectus officia perspiciatis voluptatem libero? Culpa, maiores? Ratione quod suscipit delectus. Error mollitia molestias doloribus ad vero perspiciatis ipsam, sequi consequuntur recusandae suscipit optio provident iure sunt nemo.</span>
                            <div className="h-3 ">
                                <img src={Reply} alt="reply"/>
                                <span>Reply</span>
                            </div>
                        </div>
                    </div>
                    <div className="person-review-1">
                        <img src = {profile} alt = "profile"/>
                        <div className="person-content">
                            <div className="person-review-box">
                                <span className="h-1">nnn</span>
                                <span className="h-2">kkkl</span>
                            </div>
                            <span className="content-para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt odit quod adipisci obcaecati esse cum totam quia aliquam vitae sequi, consequatur delectus officia perspiciatis voluptatem libero? Culpa, maiores? Ratione quod suscipit delectus. Error mollitia molestias doloribus ad vero perspiciatis ipsam, sequi consequuntur recusandae suscipit optio provident iure sunt nemo.</span>
                            <div className="h-3">
                                <img src={Reply} alt="reply"/>
                                <span>Reply</span>
                            </div>
                        </div>
                    </div>
                {/* Box-2 */}
            
            </div>
            {/* <Comment/> */}

            </div>
             {/* Comment-box */}
            
        </>
    )
}

export default Reviews;
