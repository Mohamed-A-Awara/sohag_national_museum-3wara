import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Animation from '../Components/Animation'

// importing styled components
import { 
    PageWrapper,
    FormsWrapper,
    Forms,
    Form,
    // SocialIcon,
    PanelsWrapper,
    Panel,
} from "../Styles/Login.Styled";

// importing react-icons
import { FaUser, FaEnvelope} from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { PiPasswordFill } from "react-icons/pi";

// importing SVGs
import SigninSVG from "../Tools/Imgs/signinAFTER-01.svg";
import SignupSVG from "../Tools/Imgs/signupAFTER-01.svg";
import { Alert } from "react-bootstrap";
import axios from "axios";


function Login() {
    const [mode, setMode] = useState('signin');
    const changeMode = () => {
        setMode((prevMode) => (prevMode === 'signin' ? 'signup'  : 'signin'));
        
    }
    const HandleRoute = (routeName)=> {
        if(routeName === 'register'){
            changeMode()
            navigate('/register')
        }else{
            changeMode()
            navigate('/login')
        }
    }
    const navigate = useNavigate();

    // Handle Register
    const [formData , setFormData] = useState({
        firstName :"",
        lastName : "",
        email :"",
        password : ""
    })
    const [error , setError] = useState()

    const handleRegisterChange = (e)=>{
        setFormData({
            ...formData ,
            [e.target.name] : e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // localStorage.setItem("formData", JSON.stringify(formData));
        // Send data to API
        axios.post("https://sohag-national-museum-api-3wara-v1.onrender.com/auth/register" , formData, {
            headers: {
                "Content-Type": "application/json",
            },
            })
            .then((data) => {
                // Handle API response
                console.log(data.data);
                let MsgValidation = data.data[0]
                if (MsgValidation){
                    return setError('ERROR :Email Or Password Not Valid ' )
                }
                if(data.data.RegisterMsg){
                    return setError("ERROR : " +  data.data.RegisterMsg)
                }
                // localStorage.setItem('username' , data.RegisterCreated.username)
                HandleRoute('login')
                formData.firstName =""
                formData.lastName = ""
                formData.username = ""
                formData.email =""
                formData.password ="" 
                setError('')
                
            })
            .catch((error) => {
                let e ;
                if (error.response){
                    e= error.response.data
                    e.forEach((err)=> {
                        console.log(err.Msg);
                        setError("ERROR : " + err.Msg)
                    })
                    return "OF"
                }
                console.error("Error:", error);
                setError("ERROR : "  + error )
            });
    };

    // Handle Login
    const [loginData, setLoginData] = useState({
        email :"",
        password : ""
    })
    const [loginError , setLoginError] = useState()

    const handleLoginChange = (e)=>{
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value
        })
    }
    const handleLoginSubmit = async (e)=>{
        e.preventDefault()
        console.log(loginData.email);

        await axios.post('https://sohag-national-museum-api-3wara-v1.onrender.com/auth/login' , loginData ,{
            headers : {
                "Content-Type": "application/json",
            }
        })
        .then((data)=>{
            console.log(data);
            if (data.LoginStatus){
                return setLoginError('ERROR :  ' + data.LoginStatus)
            }
            // console.log(data);
            localStorage.setItem('username' , data.data.firstName + " " + data.data.lastName)
            localStorage.setItem('token' ,JSON.stringify(data.data.token) )
            loginError('')
            loginData.email =""
            loginData.password=""
            navigate('/home')
            
        })
        .catch((e)=>{
            setLoginError("ERROR : Invalid Email and Password" )
            loginData.email =""
            loginData.password=""
        })
    }
    const [see , setSee] = useState(false)
    const handleSeePassword = (e)=>{
        e.preventDefault()
        setSee(! see)
    }

    return (
        <Animation>
            <PageWrapper $mode ={mode}>
                <FormsWrapper>
                    <Forms $mode={mode}>
                        {/* Start Sign In */}
                        <Form $formType='signin' $mode={mode}
                            method="post"
                            action="https://sohag-national-museum-api-3wara-v1.onrender.com/auth/login"
                            onSubmit={handleLoginSubmit}
                        >
                            {loginError && <Alert variant='danger' >{loginError} </Alert> }
                            <h2 className="form-title">Sign in</h2>
                            <div className="input-field">
                                <i><FaUser /></i>
                                <input 
                                    type='email'
                                    placeholder='Email'
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleLoginChange}
                                    required
                                    />
                            </div>
                            
                            <div className="input-field d-flex" style={{justifyContent :"space-between"}}>
                                <div className="passStyle" style={{width : "80%" , margin: "0 auto"}}>
                                    <i><PiPasswordFill /></i>
                                    <input
                                        type={see ? "text" : "password"} 
                                        placeholder='Password'
                                        className="pass"
                                        name="password"
                                        value={loginData.password}
                                        onChange={handleLoginChange}
                                        style={{marginLeft : "17px "}}
                                        required
                                        />
                                </div>
                                <button onClick={handleSeePassword} 
                                    className="btn-See"
                                >
                                    {see ? <FaRegEye/> :<FaRegEyeSlash/> }
                                </button>
                            </div>
                            <input className="submit-btn" type='submit' value='Sign in' />
                            
                        </Form>
                            {/* End Sign In */}

                            {/* Start Sign Up */}
                        <Form $formType='signup' $mode={mode} 
                            method="post"
                            action="https://sohag-national-museum-api-3wara-v1.onrender.com/auth/register"
                            onSubmit={handleSubmit}
                        >
                            {error && <Alert variant='danger' >{error} </Alert> }
                            <h2 className="form-title">Sign Up</h2>
                            <div className="input-field" style={{ display: 'flex', gap: '10px' }}>
                                <i style={{marginLeft :"17px"}}><FaUser /></i>
                                <input 
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleRegisterChange}
                                    required 
                                    style={{ flex: 1 , width :"50%"  }} 
                                    
                                    />
                                <i style={{marginLeft :"17px"}}><FaUser /></i>
                                <input 
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleRegisterChange}
                                    required
                                    style={{ flex: 1 ,width :"50%"}} 
                                    
                                    />
                            </div>
                            
                            <div className="input-field">
                                <i><FaEnvelope /></i>
                                <input 
                                    type='email' 
                                    placeholder='Email'
                                    name="email"
                                    value={formData.email}
                                    onChange={handleRegisterChange}
                                    required
                                    />
                            </div>
                            <div className="input-field d-flex" style={{justifyContent :"space-between"}}>
                                <div className="passStyle" style={{width : "80%" , margin: "0 auto"}}>
                                <i><PiPasswordFill /></i>
                                <input
                                    type={see ? "text" : "password"} 
                                    placeholder='Password'
                                    name="password"
                                    value={formData.password}
                                    onChange={handleRegisterChange}
                                    style={{marginLeft : "17px "}}
                                    required
                                    />
                                </div>
                                <button onClick={handleSeePassword} 
                                    className="btn-See"
                                >
                                    {see ? <FaRegEye/> :<FaRegEyeSlash/> }
                                </button>
                            </div>
                            
                            <input className="submit-btn" type='submit' value='Sign Up'  />
                            
                        </Form>
                            {/* End Sign Up */}

                    </Forms>
                </FormsWrapper>

                <PanelsWrapper>
                    <Panel $placement='left' $mode={mode}>
                        <div className="panel-content">
                            <h3>New in our store?</h3>
                            <p>Register and enjoy the best deals ever on our collection of laptops.</p>
                            <button className="panel-btn" onClick={()=>{ HandleRoute('register')}}>Sign Up</button>
                        </div >
                        <img className="panel-img" src={SignupSVG} alt='signup' />
                    </Panel>
                    
                    <Panel $placement='right' $mode={mode}>
                        <div className="panel-content">
                            <h3>One of us?</h3>
                            <p>If you already have an account, just sign in. We missed you!</p>
                            <button className="panel-btn" onClick={()=>HandleRoute('login')}>Sign In</button>
                        </div>
                        <img className="panel-img" src={SigninSVG} alt='signin' />
                    </Panel>
                </PanelsWrapper>
            </PageWrapper>
        </Animation>
    )
}

export default Login
