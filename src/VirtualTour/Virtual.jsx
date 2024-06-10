/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import Main_Header from "./Main-Header.jsx";
// import Lab_View from './Lab-View'
import { Container } from "react-bootstrap";
import Mobile_View from "./Mobile-View.jsx";
import Lab_View from "./Lab-View.jsx";
import Footer from "../Footer/Footer.jsx";
import { useTranslation } from "react-i18next";
import Animation from '../Components/Animation'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Virtual() {
    const {t} = useTranslation()
    useEffect(()=>{
        AOS.init({duration : 2000})
    } , [])
    return (
        <Animation>
            <div className="all-parent">
                
                < Main_Header />

                <section className="tour-guide mt-5 pt-3 pb-3" data-aos="zoom-in"> 
                        <Container fluid>
                        <h2 className="pt-3 pb-3">{t("museum'sPieces")}</h2>
                        </Container>
                </section>

                <section data-aos="zoom-in" >{ViewTour()}</section>
                <Footer />
            </div>
        </Animation>
    );
}

function ViewTour() {
    if (window.screen.availWidth <= 768) {
        return <Mobile_View />;
    } else {
        return <Lab_View />;
    }
}
export default Virtual;
