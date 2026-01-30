import style from './style.module.css';
import avatarImage from './assets/Image/2.jpg';
import sidebarBgImage from './assets/Image/1.jpeg';
import { useContext } from 'react';
import { MainContext } from './context/MainContext';
import { Link, NavLink } from 'react-router';


const Sidebar = () => {

    // const {showMenu, setShowMenu} = useContext(MainContext)
    const {showMenu} = useContext(MainContext)

    return(

        <div className={`${style.sidebar_section} bg-secondary`} 
        style={{
            backgroundImage: `linear-gradient(#12382881, #3a2a2a7a, #0b2b3a42), url(${sidebarBgImage})`,
            ...(showMenu ? {right: 0} : {})
        }}
        >
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src={avatarImage} alt="" />
                </li>
                {/* <li>
                    <Link to="/user">کاربران</Link>
                </li> */}
                <NavLink className={({isActive})=>{return isActive ? "active_nav" : ""}} to="/user">
                    <li>
                        کاربران
                    </li>
                </NavLink>
                <NavLink className={({isActive})=>{return isActive ? "active_nav" : ""}} to="/post">
                    <li>
                        پست ها
                    </li>
                </NavLink>
                <NavLink className={({isActive})=>{return isActive ? "active_nav" : ""}} to="/gallery">
                    <li>
                        گالری
                    </li>
                </NavLink>
                <NavLink className={({isActive})=>{return isActive ? "active_nav" : ""}} to="/todo">
                    <li>
                        کار ها
                    </li>
                </NavLink>
            </ul>

        </div>
    )
};

export default Sidebar;