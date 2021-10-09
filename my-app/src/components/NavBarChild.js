import React from 'react';
// import css from "./css/NavBarForm.module.css";

function NavBarChild(props) {
    return (
            props.isLoggedIn ? 
            <button onClick={() => props.handleclick()}>Login</button> 
            : 
            <form>
                <label htmlFor = "username">Username</label>
                <input placeholder="username" id="username"/>
                <label htmlFor = "password">Password:</label>
                <input placeholder="password" id="password"/>
                <button onClick={props.handleclick}>Submit</button>
                </form> 
            )}
export default NavBarChild