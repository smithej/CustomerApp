import React, { useState } from "react";

import PrioritySelect from "./PrioritySelect";

const initialState = {
  name: "",
  company: "",
  priority: "L",
};

const Form = (props) => {
  const { handleSubmit } = props;
  const [customer, setCustomer] = useState(initialState);

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

  const submitForm = () => {
    handleSubmit(customer);
    setCustomer(initialState);
  };

  const { name, company, priority } = customer;

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="company">Company</label>
      <input
        type="text"
        name="company"
        id="company"
        value={company}
        onChange={handleCompanyChange}
      />
      <label htmlFor="priority">Priority</label>
      <PrioritySelect priority={priority} handlePriorityChange={handlePriorityChange} />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
};

export default Form;
