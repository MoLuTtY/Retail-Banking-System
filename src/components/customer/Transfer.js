import CustomerHeader from "./CustomerHeader";
import "./Transfer.css";
import transfer2 from "../images/transfer2.jpg";

const Transfer = () => {
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
              <form>
                <div class=" form-group mb-4">
                  <label for="selectA">From Account</label>
                  <select class="form-control" id="selectA">
                    <option value="option1">Current</option>
                    <option value="option2">Savings</option>
                  </select>
                </div>
                <div class="form-group mb-4">
                  <label for="inputB">Target Account</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputB"
                    placeholder="Enter target account"
                  />
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
                    Transfer
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

export default Transfer;
