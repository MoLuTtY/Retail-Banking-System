import "./CreateCustomer.css";
import EmployeeHeader from "./EmployeeHeader";
import createCustomer2 from "../images/createCustomer2.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../SuccessAlert";

const CreateCustomer = () => {
  const navigate = useNavigate("");

  const [enteredCustomerId, setCustomerId] = useState("");
  const [enteredCustomerName, setCustomerName] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [enteredDob, setDob] = useState("");
  const [enteredPan, setPan] = useState("");
  const [enteredAddress, setAddress] = useState("");
  const [successAlert, setSuccessAlert] = useState(false);

  const customerIdChangeHandler = (event) => {
    setCustomerId(event.target.value);
  };
  const customerNameChangeHandler = (event) => {
    setCustomerName(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const dobChangeHandler = (event) => {
    setDob(event.target.value);
  };
  const panChangeHandler = (event) => {
    setPan(event.target.value);
  };
  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };

  const handleCreateCustomerSubmit = (e) => {
    e.preventDefault();
    const customerData = {
      CustomerId: enteredCustomerId,
      CustomerName: enteredCustomerName,
      Password: enteredPassword,
      Dob: enteredDob,
      Pan: enteredPan,
      Address: enteredAddress,
    };
    console.log("Customer created successfully");
    console.log(customerData);

    setSuccessAlert(true);
  };

  const closeAlert = () => {
    setSuccessAlert(false);
    navigate("/employee-dashboard");
  };

  const handleCreateCustomerCancel = () => {
    setCustomerId("");
    setCustomerName("");
    setPassword("");
    setDob("");
    setPan("");
    setAddress("");
  };

  return (
    <div>
      <EmployeeHeader></EmployeeHeader>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-5 create-customer-form form-bg">
            <div>
              <div>
                <form onSubmit={handleCreateCustomerSubmit}>
                  <h2 class="text-center mb-4 mt-4 create-cus-head">
                    Create Customer
                  </h2>
                  <div class="form-group form-grp">
                    <label for="customer-id">Customer ID</label>
                    <input
                      type="text"
                      class="form-control"
                      id="customer-id"
                      placeholder="Enter Customer ID"
                      required
                      value={enteredCustomerId}
                      onChange={customerIdChangeHandler}
                    />
                  </div>
                  <div class="form-group form-grp mt-3">
                    <label for="customer-name">Customer Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="customer-name"
                      placeholder="Enter Customer Name"
                      required
                      value={enteredCustomerName}
                      onChange={customerNameChangeHandler}
                    />
                  </div>
                  <div class="form-group form-grp mt-3">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Enter Password"
                      required
                      value={enteredPassword}
                      onChange={passwordChangeHandler}
                    />
                  </div>

                  <div class="form-group form-grp mt-3">
                    <div class="row">
                      <div class="col-md-6">
                        <label for="dob">Date of Birth</label>
                        <input
                          type="date"
                          class="form-control"
                          id="dob"
                          required
                          value={enteredDob}
                          onChange={dobChangeHandler}
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="pan">PAN</label>
                        <input
                          type="text"
                          class="form-control"
                          id="pan"
                          placeholder="Enter PAN"
                          required
                          value={enteredPan}
                          onChange={panChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-grp mt-3">
                    <label for="address">Address</label>
                    <textarea
                      class="form-control"
                      id="address"
                      rows="3"
                      placeholder="Enter Address"
                      required
                      value={enteredAddress}
                      onChange={addressChangeHandler}
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary form-grp mt-4">
                    Create
                  </button>
                  {successAlert && (
                    <SuccessAlert
                      message={"Customer created successfully!"}
                      onClose={closeAlert}
                    />
                  )}
                  <button
                    type="button"
                    class="btn btn-secondary btn2 form-grp mt-4"
                    onClick={handleCreateCustomerCancel}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6 createCustomer-img-container">
            <img
              src={createCustomer2}
              alt="create customer"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomer;
