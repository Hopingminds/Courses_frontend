import React, { useState } from "react";
import styled from "styled-components";

const Compo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    college: "",
    degree: "",
    branch: "",
    yearOfPassing: "",
    fieldOfStudy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
  };

  const openModal=()=>{
    setIsModalOpen(true);
  }
  const closeModal=()=>{
    setIsModalOpen(false);
  }

  return (
    <Container>
      <button className="b" onClick={openModal}>
        Pay After Placement
      </button>

      {isModalOpen && (
        <Wrapper>
          <div className="modal ">
            <div className="form-container">
              <div className="img">
                <img src="../img/papmodalbg.jpg" alt="" />
                <button className="button">
                  Pay After Placement Registration Form{" "}
                </button>
                <button className="close" onClick={closeModal}>
                  &times;
                </button>
              </div>
              <div className="content">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="college">College</label>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      value={formValues.college}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="degree">Degree</label>
                    <input
                      type="text"
                      name="yearOfPassing"
                      value={formValues.degree}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="branch">Branch</label>
                    <input
                      type="text"
                      name="yearOfPassing"
                      value={formValues.branch}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="yearOfPassing">Year of Passing</label>
                    <input
                      type="text"
                      id="yearOfPassing"
                      name="yearOfPassing"
                      value={formValues.yearOfPassing}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fieldOfStudy">Field of Study</label>
                    <input
                      type="text"
                      name="yearOfPassing"
                      value={formValues.fieldofStudy}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  .b {
    cursor: pointer;
    margin-top: 1rem;
    padding: 0.3rem 2rem;
    font-size: 1rem;
    background-color: #15f2ac;
    color: #fff;
    border: none;
    border-radius: 10px;
  }
`;

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }

  .content {
    padding: 10px 150px;
  }

  .form-container {
    position: fixed;
    padding: 0% 5% 2.5% 2.2%;
    margin-top: -2.3rem;
    z-index: 999;
    background-color: #fffdfd;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.7);
    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 0 auto;
      padding: 0 5% 10% 5%;
      margin-top: 1rem;
      position: relative;
     
    }
  }
  .img {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  .img img {
    width: 110%;
    margin: 0 auto;
    margin-left: -5%;
    height: 80px;
  }
  .img .button {
    position: absolute;
    top: 30%;
    left: -3%;
  }

  .close {
    position: absolute;
    cursor: pointer;
    right: -5%;
    top: -7%;
    font-size: 2rem;
    color: #e3ebe9;
    border: none;
    z-index: 100;
    background-clip: text;
  }
  .button {
    border: none;
    background-clip: text;
    color: #eaf1ea;
    font-size: 1.5rem;
    font-weight: bolder;
  }

  .form-group {
    margin-bottom: 0.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
  }

  input {
    border: none;
    background-color: #e2fff1;
    padding: 0.2rem 0.5rem;
    font-size: 1rem;
    width: 95%;
  }

  .form-container .btn {
    position: absolute;
    margin-top: 0.4rem;
    left: 40%;
    padding: 0.3rem 2rem;
    font-size: 1rem;
    background-color: #15f2ac;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .form-container .btn:hover {
    background-color: #75ebd2;
    transform: translateY(-10px);
  }
`;

export default Compo;