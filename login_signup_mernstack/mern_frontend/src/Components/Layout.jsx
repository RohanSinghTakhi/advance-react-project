import React from 'react';
import AdminNavbar from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';  

function Layout(props) {
  return (
    <>
      <AdminNavbar />
      {props.children}
    </>
  );
}

export default Layout;
