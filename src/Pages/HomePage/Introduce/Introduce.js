import React from 'react';
import mypic from '../../../images/Mypic.jpg';
import { Typewriter } from 'react-simple-typewriter';
import './Introduce.css'
import { Col, Container, Row } from 'react-bootstrap';

const Introduce = () => {
    return (
        <div>
            <Container className='intro'>
                <Row>
                    <Col md={6}>
                        <h2 className='fw-bold'>MD. Al SABBIR</h2>
                        <h5>I'm A <span style={{ color: 'yellow', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Front end web developer❣️', 'Full stack web developer🖥️', 'MERN stack web developerⓂ️', 'React developer⚛️!']}
                                loop={10}
                                cursor
                                cursorStyle='(❁´◡`❁)'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span></h5>
                        <br />
                        <address>
                            Chattogram, Bangladesh.
                        </address>
                        <p>Email: alsabbir1066@gmail.com</p>
                        <p>Phone: +8801619912166</p>
                        <a href="/" class="mx-3 fs-1 social-icon"><i class="fab fa-github"></i></a>
                        <a href="/" class="mx-3 fs-1 social-icon"><i class="fab fa-linkedin"></i></a>
                        <a href="/" class="mx-3 fs-1 social-icon"><i class="fab fa-twitter-square"></i></a>
                        <div>
                            <a href="https://drive.google.com/file/d/1v0nVGLHXv_XkwZL4oj2tQ7UAXChT6Kk9/view"><button className='btn my-5'>Resume</button></a>
                        </div>
                    </Col>
                    <Col md={6} className='my-5'>
                        <img style={{ width: '350px', borderRadius: '10%' }} src={mypic} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Introduce;


