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

function Second_Hall() {
    const [t] = useTranslation()

    return (
        <>
            <div className='halls-text pt-3 pb-3'>
                    <Container fluid>
                        <ul>
                            <li>{t( "SecondHallLi1")}</li>
                            <li><span style={{fontSize :"20px" , fontWeight : "700"}}>{t( "SecondHallLi2Span")}</span> <br/> <br/> {t("SecondHallLi2")} 
                                <BtnReadMore content={t("SecondHallLi2More")}/>
                            </li>
                            <li><span style={{fontSize :"20px" , fontWeight : "700"}}>{t( "SecondHallLi3Span")}</span> <br/> <br/>{t("SecondHallLi3")} 
                                <BtnReadMore content={t("SecondHallLi3More")}/>
                            </li>
                            <li> <span style={{fontSize :"20px" , fontWeight : "700"}}>{t( "SecondHallLi4Span")}</span> <br/> <br/>{t("SecondHallLi4")}
                                <BtnReadMore content={t("SecondHallLi4More")}/>  
                            </li>                              
                            <li> <span style={{fontSize :"20px" , fontWeight : "700"}}>{t( "SecondHallLi5Span")}</span> <br/> <br/>{t("SecondHallLi5")}
                                <BtnReadMore content={t("SecondHallLi5More")}/>
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
                        <SwiperSlide className='halls-Second'></SwiperSlide>
                        <SwiperSlide className='halls-Second'></SwiperSlide>
                        <SwiperSlide className='halls-Second'></SwiperSlide>
                        <SwiperSlide className='halls-Second'></SwiperSlide>
                        <SwiperSlide className='halls-Second'></SwiperSlide>
                    </Swiper>
                </Container>
            
            </div>
        </>
    )
}

export default Second_Hall

