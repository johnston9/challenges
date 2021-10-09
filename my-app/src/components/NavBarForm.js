import React, { Component } from "react";
import css from "./css/NavBarForm.module.css";
import NavBarChild from "./NavBarChild"

class NavBarForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: true
        }
    }

    handleclick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn === true ? false : true
        }))
        
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <NavBarChild 
                isLoggedIn={this.state.isLoggedIn} 
                handleclick={this.handleclick} />
            </div>
        )
    }
}

export default NavBarForm