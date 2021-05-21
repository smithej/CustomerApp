import React, { useState } from 'react';

import './App.css';

import CustomerTable from './components/CustomerTable';
import API from "./api";

const App = () => {
  const [customers, setCustomers] = useState([])
  const [randomCustomer, setRandomCustomer] = useState(null);

  const getCustomers = () => {
    API.get('/api/customers/')
    .then(response => {
      if (response.status === 200) {
        setCustomers(response.data);
      } else {
        // TODO: Show an appropriate error message.
      }
    });
  };
  
  const addCustomer = (customer) => {
    API.post('/api/customers/', customer)
    .then(response => {
      if (response.status === 201) {
        const customer = response.data;
        setCustomers([...customers, customer]);
      } else {
        // TODO: Show an appropriate error message.
      }
    });
  };

  const updateCustomer = (updatedCustomer, refetchCustomers=false) => {
    const { id } = updatedCustomer;
    API.put(`/api/customers/${id}/`, updatedCustomer)
    .then(response => {
      if (response.status === 204) {
        setCustomers([...customers, updatedCustomer]);
      } else {
        // TODO: Show an appropriate error message.
      }

      if (refetchCustomers) getCustomers();
    });
  };

  const removeCustomer = (idToDelete) => {
    API.delete(`/api/customers/${idToDelete}/`)
    .then(response => {
      if (response.status === 204) {
        setCustomers(customers.filter(({ id }) => id !== idToDelete));
      } else {
        // TODO: Show an appropriate error message.
      }
    });
  };

  const getRandomCustomer = () => {
    API.get('/api/customers/random/')
    .then(response => {
      if (response.status === 200) {
        const updatedRandomCustomer = {
          ...response.data,
          "priority": "C",
        };
        updateCustomer(updatedRandomCustomer, true);
        setRandomCustomer(updatedRandomCustomer);
      } else {
        // TODO: Show an appropriate error message.
      }
    });
  }
  
  // Make API call to get initial state of customers.
  React.useEffect(getCustomers, []);

  return <CustomerTable customers={customers}
                        addCustomer={addCustomer}
                        updateCustomer={updateCustomer}
                        removeCustomer={removeCustomer}
                        randomCustomer={randomCustomer}
                        getRandomCustomer={getRandomCustomer}
          />
}

export default App;
