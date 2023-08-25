import CustomerHeader from "./CustomerHeader";
import "./Transfer.css";
import transfer2 from "../images/transfer2.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../SuccessAlert";

const Transfer = () => {
  const navigate = useNavigate("");

  const [enteredFromAccount, setFromAccount] = useState("");
  const [enteredTargetAccount, setTargetAccount] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [successAlert, setSuccessAlert] = useState(false);

  const fromAccountHandler = (event) => {
    setFromAccount(event.target.value);
  };
  const targetAccountHandler = (event) => {
    setTargetAccount(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const transferSubmitHandler = (e) => {
    e.preventDefault();
    const transferData = {
      fromAccount: enteredFromAccount,
      targetAccount: enteredTargetAccount,
      amount: enteredAmount,
    };
    console.log("Transfer successfull");
    console.log(transferData);

    setSuccessAlert(true);
  };

  const closeAlert = () => {
    setSuccessAlert(false);
    navigate("/customer-dashboard");
  };

  const transferCancelHandler = () => {
    setFromAccount("");
    setTargetAccount("");
    setAmount("");
  };

  return (
    <div>
      <CustomerHeader></CustomerHeader>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <img src={transfer2} alt="transfer" class="img-fluid" />
          </div>

          <div class="form-box container-form2 col-md-4 mt-5">
            <div class="container mt-3">
              <h2 className="heading2">Transfer</h2>
              <form onSubmit={transferSubmitHandler}>
                <div class=" form-group mb-4">
                  <label for="selectA">From Account</label>
                  <select
                    class="form-control"
                    id="selectA"
                    required
                    value={enteredFromAccount}
                    onChange={fromAccountHandler}
                  >
                    <option value="">select from account</option>
                    <option value="current">Current</option>
                    <option value="savings">Savings</option>
                  </select>
                </div>
                <div class="form-group mb-4">
                  <label for="inputB">Target Account</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputB"
                    required
                    value={enteredTargetAccount}
                    placeholder="Enter target account"
                    onChange={targetAccountHandler}
                  />
                </div>
                <div class="form-group mb-4">
                  <label for="inputB">Amount</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputB"
                    required
                    value={enteredAmount}
                    placeholder="Enter amount"
                    onChange={amountHandler}
                  />
                </div>

                <div class="form-group ">
                  <button type="submit" class="btn btn-primary button-space">
                    Transfer
                  </button>
                  {successAlert && (
                    <SuccessAlert
                      message={"Transfer successful!"}
                      onClose={closeAlert}
                    />
                  )}
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={transferCancelHandler}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
