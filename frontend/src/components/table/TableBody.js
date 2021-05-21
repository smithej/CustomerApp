import React from "react";

import TableRow from "./TableRow";

const TableBody = (props) => {
  const { customers, updateCustomer, removeCustomer } = props;
  const rows = customers.map((customer, index) => {
    return (
      <TableRow key={index} updateCustomer={updateCustomer} removeCustomer={removeCustomer} initialCustomer={customer} />
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableBody;
