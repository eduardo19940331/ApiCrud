import React, {Component} from 'react';
import { login } from '../components/UserFunction';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            msj: false,
            mesaje: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        if (this.state.email =="" || this.state.password == ""){
            this.setState({
                msj: true,
                mesaje: "Ingrese Correo y contraseña"
            });
            return;
        }
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            console.log(res == undefined);
            if(res == undefined) {
                this.setState({
                    mesaje: "Usuario no encontrado",
                    msj: true
                })
            }
            if(res){
                this.setState({
                    msj: false
                })
                console.log(res);
                window.location.replace('/profile');
            }
            
        })
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit} className="logform">
                        {this.state.msj ? (
                            <div className="alert alert-danger" role="alert">
                                {this.state.mesaje}
                            </div>
                        ) : (
                            ''
                        )}
                            <h1 className="h3 mb-3 font-weight-normal text-center">
                                Inicio de Sesion
                            </h1>
                            <div className="form-group" className="text-center">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Ingrese Email"
                                value={this.state.email}
                                onChange={this.onChange}/>
                            </div>
                            <br />
                            <div className="form-group" className="text-center">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Ingrese contraseña"
                                value={this.state.password}
                                onChange={this.onChange}/>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;