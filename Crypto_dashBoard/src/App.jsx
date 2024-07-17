import { useState } from 'react';
import DashBoard from './pages/DashBord/DashBord'; 
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DashBoard />
    </>
  );
}

export default App;
