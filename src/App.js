import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  const navigate = useNavigate();
  return (
    <Box>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Box>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Button>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => {
                navigate("/profile");
              }}
            >
              Profile
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
