import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import Todos from "./todos/Todos";
import Users from "./users/Users";
import style from "./style.module.css";
import contentBgImage from "./assets/Image/3.jpeg";
// import { useContext, useState } from "react";
import { useContext} from "react";
import { MainContext } from "./context/MainContext";
import { Navigate, Route, Routes } from "react-router";
import AddUser from "./users/AddUser";
import EditDesc from "./users/EditDesc";


const Content = () => {

    const { showMenu, setShowMenu } = useContext(MainContext);

    // const [isUser , setIsUser] = useState(true);

    const handleShowMenu = (event) => {
        event.stopPropagation() //یعنی از المان والد پیروی نکن
        setShowMenu(!showMenu)
        console.log(showMenu);

    }

    return (
        <div className={style.content_section} style={{ backgroundImage: `url(${contentBgImage})` }}
            onClick={() => { setShowMenu(false) }}>
            <i className={`${style.menu_button} fas fa-bars text-danger m-2 pointer d-md-none`}
                onClick={handleShowMenu}></i>

            <Routes>
                {/* <Route path="/user" element={isUser ? <Users/> : <Navigate replace to="/posts"/>}/> */}
                <Route path="/user" element={<Users/>}/>
                <Route path="/user/add" element={<AddUser/>}>
                    <Route path=":userId" element={<EditDesc/>}/>
                </Route>
                <Route path="/post" element={<Posts />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/todo" element={<Todos />} />
                <Route path="*" element={<Users/>} />
            </Routes>
            

        </div>
    )
};

export default Content;