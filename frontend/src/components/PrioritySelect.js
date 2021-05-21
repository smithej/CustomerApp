import React from "react";

const prioritySelect = (props) => {
    const { priority, handlePriorityChange} = props;

    return (
        <select id="priority" name="priority" value={priority} onChange={handlePriorityChange}>
            <option value="L">Low</option>
            <option value="M">Medium</option>
            <option value="H">High</option>
            <option value="C">Critical</option>
        </select>
    ); 
}

export default prioritySelect;
