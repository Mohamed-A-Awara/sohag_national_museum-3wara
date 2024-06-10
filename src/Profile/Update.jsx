import React, { useEffect } from 'react'
import { Col, Image, Row } from "react-bootstrap";
import './NewProfile.css'
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Footer from "../Footer/Footer";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Animation from '../Components/Animation';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Update() {
    const {t} = useTranslation()
    let token = localStorage.getItem('token')
    token = token.slice(1 , token.length-1)
    // console.log(token);
    let tokenparse = `Bearer ${token}`
    const [updateValue, setUpdateValue] = useState({
        firstName : "",
        lastName : "",
        username :"",
        age : "" ,
        nationalID  : "",
        image : "",
        gender : "",
        nationality : "",
        phone : "",
        address : "",
    });
    const notify = () => toast.dark('User Data Is Updated  ❤️', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        });
    
    
    const handleUpdateChange = (e) => {
        setUpdateValue({
            ...updateValue,
            [e.target.name] : e.target.value
        })
    };

    useEffect(()=>{
        AOS.init({duration :2000})
        fetch('https://sohag-national-museum-api-3wara-v1.onrender.com/users/user' ,{
            method :"get",
            mode :"cors",
            headers : {
                "authorization" : tokenparse,
                "cache": 'no-store'
            }
        })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.image);
        setUpdateValue({
                firstName : data.firstName,
                lastName : data.lastName,
                username: data.firstName + " " + data.lastName,
                email : data.email,
                address : data.address,
                age : data.age,
                nationalID : data.nationalID,
                nationality  : data.nationality,
                phone : data.phone,
                gender : data.gender,
                image : (data.image).split('/')[3] || data.image
        })
        // notify()
    })
    } , [] )



    const handleFormUpdate =(e)=>{
        e.preventDefault()
        axios.patch('https://sohag-national-museum-api-3wara-v1.onrender.com/users/user/update' , updateValue ,{
            headers :{
                "authorization" : tokenparse,
            }
        })
        .then((res)=>{
            console.log(res.data.UserUpdated);
            let user = res.data.UserUpdated
            setUpdateValue({
                ...updateValue ,
                firstName : user.firstName,
                lastName : user.lastName,
                username: user.firstName + " " + user.lastName,
                email : user.email,
                address : user.address,
                age : user.age,
                nationalID : user.nationalID,
                nationality : user.nationality,
                phone : user.phone,
                gender : user.gender
            })
            console.log(updateValue.image);
            // notify()
        }).catch(e => console.log(e))
    }
    // Design

    return (
        <Animation>
        <div className="all-parent">

            {/* Start Overview Header */}
            <div className='head_section pt-3 pb-3 titleProfile' data-aos="zoom-in">
                    <p>{t('Update')}</p>                
            </div>
        {/* End Overview Parent */}
        <div className="user-form">

        <form
            method='patch'
            action='https://sohag-national-museum-api-3wara-v1.onrender.com/users/user/update'
            onSubmit={handleFormUpdate}
        >
            <div className="profile-image" data-aos="zoom-in">
                <Image src={`https://sohag-national-museum-api-3wara-v1.onrender.com/api/images/UserImage/${updateValue.image}`} data-aos="flip-left" />
                <div>
                    <input
                        id="fileInput"
                        type="file"
                        
                        />
                    
                </div> 
            </div>
            <div className="user-data">
                <Row>
                    <Col lg="6" sm='12' className="" data-aos="flip-left"> 
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('FirstName')}</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="inputData"
                                    value={updateValue.firstName  }
                                    onChange={handleUpdateChange }
                                    
                                />
                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="" data-aos="flip-right">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText"> {t('LastName')} </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="inputData"
                                    value={updateValue.lastName}
                                    onChange={handleUpdateChange}
                                    
                                />
                                
                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="" data-aos="flip-left">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('Username')}</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="inputData"
                                    value={updateValue.username}
                                    onChange={handleUpdateChange}
                                    
                                />
                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="" data-aos="flip-right">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('gender')} </label>
                                <select
                                    className='inputData'
                                    name='gender'
                                    value={updateValue.gender}
                                    onChange={handleUpdateChange}
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>    
                        </div>
                    </Col>
                    
                    <Col lg="6" sm='12' className="" data-aos="flip-left">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('Age')} </label>
                                <input
                                    type="number"
                                    name="age"
                                    className="inputData"
                                    value={parseInt(updateValue.age)}
                                    onChange={handleUpdateChange}
                                    
                                />

                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="" data-aos="flip-right">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('Address')} </label>
                                <input
                                    type="text"
                                    name="address"
                                    className="inputData"
                                    value={updateValue.address}
                                    onChange={handleUpdateChange}
                                    
                                />

                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="" data-aos="flip-left">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('NationalID')} </label>
                                <input
                                    type="number"
                                    name="nationalID"
                                    className="inputData"
                                    value={updateValue.nationalID}
                                    onChange={handleUpdateChange}
                                    
                                />
                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="" data-aos="flip-right">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('Nationality')} </label>
                                <input
                                    type="text"
                                    name="nationality"
                                    className="inputData"
                                    value={updateValue.nationality}
                                    onChange={handleUpdateChange}
                                    
                                />
                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="" data-aos="flip-left">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('phone')} </label>
                                <input
                                    type="number"
                                    name="phone"
                                    className="inputData"
                                    value={updateValue.phone}
                                    onChange={handleUpdateChange}
                                    
                                />
                        </div>
                    </Col>
                    <Col lg='10' className="btn-save" data-aos="zoom-in">
                    <button 
                        type="submit"
                        onClick={notify}
                        >{t('save')} </button>
                    </Col>
                </Row>
            </div>
            <ToastContainer/>
        </form>
        </div>
        <Footer />
        </div>
        </Animation>
    )
}

export default Update