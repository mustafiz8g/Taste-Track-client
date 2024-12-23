
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './navBar.css'

const Navbar = () => {
    const { user, logOutUser } = useAuth();
    const navigate = useNavigate();
    
    // const defaultPhoto = "https://i.ibb.co.com/TTNz5Yp/Screenshot-2024-12-22-103839.png"



    const navOptions = < >
        <li><NavLink className='font-bold text-base' to='/'>Home</NavLink></li>
        <li><NavLink className='font-bold text-base' to='/allFoods'>All Foods</NavLink></li>
        <li><NavLink className='font-bold text-base' to='/gallery'>Gallery</NavLink></li>
    </>

     const handleLogOut = () => {
        logOutUser()
            .then(() => {
                navigate('/')

            })
            .catch(err => {
                console.log('Error ', err.message)
            })
    }

    const navOptions2 = <>
        <li><NavLink className='font-bold text-base' to='/myFoods'>My Foods</NavLink></li>
        <li><NavLink className='font-bold text-base' to='/addFoods'>Add Foods</NavLink></li>
        <li><NavLink className='font-bold text-base' to='/myOrders'>My Orders</NavLink></li>
        <li><button className="  font-bold" onClick={handleLogOut}>Log Out</button> </li>
    </>

   

    return (
        <div className="z-50 sticky top-0 navBar">
            <div className="w-11/12 mx-auto navbar flex justify-between ">

                <div className="first">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <FaBars className="text-xl" />

                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-3xl font-bold">TASTE <span className="text-red-600 font-bold">TRACK</span></Link>
                </div>
                <div>
                    <div className="second hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>

                    </div>
                    <div className="third">

                        <div className="*:font-bold">

                            {
                                user ?

                                    <div className="dropdown">
                                        <div tabIndex={0} role="button" className="">
                                            <div className="flex justify-center items-center gap-2">

                                                <div className="w-12 h-12">
                                                    <img title={user.displayName} className="w-full h-full p-1 object-contain rounded-full border  border-blue-800 border-2 hover:border-green-500" src={user?.photoURL } alt="profile" />
                                                </div>
                                            </div>

                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 right-3 shadow ">
                                            {navOptions2}
                                        </ul>
                                    </div>


                                    :
                                    <div>
                                        <Link className="hover:underline  decoration-2 underline-offset-2 font-bold" to='/login' >Login</Link>
                                        <span> / </span>
                                        <Link className="hover:underline  decoration-2 underline-offset-2 font-bold" to='/register' >Register</Link>
                                    </div>
                            }


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;