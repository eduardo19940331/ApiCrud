import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'
class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="navbar" >
                <div className="container-fluid">
                    <div className="" id="">
                        <ul className="list-inline navbar-nav">
                           <li className={this.getNavLinkClass("/")}><NavLink to="/" >Pagina Principal</NavLink></li>
                           <li className={this.getNavLinkClass("/agregar")}><NavLink to="/agregar">Agregar</NavLink></li>
                           <li className={this.getNavLinkClass("/List")}><NavLink to="/List">Listado</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;