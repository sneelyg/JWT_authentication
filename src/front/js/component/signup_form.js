import React from "react";
import { Link } from "react-router-dom";

export const Signup_Form = () => {
    return (
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@mail.com" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password" />
            </div>

            <div className="mb-3">
                <label for="exampleInputPassword2" className="form-label">Repeat Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder=" password" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};