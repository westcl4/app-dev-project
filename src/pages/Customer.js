import React from 'react'
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Card } from "shards-react";

class Customer extends React.Component {
    render() {
      const { first_name, last_name, email, phone, isLoading } = this.props;
  
      const userDetails = (
        <div>
          <h4 className="name">{first_name} {last_name}</h4>
          <span className="email">{email}</span>
          <span className="email">{phone}</span>
        </div>
      );
  
      const loadingMessage = <span className="d-flex m-auto">Loading...</span>;
  
      return (
        <Card
          className="mx-auto mt-4 text-center p-5"
          style={{ maxWidth: "300px", minHeight: "250px" }}
        >
          {isLoading ? loadingMessage : userDetails}
        </Card>
      );
    }
  }
  
  Customer.propTypes = {
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    isLoading: PropTypes.bool
  };
  
  export default Customer;
