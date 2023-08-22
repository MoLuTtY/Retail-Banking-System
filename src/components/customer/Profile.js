import CustomerHeader from "./CustomerHeader";
import "./Profile.css";
import React from "react";
const Profile = ({ profileData }) => {
  return (
    <div>
      <CustomerHeader></CustomerHeader>
      <div class="container mt-5">
        <h2 className="heading-text">Profile </h2>

        <table class="table table-bordered table-striped text-center">
          <thead class="thead-dark">
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>DOB</th>
              <th>PAN</th>
              <th>Address</th>
              <th>Accounts</th>
            </tr>
          </thead>

          <tbody>
            {profileData.map((customer) => (
              <tr key={customer.customerId}>
                <td>{customer.customerId}</td>
                <td>{customer.name}</td>
                <td>{customer.dob}</td>
                <td>{customer.pan}</td>
                <td>{customer.address}</td>
                <td>
                  {customer.accounts.map((account) => (
                    <table
                      key={account.accountId}
                      className="table table-bordered table-striped"
                    >
                      <thead>
                        <tr>
                          <th>Account ID</th>
                          <th>Current Balance</th>
                          <th>Account Type</th>
                          <th>Owner Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{account.accountId}</td>
                          <td>{account.currentBalance}</td>
                          <td>{account.accountType}</td>
                          <td>{account.ownerName}</td>
                        </tr>
                      </tbody>
                    </table>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
