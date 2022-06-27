import React, { useState } from "react";
import axios from 'axios';


export default function Login({changeInputRegister, changeGit_nick, close}){
 
    function loginHandler(event){
        event.preventDefault();
        axios.post("http://localhost:8080/register/login", {
                git_nick: event.target.git_nick.value,
                password: event.target.password.value,

          }).then((res) => {
            if (res.data.message) {
                changeInputRegister(res.data.name);
                changeGit_nick(res.data.git_nick);
                event.target.reset();
                close();
            } else {
                alert("Не верный ник или пароль");
            }
        }).catch(() => {
            alert("An error occurred on the server")
        });
    }

    return(
        <>
        <div className="modal">
            <div className="modal-body">
                    <div className="card">
                        <div className="card-image">
                            <h2 className="card-heading">
                                Добро пожаловать
                            </h2>
                        </div>
                        <form className="card-form"  onSubmit={loginHandler}>
                            <div className="input">
                                <input type="text" className="input-field" 
                                name="git_nick" 
                                autoComplete="off" 
                                // onChange={setName}
                                required />
                                <label className="input-label">Ник GitHub</label>
                            </div>
                            <div className="input">
                                <input type="password" className="input-field" 
                                name="password" autoComplete="off" 
                                // onChange={setName}
                                required />
                                <label className="input-label">Пароль</label>
                            </div>
                            <div className="action">
                                <button type="submit" className="action-button">Войти</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button className="noselect" onClick={close}>
                <span className='text'>Закрыть</span>
                <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                    </svg>
                </span>
            </button>
        </>
        );
}