

import { Link, useLocation, useNavigate } from "react-router-dom";

import Lottie from "lottie-react";
import registerLottie from '../../src/assets/register.json'
import useAuth from "../hooks/useAuth";
import SocialLogin from "./shared/SocialLogin";
import { MdRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUser, setUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const [showPassword, setShowPassword] = useState(false);
    const [successSMS, setSuccessSMS] = useState('');
    const [error, setError] = useState('');


   const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    // password validation
    // show password validation error

    setSuccessSMS('')
    setError('')
    if (!terms) {
        setError('Please accept our terms & conditon');
        return;
    }
    if (password.length < 6) {
        setError('password should be 6 cahharacters or longer')
        return;
    }
    const passwordRegexU = /^(?=.*[A-Z]).+$/
    const passwordRegexL = /^(?=.*[a-z]).+$/

    if (!passwordRegexU.test(password)) {
        setError('At least one Caracter Uppercase')
        return;
    }
    if (!passwordRegexL.test(password)) {
        setError('At least one Caracter Lowercase')
        return;
    }


    createUser(email, password)
    .then(result => {
        // console.log('Register', result.user)
        const user = result.user;
        setUser(user)
        updateUser({
            displayName: name,
            photoURL : photo
        })
        e.target.reset();
        if(result.user){
            Swal.fire({
                title: "Register Successful",
                icon: "success"
            });
        }
        navigate(from)
    })
    .catch(err => {
        // console.log(err.message)
        setError(err.message)
    })


   }






    // due password validation .................................

    const handlePassword = ev => {
        ev.preventDefault();
        const newPassword = ev.target.value;
        setError('')
        setSuccessSMS('')
        //password validation 

        if (newPassword.length <= 6) {
            setError('password should be 6 cahharacters or longer')

        }
        const passwordRegexU = /^(?=.*[A-Z]).+$/
        const passwordRegexL = /^(?=.*[a-z]).+$/
        if (!passwordRegexU.test(newPassword)) {
            setError('At least one Caracter Uppercase')

        }
        if (!passwordRegexL.test(newPassword)) {
            setError('At least one Caracter Lowercase')

        }
        if (newPassword.length > 6 && passwordRegexU.test(newPassword) && passwordRegexL.test(newPassword)) {
            setSuccessSMS('strong')
        }


    }
   
    
    return (
        <div className="w-10/12 mx-auto flex justify-center flex-col-reverse items-center md:flex-row ">
          
           <div>
           <form onSubmit={handleRegister} className="w-[340px]" >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Photo</span>
                    </label>
                    <input
                        name="photo"
                        type="text"
                        placeholder="Photo Url"
                        className="input input-bordered"
                        required />
                </div>
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
                        onChange={handlePassword}
                        type={showPassword ? 'text' : 'password'}                       
                        placeholder="password"
                        className="input input-bordered"
                        required
                    />
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="relative left-[300px] bottom-8">
                        {
                            showPassword ? <MdRemoveRedEye /> : <FaEyeSlash />
                        }
                    </div>
                    <div className="form-control ">
                        <p className="text-sm text-success">{successSMS}</p>
                        <p className="text-sm text-error">{error}</p>

                    </div>


                </div>
                <div className="form-control">
                       
                    <label className="label flex justify-start gap-3  cursor-pointer">
                        <input
                            name="terms"
                            type="checkbox" className="checkbox checkbox-primary checkbox-xs" />
                        <span className="label-text">Accept terms & condition</span>
                    </label>
                </div>
             

                <div className="form-control mt-4">
                    <button className="btn btn-primary  text-[16px]">Register</button>
                </div>

                <div>
                    <p className="text-[14px] mt-3">Already Customer ? <Link to="/login"><button className="link link-info font-bold">Login</button>
                    </Link></p>
                </div>
                <div className="divider"><small>OR</small></div>
          
                

            </form>
            <SocialLogin></SocialLogin>
           </div>
            
           
           <div className="">
            <Lottie  className="w-[340px]" animationData={registerLottie}></Lottie>
             <ToastContainer></ToastContainer>
           </div>
        </div>
    );
};

export default Register;