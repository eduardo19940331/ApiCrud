import React, {Component} from 'react';
import { getList, addItem, deleteItem, updateItem, getTicket, dataUserCmb} from '../components/ListFunctions';

class List extends Component{
    constructor() {
        super()
        this.state = {
            detail: '',
            selectUser: '',
            editDisabled: false,
            items:[],
            dataCmb:[]

        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.getAll();
        this.chargeSelect();
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    chargeSelect = () => {
        dataUserCmb().then(data => {
            this.setState({
                dataCmb: data
            },
            () => {
                console.log(this.state.dataCmb);
            });
        })
    }

    getAll = () => {
        getList().then(data => {
            this.setState({
                items: data
            },
            () => {
                console.log(this.state.items);
            });
        })
    }

    onSubmit = e => {
        e.preventDefault();
        if(this.state.detail === "" || this.state.selectUser === '') {
            alert('Se detectaron campos vacios por favor llenarlos');
        }else{
            addItem(this.state.detail, this.state.selectUser).then(() => {
                this.getAll();
            });
            this.setState({
                detail: '',
                selectUser: '',
            });
        }
    }

    onUpdate = (e) => {
        e.preventDefault();
        if(this.state.detail === "" || this.state.selectUser === '') {
            alert('Se detectaron campos vacios por favor llenarlos');
        }else{
            updateItem(this.state.detail, this.state.selectUser, this.state.ItemId).then(() => {
                this.getAll();
            });
            this.setState({
                detail:'',
                editDisabled: ''
            });
            this.getAll();
        }
    }

    onEdit = (itemid, e) => {
        e.preventDefault();
        getTicket(itemid).then(data => {
            this.setState({
                ItemId: itemid,
                detail: data.detail,
                selectUser: data.id_user,
                editDisabled:true
            },
            () => {
                console.log(this.state.items);
            });
        });
    }
    
    onClear = (e) => {
        e.preventDefault();
        this.setState({
            id: '',
            detail: '',
            selectUser: '',
            editDisabled:false
        });
    }

    onDelete = (val, e) => {
        e.preventDefault();
        deleteItem(val);
        this.getAll();
    }

    render() {
        return (
            <div className="container">
                <div className="row>">
                    <form onSubmit={this.onSubmit}>
                        <input type="hidden" id="ItemId" name="ItemId"></input>
                        <div className="col-md-6 mx-auto">
                            <div className="form-group">
                                <label htmlFor="selectUser">Usuario Asignado</label>
                                <select className="form-control" id="selectUser" name="selectUser" value={this.state.selectUser || ''} onChange={this.onChange.bind(this)}>
                                    <option value="">--Seleccione Tecnico a derivar--</option>
                                    {this.state.dataCmb.map((item, i) => (
                                        <option key={i} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 mx-auto">
                            <div className="form-group">
                                <label htmlFor="detail">Detail</label>
                                <textarea className="form-control" id="detail" name="detail" value={this.state.detail || ''} onChange={this.onChange.bind(this)} ></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                
                            {!this.state.editDisabled ? (
                                <button type="submit" className="btn btn-success btn-block" onClick={this.onSubmit.bind(this)}>Guardar</button>
                                ) : (
                                    <button type="button" className="btn btn-warning btn-block" onClick={this.onClear.bind(this)}>Cancelar</button>
                                    )}
                            {this.state.editDisabled? (
                                <button type="submit" className="btn btn-primary btn-block" onClick={this.onUpdate.bind(this)}>Guardar Cambios</button>
                                ) : (
                                    ''
                                    )}
                            </div>
                        </div>
                    </form>
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
                                        <td className="text-left">{item.detail}</td>
                                        <td className="text-left">{item.user}</td>
                                        <td className="text-center">
                                            <button href="" className="btn btn-info mr-1" disabled={this.state.editDisabled}
                                            onClick={this.onEdit.bind(this, item.id)}>Edit</button>
                                            <button href="" className="btn btn-danger mr-1" disabled={this.state.editDisabled}
                                            onClick={this.onDelete.bind(this, item.id)}>Delete</button>
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