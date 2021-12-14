import React, { Component } from 'react'

export default class CustomerRow extends Component {

    render() {
        let {customer} = this.props;
        return (
            <div className="row">
                {customer.firstName} &nbsp;   {customer.lastName} &nbsp; 
                <button type="button" onClick={() => this.deleteRow(customer.id)}>Delete</button>
            </div>
        )
    }

    deleteRow(id) {
        console.log("delete row", id);
        this.props.delEvent(id);
    }
}

