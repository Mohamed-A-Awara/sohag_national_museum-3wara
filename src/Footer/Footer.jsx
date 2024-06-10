import React, { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import FooterImg from "../Tools/Imgs/Footer_img.png"
import { FaFacebookF } from "react-icons/fa6";
import { VscTwitter } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useNavigate } from 'react-router-dom'
import './Footer.css'
import teamLogo from '../Tools/Imgs/teamImg.png'
import { useTranslation } from 'react-i18next';
import AOS from 'aos'
import 'aos/dist/aos.css'
function Footer() {

    const navigate = useNavigate()
    const {t , i18n} = useTranslation()
    useEffect(()=>{
        AOS.init({duration : 2000})
    } , [])
    return (
        <>
            <section className='footer-section'> 
            <div className='footer-partOne pt-3 pb-3'>
                <Container fluid>
                    <Row>
                        <Col lg='4' sm='8' data-aos="zoom-in">
                            <div className='footer-img' data-aos="flip-left">
                                <Image src={FooterImg} />
                            </div>
                            <p className='footer-img-text' data-aos="flip-right">
                                {t('footerText')}
                            </p>
                        </Col>
                        <Col lg='4'  sm='8' data-aos="flip-left">

                            <div className='footer-sitemap'> 
                                <h3>{t('Sitemap')}</h3>
                                <ul>
                                    <li onClick={()=> navigate('/overview')}>{t('Overview')}</li>
                                    <li onClick={()=> navigate('/visit')}>{t('Visit')}</li>
                                    <li onClick={()=> navigate('/halls')}>{t('Halls')}</li>
                                    <li onClick={()=> navigate('/programs_and_events')}>{t('Programs')}</li>
                                    <li onClick={()=> navigate('/virtual_tour_guide')}>{t('tour')}</li>
                                    <li onClick={()=> navigate('/register')}>{t('Login')}</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg='4' sm='8' data-aos="flip-left">
                            <div className='footer-connect'> 
                                <h3>{t('Connect')}</h3>
                                <div>
                                    <VscTwitter className='social'/>
                                    <FaFacebookF className='social'/>
                                    <FaLinkedinIn className='social'/>
                                    <MdEmail className='social'/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footer-partTwo'>
                    <Row>
                        <Col lg='12'>
                            {
                                i18n.language === 'en' && (
                                    <p className='text-center'>
                                        &copy; 2024 Team  <Image src={teamLogo}  style={{width :"120px" }}/> . All rights reserved.
                                    </p>
                                )
                            }
                            {
                                i18n.language === 'ar' && (
                                    <p className='text-center'>
                                        &copy; 2024 الفريق <Image src={teamLogo}  style={{width :"120px" }}/> كل الحقوق محفوظة.
                                    </p>
                                )
                            }
                            
                        </Col>
                    </Row>
            </div>
            </section>
        </>
    )
}

export default Footer