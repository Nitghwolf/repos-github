import React, { useState } from "react";
import axios from 'axios';


export default function Login({changeInputRegister, changeGit_nick}){
 
    function registrationHandler(event){
        event.preventDefault();
        axios.get("http://localhost:8080/register", {
            git_nick: event.target.git_nick.value,
            password: event.target.password.value,
          }).then((res) => {
            console.log(res);
            if (res.data === "ok") {
                // changeInputRegister(event.target.name.value);
                changeGit_nick(event.target.git_nick.value);
                event.target.reset();
            } else {
                alert("Не верный ник или пароль");
            }
        }).catch(() => {
            alert("An error occurred on the server")
        });
    }

    return(<div className="modal">
        <div className="modal-body">
                <div className="card">
                    <div className="card-image">
                        <h2 className="card-heading">
                            Добро пожаловать
                        </h2>
                    </div>
                    <form className="card-form"  onSubmit={registrationHandler}>
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
        </div>);
}