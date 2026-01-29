import style from './style.module.css';
import avatarImage from './assets/Image/2.jpg';
import sidebarBgImage from './assets/Image/1.jpeg';
import { useContext } from 'react';
import { MainContext } from './context/MainContext';
import { Link } from 'react-router';


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
                <li>
                    <Link to="/user">کاربران</Link>
                </li>
                <li>
                    <Link to="/post">پست ها</Link>
                </li>
                <li>
                    <Link to="/gallery">گالری</Link>
                </li>
                <li>
                    <Link to="/todo">کار ها</Link>
                </li>
            </ul>

        </div>
    )
};

export default Sidebar;