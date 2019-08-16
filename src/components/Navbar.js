import React from 'react';
import {NavLink, Link, withRouter}  from 'react-router-dom'
class Navbar extends React.Component {
    logOut(e){
        e.preventDefault();
        localStorage.removeItem('usertoken');
        localStorage.removeItem('userid');
        this.props.history.push('/');
    }
    //getNavLinkClass = (path) => {
    //    return this.props.location.pathname === path ? 'active' : '';
    //}
    render() {
        const loginRegLink = (
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link color-option">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link color-option">Login</Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link color-option">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link color-option">Profile</Link>
                </li>
                {localStorage.getItem('id_tipouser') == 2? (
                    <li className="nav-item">
                        <Link to="/home" className="nav-link color-option">Mis Ticket</Link>
                    </li>
                ) : (
                    <li className="nav-item">
                        <Link to="/register" className="nav-link color-option">Resitro de Usuarios</Link>
                    </li>
                )}
                {localStorage.getItem('id_tipouser') == 1? (
                    <li className="nav-item">
                        <Link to="/ticket/admin" className="nav-link color-option">Administracion de Ticket</Link>
                    </li>
                ) : (
                    ''
                )}
                <li className="nav-item">
                    <a href="/" onClick={this.logOut.bind(this)} className="nav-link color-option-danger">Cerrar Sesion</a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <div id="navbar1" className="navbar-collapse justify-content-md-center">
                    
                    {localStorage.usertoken ? userLink : loginRegLink}

                </div>
            </nav>
        )
    }
};
export default withRouter(Navbar);