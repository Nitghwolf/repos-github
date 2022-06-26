import React, {useState} from "react";
import "./AddName.css";

function useInputValue(defaultValue = ""){
    const [value, setValue] = useState(defaultValue);

    return{
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(""),
        value: () => value
    };
}

function AddName({onSend}){
    const input = useInputValue("");

    function submitHandler(event){
        event.preventDefault();

        if(input.value().trim()){
            onSend(input.value());
            input.clear();
        }
    }

    return(
        <div className="col-3 input-effect">
            <form className="addNameForm" onSubmit={submitHandler}>
                    <input {...input.bind} className="effect-20" type="text" placeholder="Введите ник"/>
                    <span className="focus-border">
                    <i></i>
                </span>
                <button type="submit" className="submit-feedback">Отправить ник</button>
            </form>
        </div>
    );
}

export default AddName;