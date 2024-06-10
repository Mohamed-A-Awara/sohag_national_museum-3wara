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
function Fourth_Hall() {
    const [t] = useTranslation()

    return (

        <>
            <div className='halls-text pt-3 pb-3'>
                    <Container fluid>
                        <ul>
                            <li>
                            {t("FourthHallData")}
                                <BtnReadMore
                                    content= {t("FourthHallDataMore")}
                                />
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
                        <SwiperSlide className='halls-Fourth'></SwiperSlide>
                        <SwiperSlide className='halls-Fourth'></SwiperSlide>
                        <SwiperSlide className='halls-Fourth'></SwiperSlide>
                        <SwiperSlide className='halls-Fourth'></SwiperSlide>
                        <SwiperSlide className='halls-Fourth'></SwiperSlide>

                
                    </Swiper>
                </Container>
            
            </div>
        </>
    )
}

export default Fourth_Hall


