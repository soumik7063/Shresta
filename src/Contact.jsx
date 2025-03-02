import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box, Paper } from "@mui/material";
import { FaHome, FaInfoCircle, FaPhone, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('https://media.istockphoto.com/id/2160041157/photo/website-page-contact-us-or-e-mail-marketing-concept-customer-support-hotline-contact-us.webp?a=1&b=1&s=612x612&w=0&k=20&c=vjlD9d6TgqTnp7vYpkMmfSWYUbtNq9FjPa9fYbkmimM=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" fontWeight="bold">
            Shresta
          </Typography>
          <Box>
            <Button color="inherit" startIcon={<FaHome />} href="/">
              Home
            </Button>
            <Button color="inherit" startIcon={<FaInfoCircle />} href="/about">
              About
            </Button>
            <Button color="inherit" startIcon={<FaPhone />} href="/contact">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Contact Section */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Paper elevation={10} sx={{ p: 6, textAlign: "center", borderRadius: 4 }}>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            Connect with Me
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            I would love to hear from you! Feel free to connect with me on the platforms below:
          </Typography>

          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            {/* GitHub */}
            <Button
              variant="contained"
              sx={{ backgroundColor: "#333", color: "white", width: "250px" }}
              startIcon={<FaGithub />}
              href="https://github.com/sailaja-adapa"
              target="_blank"
            >
              GitHub
            </Button>

            {/* LinkedIn */}
            <Button
              variant="contained"
              sx={{ backgroundColor: "#0077b5", color: "white", width: "250px" }}
              startIcon={<FaLinkedin />}
              href="https://www.linkedin.com/in/sailaja-adapa-770167291/"
              target="_blank"
            >
              LinkedIn
            </Button>

            {/* Email */}
            <Button
              variant="contained"
              sx={{ backgroundColor: "#34a853", color: "white", width: "250px" }}
              startIcon={<FaEnvelope />}
              href="mailto:adapasailaja17@gmail.com"
              target="_blank"
            >
              Email
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Footer */}
      <Box sx={{ mt: "auto", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)", p: 2, textAlign: "center" }}>
        <Typography color="white">© 2024 Shresta. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Contact;
