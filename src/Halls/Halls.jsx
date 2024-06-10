/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Halls.css'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import hallsF_img1 from '../Tools/Imgs/halls-First-Img1.png'
import hallsF_img2 from '../Tools/Imgs/halls-First-Img2.png'
import hallsF_img3 from '../Tools/Imgs/halls-First-Img3.png'
import Second_Hall from './Second-Hall.jsx';
import Third_Hall from './Third-Hall.jsx' ;
import Fourth_Hall from './Fourth-Hall.jsx';
import Fifth_Hall from './Fifth-Hall.jsx';
import Sixth_Hall from './Sixth-Hall.jsx';
import Footer from '../Footer/Footer';
import BtnReadMore from '../Components/BtnReadMore';
import { useTranslation } from "react-i18next";
import Animation from '../Components/Animation'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Halls() {
    const smallWidth = window.screen.availWidth;
    const [t] = useTranslation()
    useEffect(()=>{
        AOS.init({duration : 2000})
    } , [])

    return (
        <Animation>
            <div className="all-parent">
                <section className='halls-style'>
                    <div className='full-back pt-3 pb-3' data-aos="zoom-in">
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>{t("HallsTitle")}</h2>
                        </Container>
                    </div>

                    <div className='halls-text pt-3 pb-3' data-aos="zoom-in">
                        <Container fluid>
                            <ul className={smallWidth < 768 ? "p-1 Sixth-list" : "p-5 Sixth-list"}>
                                <li>{t("hallsLi1")}</li>
                                <li>{t("hallsLi2")}
                                    <BtnReadMore content={t("hallsLi2More")}/> 
                                </li>
                                <li>{t("hallsLi3")}
                                    <BtnReadMore content={t("hallsLi3More")}/>
                                </li>
                                <li>{t("hallsLi4")}
                                    <BtnReadMore content ={t("hallsLi3More")}/> 
                                </li>
                                <li>{t("hallsLi5")}</li>
                            </ul>
                        </Container>
                    </div>

                    <div className='first-halls full-back pt-3 pb-3' data-aos="zoom-in">
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>{t("firstHall")}</h2>
                        </Container>     
                    </div>

                    <div className='first-hall-cards p-4' data-aos="zoom-in">
                                <Container >
                                    <Row>
                                        <Col lg='4' md='6' sm='12' className='p-3'>
                                            <Card style={{height:"auto" , borderRadius : "25px"}} border='3' >
                                            <Image variant="top" src={hallsF_img1} thumbnail style={{height : "40vh" , width : "85%" , margin : "10px auto"}} />
                                                <Card.Body>
                                                    <Card.Title className='First-hall-card-title'>{t("Thutmose")}</Card.Title>
                                                    <Card.Text className='First-hall-card-text'>
                                                    {t("ThutmoseData")}
                                                    <BtnReadMore content={t('ReadMoreText')}/> 
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col lg='4' md='6' sm='12' className='p-3'>
                                        <Card style={{height:"auto" , borderRadius : "25px"}} border='3'>
                                                <Image variant="top" src={hallsF_img2} thumbnail style={{height : "40vh" , width : "85%" , margin : "10px auto"}} />
                                                <Card.Body>
                                                    <Card.Title className='First-hall-card-title'>{t("Shabaka")}</Card.Title>
                                                    <Card.Text className='First-hall-card-text'>
                                                    {t("ShabakaData")}</Card.Text>
                                                    
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col lg='4' md='6' sm='12' className='p-3' >
                                        <Card style={{height:"auto" ,  borderRadius : "25px"}} border='3'>
                                                <Image variant="top" src={hallsF_img3} thumbnail style={{height : "40vh" , width : "85%" , margin : "10px auto"}} />
                                                <Card.Body>
                                                    <Card.Title className='First-hall-card-title'>{t("Seti- I")}</Card.Title>
                                                    <Card.Text className='First-hall-card-text'>
                                                    {t("Seti-IData")}  </Card.Text>
                                                    
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                        </div>
                    
                    <div className='first-halls full-back pt-3 pb-3' data-aos="zoom-in">
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>{t("SecondHall")}</h2>
                        </Container>     
                    </div>

                        <div className='second-hall-cards p-4' data-aos="zoom-in">
                            < Second_Hall />
                        </div>


                        {/* Third hall */}
                    <div className='first-halls full-back pt-3 pb-3' data-aos="zoom-in">
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>{t("ThirdHall")}</h2>
                        </Container>     
                    </div>

                        <div className='second-hall-cards p-4' data-aos="zoom-in">
                            <Third_Hall/>
                        </div>

                        {/* Fourth Hall */}

                    <div className='first-halls full-back pt-3 pb-3 ' data-aos="zoom-in">
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>{t("FourthHall")}</h2>
                        </Container>     
                    </div>

                        <div className='second-hall-cards p-4' data-aos="zoom-in">
                            < Fourth_Hall />
                        </div>  

                        {/* Fifth Hall */}
                    <div className='first-halls full-back pt-3 pb-3' data-aos="zoom-in">
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>{t("FifthHall")}</h2>
                        </Container>     
                    </div>

                        <div className='second-hall-cards p-4' data-aos="zoom-in">
                            < Fifth_Hall />
                        </div>  

                        {/* Sixth Hall */}


                    <div className='first-halls full-back pt-3 pb-3' data-aos="zoom-in">
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>{t("SixthHall")}</h2>
                        </Container>     
                    </div>

                        <div className='second-hall-cards p-4' data-aos="zoom-in">
                            < Sixth_Hall />
                        </div>  


                </section>
                <Footer />
            </div>
        </Animation>
    )
}

export default Halls

