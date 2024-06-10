import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Virtual.css"
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Statue_1 from '../Tools/Imgs/Statue-1.png'
import Statue_2 from '../Tools/Imgs/Statue-3Update.jpg'
import Statue_3 from '../Tools/Imgs/Statue-3.png'
import { useTranslation } from 'react-i18next';
import videoEnRamses from '../Tools/Videos/Ramses en.mp4'
import videoArRamses from '../Tools/Videos/Ramses ar.mp4'
import videoEncity from '../Tools/Videos/city en - Trim.mp4'
import videoArCity from '../Tools/Videos/city ar - Trim.mp4'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Lab_View() {

    const { i18n} = useTranslation()
    const [showVideo , setShowVideo] = useState(false)
    const handleBtn = ()=>{
        setShowVideo(!showVideo)
    }
    const [showVideocity , setShowVideoCity] = useState(false)
    const handleBtnCity = ()=>{
        setShowVideoCity(!showVideocity)
    }

    
    return (
        <section>
            <Container fluid className='lab-view'>
                <Row>
                    <div className='view-lab-parent'> 
                            
                            <Col lg='4' md='6' sm='12' >
                                <div className='lab-view-statue' style={{margin : "0 auto"}}>
                                    <Image src={Statue_1} />
                                    <div className='watch-hidden'>
                                        <Button className='btn btn-secondary ' onClick={handleBtn}>{showVideo ? "Hide" : "Show"} Video </Button>
                                    </div>
                                </div>
                            </Col>

                            <Col lg='4' md='6' sm='12' className='phone-margin'>
                            <div className='lab-view-statue ' style={{margin : "0 auto"}}>
                                    <Image src={Statue_2} style={{width : "80%"}}/>
                                    <div className='watch-hidden'>
                                        <Button className='btn btn-secondary 'onClick={handleBtnCity}>{showVideocity ? "Hide" : "Show"} Video</Button>
                                    </div>
                                </div>
                            </Col>
                            
                            <Col lg='4' md='6' sm='12' >
                            <div className='lab-view-statue' style={{margin : "0 auto"}}>
                                    <Image src={Statue_3} style={{width : "80%"}} />
                                    <div className='watch-hidden'>
                                        <Button className='btn btn-secondary 'onClick={handleBtnCity}>{showVideocity ? "Hide" : "Show"} Video</Button>
                                    </div>
                                </div>
                            </Col>
                    </div>
                    
                </Row>
            </Container>
        {
            showVideo && i18n.language==='en' &&  <video src={videoEnRamses} className='videosStyle' controls data-aos="zoom-in"></video>
        }
        {
            showVideo && i18n.language==='ar' &&  <video src={videoArRamses} className='videosStyle' controls data-aos="zoom-in"></video>
        }
        {
            showVideocity && i18n.language==='en' &&  <video src={videoEncity} className='videosStyle' controls data-aos="zoom-in" ></video>
        }
        {
            showVideocity && i18n.language==='ar' &&  <video src={videoArCity} className='videosStyle' controls data-aos="zoom-in" ></video>
        }
        </section>
    )
}

export default Lab_View


