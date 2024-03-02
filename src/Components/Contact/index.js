import './task29.css'
export default function Contact(){
    return(<>
     <div className="container">
        <div className="first">
            <h2>Need a Direct Line?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adi<br/>
                 Ex odit eum vero sapiente odio laboriosam!</p>

                 <div className="contact-info">
                    <i className="fas fa-phone"></i>
                <div>
                        Phone: <br/>
                        +123456789
                    </div>
                </div>
                <br/>
               
                <div className="contact-info">
                    <i className="fas fa-envelope"></i>
                    <div>
                        Email: <br/>
                        example@mail.com
                    </div>
                </div>  
        </div>
        <img src="/map1.png" className="floating-image"/>
    </div>

        <div className="second">
            <h2>Contact us</h2>
            <div className="para">
                <p>Your email address will not be pubnlished. Required field are marked</p>
            </div>
                <div className="form-row">
                    <input type="tel" name="phone" placeholder="Phone" required/>
                    <input type="email" name="email" placeholder="Email" required/>
                </div>
                <div className="form-row">
                    <textarea name="comment" placeholder="Comment" required></textarea>
                </div>
                <div className="formm">
                    <input type="checkbox" id="save-info" name="save-info"/>
                    <label for="save-info">Save my name and email in this browser for the next time I comment</label>
                </div>
            
                <div className="formmm">
                    <button type="submit" className="post-comment-btn">Post comment</button>
                </div>

        </div>

    
    
    </>)
}