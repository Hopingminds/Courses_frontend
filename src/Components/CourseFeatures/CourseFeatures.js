import { Row ,Col } from 'react-bootstrap';
import './coursefeatures.css';

function CourseFeatures() {
    return (
        <Row className='header'>
            <Col>
                <div className=' '>
                    <div className='CF-heading'>
                        <h3>Our Feature Courses</h3>
                    </div>
                    <Row className='CF-hero'>
                        <Col xs={6} className='CF-box'>
                            <div className='CF-img'>
                                <img className='w-[100%] h-[100%]' src='../img/featuresImage.png' alt='person-with-laptop'></img>
                            </div>
                            <div className='CF-content space-y-3'>
                                <div className='CF-row1'>
                                    <div className='CF-health-box'>
                                        <p className='CF-health-para'>Health & Fitness</p>
                                    </div>
                                    <div className='CF-price'>
                                        <p className='CF-org-price'>₹4999</p>
                                    </div>
                                </div>
                                <div className='CF-row2'>
                                    <div className='CF-row2-para'>Investing In Stocks the complete course!(13 H...</div>
                                </div>
                                <div className='CF-row3'>
                                    <div className='CF-row3-left'>
                                        <img src='../img/featuresImage2.png' alt='small-img'></img>
                                        <p className='CF-row3-name'>Kevin Gilbert</p>
                                    </div>
                                    <div className='CF-row3-right'>
                                        <div className='CF-row3-star'>
                                            <img src="../Icons/Star.svg" alt="star"></img>
                                        </div>
                                        <p className='CF-row3-rating'>5.0 <span>(357,914)</span></p>
                                    </div>
                                </div>
                                <div className='CF-row4'>
                                    <div className='CF-row4-user'>
                                        <img src="../Icons/User.svg" alt="User"></img>
                                        <p className='CF-row4-username'>265.7K <span> students</span></p>
                                    </div>
                                    <div className='CF-row4-hours'>
                                        <img src="../Icons/Clock.svg" alt="Clock"></img>
                                        <p className='CF-row4-clock'>6 hour</p>
                                    </div>
                                    <div className='CF-row4-level'>
                                        <img src="../Icons/bar-chart.svg" alt="bar-chart"></img>
                                        <p className='CF-row4-levels'>Beginner</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={6} className='CF-box d-flex justify-content-end'>
                            <div className='CF-img'>
                                <img src='../img/featuresImage.png' alt='person-with-laptop'></img>
                            </div>
                            <div className='CF-content space-y-3'>
                                <div className='CF-row1'>
                                    <div className='CF-health-box'>
                                        <p className='CF-health-para'>Health & Fitness</p>
                                    </div>
                                    <div className='CF-price'>
                                        <p className='CF-org-price'>₹4999</p>
                                    </div>
                                </div>
                                <div className='CF-row2'>
                                    <div className='CF-row2-para'>Investing In Stocks the complete course!(13 H...</div>
                                </div>
                                <div className='CF-row3'>
                                    <div className='CF-row3-left'>
                                        <img src='../img/featuresImage2.png' alt='small-img'></img>
                                        <p className='CF-row3-name'>Kevin Gilbert</p>
                                    </div>
                                    <div className='CF-row3-right'>
                                        <div className='CF-row3-star'>
                                            <img src="../Icons/Star.svg" alt="star"></img>
                                        </div>
                                        <p className='CF-row3-rating'>5.0 <span>(357,914)</span></p>
                                    </div>
                                </div>
                                <div className='CF-row4'>
                                    <div className='CF-row4-user'>
                                        <img src="../Icons/User.svg" alt="User"></img>
                                        <p className='CF-row4-username'>265.7K <span> students</span></p>
                                    </div>
                                    <div className='CF-row4-hours'>
                                        <img src="../Icons/Clock.svg" alt="Clock"></img>
                                        <p className='CF-row4-clock'>6 hour</p>
                                    </div>
                                    <div className='CF-row4-level'>
                                        <img src="../Icons/bar-chart.svg" alt="bar-chart"></img>
                                        <p className='CF-row4-levels'>Beginner</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default CourseFeatures;