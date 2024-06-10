import React, { useEffect } from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { GoArrowRight } from "react-icons/go";

// Import Imgs
import museumImg from '../Tools/Imgs/museum.png'

// Resources
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';

// Import Files
import './Home.css'
import HomeNews from './Home_News.jsx';
import Footer from '../Footer/Footer.jsx';
import { ExhibitionsData } from '../Tools/DataBase/Home.Data.js';
import HomeDesign from './HomeDesign.jsx';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Animation from '../Components/Animation'
import AOS from 'aos'
import 'aos/dist/aos.css'



function Home() {
    const [t , i18n] = useTranslation() 
    const navigator = useNavigate()
    useEffect(()=>{
        AOS.init({duration : 2000})
    } ,[])
    return (
        <Animation> 
            {/* Start Home Design */}
            <HomeDesign />
            {/* End Home Design */}

            {/* Start OverView Section */}
            <section className='' >
                
                <Container className='home-overview' > 
                    <Row>
                        <Col lg='6' md='12' data-aos='zoom-in'>
                            <h2>{t('overviewHeader')}</h2>
                            <p>{t('overviewText')}</p>
                            <button onClick={()=>navigator('/overview')}>{t('btnLearn')}</button>
                        </Col>
                        <Col lg='6' md='12' data-aos='zoom-in'>
                            <Image src={museumImg}/>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* End Overview Section */}

            {/* Start Our Exhibitions Section */}
            <section className='home-exhibitions' data-aos="zoom-in">
                <Container fluid>
                    <h2 className='text-center'>{t('Exhibitions')}</h2>
                    <hr className='line'></hr>

                    <div className='home-cards-control'>
                        <Container>
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                    
                                }}
                                pagination={true}
                                modules={[EffectCoverflow]}
                                className="mySwiper"
                            > 
                                <Row>
                                    {ExhibitionsData.map((item)=> (
                                        
                                        <Col lg='3' md='6' sm='12'>
                                        <SwiperSlide>
                                                <Card  className='home-card'>
                                                    <Card.Img variant="top" src={require(`../${item.imgUrl}`) } className='card-img'/>
                                                    <Card.Body className='card-body'>
                                                    <Card.Title className='text-center ' key={item.id}>
                                                        {
                                                            i18n.language === 'en' && t('nameStatue' , {name : item.name})
                                                        }
                                                        {
                                                            i18n.language === 'ar' && item.nameAr
                                                        }
                                                    </Card.Title>
                                                    <Card.Text className='text-center cardText'>{item.history}</Card.Text>
                                                    </Card.Body>
                                                    <Card.Text className='card-icon' onClick={()=> navigator('/halls')}><GoArrowRight/></Card.Text>
                                                </Card>
                                        </SwiperSlide>
                                    </Col>
                                    ))}
                                    
                                </Row>
                            
                            </Swiper>
                        </Container>
                    </div>
                </Container>
            </section>    
            {/* End Our Exhibitions Section */}

            {/* Start Home News Section  */}
                <HomeNews />
            {/* End Home News Section  */}

            {/* Start Footer */}
                <Footer/>
            {/* End Footer  */}
        </Animation>
    )
    }

export default Home
