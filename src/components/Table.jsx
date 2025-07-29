import React from "react";

function Table({ tableData }) {
  return (
    // Main table element with a class name for styling
    <table className="table">
      {/* Table header defining the column titles */}
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Profile</th>
        </tr>
      </thead>

      {/* Table body dynamically renders rows based on the tableData prop */}
      <tbody>
        {tableData.map((data, index) => {
          return (
            // Each row must have a unique key, here using the index of the array
            <tr key={index}>
              {/* Display a 1-based index for the Id column */}
              <td>{index + 1}</td>
              {/* Display the name from the data object */}
              <td>{data.name}</td>
              {/* Display the email from the data object */}
              <td>{data.email}</td>
              {/* Display the profile from the data object */}
              <td>{data.profile}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
