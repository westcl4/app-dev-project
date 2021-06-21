import React from 'react'
import { useState } from 'react';


const Customer = () => {
    const [customers, setCustomers] = useState([
        { firstname: 'Test', lastname: 'Customer', email: 'test@gmail.com', phone: '123', id: 1},
        { firstname: 'Test', lastname: 'Customer', email: 'test@gmail.com', phone: '123', id: 2},
        { firstname: 'Test', lastname: 'Customer', email: 'test@gmail.com', phone: '123', id: 3},

    ]);

    return (
        <div className="customer-container">
            <p>Customer</p>
            {customers.map((customer)=> (
                <div>
                    <h3 key={customer.id}>{customer.firstname} {customer.lastname}</h3> 
                </div>
                   
                
            ))}
        </div>
    )
}

export default Customer
