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
            this.setState({
                name: res.user.name,
                email: res.user.email
            });
            console.log(res.user.id_tipouser);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-12 mx-auto">
                        <h1 className="text-canter">Bienvenido a I-Gestion Ticket</h1>
                    </div>
                    <table className="table col-md-8 mx-auto">
                        <tbody>
                            <tr>
                                <th>Nombre</th>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile;