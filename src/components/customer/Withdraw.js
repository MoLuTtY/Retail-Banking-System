import CustomerHeader from "./CustomerHeader";
import "./Withdraw.css";
import withdrawatm from "../images/withdrawatm.jpg";

const Withdraw = () => {
  return (
    <div>
      <CustomerHeader></CustomerHeader>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <img src={withdrawatm} alt="atm" class="img-fluid" />
          </div>

          <div class="form-box container-form col-md-4 mt-5">
            <div class="container mt-3">
              <h2 className="heading-withdraw">Withdraw</h2>
              <form>
                <div class=" form-group mb-4">
                  <label for="selectA">From Account</label>
                  <select class="form-control" id="selectA">
                    <option value="option1">Current</option>
                    <option value="option2">Savings</option>
                  </select>
                </div>
                <div class="form-group mb-4">
                  <label for="inputB">Amount</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputB"
                    placeholder="Enter amount"
                  />
                </div>

                <div class="form-group ">
                  <button type="submit" class="btn btn-primary button-space">
                    Withdraw
                  </button>
                  <button type="button" class="btn btn-secondary">
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
