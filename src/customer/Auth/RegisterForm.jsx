import { Button, Grid, TextField, Alert, AlertTitle } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getuser, register } from "../../State/Auth/Action";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    if (jwt) {
      dispatch(getuser());
    }
  }, [jwt, auth.jwt, dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      role: "ROLE_USER",
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      mobile: data.get("mobile"),
      email: data.get("email"),
      password: data.get("password"),
    };

    if (!userData.firstName || !userData.lastName || !userData.mobile || !userData.email || !userData.password) {
      setAlert({ show: true, message: "Please fill in all fields", type: "error" });
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(userData.password)) {
      setAlert({
        show: true,
        message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
        type: "error",
      });
      return;
    }

    try {
      const response = await dispatch(register(userData));
      
      if (response.error && response.error.message.includes("already registered")) {
        setAlert({ show: true, message: "This email is already registered. Please log in instead.", type: "error" });
      } else {
        setAlert({ show: true, message: "Registration successful", type: "success" });
        setTimeout(() => {
          navigate("/login");
        }, 2000); // Wait 2 seconds before redirecting
      }
    } catch (error) {
      setAlert({ show: true, message: "This email is already registered. Please log in instead.", type: "error" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="mobile"
              name="mobile"
              label="Mobile"
              fullWidth
              autoComplete="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="new-password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="bg-[#9155fd] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0", bgcolor: "#9155fd" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      {alert.show && (
        <Alert severity={alert.type} sx={{ mt: 2 }}>
          <AlertTitle>{alert.type === "error" ? "Error" : "Success"}</AlertTitle>
          {alert.message}
        </Alert>
      )}

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>If you already have an account?</p>
          <Button onClick={() => navigate("/login")} className="ml-5" size="small">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
