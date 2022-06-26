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

                {isOpenRegistr && (<Registration changeInputRegister={changeInputRegister} changeGit_nick={changeGit_nick} close={close}/>)}
                
                {isOpenLogin && (<Login changeInputRegister={changeInputRegister} changeGit_nick={changeGit_nick} close={close}/>)}
            </div>
        );

}

export default NavBar;