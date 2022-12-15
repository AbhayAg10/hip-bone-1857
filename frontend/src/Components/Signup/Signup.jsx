import React, { useState } from "react";
import { Grid, Paper, Button, Checkbox, FormControlLabel } from "@mui/material";
import Form from "react-bootstrap/Form";

import { styled } from "@mui/material";

import TextField from "@mui/material/TextField";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
// import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import Loading from "./Loading";
const Main = styled(Grid)`
  display: flex;
  background-color: #fafbfe;
  width: 90%;
  margin: auto;
  margin-top: 1%;
`;
const Box = styled(Paper)`
  padding: 30px 20px;
  width: 800px;
  height: 1190px;
  margin-top: 30px;
  margin-left: 8%;
  opacity: 0.9, 0.8, 0.7;
  border-radius: 2%;
`;
const Box1 = styled(Paper)`
  width: 300px;
  height: 280px;
  margin-top: 17%;
  margin-left: 3%;
  postion: sticky;
  border: 1px dashed grey;
  opacity: 0.9, 0.8, 0.7;
  border-radius: 5%;
  postion: fixed;
  top: 10%;
  z-index: 1;
  background-color: "#fff";
`;
const Header = styled("h2")`
  margin-left: -40%;
  font-size: 35px;
  line-height: 28px;
  font-family: Roboto Slab;
`;

const Container = styled("form")`
  width: 100%;
  margin: 3% auto 0 auto;

  & > div {
    margin-top: 40px;
  }
`;
const ButtonBox = styled(Button)`
  margin-top: 10%;
  background-color: #ff7555;
  color: #111111;
  width: 20%;
  // border-radius:5%
`;

const SignUp = () => {
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
    if (password !== confirmpassword) {
      setMessage("Password Do Not Match");
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
          "http://localhost:8084/api/users",
          { name, email, password, phone, picture },
          config
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
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
      <Main align="center">
        <Box1 elevation={4}>
          <div
            style={{
              marginTop: "1px",
            }}
          >
            <img
              style={{ marginTop: "-80px" }}
              src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg"
              alt=""
            />
            <h2>On Register You can</h2>
            <div
              style={{
                display: "flex",
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                style={{ color: "#18c1a3", marginTop: "-7px" }}
              />
              <p
                style={{
                  color: "#445578",
                  lineHeight: "18px",
                  fontSize: "17px",
                  textAlign: "start",
                  marginLeft: "10px",
                  marginTop: "-2%",
                }}
              >
                Build your profile and let recruiters find you
              </p>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                style={{ color: "#18c1a3", marginTop: "-7px" }}
              />
              <p
                style={{
                  color: "#445578",
                  lineHeight: "18px",
                  fontSize: "17px",
                  textAlign: "start",
                  marginLeft: "10px",
                  marginTop: "-2%",
                }}
              >
                Build your profile and let recruiters find you
              </p>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                style={{ color: "#18c1a3", marginTop: "-7px" }}
              />
              <p
                style={{
                  color: "#445578",
                  lineHeight: "18px",
                  fontSize: "17px",
                  textAlign: "start",
                  marginLeft: "10px",
                  marginTop: "-2%",
                }}
              >
                Build your profile and let recruiters find you
              </p>
            </div>
          </div>
        </Box1>
        <Box elevation={5}>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
          {loading && <Loading />}
          <Grid>
            <Header style={{ marginLeft: "1%" }}>
              Find a job & grow your career
            </Header>
          </Grid>
         
          <Container onSubmit={handleSubmit}>
            <TextField
              style={{ width: "70%", marginLeft: "-20%" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              style={{ width: "70%", marginLeft: "-19%" }}
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
              helperText="We'll send you relevant jobs in your mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              style={{ width: "70%", marginLeft: "-18%" }}
              id="outlined-basic"
              label="password"
              variant="outlined"
              helperText="Minimum 6 characters required"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              style={{ width: "70%", marginLeft: "-17%" }}
              id="outlined-basic"
              label="Conform password"
              variant="outlined"
              helperText="Minimum 6 characters required"
              type="password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <TextField
              style={{ width: "70%", marginLeft: "-17%" }}
              id="outlined-basic"
              label="mobileNumber"
              variant="outlined"
              helperText="Recruiters will call you on this number "
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {picMessage && (
              <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
            )}
            <Form.Group className="mb-3">
              <Form.Label style={{ marginLeft: "-33%", fontSize: "20px" }}>
                Profile Picture{" "}
              </Form.Label>

              <Form.Control
                type="file"
                style={{ width: "35%", size: "xl" }}
                onChange={(e) => postDetails(e.target.files[0])}
                id="custom-file"
              />
            </Form.Group>

            <div style={{ display: "flex" }}>
              <Button
                sx={{
                  width: 250,
                  height: 80,
                  backgroundColor: "primary",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                kalesha
              </Button>

              <Button
                sx={{
                  width: 250,
                  height: 80,
                  backgroundColor: "primary",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                Baig{" "}
              </Button>
            </div>

            <FormControlLabel
              style={{ color: "#445578", marginLeft: "-55%" }}
              control={<Checkbox defaultChecked />}
              label="Send me important updates onWhatsApp"
            />
            <p
              style={{
                color: "#445578",
                "font-size": "15px",
                marginLeft: "-25%",
              }}
            >
              By clicking Register, you agree to the Terms and Conditions &
              Privacy Policy of Naukri.com
            </p>
            <ButtonBox
              type="submit"
              variant="contained"
              style={{ width: "15%", marginLeft: "-75%" }}
            >
              Signup
            </ButtonBox>
          </Container>
          {/* <div style={{"marginTop":"-100%","marginLeft":"70%"}} >
          <button style={{"borderRadius":"5%","textDecoration":"none","padding":"10px","width":"100px"}}>Google

          <img style={{"marginTop":"-500%","marginLeft":"-20px","width":"50%"}} src="https://static.naukimg.com/s/7/104/assets/images/google-icon.9273ac87.svg" alt="" />
          </button>
        </div> */}
        </Box>
      </Main>
      <div>
        <p style={{ color: "#8292b4", marginLeft: "40%" }}>
          About Us | Contact Us | FAQ | Terms And Conditions | Report A Problem
          | Privacy Policy{" "}
        </p>
        <p style={{ color: "#8292b4", marginLeft: "50%" }}>
          All Rights Are Reserverd @ 2022 Info Edge India LTD.
        </p>
      </div>
    </>
  );
};

export default SignUp;
