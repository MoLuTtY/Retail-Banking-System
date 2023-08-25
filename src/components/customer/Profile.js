import CustomerHeader from "./CustomerHeader";
import "./Profile.css";
import React from "react";
const Profile = () => {
  const profile = [
    {
      customerId: 1,
      name: "Amal Varma",
      dob: "3-4-1999",
      pan: "DGTRE2366P",
      address: "Abc house, Calicut, Kerala, 675453",
      accounts: [
        {
          accountId: 123,
          currentBalance: 13000,
          accountType: "Current",
          ownerName: "Amal",
        },
        {
          accountId: 124,
          currentBalance: 16000,
          accountType: "Savings",
          ownerName: "Amal",
        },
      ],
    },
  ];
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
            {profile.map((customer) => (
              <tr key={customer.customerId}>
                <td className="align-middle">{customer.customerId}</td>
                <td className="align-middle">{customer.name}</td>
                <td className="align-middle">{customer.dob}</td>
                <td className="align-middle">{customer.pan}</td>
                <td className="align-middle">{customer.address}</td>
                <td>
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Account ID</th>
                        <th>Current Balance</th>
                        <th>Account Type</th>
                        <th>Owner Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customer.accounts.map((account) => (
                        <tr key={account.accountId}>
                          <td>{account.accountId}</td>
                          <td>{account.currentBalance}</td>
                          <td>{account.accountType}</td>
                          <td>{account.ownerName}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
