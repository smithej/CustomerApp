import React from "react";

import CreateCustomerForm from "./CreateCustomerForm";
import Table from "./table/Table";
import { convertShortPriorityToLong } from "../convertPriority";

const CustomerTable = (props) => {
    const { customers, addCustomer, updateCustomer, removeCustomer, randomCustomer, getRandomCustomer } = props;

    return (
        <div className="container">
            <CreateCustomerForm handleSubmit={addCustomer} />
            <button onClick={getRandomCustomer}>Random Customer</button>
            {randomCustomer && (
                <table>
                    <tbody>
                        <tr>
                            <td>{randomCustomer.name}</td>
                            <td>{randomCustomer.company}</td>
                            <td>{convertShortPriorityToLong(randomCustomer.priority)}</td>
                        </tr>
                    </tbody>
                </table>
            )}
            <Table customers={customers} updateCustomer={updateCustomer} removeCustomer={removeCustomer} />
        </div>
    );
};

export default CustomerTable;
