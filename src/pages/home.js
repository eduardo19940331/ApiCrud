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

    onSubmit = (e, itemId) => {
        console.log(e);
        console.log(itemId);
        confirmTicket(itemId).then(() => {
            this.getAll();
        });
    }

    render() {
        return (
            <div className="container">
                <br />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3>Tickets Asignados</h3>
                    </div>
                </div>
                <br />
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
                                        <td className="text-left" style={{"width" : "60%"}}>{item.detail}</td>
                                        <td className="text-center">
                                        {item.pedido == "NO" ? (
                                            <button href="" className="btn btn-success mr-1" disabled={this.state.editDisabled}
                                            onClick={(e) => { if (window.confirm('¿Realmente desea pedir el ticket?') == true) this.onSubmit(e, item.id) } }>Pedir Ticket</button>                                            ) : (
                                            <button href="" className="btn btn-danger mr-1" disabled={this.state.editDisabled}
                                            onClick={(e) => { if (window.confirm('¿Realmente desea volver el ticket?') == true) this.onSubmit(e, item.id) } }>Volver Ticket</button>
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