import EmployeeHeader from "./EmployeeHeader";
import "./Deposit.css";
import ViewCustomerHeader from "./ViewCustomerHeader";
import deposit2 from "../images/deposit2.jpg";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Deposit = () => {
  const navigate = useNavigate("");

  const [enteredAccountNo, setAccountNo] = useState("");
  const [enteredAmount, setAmount] = useState("");

  const accountNoHandler = (event) => {
    setAccountNo(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const depositSubmitHandler = (e) => {
    e.preventDefault();
    const depositData = {
      accountNo: enteredAccountNo,
      amount: enteredAmount,
    };
    console.log("Deposit successful");
    console.log(depositData);
    navigate("/view-customer");
  };

  const depositCancelHandler = () => {
    setAccountNo("");
    setAmount("");
  };
  return (
    <div>
      <ViewCustomerHeader></ViewCustomerHeader>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <img src={deposit2} alt="deposit" class="img-fluid" />
          </div>

          <div class="form-box container-form-deposit mt-5 col-md-4 ">
            <div class="container mt-3">
              <h2 className="heading-deposit">Deposit</h2>
              <form onSubmit={depositSubmitHandler}>
                <div class="form-group mb-4">
                  <label for="inputB">Account No</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputB"
                    required
                    placeholder="Enter account no"
                    value={enteredAccountNo}
                    onChange={accountNoHandler}
                  />
                </div>
                <div class="form-group mb-4">
                  <label for="inputB">Amount</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputB"
                    required
                    placeholder="Enter amount"
                    value={enteredAmount}
                    onChange={amountHandler}
                  />
                </div>

                <div class="form-group ">
                  <button type="submit" class="btn btn-primary button-space">
                    Deposit
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={depositCancelHandler}
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

export default Deposit;
