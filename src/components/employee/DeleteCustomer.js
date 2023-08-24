import EmployeeHeader from "./EmployeeHeader";
import "./DeleteCustomer.css";
import ViewCustomerHeader from "./ViewCustomerHeader";
import deleteCustomer from "../images/deleteCustomer.jpg";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const DeleteCustomer = () => {
  const navigate = useNavigate("");

  const [enteredAccountNo, setAccountNo] = useState("");

  const accountNoHandler = (event) => {
    setAccountNo(event.target.value);
  };

  const deleteCustomerSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Customer deleted successfully");
    console.log("AccountNo : ", enteredAccountNo);
    navigate("/view-customer");
  };

  const customerDeleteCancelHandler = () => {
    setAccountNo("");
  };
  return (
    <div>
      <ViewCustomerHeader></ViewCustomerHeader>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 ">
            <img src={deleteCustomer} alt="Image 1" class="img-fluid" />
          </div>
          <div className="form-box form-delete col-md-4 mt-5">
            <div class="container mt-3">
              <h2 className="heading-delete">Delete Customer</h2>
              <form onSubmit={deleteCustomerSubmitHandler}>
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

                <div class="form-group ">
                  <button
                    type="submit"
                    class="btn btn-primary button-space mt-3"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary mt-3"
                    onClick={customerDeleteCancelHandler}
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

export default DeleteCustomer;
