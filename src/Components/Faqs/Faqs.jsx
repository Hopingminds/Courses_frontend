import React, { useEffect, useState } from "react";
import "./Faqs.css";
import { ReactComponent as Down } from '../../Assets/Icons/Down.svg'
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Api/api";

const Faqs = () => {
    const [clicked, setclicked] = useState(false)
    const [Data, setData] = useState();
    const params = useParams();
    useEffect(() => {
      async function Fetchdata() {
      try {
        let url = BASE_URL + "/course/" + params.slug;
        const data = await fetch(url);
        const response = await data.json();
        // console.log(response);
        setData(response.course);
      } catch (error) {
        console.log(error);
      }
        // console.log(response.course.curriculum);
        // setVideoUrl(response?.course?.curriculum[0]?.lessons[0]?.video);
      }
      Fetchdata();
    }, []);

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
            inner.style.display='flex';
        }
    }

    return (
        <>
            <div className="faq-main" id="FAQ's">
                <div className="faq-main-container">
                    <div className="faq-container">

                            {
                                Data?.faqs.map((item,ind)=>{
                                    return(<>
                            <div className="faq-box ">
                                <div className="faq-box-head" onClick={()=>ClickSection(ind)}>
                                    <h3>{item?.question}</h3>
                                    <Down className="xsm:w-2 xsm:h-2"/>
                                </div>
                                <div id={ind} className="faq-box-descrip" style={{ display: "none" }}>
                                    <p>{item?.answer}</p>
                                </div>
                            </div>

                                    </>)
                                })
                            }
                           
                        
                        {/* <div className="faq-box">
                            <div className="faq-box-head" onClick={()=>ClickSection(2)}>
                                <h3>What does Royalty mean?</h3>
                                <Down/>
                            </div>
                            <div id={2} className="faq-box-descrip" style={{ display: "none" }}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, et eligendi illum eaque ex iusto quisquam esse. Quae commodi hic ipsam officiis consequuntur.</p>
                            </div>
                        </div>
                         */}
                        {/* <div className="faq-box">
                            <div className="faq-box-head" onClick={()=>ClickSection(3)}>
                                <h3>What does Royalty mean?</h3>
                                <Down/>
                            </div>
                            <div id={3} className="faq-box-descrip" style={{ display: "none" }}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, et eligendi illum eaque ex iusto quisquam esse. Quae commodi hic ipsam officiis consequuntur.</p>
                            </div>
                        </div> */}
                        {/* <div className="faq-box">
                            <div className="faq-box-head" onClick={()=>ClickSection(4)}>
                                <h3>What does Royalty mean?</h3>
                                <Down/>
                            </div>
                            <div id={4} className="faq-box-descrip" style={{ display: "none" }}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, et eligendi illum eaque ex iusto quisquam esse. Quae commodi hic ipsam officiis consequuntur.</p>
                            </div>
                        </div> */}
                        
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
