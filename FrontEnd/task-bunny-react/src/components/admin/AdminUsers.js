import React from "react";

export default function AdminUser(props) {
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Date Joined</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* {props.users.map((user) => {
          return (
            <tr key={user.user_id}>
              <td>{user.user_name}</td>
              <td>{user.date_joined}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>
          );
        })} */}
      </tbody>
    </table>
  );
}
