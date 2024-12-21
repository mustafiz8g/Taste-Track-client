import Lottie from "lottie-react";
import signInLottie from '../../src/assets/login.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SocialLogin from "./shared/SocialLogin";

const Login = () => {
    const { loginUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state || '/';
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    
        //password validation
        //show password validation error
    loginUser(email, password)
    .then(result => {
        console.log('sign IN :', result.user)

        navigate(from)

    })
    .catch( err => {
        console.log(err.message)
    })
    
       }
    return (
        <div className="flex ">
        <div className="flex-1"> 
         <form onSubmit={handleSignIn} >
             <div className="form-control">
                 <label className="label">
                     <span className="label-text font-semibold">Email</span>
                 </label>
                 <input
                     name="email"
                     type="email"
                     placeholder="email"
                     className="input input-bordered"
                     required />
             </div>
             <div className="form-control">
                 <label className="label">
                     <span className="label-text font-semibold">Password</span>
                 </label>
                 <input
                     name="password"
                     type= 'password'
                     placeholder="password"
                     className="input input-bordered"
                     required
                     // autoComplete="current-password"
                     
                 />


             </div>
            <div className="form-control mt-4">
                 <button className="btn btn-primary  text-[16px]">Login</button>
             </div>

             <div>
                 <p className="text-[14px] mt-3">dont have Account ? <Link to="/register"><button className="link link-info font-bold">Register</button>
                 </Link></p>
             </div>
             <SocialLogin></SocialLogin>
             

         </form>
         
         </div>
        <div className="flex-1">
         <Lottie animationData={signInLottie}></Lottie>
          
        </div>
     </div>
    );
};

export default Login;