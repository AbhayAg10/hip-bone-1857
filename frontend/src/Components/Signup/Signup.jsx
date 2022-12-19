import React, { useState } from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import FormHelperText from "@mui/material/FormHelperText";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import BadgeIcon from "@mui/icons-material/Badge";
import { Checkbox } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Both.css";
const Signup = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);
  const navigate = useNavigate();

  // =============================================================================================================

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      toast.warning("name is required!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
      alert("add password more than 6");
    } else if (confirmpassword === "") {
      toast.error("confirmPassword is required!", {
        position: "top-center",
      });
    } else if (confirmpassword.length < 6) {
      toast.error("confirm password must be 6 char!", {
        position: "top-center",
      });
    } else if (password !== confirmpassword) {
      toast.error("pass and conformPass are not matching!", {
        position: "top-center",
      });
    } else if (phone.length < 10) {
      toast.error("confirm phone must be 10 numbers!", {
        position: "top-center",
      });
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);

        const { data } = await axios.post(
          "https://rich-puce-peacock-kilt.cyclic.app/api/users",
          { name, email, password, phone, picture },
          config
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        toast.success("User Registered Successfuly ....", {
          position: "top-center",
        });

        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        const FError = error.response.data.message;
        console.log(FError);
        toast.success(FError, {
          position: "top-center",
        });
        setLoading(false);
      }
    }
  };
  const postDetails = (pics) => {
    if (!picture) {
      return setPicMessage("Please Select an image!.. ");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "shkoq3qc");
      data.append("cloud_name", "du3acgzcg");

      fetch("https://api.cloudinary.com/v1_1/du3acgzcg/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPicture(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  return (
    <>
      <session>
        <div className="main">
          <div className="left_session">
            <div
              style={{
                marginTop: "1px",
              }}
            >
              <img
                style={{ marginTop: "-80px", marginLeft: "70px" }}
                src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg"
                alt=""
              />
              <h3>On Register You can</h3>
              <div
                style={{
                  display: "flex",
                  marginTop: "12px",
                }}
              >
                <CheckCircleOutlineOutlinedIcon
                  style={{ color: "#18c1a3", marginTop: "12px" }}
                />
                <p
                  style={{
                    color: "#445578",
                    lineHeight: "18px",
                    fontSize: "17px",
                    textAlign: "start",
                    marginLeft: "10px",
                    marginTop: "5%",
                  }}
                >
                  Build your profile and let recruiters find you
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "13px",
                }}
              >
                <CheckCircleOutlineOutlinedIcon
                  style={{ color: "#18c1a3", marginTop: "10px" }}
                />
                <p
                  style={{
                    color: "#445578",
                    lineHeight: "18px",
                    fontSize: "17px",
                    textAlign: "start",
                    marginLeft: "10px",
                    marginTop: "5%",
                  }}
                >
                  Get job postings delivered right to your email
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "13px",
                }}
              >
                <CheckCircleOutlineOutlinedIcon
                  style={{ color: "#18c1a3", marginTop: "7px" }}
                />
                <p
                  style={{
                    color: "#445578",
                    lineHeight: "18px",
                    fontSize: "17px",
                    textAlign: "start",
                    marginLeft: "10px",
                    marginTop: "5%",
                  }}
                >
                  Find a job and grow your career as well
                </p>
              </div>
            </div>
          </div>
          <div className="form_data1">
            <div className="form_heading">
              <h2
                style={{
                  color: "#000000",
                  fontSize: "30px",
                  marginLeft: "-40%",
                }}
              >
                Find a job & grow your career
              </h2>
            </div>
            <form>
              <div className="form_input_name">
                <label htmlFor="name">Please Enter Full Name</label>
                <input
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  id="name"
                  placeholder="Enter Your Name "
                />
              </div>
              
              <div className="form_input">
                <label htmlFor="email">Email/username</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="Email"
                  placeholder="Enter Your email here "
                />
                
              </div>

              <div className="form_input">
                <label htmlFor="password">Password</label>
                <div className="two">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={!passShow ? "password" : "text"}
                    name="password"
                    id="password1"
                    placeholder="Enter Your password"
                  />
                  <div
                    className="showpass1"
                    onClick={() => setPassShow(!passShow)}
                  >
                    {!passShow ? "Show" : "Hide"}
                  </div>
                </div>
               
              </div>
              <div className="form_input">
                <label htmlFor="password1">Conform Password</label>
                <div className="two">
                  <input
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type={!cpassShow ? "password" : "text"}
                    name="cpassword"
                    id="password"
                    placeholder="Enter Your password"
                  />
                  <div
                    className="showpass1"
                    onClick={() => setCPassShow(!cpassShow)}
                  >
                    {!cpassShow ? "Show" : "Hide"}
                  </div>
                </div>
               
              </div>
              <div className="form_input">
                <label htmlFor="number">MobileNumber</label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  name="phone"
                  id="number"
                  placeholder="Enter Your Mobile Number "
                />
              
              </div>
              <div className="experience">
                <h3>Work</h3>
                <div className="work_container">
                  <CoPresentIcon
                    style={{
                      marginTop: "15px",
                      marginLeft: "10px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "15px",
                      color: "#457eff",
                      marginLeft: "40px",
                      marginTop: "-25px",
                    }}
                  >
                    I'm Experienced
                  </h3>
                  <p style={{ color: "#8292b4", fontSize: "13px" }}>
                    I have work experience (excluding internships)
                  </p>
                </div>
                <div className="work_container">
                  <BadgeIcon
                    style={{
                      marginTop: "15px",
                      marginLeft: "10px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "15px",
                      color: "#457eff",
                      marginLeft: "40px",
                      marginTop: "-25px",
                    }}
                  >
                    I'm Fresher
                  </h3>
                  <p style={{ color: "#8292b4", fontSize: "13px" }}>
                    I am a student/ Haven't worked after graduation
                  </p>
                </div>
              </div>
              <div>
                <Form.Group className="mb-3">
                  <Form.Label style={{ marginLeft: "-0.5%", fontSize: "20px" }}>
                    Profile Picture{" "}
                  </Form.Label>

                  <Form.Control
                    type="file"
                    name="picture"
                    style={{ width: "35%", size: "xl", marginTop: "10px" }}
                    onChange={(e) => postDetails(e.target.files[0])}
                    id="custom-file"
                  />
                
                </Form.Group>
              </div>
              <div>
                {/* <Checkbox style={{ marginLeft: "-2%", marginTop: "2%" }} /> */}
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                <p
                  style={{
                    color: "#445578",
                    fontSize: "14px",
                    marginLeft: "20px",
                    marginTop: "-4%",
                  }}
                >
                  {" "}
                  Send Important Information On WhatsApp
                </p>
              </div>
              <p
                style={{ color: "#445578", fontSize: "12px", marginTop: "2%" }}
              >
                By clicking Register, you agree to the Terms and Conditions &
                Privacy Policy of JobPanda.com
              </p>
              <button onClick={handleSubmit} className="btn3">
                Register Now
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </session>
    </>
  );
};

export default Signup;
