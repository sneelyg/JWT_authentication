import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Private = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.private()
    }, []);
    return (
        <div className="text-center mt-5">
            <h1>Private Page</h1>
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
