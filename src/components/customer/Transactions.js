import CustomerHeader from "./CustomerHeader";
import "./Transactions.css";
import transactions2 from "../images/transactions2.jpg";

const Transactions = () => {
  return (
    <div>
      <CustomerHeader></CustomerHeader>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 p-4 mt-5">
            <h2 className="table-container mb-5 t-heading">Transactions</h2>
            <div class="row mb-3 ">
              <div class="col-md-6 table-container">
                <div class="input-group">
                  <select class="custom-select" id="selectBox">
                    <option selected>Account Type</option>
                    <option>Current</option>
                    <option>Savings</option>
                  </select>
                  <div class="input-group-append ">
                    <button class="btn btn-primary " type="button">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="table-responsive table-container mt-5">
              <table class="table table-bordered text-center table-striped">
                <thead>
                  <tr>
                    <th>Source Account ID</th>
                    <th>Source Owner</th>
                    <th>Target Account ID</th>
                    <th>Amount</th>
                    <th>Initiation Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Neelu</td>
                    <td>10</td>
                    <td>15000</td>
                    <td>10-12-2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="col-md-4 img-container mt-5">
            <div class="p-1">
              <img src={transactions2} alt="transactions" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Transactions;
