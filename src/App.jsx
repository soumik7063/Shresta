import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Layout from "./Layout";
import Contact from "./Contact";
import Login from "./Login";
import StoreImageTextFirebase from "./StoreImageTextFirebase.jsx";
import WelcomePage from "./WelcomePage";
import Registration from "./Registration";
import Aboutus from "./Aboutus";
import GetCurrentAddress from "./GetCurrentAddress.jsx";
import ForgotPassword from "./Forpas";
import Setpass from "./Setpass";
import Pass from "./Pass";
import Pass1 from "./Pass1";
import Thankyou from "./Thankyou";
import FeedbackPage from "./FeedbackPage";
import Dashboard from "./Dashboard";
import Complaints from "./Complaints";
import ComplaintsPage from "./Complaintspage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the Material UI theme
const theme = createTheme({
  palette: {
    mode: "light", // Change to "dark" for dark mode
    primary: { main: "#0D47A1" }, // Deep Blue for buttons, headers
    secondary: { main: "#00897B" }, // Teal for highlights
    background: { default: "#F5F5F5", paper: "#FFFFFF" }, // Light grey and white
    error: { main: "#D32F2F" }, // Red for errors
    success: { main: "#388E3C" }, // Green for success messages
    text: { primary: "#212121", secondary: "#616161" }, // Dark grey for text
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent Material UI styles */}
      <Routes>
        {/* Layout Routes */}
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/GetCurrentAddress" element={<GetCurrentAddress />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/setpass" element={<Setpass />} />
        <Route path="/pass" element={<Pass />} />
        <Route path="/pass1" element={<Pass1 />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/WelcomePage" element={<WelcomePage />} />
        <Route path="/StoreImageTextFirebase" element={<StoreImageTextFirebase />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/ComplaintsPage" element={<ComplaintsPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
