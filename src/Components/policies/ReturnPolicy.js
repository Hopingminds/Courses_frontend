import React from 'react'
import styled from 'styled-components'

const ReturnPolicy = () => {



    return (
        <Wrapper >
            <div className="cont">
        <h2 className="py-8 font-extrabold">PRIVACY POLICY</h2>
        <p>
          {/* <strong>What are the delivery charges?</strong> */}
        </p>
        <p>At Hoping Minds, we are committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard your data when you use our eLearning platform.</p>

        <p className="py-4">
          <strong>
          1. Information We Collect:
          </strong>
        </p>
        <p className="py-2">
          <strong>a. Personal Information: </strong>
          When you register an account with Hoping Minds, we may collect personal information such as your name, email address, and other contact details.
        </p>
        <p className="py-2">
          <strong>b. Payment Information: </strong>
          If you make purchases through our platform, we may collect payment information, including credit card details and billing address.
        </p>
        <p  className="py-2">
          <strong>c. User-Generated Content: </strong> <br/>
          Any content you create or upload to our platform, such as comments, posts, or assignments, may be collected by us.
        </p>
        <p className="py-2">
          <strong>d. Usage Data: </strong>
          We automatically collect certain information about your interactions with our website, including your IP address, browser type, device information, and pages visited.
        </p>
        <p className="pt-4"><strong>
        2. How We Use Your Information:
        </strong></p>
        <p className="py-2">
          <strong>a. Providing Services: </strong>
          We use the information we collect to provide, maintain, and improve our eLearning platform, including delivering content, processing payments, and facilitating communication between users.
        </p>
        <p className="py-2">
          <strong>b. Personalization: </strong>
          We may use your information to personalize your experience on our platform, such as recommending courses or content tailored to your interests.
        </p>
        <p className="py-2">
          <strong>c. Communication: </strong>
          We may use your contact information to send you important updates, announcements, or promotional offers related to our services.
        </p>
        <p className="py-2">
          <strong>d. Analytics: </strong>
          We use aggregated usage data to analyze trends, monitor the effectiveness of our platform, and make informed decisions about improvements.
        </p>

        <div className="py-2">
        <p ><strong>
        3. Data Sharing and Disclosure:
        </strong></p>
        <p className="py-2">
          <strong>a. Third-Party Service Providers: </strong>
          We may share your information with third-party service providers who assist us in operating our platform, processing payments, or delivering content.
        </p>
        <p className="py-2">
          <strong>b. Legal Compliance: </strong>
          We may disclose your information if required by law or in response to valid legal requests, such as subpoenas or court orders.
        </p>
        <p className="py-2">
          <strong>c. Business Transfers: </strong>
          In the event of a merger, acquisition, or sale of assets, your information may be transferred to a third party as part of the transaction.
        </p>
        </div>
        <div>
          <p  className="py-2"><strong>
          4. Data Security:
          </strong></p>
          <p  className="py-2">
          We implement security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>
        <div  className="py-2">
        <div className="py-2">
        <strong>
        5. Your Choices:
        </strong>
        </div>
        <p className="py-2">
          <strong>a. Account Settings: </strong>
          You can review and update your account information by accessing your account settings on our platform.
        </p>
        <p className="py-2">
          <strong>b. Communication Preferences: </strong>
          You can choose to opt out of receiving promotional emails from us by following the unsubscribe instructions included in the email.
        </p>
        <p className="py-2">
          <strong>c. Cookies: </strong>
          You can adjust your browser settings to refuse cookies or alert you when cookies are being sent. However, please note that certain features of our platform may not function properly without cookies.
        </p>
        </div>
        <div className="py-2">
        <div className="py-2">
        <strong>
        6. Children's Privacy:
        </strong>
        </div>
        <p className="py-2">
        Our platform is not intended for children under the age of 13, and we do not knowingly collect personal information from children. If you believe that we have inadvertently collected information from a child under 13, please contact us immediately.
        </p>
        </div>
        <div className="py-2">
        <p className="py-2">
        <strong>
        7. Changes to This Privacy Policy:
        </strong>
        </p>
        <p className="py-2">
        We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website or through other means of communication.
        </p>
        </div>
        <div className="py-2">
        <p className="py-2">
        <strong>
        8. Contact Us:
        </strong>
        </p>
        <p className="py-2">
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at support@hopingminds.com.
        </p>
        </div>
        <div className="py-2">
        <p className="py-2">
        By using the Hoping Minds eLearning platform, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
        </p>
        </div>
        <div className="py-2">
        <p className="py-2">
        Thank you for trusting us with your personal information.
        </p>
        </div>

        
      </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  background-color: #e3dfdf;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  .cont {
    width: 70%;
    margin: 0 auto;
    padding: 2% 5%;
    
    background-color: white;
    h2 {
      text-align: center;
      font-size: 2rem;
    }
    p,
    strong {
      font-size: 1rem;
    }
    @media (max-width: 600px) {
        h2{
            font-size: 14px;
        }
      strong, p ,li{
        font-size: 12px; /* Decrease font size for smaller screens */
      }
    }
  }
`;

export default ReturnPolicy
