import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import leftImg_news from '../Tools/Imgs/news_left.png'
import rightImg_news_1 from '../Tools/Imgs/News-right_1.png'
import rightImg_news_2 from '../Tools/Imgs/news_right_2.png'
import { useTranslation } from 'react-i18next';
import AOS from 'aos'
import 'aos/dist/aos.css' 

function HomeNews() {
    const [t] = useTranslation()
    return (
        <>
            <section className='home-news' data-aos="zoom-in">
                <Container>
                <h2 className='text-center' data-aos="flip-left">{t('News')}</h2>
                    <hr className='line'></hr>
                    <Row>
                        <Col lg='6' md='12' data-aos="flip-right">
                            <Card className='news-card pt-4'>
                                <Card.Img variant="top" src={leftImg_news} />
                                <Card.Body>
                                    <Card.Title className='news-card-title'>{t('Opening')}</Card.Title>
                                    <Card.Text className='news-card-text'>
                                        {t('NewsText')}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Row>
                                <Col lg='12'>
                                <div className='news-right pt-4 '>
                                    <div data-aos="flip-left">
                                        <Image src={rightImg_news_1} className='rounded img-fluid'/>
                                    </div>
                                    <div className='news-right-data' data-aos="flip-right">
                                        <h3>{t('Educational')}</h3>
                                        <p>{t('EducationalText')}</p>
                                    </div>
                                </div>
                                <hr></hr>
                                </Col>
                                <Col lg='12'>
                                    <div className='news-right'>
                                        <div data-aos="flip-left">
                                            <Image src={rightImg_news_2} className='rounded img-fluid'/>
                                        </div>
                                        <div className='news-right-data' data-aos="flip-right">
                                            <h3>{t('Training')}</h3>
                                            <p>{t('TrainingText')}</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </Col>

                                <Col lg='12'>
                                    <div className='news-right'>
                                        <div data-aos="flip-left">
                                            <Image src={rightImg_news_1} className='rounded img-fluid'/>
                                        </div>
                                        <div className='news-right-data' data-aos="flip-right">
                                            <h3>{t('Official_visits')}</h3>
                                            <p>{t('Official_visitsText')}</p>
                                    
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default HomeNews