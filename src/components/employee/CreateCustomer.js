import "./CreateCustomer.css";
import EmployeeHeader from "./EmployeeHeader";
import createCustomer2 from "../images/createCustomer2.jpg";

const CreateCustomer = () => {
  return (
    <div>
      <EmployeeHeader></EmployeeHeader>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-5 create-customer-form form-bg">
            <div>
              {/* <div class="card-header text-center">
                <h3 class="mb-0">Create Customer</h3>
              </div> */}
              <div class="">
                <form>
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
                    />
                  </div>
                  <div class="form-group form-grp mt-3">
                    <label for="customer-name">Customer Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="customer-name"
                      placeholder="Enter Customer Name"
                    />
                  </div>
                  <div class="form-group form-grp mt-3">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Enter Password"
                    />
                  </div>
                  {/* <div class="form-group form-grp mt-3">
                    <label for="dob">Date of Birth</label>
                    <input type="date" class="form-control" id="dob" />
                  </div>
                  <div class="form-group form-grp mt-3">
                    <label for="pan">PAN</label>
                    <input
                      type="text"
                      class="form-control"
                      id="pan"
                      placeholder="Enter PAN"
                    />
                  </div> */}
                  <div class="form-group form-grp mt-3">
                    <div class="row">
                      <div class="col-md-6">
                        <label for="dob">Date of Birth</label>
                        <input type="date" class="form-control" id="dob" />
                      </div>
                      <div class="col-md-6">
                        <label for="pan">PAN</label>
                        <input
                          type="text"
                          class="form-control"
                          id="pan"
                          placeholder="Enter PAN"
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
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary form-grp mt-4">
                    Create
                  </button>
                  <button
                    type="submit"
                    class="btn btn-secondary btn2 form-grp mt-4"
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
