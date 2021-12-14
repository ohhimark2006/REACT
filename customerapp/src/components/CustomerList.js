import React, { Component } from 'react'
import CustomerRow from './CustomerRow';
import Filter from './Filter';

export default class CustomerList extends Component {
    state = {
        "customers": [{
            "id": 1,
            "firstName": "Rachel",
            "lastName": "Green "
        },
        {
            "id": 2,
            "firstName": "Chandler",
            "lastName": "Bing"
        },
        {
            "id": 3,
            "firstName": "Joey",
            "lastName": "Tribbiani"
        },
        {
            "id": 4,
            "firstName": "Monica",
            "lastName": "Geller"
        },
        {
            "id": 5,
            "firstName": "Ross",
            "lastName": "Geller"
        },
        {
            "id": 6,
            "firstName": "Phoebe",
            "lastName": "Buffay"
        }
        ],
    };

    constructor(props) {
        super(props);
        this.state.complete = this.state.customers;
    }
    render() {
        return (
            <div>
                <Filter filterEvent={(txt) => this.filterCustomers(txt)}/>
                {
                    this.state.customers.map(customer => <CustomerRow 
                            delEvent ={(id) => this.deleteCustomer(id)} 
                            customer={customer} key={customer.id}/>)
                }
            </div>
        )
    }

    filterCustomers(txt) {
        let custs = this.state.complete.filter(c => c.lastName.toLowerCase().indexOf(txt.toLowerCase()) >= 0);
        this.setState({
            customers: custs
        });
    }

    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);
        // state is immutable
        // this.state.customers = custs;
        this.setState({
            customers: custs
        }, () => console.log(`customer ${id} deleted`));
    }
}
