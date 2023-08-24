import EmployeeHeader from "./EmployeeHeader";
import "./ViewCustomer.css";
import { useNavigate } from "react-router-dom";
import deposit from "../images/deposit.jpg";
import serviceCharge from "../images/serviceCharge.jpg";
import deleteCustomer2 from "../images/deleteCustomer2.jpg";
import { useState } from "react";

const ViewCustomer = ({ profileData }) => {
  const navigate = useNavigate();
  const depositHandler = () => {
    navigate("/deposit");
  };
  const serviceChargeHandler = () => {
    navigate("/service-charge");
  };
  const deleteCustomerHandler = () => {
    navigate("/delete-customer");
  };

  const [enteredCustomerId, setCustomerId] = useState("");
  const [profile, setProfile] = useState([]);

  const searchCustomerHandler = () => {
    const filteredCustomer = profileData.filter(
      (customer) => customer.customerId === parseInt(enteredCustomerId)
    );
    setProfile(filteredCustomer);
  };

  return (
    <div>
      <EmployeeHeader></EmployeeHeader>
      <div>
        <h2 className="view-cus-head mt-5">View Customer</h2>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-5">
              <div class="d-flex align-items-center">
                <input
                  type="text"
                  class="form-control"
                  id="customer-id"
                  placeholder="Enter Customer ID"
                  onChange={(e) => setCustomerId(e.target.value)}
                />
                <button
                  class="btn btn-primary search-button "
                  onClick={searchCustomerHandler}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {profile.length > 0 && (
          <div className="table-service-container">
            <div class="container mt-3 ">
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
            {/*  */}
            <div class="container mt-0  ">
              <div class="row col-sm-12 ">
                <div class="col-sm-3 customer-services-container">
                  <div class="p-5 text-white text-center mt-0">
                    <img
                      className="img-fluid img-position"
                      src={deposit}
                      alt="deposit"
                    />
                    <button
                      className="btn btn-primary w-100 mt-auto"
                      onClick={depositHandler}
                    >
                      Deposit
                    </button>
                  </div>
                </div>
                <div class="col-sm-3  ">
                  <div class=" p-5 text-white text-center">
                    <img
                      className="img-fluid img-position "
                      src={serviceCharge}
                      alt="service charge"
                    />
                    <button
                      className="btn btn-primary w-100 mt-auto"
                      onClick={serviceChargeHandler}
                    >
                      Service Charge
                    </button>
                  </div>
                </div>
                <div class="col-sm-3 ">
                  <div class=" p-5 text-white text-center">
                    <img
                      className="img-fluid img-position "
                      src={deleteCustomer2}
                      alt="delete customer"
                    />
                    <button
                      className="btn btn-primary w-100 mt-auto"
                      onClick={deleteCustomerHandler}
                    >
                      Delete Customer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCustomer;
