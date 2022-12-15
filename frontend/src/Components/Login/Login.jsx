import React, { useState } from "react";
import {  Grid, Paper, FormControl, Button } from "@mui/material";
import { styled } from "@mui/material";

import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { useEffect } from "react";
const Main = styled(Grid)`
  display: flex;
  margin-top: 3%;
  background-color: #fafbfe;
`;
const Box = styled(Paper)`
  padding: 30px 20px;
  width: 400px;
  height: 600px;
  margin-top: 28px;
  margin-left: -3%;
  opacity: 0.9, 0.8, 0.7;
  border-radius: 2%;
`;
const Box1 = styled(Paper)`
  width: 600px;
  height: 480px;
  margin-top: 7%;
  margin-left: 15%;
  postion: sticky;

  opacity: 0.9, 0.8, 0.7;
  border-radius: 2%;
`;
const Header = styled("h3")`
  margin-left: -70%;
  font-size: 28px;
  line-height: 28px;
  font-family: Roboto Slab;
`;
const Header1 = styled("h2")`
  margin-left: -40%;
  font-size: 35px;
  line-height: 28px;
  font-family: Roboto Slab;
`;
const Header2 = styled("p")`
  margin-left: -40%;
  padding-top: 3%;
  font-size: 15px;
  line-height: 28px;
  margin: auto;
  font-family: Inter, Roboto, sans-serif, Helvetica;
  color: #4a90e2;
`;
const Header3 = styled("p")`
  color: #091e42;
  text-align: start;
  margin-left: 13px;
  font-size: 15px;
  margin-top: -1%;
`;

const Container = styled("form")`
  width: 100%;
  margin: 1% auto 0 auto;

  & > div {
    margin-top: 20px;
  }
`;
const ButtonBox = styled(Button)`
  margin-top: 10%;

  color: #111111;
  width: 100%;
  // border-radius:5%
`;
const ButtonBox1 = styled(Button)`
  margin-top: 10%;
  border-radius: %;
  color: #111111;
  width: 100%;
  font-family: Roboto;
  color: #757575;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(()=>{
  //   const userInfo=localStorage.getItem("userInfo",JSON.stringify(data))
  // },[])

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:8084/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <Main align="center">
      <Box1 elevation={4}>
        <Header1>New to Naukri?</Header1>

        <Header3>
          <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> One click
          apply using naukri profile.
        </Header3>
        <Header3>
          <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> Get
          relevant job recommendations.
        </Header3>
        <Header3>
          <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> Showcase
          profile to top companies and consultants.
        </Header3>
        <Header3>
          <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> Know
          application status on applied jobs.
        </Header3>
        <div style={{ marginLeft: "-60%", marginTop: "5%" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outlined" style={{ marginLeft: "1%" }}>
              Register For Free
            </Button>
          </Link>
        </div>
        <img
          src="https://static.naukimg.com/s/5/105/i/register.png"
          style={{ width: "40%", marginLeft: "45%", marginBottom: "5%" }}
          alt=""
        />
      </Box1>

      <Box elevation={5}>
        <Grid>
          <Header>Login</Header>
        </Grid>

        {loading && <Loading />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Container onSubmit={submitHandler}>
          <FormControl>
            <TextField
              style={{ width: "135%", marginLeft: "-15%" }}
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
              helperText="We'll send you relevant jobs in your mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              style={{ width: "155%", marginLeft: "-25%" }}
              id="outlined-basic"
              label="password"
              variant="outlined"
              helperText="Minimum 6 characters required"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <ButtonBox type="submit" variant="contained">
            Login
          </ButtonBox>
        </Container>

        <Header2>Use OTP TO LOGIN</Header2>
        <Header2>
          -----------------------------or-----------------------------
        </Header2>
        <ButtonBox1 variant="outlined">
          <img
            style={{ width: "8%", marginLeft: "-5%" }}
            src="https://pngimg.com/uploads/google/google_PNG19635.png"
            alt=""
          />{" "}
          signin with Google
        </ButtonBox1>
      </Box>
    </Main>
  );
};

export default Login;
