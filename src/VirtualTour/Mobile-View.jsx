import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Virtual.css"
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Statue_1 from '../Tools/Imgs/Statue-1.png'
import { TbUserScan } from "react-icons/tb";
import { FaFaceSmileWink } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

function Mobile_View() {
    const {t} = useTranslation()
    const handlegotoLink = ()=>{
        window.open('https://play.google.com/apps/internaltest/4700846862240692614' , '_blank')
    }
    return (
        <section>
            <Container fluid className='lab-view'>
                <Row>
                    <Col lg='12' md='10' sm='12' className='mobile-view'>
                        <div className='lab-view-statue' style={{margin: "0 auto"}}>
                            <Image src={Statue_1} />
                            <div className='watch-visible'>
                                <Button className='btn btn-secondary ' onClick={handlegotoLink}> 
                                    <TbUserScan style={{fontSize : "22px" , color :"#e9d844"}}/>{t('ScanMe')}<FaFaceSmileWink style={{fontSize : "22px" , color : "#e9d844"}} /> </Button>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}

export default Mobile_View