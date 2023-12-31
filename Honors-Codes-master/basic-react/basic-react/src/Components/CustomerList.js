import React, { Component } from 'react'
import axios from 'axios';


export default class CustomerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customers: [],
            searchTerm: ""
        }
    }
    componentDidMount(pervProps, prevState) {
        axios.get('http://localhost:5000/customers').then((res) => {
            this.setState({ customers: res.data })
        }).catch((err) => {
            console.log(err);
        })
    }

    deleteHadler = async id => {
        try {
            const resp = await axios.delete('https://localhost:5000/customers/'+id) 
            this.setState({
                customers: this.state.customers.filter((resp) => {
                    if(!resp._id.includes(id)){
                        return resp
                    }
                })
            })
        }
        catch (error) {
            console.log(error);
        }
    }
    
    editHandler = id => {
        this.props.navigate('/edit-customer/:'+id);
    }

    renderTableData() {
        return this.state.customers.map((customer, index) => {
            const { _id, id, firstName, lastName, gender, age } = customer
            if (this.state.searchTerm === "" || firstName.toLowerCase().includes(
                this.state.searchTerm.toLowerCase())) {
                return (
                    <tr key={_id}>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td><button onClick={() => this.editHandler(_id)}>Edit</button></td>
                        <td><button onClick={() => this.deleteHandler(_id)}>Delete</button></td>
                    </tr>
                )
            }
        })
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='Search...'
                    onChange={(event) => this.searchText(event.target.value)}></input>
                <table id='customers'>
                        {this.renderTableData()}
                </table>
            </div>
        )
    }
}
