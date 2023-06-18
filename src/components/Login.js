import { Link, useNavigate,useLocation } from "react-router-dom";
import {initializeApp} from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {firebaseConfig} from './firebaseConfig.js';
import { useEffect, useState } from "react";
const Login=()=>{
    const navigate=useNavigate();
    const location=useLocation();
    initializeApp(firebaseConfig);
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const page=location.pathname==='/login'?true:false;
    const auth=getAuth();

    const [isUserExist,setUserExist]=useState(false)
    const [isEmailUsed,setEmailUsed]=useState(false)
    const [emailValid,setEmailValid] =useState(true)
    const [passwordValid,setPasswordValid] =useState(true)

    const validation=(fieldName,value)=>{
      switch (fieldName) {
        case 'email':
          return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      case 'password':
               return value.length>=6;
        default:
          break;
      }

    }
    const onClickHandler=(e)=>{
        e.preventDefault();

        if(!validation('email',email) || !validation('password',pass)){
          setEmailValid(validation('email',email))
          setPasswordValid(validation('password',pass))
          return;
        }

        if(page){
           
            signInWithEmailAndPassword(auth,email,pass)
            .then(auth=>{
                if(auth){
                navigate('/dashboard')   }        
             })  
             .catch((error) => setUserExist(true));
        }else{
            createUserWithEmailAndPassword(auth,email,pass)
            .then(auth=>{
                if(auth){
                    navigate('/dashboard')   }
                    })
                    .catch((error) => setEmailUsed(true));

        }
       
    }

    useEffect(()=>{
        setUserExist(false);
        setEmailUsed(false);
    },[location]);

    const emailOnChangehandler=(e)=>{
        setEmail(e.target.value)
    }



    return(
        <div className="login">
      <div className="holder">
        <h1 className="text-white">{page ?'Sign In' : 'Register'}</h1>
        <br/>
        <form>
          <input 
            className="form-control" 
            value={email}
            onChange={emailOnChangehandler}
            type="email" 
            placeholder="Email"/>
            
            {!emailValid && <p className="text-danger">Email is invalid</p>}
          <input 
            className="form-control"
            value={pass}
            onChange={(e)=>{setPass(e.target.value)}}
            type="password" 
            placeholder="Password"/>
            {!passwordValid && <p className="text-danger">Password is invalid</p>}
          <button className="btn btn-danger btn-block" onClick={onClickHandler} >
          {page ?'Sign In ' : 'Sign Up'}
          </button>
          <br/><br/>
          {page && <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label text-white" htmlFor="flexCheckDefault">
              Remember Me
            </label>
          </div>}
        </form>
        <br/>
        {isUserExist && <p className="text-danger">User Not Found| Go for SignUp!</p>}
        {isEmailUsed && <p className="text-danger">Email already in use| Sign In!</p>}
        <div className="login-form-other">
          <div className="login-signup-now">
          {page ?'New to Netflix? ' : 'Already an User?'} &nbsp;
            <Link className=" target_self" to={page ?'/register' : '/login'}>
            {page ?'Sign Up Now' : 'Sign In'}
            </Link>.
          </div>
        </div>
      </div>
      <div className="shadow"></div>
      <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
    </div>
    )
}
export default Login;