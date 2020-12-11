import React from "react";
import { NavLink } from "react-router-dom";
import s from './nav.module.css';

type NavType = {

}

export const Nav:React.FC<NavType> = (props) => {
    return <div className={s.nav}>
        <NavLink to={"/login"}>login</NavLink>
        <NavLink to={"/sign-up"}>sign-up</NavLink>
        <NavLink to={"/profile"}>profile</NavLink>
        <NavLink to={"/404"}>404</NavLink>
        <NavLink to={"/reset-password"}>reset password</NavLink>
        <NavLink to={"/new-password"}>new password</NavLink>
        <NavLink to={"/test-page"}>test page</NavLink>
    </div>
}