import { Col, Image, Row } from "react-bootstrap";
import './NewProfile.css'
import { useTranslation } from "react-i18next";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Animation from "../Components/Animation";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Profile () {
    const {t} = useTranslation()
    const navigate = useNavigate()
    let token = localStorage.getItem('token')
    token = token.slice(1 , token.length-1)
    console.log(token);
    let tokenparse = `Bearer ${token}`
    
    const [inputValue, setInputValue] = useState({
        firstName : "",
        lastName : "",
        username : "",
        address :"",
        email :"",
        age : "" ,
        nationalID  : "",
        image : "",
        nationality : "",
        gender : "",
        phone : ""

    });

    useEffect( ()=>{
        AOS.init({duration : 2000})
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
            console.log(data);
            setInputValue({
                firstName : data.firstName,
                lastName : data.lastName,
                username: data.firstName + " " + data.lastName,
                email : data.email,
                address : data.address,
                age : data.age,
                nationalID : data.nationalID,
                nationality : data.nationality,
                gender : data.gender,
                phone : data.phone,
                image : (data.image).split('/')[3] || data.image
            })
            console.log((data.image).split('/')[3]);
        })
        .catch((e)=>console.log(e))
    }, [] )


    const handleInputChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value
        })
    };
    
    const handleGotoupdate =(e)=>{
        e.preventDefault()
        navigate('/update')
    }

    return (
    <Animation>
        <div className="all-parent ">

        {/* Start Overview Header */}
        <div className='head_section pt-3 pb-3 titleProfile' data-aos="zoom-in">
                <p>{t('profile')}</p>                
        </div>
        {/* End Overview Parent */}
        <div className="user-form">

        <form

        >
            <div className="profile-image" data-aos="zoom-in">
                <Image src={`https://sohag-national-museum-api-3wara-v1.onrender.com/api/images/UserImage/${inputValue.image}`} />
                <div>
                    <input  id="fileInput" type="file"/>
                    {/* <label for="fileInput" class="custom-file-upload-label">
                        <div class="custom-file-upload">Choose File</div>
                    </label> */}
                </div> 
            </div>
            <div className="user-data">
                <Row>
                    <Col lg="6" sm='12' className="centerData" data-aos="flip-left">
                        <div className="firstNameData">
                            <label htmlFor="text" className=" labelText">{t('FirstName')} </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="inputData"
                                    value={inputValue.firstName  }
                                    onChange={handleInputChange }
                                    readOnly
                                />
                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="centerData" data-aos="flip-right">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('LastName')}</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="inputData"
                                    value={inputValue.lastName}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                                
                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="centerData" data-aos="flip-left"> 
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('Username')}</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="inputData"
                                    value={inputValue.username}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                                
                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="" data-aos="flip-right">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('gender')} </label>
                                <select
                                    className='inputData'
                                    name='gender'
                                    value={inputValue.gender}
                                    onChange={handleInputChange}
                                    disabled
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>    
                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="centerData" data-aos="flip-left">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('Address')}</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="inputData"
                                    value={inputValue.address}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="centerData" data-aos="flip-right">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('Email')}</label>
                                <input
                                    type="text"
                                    name="email"
                                    className="inputData"
                                    value={inputValue.email}
                                    onChange={handleInputChange}
                                    style={{textTransform : "lowercase"}}
                                    readOnly
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
                                    value={inputValue.phone}
                                    onChange={handleInputChange}
                                    
                                />
                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="" data-aos="flip-right">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('NationalID')} </label>
                                <input
                                    type="number"
                                    name="nationalID"
                                    className="inputData"
                                    value={inputValue.nationalID}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                        </div>
                    </Col>
                    <Col lg="6" sm='12' className="" data-aos="flip-left">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText">{t('Nationality')}</label>
                                <input
                                    type="text"
                                    name="nationality"
                                    className="inputData"
                                    value={inputValue.nationality}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                        </div>
                    </Col>
                    
                    <Col lg="6" sm='12' className="centerData" data-aos="flip-right">
                        <div className="firstNameData">
                            <label htmlFor="text" className="d-block labelText"> {t('Age')} </label>
                                <input
                                    type="number"
                                    name="age"
                                    className="inputData"
                                    value={parseInt(inputValue.age)}
                                    onChange={handleInputChange}
                                    readOnly
                                />

                        </div>
                    </Col>
                    <Col lg='10' className="btn-save" data-aos="zoom-in">
                    <button 
                        type="submit"
                        onClick={handleGotoupdate}
                        ><span>{t('Update')} </span> <FaRegEdit/> </button>
                    </Col> 

                </Row>
            </div>
        </form>
        </div>
        </div>

        <Footer />
    </Animation> 
    )   
}
export default Profile

