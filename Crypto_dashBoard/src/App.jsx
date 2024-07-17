import { useState } from 'react';
import DashBoard from './pages/DashBord/DashBord'; 
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Transactions from './pages/transactions/transaction';
import Support from './pages/Support/Support';

function App() {
  const router =createBrowserRouter([{
    path:"/",
    element:<DashBoard/>
  },{
    path:"/transactions",
    element:<Transactions/>
  },{
    path:"/support",
    element:<Support/>
  }

])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
