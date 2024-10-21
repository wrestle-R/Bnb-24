import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import LoginbgImg from './images/loginbg.jpg';
    
const Signup = () => {
  return (
    <section className="h-[94vh] bg-[#290202]">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem', backgroundColor: '#000', color: '#fff' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={LoginbgImg}
                    alt="signup form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center h-[73vh]">
                  <div className="card-body p-4 p-lg-5">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-coffee fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <span className="h1 fw-bold mb-0">Ettarra Coffee House</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3 text-lg" style={{ letterSpacing: '1px' }}>Create your account</h5>
                      
                      {/* Full Name Input */}
                      <div className="form-outline mb-4">
                        <input 
                          type="text" 
                          id="fullName" 
                          className="form-control form-control-lg" 
                          placeholder="Enter your full name" 
                          required 
                        />
                        <label className="form-label" htmlFor="fullName">Full Name</label>
                      </div>
                      
                      {/* Email Input */}
                      <div className="form-outline mb-4">
                        <input 
                          type="email" 
                          id="email" 
                          className="form-control form-control-lg" 
                          placeholder="Enter your email address" 
                          required 
                        />
                        <label className="form-label" htmlFor="email">Email address</label>
                      </div>

                      {/* Phone Number Input */}
                      <div className="form-outline mb-4">
                        <input 
                          type="tel" 
                          id="phoneNumber" 
                          className="form-control form-control-lg" 
                          placeholder="Enter your phone number" 
                          required 
                        />
                        <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                      </div>

                      {/* Password Input */}
                      <div className="form-outline mb-4">
                        <input 
                          type="password" 
                          id="password" 
                          className="form-control form-control-lg" 
                          placeholder="Create your password" 
                          required 
                        />
                        <label className="form-label" htmlFor="password">Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block mr-8" type="submit">Signup</button>
                        <span className="mb-5 pb-lg-2" style={{ color: '#bbb' }}>
                          Already have an account? <Link to="/login" style={{ color: '#ff6219' }}>Login here</Link>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
