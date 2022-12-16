import React, { useState } from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import FormHelperText from "@mui/material/FormHelperText";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import BadgeIcon from "@mui/icons-material/Badge";
import {Checkbox} from '@mui/material';


import Form from "react-bootstrap/Form";
import "./Both.css";
const Signup = () => {
  const [passShow, setPassShow] = useState(false);
  const [picture, setPicture] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [picMessage, setPicMessage] = useState(null);
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
              <h2 style={{"color":"#000000","fontSize":"30px","marginLeft":"-40%"}} >Find a job & grow your career</h2>
            </div>
            <form>
              <div className="form_input">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name "
                />
              </div>
              <div className="form_input">
                <label htmlFor="email">Email/username</label>
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  placeholder="Enter Your email here "
                />
                <FormHelperText
                  style={{ marginTop: "-10px" }}
                  id="my-helper-text"
                >
                  We'll never share your email.
                </FormHelperText>
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
                    className="showpass1"
                    onClick={() => setPassShow(!passShow)}
                  >
                    {!passShow ? "Show" : "Hide"}
                  </div>
                </div>
                <FormHelperText
                  style={{ marginTop: "-10px" }}
                  id="my-helper-text"
                >
                  Recruiters will call you on this number
                </FormHelperText>
              </div>
              <div className="form_input">
                <label htmlFor="email">MobileNumber</label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Enter Your Mobile Number "
                />
                <FormHelperText
                  style={{ marginTop: "-10px" }}
                  id="my-helper-text"
                >
                  Recruiters will call you on this number
                </FormHelperText>
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
                  <h3 style={{"fontSize":"15px","color":"#457eff","marginLeft":"40px","marginTop":"-25px"}}>I'm Experienced</h3>
                  <p style={{color:"#8292b4","fontSize":"13px"}}>I have work experience (excluding internships)</p>
                </div>
                <div className="work_container">
                  <BadgeIcon
                    style={{
                      
                      marginTop: "15px",
                      marginLeft: "10px",
                    }}
                  />
                    <h3 style={{"fontSize":"15px","color":"#457eff","marginLeft":"40px","marginTop":"-25px"}}>I'm Fresher</h3>
                    <p style={{color:"#8292b4","fontSize":"13px"}} >I am a student/ Haven't worked after graduation</p>
                </div>
                 
              </div>
              <div>
                  <Form.Group className="mb-3">
              <Form.Label style={{ marginLeft: "-0.5%", fontSize: "20px" }}>
                Profile Picture{" "}
              </Form.Label>

              <Form.Control
                type="file"
                style={{ width: "35%", size: "xl","marginTop":"10px" }}
                onChange={(e) => postDetails(e.target.files[0])}
                id="custom-file"
              />
               <FormHelperText
                  style={{ marginTop: "10px" ,"color":"#445578"}}
                  id="my-helper-text"
                >
                Recruiters give first preference to candidates who have a profile picture
                </FormHelperText>
            </Form.Group>
                  </div>
                  <div>

                  <Checkbox style={{"marginLeft":"-2%","marginTop":"2%"}}  />
                  <p style={{"color":"#445578","fontSize":"14px","marginLeft":"20px","marginTop":"-4%"}}> Send Important Information On WhatsApp</p>
                  </div>
                  <p style={{"color":"#445578","fontSize":"12px","marginTop":"2%"}} >By clicking Register, you agree to the Terms and Conditions & Privacy Policy of JobPanda.com</p>
                  <button className='btn3'>Register Now</button>
            </form>
          </div>
        </div>
      </session>
    </>
  );
};

export default Signup;
