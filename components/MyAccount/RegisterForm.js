import React from "react";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <div className="contact-form-action mb-0">
      <div className="section-title">
        <h2>Create An Account!</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Laudantium quas cumque iste veniam id dolorem.
        </p>
      </div>
      <form method="post">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="First Name"
              />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Enter your Username"
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email Address"
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="password"
            placeholder="Password"
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="password"
            placeholder="Confirm Password"
          />
        </div>

        <button className="default-btn two" type="submit">
          Register Now
        </button>
      </form>
    </div>
  )
}

export default RegisterForm;