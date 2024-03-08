import React, { useState } from "react";
import "./Faqs.css";
import { ReactComponent as Down } from '../../Assets/Icons/Down.svg'

const Faqs = (props) => {
    const [clicked, setclicked] = useState(false)
  
let data=props.data;
// console.log(data);
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
            inner.style.display='block';
        }
    }

    return (
        <>
            <div className="faq-main" id="FAQ's">
                <div className="faq-main-container">
                    <div className="faq-container">

                        {
                            data?.map((item,ind)=>{
                                return(<>
                                    <div className="faq-box cursor-pointer" onClick={()=>ClickSection(ind)}>
                            <h3>{item.question}</h3>
                            <Down/>
                        </div>
                        <div id={ind} className="faq-box-descrip" style={{ display: "none" }}>
                            {/* <h3>What does Royalty mean?</h3> */}
                            <p>{item.answer}</p>
                        </div>
                                </>)
                            })
                        }
                    
                        
                        
                    </div>
                </div>
                {/* Section-2 FAQ Comment */}
                {/* <div className="faq-comment">
                    <h3>Leave comment</h3>
                    <p>Your email address will not be published. Required fields are marked.</p>
                </div> */}

                {/* SEction-3 FAQ form */}
                {/* <div className="faq-form">
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
                </div> */}
            </div>
        </>
    );
};

export default Faqs;
