import React, { useState } from "react";

import PrioritySelect from "../PrioritySelect";

const TableRow = (props) => {
  const { initialCustomer, updateCustomer, removeCustomer } = props;
  const { id } = initialCustomer;
  const [customer, setCustomer] = useState(initialCustomer);
  const { name, company, priority } = customer;

  const handleNameChange = (event) => {
    const { value } = event.target;
    setCustomer({
      ...customer,
      name: value
    });
  };

  const handleCompanyChange = (event) => {
    const { value } = event.target;
    setCustomer({
      ...customer,
      company: value
    });
  };

  const handlePriorityChange = (event) => {
    const { value } = event.target;
    setCustomer({
      ...customer,
      priority: value
    });
  };
  const [showButtons, setShowButtons] = useState(false);
  
  return (
    <tr
      key={id}
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <td>
        <input type="text" name="name" value={name} onChange={handleNameChange} />
      </td>
      <td>
        <input type="text" name="company" value={company} onChange={handleCompanyChange} />
      </td>
      <td>
        <PrioritySelect priority={priority} handlePriorityChange={handlePriorityChange} />
      </td>
      <td>
        {showButtons && (
          <div className="space-between">
            <button onClick={() => updateCustomer(customer)}>Update</button>
            {" "}
            <button onClick={() => removeCustomer(id)}>Delete</button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
