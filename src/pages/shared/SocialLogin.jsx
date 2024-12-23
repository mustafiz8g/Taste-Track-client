import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { FaFacebook, FaGoogle } from "react-icons/fa";

import Swal from "sweetalert2";


const SocialLogin = () => {

    const { loginWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state || '/';
    const handler = () => {
        loginWithGoogle()
            .then(result => {
                console.log('Login with socai', result.user)
                Swal.fire({
                    title: "Login Successful with Google",
                    icon: "success"
                });
                navigate(from)

            })
            .catch(err => {
                console.log('Error', err)
            })
    }
   
    return (
        <div className="*:w-full space-y-2">
            <button onClick={handler} className="  btn btn-outline btn-sm "><FaGoogle />Continue with Google</button>
            <button className=" btn btn-outline btn-sm btn-info">< FaFacebook />Continue with Facebook</button>
        </div>
    );
};

export default SocialLogin;