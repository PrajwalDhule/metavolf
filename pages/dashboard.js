import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-body">
      <nav className="navbar-dashboard">
        <a href="#">
          <img></img>
        </a>
        <a href="#" className="">
          <img></img>
          <p>Profile</p>
        </a>
      </nav>
      <section className="sidebar-left">
        <h4>Current Service</h4>
        <div className="dropdown">
          <a href="#">Service 1</a>
          <a href="#">Service 2</a>
        </div>
        <div className="line"></div>
        <h4>For you</h4>
        <div className="dropdown">
          <a href="#">Service 3</a>
          <a href="#">Service 4</a>
          <a href="#">Service 5</a>
        </div>
        <div className="line"></div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Plans</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Layout</a>
            </li>
          </ul>
        </div>
      </section>
      <main>
        <div className="card">
          <h2>Service name</h2>
          <div className="status">
            <span></span>Active
          </div>
          <p className="desc">
            a short description in the progress, how much is left. a short
            description in the progress, how much is left
          </p>
          <div className="indicator"></div>
        </div>
        <div className="card">
          <h2>Payment</h2>
          <div className="status">
            <span></span>Active
          </div>
          <p className="desc">
            How the payment is supposed to be made, and info about installments
          </p>
          <div className="indicator"></div>
        </div>
      </main>
      <section className="sidebar-right">
        <h4>Requirements pending</h4>
        <div className="dropdown">
          <a href="#">requirement 1</a>
          <a href="#">requirement 2</a>
          <a href="#">requirement 3</a>
        </div>
        <div className="line"></div>
        <h4>Requirements fulfilled</h4>
        <div className="dropdown">
          <a href="#">requirement 1</a>
          <a href="#">requirement 2</a>
          <a href="#">requirement 3</a>
        </div>
        <div className="line"></div>
      </section>
    </div>
  );
};

export default Dashboard;
