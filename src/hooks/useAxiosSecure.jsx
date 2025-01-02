// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";


// const axiosInstance = axios.create({
//     baseURL: 'https://taste-track-server.vercel.app',
//     withCredentials: true
// });

// const useAxiosSecure = () => {
//     const { logOutUser } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.interceptors.response.use( response=> {
//             return response
//         },
//     error => {
//         console.log('error cauth ihn interceptor', error)

//         if(error.status === 401 || error.status === 403){
//             console.log('need to log out user')
//             logOutUser()
//             .then(() => {
//                 console.log('logged out user')
//                 navigate('/login')
//             })
//             .catch(error => console.log(error))
//         }

//         return Promise.reject(error)
//     }
//     )
//     },[])

//     return axiosInstance ;
// };

// export default useAxiosSecure;


import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'https://taste-track-server.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { logOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const interceptor = axiosInstance.interceptors.response.use(
            response => response,
            async error => {
                console.log('error caught in interceptor', error);

                if (error.response?.status === 401 || error.response?.status === 403) {
                    console.log('need to log out user');
                    try {
                        await logOutUser();
                        console.log('logged out user');
                        navigate('/login');
                    } catch (err) {
                        console.log(err);
                    }
                }

                return Promise.reject(error);
            }
        );

        // Cleanup the interceptor when the component unmounts
        return () => {
            axiosInstance.interceptors.response.eject(interceptor);
        };
    }, [logOutUser, navigate]);

    return axiosInstance;
};

export default useAxiosSecure;
