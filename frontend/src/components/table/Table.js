import React from 'react';

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = (props) => {
  const { customers, updateCustomer, removeCustomer } = props;
  return (
    <table>
      <TableHeader />
      <TableBody customers={customers} updateCustomer={updateCustomer} removeCustomer={removeCustomer} />
    </table>
  )
};

export default Table;
