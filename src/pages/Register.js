import React, {Component} from 'react';
import { register } from '../components/UserFunction';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name:'',
            last_name:'',
            tipoUser: '',
            email: '',
            password: '',
            msj: false,
            mesaje: '',
            classmsj: '',
            btnDisabled: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();

        if(this.state.first_name == "" || this.state.last_name == ""
        || this.state.email == "" || this.state.password == ""){
            this.setState({
                msj: true,
                classmsj:"alert alert-danger",
                mesaje: "Ingrese todos los campos por favor"
            });
            return;
        }

        this.setState({
            msj: false,
            btnDisabled: true
        })

        const newUser = {
            name : this.state.first_name + ' ' + this.state.last_name,
            tipoUser: this.state.tipoUser,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            if(res){
            this.setState({
                msj: true,
                classmsj:"alert alert-success",
                mesaje: "Usuario Ingresado Correctamente",
                btnDisabled: false
            });
            this.setState({
                first_name:'',
                last_name:'',
                tipoUser: '',
                email: '',
                password: ''
            });
            setTimeout(() => {
                this.setState({
                    msj: false,
                });
              }, 3000);
              return;
            }
                this.setState({
                    msj: true,
                    classmsj:"alert alert-danger",
                    mesaje: "Usuario ya existe en el sistema",
                    btnDisabled: false
                });
                setTimeout(() => {
                    this.setState({
                        msj: false,
                    });
                  }, 3000);
                return;
        })
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        {this.state.msj ? (
                            <div className={this.state.classmsj} role="alert">
                                {this.state.mesaje}
                            </div>
                        ) : (
                            ''
                        )}
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                                Registrar
                            </h1>
                            <div className="form-group">
                                <label htmlFor="first_name">Nombre</label>
                                <input type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="Ingrese Nombre"
                                value={this.state.first_name}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Apellido</label>
                                <input type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Ingrese Apellido"
                                value={this.state.last_name}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Ingrese Email"
                                value={this.state.email}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Ingrese contraseña"
                                value={this.state.password}
                                onChange={this.onChange}/>
                            </div>
                            <button type="submit" disabled={this.state.btnDisabled} className="btn btn-lg btn-primary btn-block">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;