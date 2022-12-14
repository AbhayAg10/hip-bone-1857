import React, { useState } from "react";
import {
  Avatar,
  Grid,
  Paper,
  Typography,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import { Link } from "react-router-dom";

import { styled } from "@mui/material";

import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
const Main = styled(Grid)`
  display: flex;
  background-color: #fafbfe;
`;
const Box = styled(Paper)`
  padding: 30px 20px;
  width: 800px;
  height: 1090px;
  margin-top: 30px;
  margin-left: 8%;
  opacity: 0.9, 0.8, 0.7;
  border-radius: 2%;
`;
const Box1 = styled(Paper)`
  width: 300px;
  height: 280px;
  margin-top: 15%;
  margin-left: 3%;
  postion: sticky;
  border: 1px dashed grey;
  opacity: 0.9, 0.8, 0.7;
  border-radius: 2%;
  postion:fixed;
  top:10%;
  z-index:1;
`;
const Header = styled("h2")`
  margin-left: -40%;
  font-size: 35px;
  line-height: 28px;
  font-family: Roboto Slab;
`;
const AvatartStle = styled(Avatar)`
  background: #1bbd7e;
`;
const Container = styled(FormGroup)`
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      firstName,
      lastName,
      email,
      password,
    };
  };
  return (
    <Main align="center">
      <Box1 elevation={4}>
        <h2>Kalesha</h2>
      </Box1>
      <Box elevation={5}>
        <Grid>
          {/* <AvatartStle>
            <AddCircleOutlineIcon />
          </AvatartStle> */}
          <Header>Find a job & grow your career</Header>
        </Grid>
        <Container onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="firstName" variant="outlined" />

          <TextField
            id="outlined-basic"
            label="Email Id"
            variant="outlined"
            helperText="We'll send you relevant jobs in your mail"
          />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            helperText="Minimum 6 characters required"
          />
          <TextField
            id="outlined-basic"
            label="Conform password"
            variant="outlined"
            helperText="Minimum 6 characters required"
          />
          <TextField
            id="outlined-basic"
            label="mobileNumber"
            variant="outlined"
            helperText="Recruiters will call you on this number "
          />
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
            ></Button>

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
            ></Button>
          </div>

          <FormControlLabel
            style={{ color: "#445578" }}
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
          <ButtonBox variant="contained">Contained</ButtonBox>
          {/* <FormControl>
            <InputLabel>firstName</InputLabel>
            <Input
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel>lastName</InputLabel>
            <Input
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel>passsword</InputLabel>
            <Input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <ButtonBox type="submit" variant="contained" color="primary">
            SignUp
          </ButtonBox>

          <ButtonBox
            variant="contained"
            color="primary"
            component={Link}
            to={`/api/auth`}
          >
            login
          </ButtonBox> */}
        </Container>
      </Box>
    </Main>
  );
};

export default SignUp;
