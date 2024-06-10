import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Image, Nav, Navbar } from 'react-bootstrap';
import logoImage from '../Tools/Imgs/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { useTranslation } from 'react-i18next';
import { FaArrowUp } from "react-icons/fa";
function New_Header() {
    const sign_link = useNavigate();
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 90; 
            setScrolled(isScrolled);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Translations 
    const [t , i18n] = useTranslation();  
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };
    let user = localStorage.getItem('username')
    const handleLogout = ()=>{
        localStorage.clear('username')
        sign_link('/home')
    }
    return (
        <>
            <Navbar 
                expand="lg" 
                className={scrolled ? "nav-height navbar-scroll" : "nav-height"}
                
            >
                <Container fluid>
                    <Navbar.Brand href="/home">
                        <Image src={logoImage} style={{ width: "100%", height: "80px" }} />
                    </Navbar.Brand>

                    <button className="navbar-toggler btn-responsive collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    {/* nav-small */}
                    <Navbar.Collapse id="navbarScroll" className='nav-small' >
                            <Nav
                                // className="m-auto my-2 my-lg-0 p-2 header-links"
                                className={i18n.language === 'en' ? "m-auto my-2 my-lg-0 p-2 header-links navDir" : "m-auto my-2 my-lg-0 p-2 header-links navDirRtL"}
                                style={{ maxHeight: 'auto' }}
                                navbarScroll
                            >
                                <Nav.Link active > 
                                    <NavLink to='/home' >{t('Home')}</NavLink>
                                </Nav.Link>
                                <Nav.Link >
                                    <NavLink to='/overview' >{t('Overview')}</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink to='/visit' >{t('Visit')}</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink to='/halls'>{t('Halls')}</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink to='/programs_and_events' >{t('Programs')}</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink to='/virtual_tour_guide' >{t('tour')}</NavLink>
                                </Nav.Link>
                            </Nav>
                        
                        {user && <Form className="d-flex">
                            
                            <Button variant="me-2 btn-sign withUser" onClick={() => sign_link("/profile")} style={{textTransform : "uppercase"}}>{localStorage.getItem('username')}</Button>
                            <Button variant="me-2 btn-sign wid"  onClick={handleLogout}>{t('logout')}</Button>
                            {
                                i18n.language !== 'ar' && (
                                    <Button variant="me-2 btn-sign translate" onClick={() => changeLanguage('ar')}>Ar</Button>
                                )
                            }
                            {
                                i18n.language !== 'en' && (
                                    <Button variant="me-2 btn-sign translate tran-en" onClick={() => changeLanguage('en')}>En</Button>
                                )
                            }
                        </Form>}

                        {! user  && <Form className="d-flex">
                            <Button variant="me-2 btn-sign withoutUser" onClick={() => sign_link("/login")}>{t('Login')}</Button>
                            {
                                i18n.language !== 'ar' && (
                                    <Button variant="me-2 btn-sign translate" onClick={() => changeLanguage('ar')}>Ar</Button>
                                )
                            }
                            {
                                i18n.language !== 'en' && (
                                    <Button variant="me-2 btn-sign translate tran-en" onClick={() => changeLanguage('en')}>En</Button>
                                )
                            }
                        </Form>}
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Button 
                variant='dark' 
                className={scrolled ? "gototop" : "btnnone"}
                style={{position: 'fixed', bottom: '20px', right: '20px' , zIndex:"10000" }}
                onClick={scrollToTop}

            ><FaArrowUp/></Button>
        </>
    );
}

export default New_Header;
