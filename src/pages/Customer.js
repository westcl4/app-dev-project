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
                <div className='customer' key={customers.id}>
                    <p>{customers.firstname}</p>
                    <p>{customers.lastname}</p>
                </div>
            ))}
        </div>
    )
}

export default Customer
