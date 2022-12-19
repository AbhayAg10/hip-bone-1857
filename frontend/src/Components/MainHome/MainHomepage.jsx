import React from "react";
import "./MainHomepage.css";
import WorkIcon from "@mui/icons-material/Work";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import LayersIcon from "@mui/icons-material/Layers";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Homepage1 from "../assets/homepage.jpg";
import { Avatar } from "@mui/material";
const MainHomepage = () => {
  
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  console.log(userInfo);
  return (
    <>
      <div style={{ background: "#eeeeee" }}>
        <div>
          <img
            style={{ width: "100%", height: "250px" }}
            src={Homepage1}
            alt=""
          />
        </div>
        <div style={{ marginTop: "-15%", marginLeft: "15%" }}>
          <h3 style={{ color: "#111111" }}>Search jobs</h3>
          <input
            style={{ width: "40%", padding: "10px", marginTop: "10%" }}
            type="text"
            placeholder="Search jobs by Skills ,Designation,Companies"
          />
          <button
            style={{
              padding: "12px",
              width: "8%",
              background: "#4a90e2",
              color: "#fff",
              border: "none",
            }}
          >
            Search
          </button>
        </div>
        <div className="main_one">
          <div className="right_side">
            <div className="profile_section">
              <div>
                <div
                  style={{
                    width: "60%",
                    marginLeft: "15%",
                    boxShadow:
                      "rgba(0, 0, 0, 1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(0, 0, 0, 0.2) 0px 2px 1px -2px",
                  }}
                >
                  <img className="avatar" src={userInfo.picture} />
                  <div className="details">
                    <h3>Name: {userInfo.name}</h3>
                    <p>Email: {userInfo.email}</p>
                    <p>Mobile: {userInfo.phone}</p>
                  </div>
                </div>
                <h2
                  style={{
                    fontSize: "15px",
                    color: "#33333",
                    padding: "7px",
                    padding: "5%",
                  }}
                >
                  Profile Completed
                </h2>
                <hr style={{ color: "#  4a90e2", marginBottom: "10%" }} />
                <p style={{ fontSize: "13px", color: "#4a90e2" }}>
                  15 Detaila you can add still{" "}
                </p>
                <div style={{ marginLeft: "4%", marginTop: "7%" }}>
                  <button
                    style={{
                      padding: "5%",
                      color: "#fff",
                      background: "#4a90e2",
                      width: "90%",
                      border: "none",
                    }}
                  >
                    Update Details
                  </button>
                </div>
              </div>
              <div>
                <h3 style={{ marginLeft: "10px" }}>Profile Performance </h3>
                <div style={{ width: "100%", display: "flex" }}>
                  <div
                    style={{
                      marginLeft: "4%",
                      width: "40%",
                      height: "80px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 1px 1px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(0, 0, 0, 0.2) 0px 2px 1px -2px",
                    }}
                  >
                    <p style={{ color: "#4a90e2" }}>0</p>
                    <p style={{ color: "#4a90e2" }}>Search Apperance</p>
                  </div>
                  <div
                    style={{
                      marginLeft: "4%",
                      width: "40%",
                      height: "80px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 1px 1px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(0, 0, 0, 0.2) 0px 2px 1px -2px",
                    }}
                  >
                    <p style={{ color: "#4a90e2" }}>1</p>
                    <p style={{ color: "#4a90e2" }}>Search Action</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="below_profile">
              <div style={{ width: "50%", marginTop: "6%", marginLeft: "4%" }}>
                <p>
                  Get real-time job updates & instant notifications only on the
                  app!
                </p>
              </div>
              <div style={{ width: "50%" }}>
                <img
                  style={{ width: "60%", marginTop: "10%", marginLeft: "12%" }}
                  src="https://static.naukimg.com/s/5/105/i/qrcode.png"
                  alt=""
                />
              </div>
            </div>
            <div className="below_profile1">
              <div>
                <img
                  src="https://static.naukimg.com/s/4/123/i/ffLogo.png"
                  alt=""
                />
              </div>
              <h2
                style={{ fontSize: "15px", padding: "5px", color: "#333333" }}
              >
                Naukri Services you might be interested in
              </h2>
              <div style={{ marginTop: "5%", padding: "8px" }}>
                <h2 style={{ fontSize: "15px", color: "#33333" }}>
                  Be a Priority Applicant
                </h2>
                <p style={{ fontSize: "13px", color: "#666666" }}>
                  Increase your chances of getting shortlisted for the applied
                  jobs and receiving calls from recruiters.
                </p>
                <p
                  style={{
                    marginLeft: "50%",
                    color: "#4a90e2",
                    fontSize: "14px",
                  }}
                >
                  KNOW MORE
                </p>
              </div>
              <div style={{ marginTop: "5%", padding: "8px" }}>
                <h2 style={{ fontSize: "15px", color: "#33333" }}>
                  Be a Priority Applicant
                </h2>
                <p style={{ fontSize: "13px", color: "#666666" }}>
                  Increase your chances of getting shortlisted for the applied
                  jobs and receiving calls from recruiters.
                </p>
                <p
                  style={{
                    marginLeft: "50%",
                    color: "#4a90e2",
                    fontSize: "14px",
                  }}
                >
                  KNOW MORE
                </p>
              </div>
            </div>
            <div className="below_profile2">
              <h2 style={{ fontSize: "15px", color: "#33333", padding: "7px" }}>
                FAQ
              </h2>
              <p style={{ fontSize: "13px", color: "#666666" }}>
                Click here for Frequently asked Questions{" "}
              </p>
            </div>
          </div>
          <div className="left_side">
            <div className="about_session">
              <h3
                style={{
                  color: "#666666",
                  fontFamily: "Roboto, sans-serif",
                  textAlign: "start",
                  margin: "10px 5px",
                }}
              >
                What is your Career Resolution for 2023?
              </h3>
              <div style={{ width: "90%" }}>
                <button
                  style={{
                    padding: "7px",
                    borderRadius: "6%",
                    border: "none",
                    border: "1px solid gray",
                    marginLeft: "8px",
                    marginBottom: "8px",
                    color: "black",
                  }}
                >
                  Getting a promotion{" "}
                </button>
                <button
                  style={{
                    padding: "7px",
                    borderRadius: "6%",
                    border: "none",
                    border: "1px solid gray",
                    marginLeft: "8px",
                    color: "black",
                  }}
                >
                  Better Work Life Balance{" "}
                </button>
                <button
                  style={{
                    padding: "7px",
                    borderRadius: "6%",
                    border: "none",
                    border: "1px solid gray",
                    marginLeft: "8px",
                    color: "black",
                  }}
                >
                  Getting a good appraisal{" "}
                </button>
                <button
                  style={{
                    padding: "7px",
                    borderRadius: "6%",
                    border: "none",
                    border: "1px solid gray",
                    marginLeft: "8px",
                    color: "black",
                  }}
                >
                  Finding a new job{" "}
                </button>
                <button
                  style={{
                    padding: "7px",
                    borderRadius: "6%",
                    border: "none",
                    border: "1px solid gray",
                    marginLeft: "8px",
                    color: "black",
                  }}
                >
                  {" "}
                  Others{" "}
                </button>
              </div>
            </div>
            <h3
              style={{
                marginLeft: "12%",
                marginTop: "1%",
                color: "#666666",
                fontSize: "20px",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Jobs
            </h3>
            <div className="about_session1">
              <h2
                style={{
                  marginLeft: "3%",
                  marginTop: "2.5%",
                  color: "#111111",
                  fontSize: "20px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                10 New Recommanded jobs(s)
              </h2>
              <hr style={{ marginTop: "10px" }} />
              <div style={{ width: "80%" }}>
                <div style={{ margin: "6%", marginLeft: "10%" }}>
                  <p style={{ color: "#111111" }}>Deputy Branch Manager</p>
                  <p>Yes bank</p>
                  <hr style={{ marginTop: "10px" }} />
                </div>
                <div style={{ marginLeft: "15px" }}>
                  <p>
                    <WorkIcon style={{ color: "blue", marginTop: "1%" }} />
                    From 4 to 8 year(s) of experiencs
                  </p>
                  <p>
                    <LocationOnIcon
                      style={{ color: "blue", marginTop: "1%" }}
                    />
                    Delhi/pune/Bangaluru/Hyd/chennai/maharasta
                  </p>
                  <p>
                    <BookmarkIcon style={{ color: "blue", marginTop: "1%" }} />
                    Ensure All the counter are open and staff are job to ready{" "}
                  </p>
                  <p>
                    <LayersIcon style={{ color: "blue", marginTop: "1%" }} />
                    Not Disclosed
                  </p>
                </div>
                <button
                  style={{
                    fontSize: "15px",
                    color: "blue",
                    border: "none",
                    padding: "5px",
                    background: "none",
                    marginLeft: "88%",
                    marginTop: "2%",
                  }}
                >
                  View all
                </button>
              </div>
            </div>
            <div className="about_session2">
              <h2
                style={{
                  marginLeft: "3%",
                  marginTop: "2.5%",
                  color: "#111111",
                  fontSize: "20px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                New Jobs in My Job Alerts
              </h2>
              <hr style={{ marginTop: "10px" }} />
              <button
                style={{
                  marginTop: "35px",
                  border: "none",
                  color: "#4a90e2",
                  fontSize: "15px",
                  marginLeft: "40%",
                }}
              >
                Create a Custom job alert
              </button>
              <p
                style={{
                  fontSize: "13px",
                  color: "#666666",
                  marginLeft: "33%",
                }}
              >
                Stay informed about the latest jobs for you
              </p>
            </div>
            <div className="about_session3">
              <div className="about_session4">
                <h2
                  style={{
                    fontSize: "15px",
                    color: "#333333",
                    marginTop: "7%",
                    marginLeft: "5%",
                  }}
                >
                  Application Summary
                </h2>
                <hr style={{ marginTop: "10px" }} />
                <h2
                  style={{
                    fontSize: "16px",
                    color: "#666666",
                    marginTop: "7%",
                    marginLeft: "5%",
                  }}
                >
                  Daily Limit of Applications(50)
                </h2>
              </div>
              <div className="about_session5">
                <h2
                  style={{
                    fontSize: "15px",
                    color: "#333333",
                    marginTop: "7%",
                    marginLeft: "5%",
                  }}
                >
                  Saved Jobs{" "}
                </h2>
                <hr style={{ marginTop: "10px" }} />
                <h2
                  style={{
                    fontSize: "16px",
                    color: "#666666",
                    marginTop: "7%",
                    marginLeft: "5%",
                  }}
                >
                  You have 0 saved job(s) till now{" "}
                </h2>
                <button
                  style={{
                    fontSize: "15px",
                    color: "blue",
                    border: "none",
                    padding: "5px",
                    background: "none",
                    marginLeft: "60%",
                    marginTop: "10%",
                  }}
                >
                  View all
                </button>
              </div>
            </div>
            <div className="about_session6">
              <h2
                style={{
                  marginLeft: "3%",
                  marginTop: "2.5%",
                  color: "#111111",
                  fontSize: "20px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                New Jobs in My Job Alerts
              </h2>
              <hr style={{ marginTop: "10px" }} />
              <div
                style={{
                  width: "50%",
                  textAlign: "center",
                  marginLeft: "20%",
                  marginTop: "4%",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "#666666",
                    marginLeft: "10%",
                  }}
                >
                  You do not have any unread message. Messages received from
                  different recruiters will appear in this section.
                </p>
              </div>
            </div>
            <div className="about_session7">
              <h2
                style={{
                  marginLeft: "3%",
                  marginTop: "2.5%",
                  color: "#111111",
                  fontSize: "20px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Recruiter Connections
              </h2>
              <hr style={{ marginTop: "10px" }} />
              <div>
                <div>
                  <h2 style={{ fontSize: "15px", color: "#666666" }}>
                    0 Credits purchased
                  </h2>
                  <h2 style={{ fontSize: "15px", color: "#666666" }}>
                    0 Credits remaining
                  </h2>
                </div>
                <div
                  style={{
                    width: "50%",
                    textAlign: "center",
                    marginLeft: "40%",
                    marginTop: "4%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#666666",
                      marginLeft: "12%",
                      marginTop: "-20%",
                    }}
                  >
                    Buy recruiter connections credits to contact more recruiters
                    hiring in your domain.
                  </p>
                </div>
              </div>

              <button
                style={{
                  padding: "5px",
                  marginTop: "20px",
                  border: "none",
                  background: "#468de1",
                  marginLeft: "70%",
                }}
              >
                Buy Credits
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHomepage;
