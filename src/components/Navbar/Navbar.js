import React, { Component } from 'react';
import './Navbar.css';
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    nameShown = () => {
        if (window.location.pathname != '/Home') {
            return (
                <h1 className="navbar-logo">
                    {/* <a href="/Home">
                    Diane Tritchler</a> */}
                </h1>

            )
        }
    }

    render() {
        return (
            <nav className="NavbarItems">
                <div className='name' onClick={this.handleNameClick}>{this.nameShown()}</div>

                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}


                </ul>
            </nav >

        );
    }

}

export default Navbar;