import React, { useState, setState } from "react";
import Login from "./forms/Login";
import Registration from "./forms/Registrtion";
import "./NavBar.css";

function  NavBar({name, changeInputRegister, changeGit_nick}){
 
    const [isOpenRegistr, setIsOpenRegistr] = useState(false);
    const [isOpenLogin, setIsOpenLogin] = useState(false);


    function open() {
        setIsOpenRegistr(true);
    }

    function openLogin() {
        setIsOpenLogin(true);
    }

    function close() {
        setIsOpenRegistr(false);
        setIsOpenLogin(false);
    }


        return(
            <div className="parentNavBar">
                <div className="navBar" >
                    <div className="name">{name}</div>
                    <button  onClick={open} className="login-btn">Регистрация</button>
                    <button onClick={openLogin} className="logout-btn">Вход</button>
                </div>

                {isOpenRegistr && (<Registration changeInputRegister={changeInputRegister} changeGit_nick={changeGit_nick}/>)}
                
                {isOpenLogin && (<Login changeInputRegister={changeInputRegister} changeGit_nick={changeGit_nick}/>)}
                            <button className="noselect" onClick={close}>
                                <span className='text'>Закрыть</span>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                    </svg>
                                </span>
                            </button>
            </div>
        );

}

export default NavBar;