import React from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

export default function UserRegisterForm() {
  const URL = `http://localhost:8080/register`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);

    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      address: e.target.address.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="firstname"
              variant="filled"
              name="firstname"
              size="small"
              defaultChecked=""
              label="First name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastname"
              variant="filled"
              name="lastname"
              size="small"
              defaultChecked=""
              label="Last name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              variant="filled"
              name="email"
              size="small"
              defaultChecked=""
              label="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              variant="filled"
              name="password"
              size="small"
              defaultChecked=""
              label="Password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="confirm-password"
              variant="filled"
              name="confirm-password"
              size="small"
              defaultChecked=""
              label="Confirm Password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              variant="filled"
              name="address"
              size="small"
              defaultChecked=""
              label="Address"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
