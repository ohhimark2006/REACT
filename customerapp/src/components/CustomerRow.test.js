import { render, screen, fireEvent } from '@testing-library/react';

import CustomerRow from './CustomerRow';
// <CustomerRow 
// delEvent ={(id) => this.deleteCustomer(id)} 
// customer={customer} key={customer.id}/>

describe("testing customer row", () => {
    let c = {
        "id": 100,
        "firstName" : "Raj",
        "lastName" : "Kumar"
    };

    let callback = jest.fn(); // mock

    it("render customer row", () => {
        render(<CustomerRow delEvent ={(id) => callback(id)} customer={c} key ={c.id} />);
        let elem = screen.getByText(/raj/i);
        // screen.debug();
        expect(elem).toBeInTheDocument();
    });

    it("delete customer row", () => {
        render(<CustomerRow delEvent ={(id) => callback(id)} customer={c} key ={c.id} />);
        let btn = screen.getByRole("button");
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(100);
    });
})