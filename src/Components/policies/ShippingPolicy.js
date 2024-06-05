import React, { useEffect } from "react";
import styled from "styled-components";

const ShippingPolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      <div className={window.innerWidth >=320 && window.innerWidth<=480 ? 'w-[100%] p-[5%]' :'cont'}>
        <h2 className="py-8 font-extrabold text-center">Terms and Conditions</h2>
        <p>
          {/* <strong>What are the delivery charges?</strong> */}
        </p>
        <p>These Terms and Conditions govern your use of the Hoping Minds eLearning website. By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Platform.</p>

        <p className="py-4">
          <strong>
          1. Use of the Platform
          </strong>
        </p>
        <p className="py-2">
          <strong>a. License: </strong>
        Subject to these Terms, Hoping Minds grants you a limited, non-exclusive, non-transferable license to access and use the Platform for your personal and non-commercial use.
        </p>
        <p className="py-2">
          <strong>b. User Account: </strong>
          You may be required to create an account to access certain features of the Platform. You are responsible for maintaining the confidentiality of your account credentials and for any activities that occur under your account.
        </p>
        <p  className="py-2">
          <strong>c. Prohibited Activities: </strong> <br/>
        You agree not to engage in any of the following prohibited activities:
        </p>
        <ul className="ml-5 pt-4">
          <li>Violating any applicable laws or regulations.</li>
          <li>Interfering with or disrupting the integrity or performance of the Platform.</li>
          <li>
          Attempting to gain unauthorized access to any portion of the Platform.
          </li>
          <li>Uploading, posting, or transmitting any content that is unlawful, harmful, or infringes upon the rights of others.</li>
        </ul>

        <p className="pt-4"><strong>
        2. Content
        </strong></p>
        <p className="py-2">
          <strong>a. Ownership: </strong>
          All content available on the Platform, including courses, videos, text, and graphics, is the property of Hoping Minds or its licensors and is protected by copyright and other intellectual property laws.
        </p>
        <p className="py-2">
          <strong>b. User-Generated Content: </strong>
          By uploading or posting any content on the Platform, you grant Hoping Minds a perpetual, irrevocable, worldwide, royalty-free license to use, modify, adapt, reproduce, distribute, and display such content for any purpose.
        </p>

        <div className="py-2">
        <p ><strong>
        3. Payments
        </strong></p>
        <p className="py-2">
          <strong>a. Fees: </strong>
          Some features or content on the Platform may require payment of fees. You agree to pay all fees associated with your use of such features or content.
        </p>
        <p className="py-2">
          <strong>b. Payment Processing: </strong>
          Payments made through the Platform are processed by third-party payment processors. By making a payment, you agree to abide by the terms and conditions of the payment processor.
        </p>
        </div>
        <div>
          <p  className="py-2"><strong>
          4. Privacy
          </strong></p>
          <p  className="py-2">
          Your privacy is important to us. Please refer to our Privacy Policy for information about how we collect, use, and disclose your personal information.
          </p>
        </div>
        <div  className="py-2">
        <div className="py-2">
        <strong>
        5. Disclaimer of Warranties
        </strong>
        </div>
        <p className="py-2">
        The Platform is provided on an "as-is" and "as-available" basis, without any warranties of any kind, express or implied. Hoping Minds does not warrant that the Platform will be uninterrupted, error-free, or free of viruses or other harmful components.
        </p>
        </div>
        <div className="py-2">
        <div className="py-2">
        <strong>
        6. Limitation of Liability
        </strong>
        </div>
        <p className="py-2">
        In no event shall Hoping Minds be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Platform.
        </p>
        </div>
        <div className="py-2">
        <p className="py-2">
        <strong>
        7. Indemnification
        </strong>
        </p>
        <p className="py-2">
        You agree to indemnify and hold harmless Hoping Minds, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, liabilities, costs, or expenses arising out of your use of the Platform or violation of these Terms.
        </p>
        </div>
        <div className="py-2">
        <p className="py-2">
        <strong>
        8. Governing Law
        </strong>
        </p>
        <p className="py-2">
          These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of laws principles.
        </p>
        </div>
        <div className="py-2">
        <p className="py-2">
        <strong>
        9. Changes to Terms
        </strong>
        </p>
        <p className="py-2">
        Hoping Minds reserves the right to modify or update these Terms at any time. We will notify you of any material changes by posting the updated Terms on the Platform or through other means of communication. Your continued use of the Platform after such changes will constitute your acceptance of the revised Terms.
        </p>
        </div>
        <div className="py-2">
        <p className="py-2">
        <strong>
        10. Contact Us
        </strong>
        </p>
        <p className="py-2">
        If you have any questions or concerns about these Terms, please contact us at +91 7717667030 or at support@hopingminds.com
        </p>
        </div>

        
      </div>
    </Wrapper>
  );
};

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
      font-size: 1.5rem;
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

export default ShippingPolicy;
