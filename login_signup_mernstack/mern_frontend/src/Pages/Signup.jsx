import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Components/Layout';

function Signup() {
  return (
    <Layout>
        <div className='container mt-md-6' style={{marginTop:"50px ",padding:"0 100px"}}>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputName"  placeholder="Enter Name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    </Layout>
  )
}

export default Signup