import EmployeeHeader from "./EmployeeHeader";
import "./ServiceCharge.css";
import ViewCustomerHeader from "./ViewCustomerHeader";
import serviceCharge2 from "../images/serviceCharge2.jpg";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../SuccessAlert";
import { useState } from "react";

const ServiceCharge = () => {
  const navigate = useNavigate("");

  const [successAlert, setSuccessAlert] = useState(false);

  const deductServiceChargeHandler = (e) => {
    e.preventDefault();
    console.log("Service charge deducted");

    setSuccessAlert(true);
  };

  const closeAlert = () => {
    setSuccessAlert(false);
    navigate("/view-customer");
  };

  return (
    <div>
      <ViewCustomerHeader></ViewCustomerHeader>
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-6">
            <div class="p-4">
              <h2 className="mt-5 service-head mb-4">
                Service Charge Deduction
              </h2>
              <p className="mt-5 deduct-quote">
                Service charge will be deducted for not maintaining minimum
                balance
              </p>

              <form>
                <div>
                  <button
                    className="btn btn-primary text-center mt-3 "
                    onClick={deductServiceChargeHandler}
                  >
                    Deduct service charge
                  </button>
                  {successAlert && (
                    <SuccessAlert
                      message="Service charge deducted successfully!"
                      onClose={closeAlert}
                    />
                  )}
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <img src={serviceCharge2} alt="service charge" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCharge;
