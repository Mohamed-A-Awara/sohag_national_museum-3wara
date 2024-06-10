import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Halls.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Container } from 'react-bootstrap';
import BtnReadMore from '../Components/BtnReadMore';
import { useTranslation } from "react-i18next";

function Fifth_Hall() {
    const [t] = useTranslation()
    return (
        
        <>
            <div className='halls-text pt-3 pb-3'>
                    <Container fluid>
                        <ul>
                            <li>
                            {t("FifthHallLi1")}
                            </li>
                            <li> <span style={{fontSize :"20px" , fontWeight : "700"}}>{t( "FifthHallLi2Span")}</span> <br/> <br/>
                                {t( "FifthHallLi2")}
                                    <BtnReadMore  content={t("FifthHallLi2More")} /> 
                            </li>
                            <li> <span style={{fontSize :"20px" , fontWeight : "700"}}>{t( "FifthHallLi3Span")}</span> <br/> <br/>
                            {t( "FifthHallLi3")}
                            </li>
                            <li> <span style={{fontSize :"20px" , fontWeight : "700"}}>{t( "FifthHallLi4Span")}</span> <br/> <br/>
                            {t( "FifthHallLi4")}                           
                                <BtnReadMore  content={t("FifthHallLi4More")}  />     
                            </li>
                        </ul>
                    </Container>
                </div>


                
            <div>
                <Container>
                    <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper2"
                    style={{direction:"ltr"}}
                    >
                        <SwiperSlide className='halls-Fifth'></SwiperSlide>
                        <SwiperSlide className='halls-Fifth'></SwiperSlide>
                        <SwiperSlide className='halls-Fifth'></SwiperSlide>
                        <SwiperSlide className='halls-Fifth'></SwiperSlide>
                        <SwiperSlide className='halls-Fifth'></SwiperSlide>
                        
                    </Swiper>
                </Container>
            
            </div>
        </>
    )
}

export default Fifth_Hall




