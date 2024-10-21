import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported
import LoginbgImg from './images/loginbg.jpg';

const Login = () => {
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
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                    alt="Login Background"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-coffee fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <span className="h1 fw-bold mb-0">Ettarra Coffee House</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3 text-lg" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          placeholder="Enter your email"
                          required
                        />
                        <label className="form-label" htmlFor="form2Example17">Email address</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          placeholder="Create your password"
                          required
                        />
                        <label className="form-label" htmlFor="form2Example27">Create Password</label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: '#bbb' }}>
                        Don't have an account? <Link to="/signup" style={{ color: '#ff6219' }}>Register here</Link>
                      </p>
                      
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

export default Login;
