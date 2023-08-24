import CustomerHeader from "./CustomerHeader";
import "./Withdraw.css";
import withdrawatm from "../images/withdrawatm.jpg";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Withdraw = () => {
  const navigate = useNavigate("");

  const [enteredFromAccount, setFromAccount] = useState("");
  const [enteredAmount, setAmount] = useState("");

  const fromAccountHandler = (event) => {
    setFromAccount(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const withdrawSubmitHandler = (e) => {
    e.preventDefault();
    const withdrawData = {
      fromAccount: enteredFromAccount,
      amount: enteredAmount,
    };
    console.log("withdraw successfull");
    console.log(withdrawData);
    navigate("/customer-dashboard");
  };

  const withdrawCancelHandler = () => {
    setFromAccount("");
    setAmount("");
  };
  return (
    <div>
      <CustomerHeader></CustomerHeader>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <img src={withdrawatm} alt="atm" class="img-fluid" />
          </div>

          <div class="form-box container-form-withdraw col-md-4 mt-5">
            <div class="container mt-3 ">
              <h2 className="heading-withdraw">Withdraw</h2>
              <form onSubmit={withdrawSubmitHandler}>
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
                  <label for="inputB">Amount</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputB"
                    placeholder="Enter amount"
                    required
                    value={enteredAmount}
                    onChange={amountHandler}
                  />
                </div>

                <div class="form-group ">
                  <button type="submit" class="btn btn-primary button-space">
                    Withdraw
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={withdrawCancelHandler}
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

export default Withdraw;
