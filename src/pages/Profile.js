import React, {Component} from 'react'
import { getProfile } from '../components/UserFunction'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: ''
        }
    }
    componentDidMount() {
        getProfile().then(res => {
            if(res){
                this.setState({
                name: res.user.name,
                email: res.user.email
                });
            }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-12 mx-auto">
                        <h1 className="text-center">Bienvenido a I-Gestion Ticket</h1>
                    </div>
                    {this.state.name != "" && this.state.email != ""? ( 
                        <table className="table col-md-8 mx-auto">
                            <tbody>
                                <tr>
                                    <th className="text-center">Nombre</th>
                                    <td className="text-center">{this.state.name}</td>
                                </tr>
                                <tr>
                                    <th className="text-center">Email</th>
                                    <td className="text-center">{this.state.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    ):(
                        <h5 className="text-center">Cargando...</h5>
                    )}
                </div>
            </div>
        )
    }
}

export default Profile;