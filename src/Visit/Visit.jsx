import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Visit.css'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { FaBan } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdEmergencyShare } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import Animation from '../Components/Animation'

import VisitDate_Img from '../Tools/Imgs/Back_Visit.png'
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
function Visit() {
    const smallWidth = window.screen.availWidth;

    const {t} = useTranslation()
    const tologin = useNavigate()
    useEffect(()=>{
        AOS.init({duration : 2000})
    } , [])
    return (
        <Animation>
            {/* all parent as GLobal Style */}
            <div className="all-parent">
                
                <section className='visit' > 
                    {/* Header Title */}
                        <div className='visit-date pt-3 pb-3' data-aos="zoom-in">
                            <Container fluid>
                                <h2 className='p-3'> {t('Visit')} </h2>
                            </Container>
                        </div>
                    {/* Header End */}
                    <Container fluid className=''>
                        <Row className={smallWidth < 768 ? "p-1" : "p-5"}>
                            <Col lg='6' md='12' data-aos="flip-right">
                                <div className='p-4 visit-data'>
                                    <h3>{t('VisitingDates')}</h3>
                                    <p> {t('VisitingDatestext')} </p>
                                    <Button className=' btn-sign' onClick={()=> tologin('/login')}> {t('Login')} </Button>
                                </div>
                                
                            </Col>
                            <Col lg='6' md='12' data-aos="flip-left">
                                <div className=''>
                                    <Image src={VisitDate_Img} thumbnail className='w-75 m-auto d-block'/>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {/* Header Title */}
                    <div className='visit-date pt-3 pb-3' data-aos="zoom-in">
                            <Container fluid>
                                <h2 className='p-3'>{t('Policies')}</h2>
                            </Container>
                    </div>
                    {/* Header End */}
                    <Container fluid>
                            <div className='p-4 visit-policy-p' data-aos="zoom-in">
                                <p className={smallWidth < 768 ? "p-1" : "p-4" }> {t('PoliciesText')}</p>
                            </div>
                    </Container>

                    {/* Rules Data */}
                    <div className='visit-date pt-3 pb-3' data-aos="zoom-in">
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'> <FaBan className='ban-icon me-2'/> {t('polText1')}</h2>
                            </Container>
                    </div>
                    {/* Header End */}
                    <Container fluid data-aos="zoom-in">
                        <div className={ smallWidth < 768 ? "rules-data p-1" : "rules-data p-5"}>
                            <p className='p-2'>{t('polText2')}</p>
                                <uL>
                                    <li>{t('pol1Rule')}</li>
                                    <li>{t('pol2Rule')}</li>
                                    <li>{t('pol3Rule')}</li>
                                    <li>{t('pol4Rule')}</li>
                                    <li>{t('pol5Rule')}</li>
                                    <li>{t('pol6Rule')}</li>
                                    <li>{t('pol7Rule')}</li>
                                    <li>{t('pol8Rule')}</li>
                                </uL>
                        </div>
                    </Container>
                    {/* End Rules */}

                    <div className='visit-date pt-3 pb-3' data-aos="zoom-in">
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'> {t('GallText')}</h2>
                            </Container>
                        </div>
                    {/* Header End */}
                    <Container fluid data-aos="zoom-in">
                        <div className={ smallWidth < 768 ? "rules-data p-1" : "rules-data p-5"}>
                                <uL>
                                    <li>{t('Gall1Rule')}</li>
                                    <li>{t('Gall2Rule')}</li>
                                    <li>{t('Gall3Rule')}</li>
                                    <li>{t('Gall4Rule')}</li>
                                    <li>{t('Gall5Rule')}</li>
                                    <li>{t('Gall6Rule')}</li>
                                    <li>{t('Gall7Rule')}</li>
                                    <li>{t('Gall8Rule')}</li>
                                    <li>{t('Gall9Rule')}</li>
                                </uL>
                        </div>
                    </Container>
                    {/* End Rules */}

                    {/* Header Start */}
                    <div className='visit-date pt-3 pb-3' data-aos="zoom-in">
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'> <MdFamilyRestroom className='family-icon me-2'/> {t('FamText')} </h2>
                            </Container>
                        </div>
                    {/* Header End */}

                    <Container fluid data-aos="zoom-in">
                        <div className={ smallWidth < 768 ? "rules-data p-1" : "rules-data p-5"}>
                                <uL>
                                    <li>{t('fam1Rule')}</li>
                                    <li>{t('fam2Rule')}</li>
                                </uL>
                        </div>
                    </Container>

                    {/* Header Start */}
                    <div className='visit-date pt-3 pb-3' data-aos="zoom-in">
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'> <FaCamera className='family-icon me-2'/> {t('Photography')}</h2>
                            </Container>
                        </div>
                    {/* Header End */}
                    <Container fluid data-aos="zoom-in">
                        <div className={ smallWidth < 768 ? "rules-data p-1" : "rules-data p-5"}>
                                <uL>
                                    <li>{t('Photo1Rule')}</li>
                                    <li>{t('Photo2Rule')} </li>
                                    <li>{t('Photo3Rule')}</li>
                                    <li>{t('Photo4Rule')}</li>
                                    <li>{t('Photo5Rule')}</li>
                                </uL>
                        </div>
                    </Container>

                    {/* Header Start */}
                    <div className='visit-date pt-3 pb-3' data-aos="zoom-in">
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'> <FaRegPenToSquare className='family-icon me-2'/> {t('Sketching')}</h2>
                            </Container>
                        </div>
                    {/* Header End */}
                    <Container fluid data-aos="zoom-in">
                        <div className={ smallWidth < 768 ? "rules-data p-1" : "rules-data p-5"}>
                            <p className='p-2'>{t('SketText')}</p>
                                <uL>
                                    <li>{t('Sket1Rule')}</li>
                                    <li>{t('Sket2Rule')}</li>
                                    <li>{t('Sket3Rule')}</li>
                                </uL>
                        </div>
                    </Container>
                    {/* Header Start */}
                    <div className='visit-date pt-3 pb-3' data-aos="zoom-in">
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'> <MdEmergencyShare className='family-icon me-2'/> {t('Emergencies')}</h2>
                            </Container>
                        </div>
                    {/* Header End */}
                    <Container fluid data-aos="zoom-in">
                        <div className={ smallWidth < 768 ? "rules-data p-1" : "rules-data p-5"}>
                                <uL>
                                    <li>{t('Emer1Rule')}</li>
                                    <li>{t('Emer2Rule')}</li>
                                </uL>
                        </div>
                    </Container>
                    {/* Header Start */}
                    <div className='visit-date pt-3 pb-3' data-aos="zoom-in">
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'> {t('Special')}</h2>
                            </Container>
                        </div>
                    {/* Header End */}
                    <Container fluid data-aos="zoom-in">
                    <div className='p-4 visit-policy-p'>
                                <p className={smallWidth > 768 ? "p-1" : "p-4"}>{t('Specialtext')}</p>
                            </div>
                    </Container>
                </section>

            </div>
            <Footer/>
        </Animation>
    )
}

export default Visit

