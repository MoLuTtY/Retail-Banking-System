import Login from "./components/Login";
import Welcome from "./components/Welcome";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/login" element={<Login />} />
//     <Route path="/welcome" element={<Welcome />} />
//   </Route>
// );

const router = createBrowserRouter([
  { path: "/welcome", element: <Welcome /> },
  { path: "/login", element: <Login /> },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
  // return <Welcome></Welcome>;
}

export default App;
