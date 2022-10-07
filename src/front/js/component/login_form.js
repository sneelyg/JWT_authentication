import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"


export const Login_Form = () => {
    const { store, actions } = useContext(Context);
    const [login_email, setEmail] = useState("");
    const [login_password, setPassword] = useState("");
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control"
                    onChange={e => setEmail(e.target.value)}
                    value={login_email}
                    id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="email@e-mail.com" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"
                    onChange={e => setPassword(e.target.value)}
                    value={login_password}
                    id="exampleInputPassword1" placeholder="password" />
            </div>

            <button type="submit" className="btn btn-primary"
                onClick={(e) => {
                    e.preventDefault();
                    actions.login_func(login_email, login_password);
                }} >
                Submit</button>
        </form>
    );
};