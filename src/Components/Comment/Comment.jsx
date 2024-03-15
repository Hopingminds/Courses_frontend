import React from "react";
import "./Comment.css";

const Comment = () => {
    return(
        <>
        {/* Last Section Comment-box */}
        <div className="Comment-box">
        <div className="faq-comment">
                <h3>Leave comment</h3>
                <p>Your email address will not be published. Required fields are marked.</p>
            </div>

            {/* SEction-3 FAQ form */}
            <div className="faq-form">
                <div className="form-inputs">
                    <input className="pl-2" type="text" placeholder="Name*"/>
                    <input className="pl-2" type="text" placeholder="Email*"/>
                </div>
                <div className="form-comment">
                    <textarea placeholder="Comment" className="pl-2"/>
                </div>
                <div className="form-check">
                <p><input type="checkbox"/> Save my name, email in this browser for the next time | comment</p>
                </div>
                <div className="faq-btn">
                    <button>Post comment</button>
                </div>
            </div>

            </div>
        </>
    )
}
export default Comment;