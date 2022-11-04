import React ,{ useState} from "react"
import FormHeader from "./Formheader"
import { Link , useNavigate} from "react-router-dom";
import "./Login-styles.css"

function Login(){
    // const navigate=useNavigate('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
  
    function handleSubmit(e){
        e.preventDefault();


    }
    return (
            <div id="loginform">
                <div className="frame">
                    <img src="https://www.infersol.com/wp-content/uploads/2020/02/logo.png"/>
                    <p id="version">Version 1.0</p>
                    <FormHeader/>
                    <div className="frame3">
                        <div className="row">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                     <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" id="email" className="email" placeholder="Email"/>
                                  
                                 </div>
                                 <div className="row">
                                     <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" id="password" className="password" placeholder="Password"/>
                                 </div>        
                                 <div className="row" id="button">
                                 <Link to={"/home"}>
                                    <button type="submit" >
                                     Login 
                                    </button>   
                                    </Link>      
                                 </div>        
                            </form>           
            
                        </div>
                        <div className="remember">
                            <div className="remember-inside">
                                <input type="checkbox" id="box" className="check-box"  />
                            </div>
                            <label for="box">Remember Me</label>
                        </div>
                        <p id="forgot"><a href="">Forgot Password</a></p>
                                               
                    </div>
                    <label class="copyright">©Copyright Infer Solutions, Inc. All Rights Reserved</label>

                </div>
            </div>)
    
}
export default Login