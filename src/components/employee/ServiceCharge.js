import EmployeeHeader from "./EmployeeHeader";
import "./ServiceCharge.css";
import ViewCustomerHeader from "./ViewCustomerHeader";
import serviceCharge2 from "../images/serviceCharge2.jpg";

const ServiceCharge = () => {
  return (
    <div>
      <ViewCustomerHeader></ViewCustomerHeader>
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-6">
            <div class="p-4">
              <h2 className="mt-5 service-head mb-4">Service Charge</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                auctor cursus quam, in fringilla nisi laoreet eget.
              </p>
              <p>
                Morbi tristique ullamcorper est, eu ullamcorper nulla lacinia
                ac. Nulla facilisi. Sed at sapien ac lorem auctor dictum.
              </p>
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
