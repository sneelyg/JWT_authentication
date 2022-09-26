import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import { Signup_Form } from "../component/signup_form";

export const Signup = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <h1>Create new User</h1>
            <div className="row justify-content-center">
                <div className="col-6 justify-content-center">
                    <Signup_Form />
                </div>
            </div>

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
