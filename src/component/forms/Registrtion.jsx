import React, { useState } from "react";
import axios from 'axios';
import validator from 'validator';


export default function Registration({changeInputRegister, changeGit_nick, close}){
 
    function registrationHandler(event){
        event.preventDefault();
        axios.post("http://localhost:8080/register", {
            name: event.target.name.value,
            git_nick: event.target.git_nick.value,
            password: event.target.password.value,
          }).then((res) => {
            if (res.data === "ok") {
                changeInputRegister(event.target.name.value);
                changeGit_nick(event.target.git_nick.value);
                event.target.reset();
                close();
            } else {
                alert("Такой пользователь уже существует")
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
                                <small>Создайте свой аккаунт</small>
                            </h2>
                        </div>
                        <form className="card-form"  onSubmit={registrationHandler}>
                            <div className="input">
                                <input 
                                type="text" className="input-field" 
                                name="name" autoComplete="off" 
                                // onChange={changeInputRegister}
                                required />
                                <label className="input-label">Ваше имя</label>
                            </div>
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
                                <button type="submit" className="action-button">Зарегестрироваться</button>
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