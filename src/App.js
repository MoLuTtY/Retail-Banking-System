import Login from "./components/Login";
import Welcome from "./components/Welcome";
import CustomerDashboard from "./components/customer/CustomerDashboard";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";
import EmployeeDashboard from "./components/employee/EmployeeDashboard";
import Profile from "./components/customer/Profile";
import Transactions from "./components/customer/Transactions";
import Withdraw from "./components/customer/Withdraw";
import Transfer from "./components/customer/Transfer";
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/login" element={<Login />} />
//     <Route path="/welcome" element={<Welcome />} />
//   </Route>
// );

const customerProfile = [
  {
    customerId: 1,
    name: "Amal Varma",
    dob: "3-4-1999",
    pan: "DGTRE2366P",
    address: "Abc house, Calicut, Kerala, 675453",
    accounts: [
      {
        accountId: 123,
        currentBalance: 13000,
        accountType: "Current",
        ownerName: "Amal",
      },
    ],
  },
  {
    customerId: 1,
    name: "Amal Varma",
    dob: "3-4-1999",
    pan: "DGTRE2366P",
    address: "Abc house, Calicut, Kerala, 675453",
    accounts: [
      {
        accountId: 124,
        currentBalance: 16000,
        accountType: "Savings",
        ownerName: "Amal",
      },
    ],
  },
];

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Welcome /> },
  { path: "/customer-dashboard", element: <CustomerDashboard /> },
  { path: "/employee-dashboard", element: <EmployeeDashboard /> },
  {
    path: "/customer-profile",
    element: <Profile profileData={customerProfile} />,
  },
  { path: "/customer-transactions", element: <Transactions /> },
  { path: "/customer-withdraw", element: <Withdraw /> },
  { path: "/customer-transfer", element: <Transfer /> },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
  // return <Welcome></Welcome>;
}

export default App;
