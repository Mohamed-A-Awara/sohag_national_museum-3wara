import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Virtual.css"
import { Container, Image } from 'react-bootstrap';
import TeamLogo from '../Tools/Imgs/teamImg.png'
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import AOS from 'aos'
import 'aos/dist/aos.css'


function Main_Header() {
    const smallWidth = window.screen.availWidth;
    const {t} = useTranslation()

    return (
        <section>
            <div className='virtual-Header pt-3 pb-3' data-aos="zoom-in">
                    <Container fluid>
                        <h2 className={smallWidth < 768 ? "p-1 virtual-h2" : "p-3 virtual-h2"}>{t('tour')}</h2>
                    </Container>
            </div>

            <Container fluid>
                <div className='virtual-header-data ' data-aos="zoom-in">
                        <h3 data-aos="flip-left">{t('virtualText')}</h3>
                        <Image src={TeamLogo} data-aos="flip-right" />
                        <button
                            data-aos="flip-left"
                        >
                        <a href='https://play.google.com/apps/internaltest/4700846862240692614'>
                        <MdOutlineQrCodeScanner style={{fontSize :"25px"}}/>{t('tour')}
                        </a>

                        </button>

                </div>
            </Container>
            
        </section>
    )
}

export default Main_Header
