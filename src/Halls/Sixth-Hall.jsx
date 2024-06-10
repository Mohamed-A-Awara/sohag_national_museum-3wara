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

function Sixth_Hall() {
    const [t] = useTranslation()

    return (
        
        <>
            <div className='halls-text pt-3 pb-3'>
                    <Container fluid>
                        <ul className='Sixth-list'>
                            <li>{t("SixthHallLi1")}
                                <BtnReadMore content={t("SixthHallLi1More")}  />
                            </li>
                            <li>
                            {t("SixthHallLi2")}                              
                                <BtnReadMore  content={t("SixthHallLi2More")}  />
                            </li>
                            <li>
                            {t("SixthHallLi3")}
                                <BtnReadMore  content={t("SixthHallLi3More")}  />

                            </li>
                            <li>
                            {t("SixthHallLi4")}
                                <BtnReadMore  content={t("SixthHallLi4More")}/>
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
                        <SwiperSlide className='halls-Sixth'></SwiperSlide>
                        <SwiperSlide className='halls-Sixth'></SwiperSlide>
                        <SwiperSlide className='halls-Sixth'></SwiperSlide>
                        <SwiperSlide className='halls-Sixth'></SwiperSlide>
                        <SwiperSlide className='halls-Sixth'></SwiperSlide>
                        
                    </Swiper>
                </Container>
            
            </div>
        </>
    )
}

export default Sixth_Hall





