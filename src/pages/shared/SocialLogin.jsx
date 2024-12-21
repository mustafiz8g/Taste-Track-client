import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const { loginWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state || '/';
    const handler = () => {
        loginWithGoogle()
        navigate(from)
    }
    return (
        <div>
            <button onClick={handler} className="btn btn-success"> Login with Google</button>
        </div>
    );
};

export default SocialLogin;