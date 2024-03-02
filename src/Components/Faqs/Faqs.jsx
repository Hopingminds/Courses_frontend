import React from "react";
import "./Faqs.css";
import downIcon from "../../Assets/downIcon.png";

const Faqs = () => {
    const toggleDescription = (event) => {
        const faqBoxDescrip = event.target.parentElement.nextElementSibling;
        faqBoxDescrip.style.display = faqBoxDescrip.style.display === "block" ? "none" : "block";
    };

    return (
        <>
            <div className="faq-main">
                <div className="faq-main-container">
                    <div className="faq-container">
                        <div className="faq-box">
                            <h3>What does Royalty mean?</h3>
                            <img src={downIcon} alt="down-arrow" className="h-2 w-4 bg-slate-600" onClick={toggleDescription} />
                        </div>
                        <div className="faq-box-descrip" style={{ display: "none" }}>
                            <h3>What does Royalty mean?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, et eligendi illum eaque ex iusto quisquam esse. Quae commodi hic ipsam officiis consequuntur.</p>
                        </div>
                        <div className="faq-box">
                            <h3>What does Royalty mean?</h3>
                            <img src={downIcon} alt="down-arrow" onClick={toggleDescription} />
                        </div>
                        <div className="faq-box-descrip" style={{ display: "none" }}>
                            <h3>What does Royalty mean?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, et eligendi illum eaque ex iusto quisquam esse. Quae commodi hic ipsam officiis consequuntur.</p>
                        </div>
                        <div className="faq-box">
                            <h3>What does Royalty mean?</h3>
                            <img src={downIcon} alt="down-arrow" onClick={toggleDescription} />
                        </div>
                        <div className="faq-box-descrip" style={{ display: "none" }}>
                            <h3>What does Royalty mean?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, et eligendi illum eaque ex iusto quisquam esse. Quae commodi hic ipsam officiis consequuntur.</p>
                        </div>
                        
                    </div>
                </div>
                {/* Section-2 FAQ Comment */}
                <div className="faq-comment">
                    <h3>Leave comment</h3>
                    <p>Your email address will not be published. Required fields are marked.</p>
                </div>

                {/* SEction-3 FAQ form */}
                <div className="faq-form">
                    <div className="form-inputs">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="form-comment">
                        <input type="text" placeholder="Comment" />
                    </div>
                    <div className="form-check">
                        <span><input type="checkbox" />Save my name, email in this browser for the next time | comment</span>
                    </div>
                    <div className="faq-btn">
                        <button>Post comment</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faqs;
