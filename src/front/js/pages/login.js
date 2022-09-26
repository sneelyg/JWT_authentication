import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Login_Form } from "../component/login_form";

export const Login = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <h1>Login</h1>
            <div className="row justify-content-center">
                <div className="col-6 justify-content-center">
                    <Login_Form />
                </div>
            </div>
            <p>
                <img src={rigoImageUrl} />
            </p>
            <div className="alert alert-info">
                {store.message || "Loading message from the backend (make sure your python backend is running)..."}
            </div>
            <p>
                This boilerplate comes with lots of documentation:{" "}
                <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
                    Read documentation
                </a>
            </p>
        </div>
    );
};
