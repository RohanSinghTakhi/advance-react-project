import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

function App() {
  const router = createBrowserRouter([
    { path: "/signin", element: <Signin /> },
    { path: "/signup", element: <Signup /> },
    { path: "/", element: <Home /> }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
