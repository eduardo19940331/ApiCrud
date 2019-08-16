import React, {Component} from 'react';

class Landing extends Component {
    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h3 className="text-center">Bienvenidos a...</h3>
                        <h1 className="text-center">I-Gestion Ticket</h1>
                        <p className="text-center"><small>Gestion de Ticket´s para las empresas,</small> Soporte TI <small>, es un agrado atender tu solicitud</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;