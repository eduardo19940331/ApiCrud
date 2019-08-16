import React, {Component} from 'react';
import { getListTicket, confirmTicket } from '../components/ListDefault';

class List extends Component{
    constructor() {
        super()
        this.state = {
            editDisabled: false,
            items:[],
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.getAll();
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    getAll = () => {
        getListTicket().then(data => {
            this.setState({
                items: data
            },
            () => {
                console.log(this.state.items);
            });
        })
    }

    onSubmit = (itemId, e) => {
        e.preventDefault();
        confirmTicket(itemId).then(() => {
            this.getAll();
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3>Tickets Asignados</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr className="text-center">
                                    <th>Usuario Responsable</th>
                                    <th>Detalle</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.items.map((item, index) => (
                                    <tr key={index}>
                                        <td className="text-left">{item.user}</td>
                                        <td className="text-left">{item.detail}</td>
                                        <td className="text-center">
                                        {item.pedido == "NO" ? (
                                            <button href="" className="btn btn-success mr-1" disabled={this.state.editDisabled}
                                            onClick={this.onSubmit.bind(this, item.id)}>Pedir Ticket</button>
                                        ) : (
                                            ''
                                        )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

export default List