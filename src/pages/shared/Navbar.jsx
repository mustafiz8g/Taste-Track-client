






import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";




const Navbar = () => {
    const { user,logOutUser } = useAuth

    const handleLogOut = () => {
        logOutUser()
        .then(() => {
            console.log('logout Successful')
        })
        .catch(err => {
            console.log( 'Error ',err.message)
        })
    }



    const navOptions = < >
        <li><NavLink className='font-bold text-base' to='/'>Home</NavLink></li>
        <li><NavLink className='font-bold text-base' to='/allFoods'>All Foods</NavLink></li>
        <li><NavLink className='font-bold text-base' to='/gallery'>Gallery</NavLink></li>
      


    </>

    return (
        <div>
            <div className="w-11/12 mx-auto navbar flex justify-between mt-4">

                <div className="first">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <FaBars className="text-2xl" />

                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl">TASTETRACK</a>
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
                                    <Link 
                                    onClick={handleLogOut}
                                    className="hover:underline  decoration-2 underline-offset-2 font-bold" to='/register' >Log Out</Link>
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