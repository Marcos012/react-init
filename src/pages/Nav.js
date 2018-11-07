import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <NavLink to="/" className="navbar-item">Home</NavLink>
                            <NavLink to="/contatos" className="navbar-item">Contato</NavLink>
                            <NavLink to="/placar" className="navbar-item">Placar</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}