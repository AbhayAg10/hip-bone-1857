import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import "./Both.css";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  return (
    <div>
      <section className="login_section">
        <div style={{ display: "flex" }}>
          <Box className="left_section" elevation={4}>
            <div style={{ marginLeft: "10px" }}>
              <h2>New to Naukri?</h2>

              <p>
                <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> One
                click apply using naukri profile.
              </p>
              <p>
                <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> Get
                relevant job recommendations.
              </p>
              <p>
                <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} />{" "}
                Showcase profile to top companies and consultants.
              </p>
              <p>
                <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> Know
                application status on applied jobs.
              </p>
            </div>
            <div style={{ marginLeft: "0%", marginTop: "5%" }}>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button variant="outlined" style={{ marginLeft: "1%" }}>
                  Register For Free
                </Button>
              </Link>
            </div>
            <img
              src="https://static.naukimg.com/s/5/105/i/register.png"
              style={{ width: "40%", marginLeft: "45%", marginBottom: "10%" }}
              alt=""
            />
          </Box>

          <div className="form_data">
            <div className="form_heading">
              <p>Welcome Back, Log In</p>
            </div>
            <form>
              <div className="form_input">
                <label htmlFor="email">Email/username</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Your email here "
                />
              </div>
              <div className="form_input">
                <label htmlFor="password">Password</label>
                <div className="two">
                  <input
                    type={!passShow ? "password" : "text"}
                    name="password"
                    id="password"
                    placeholder="Enter Your password"
                  />
                  <div
                    className="showpass"
                    onClick={() => setPassShow(!passShow)}
                  >
                    {!passShow ? "Show" : "Hide"}
                  </div>
                </div>
              </div>
              <button className="btn">Login</button>
              <button className="btn1">Login With OTP </button>
              <div>
                <hr
                  style={{
                    width: "120%",
                    marginLeft: "-20px",
                    marginTop: "30px",
                  }}
                />
                <button className="btn2 ">
                  {" "}
                  <img
                    style={{ width: "5%", marginTop: "1%" }}
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                    alt=""
                  />{" "}
                  Login With Google{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
