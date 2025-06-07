import React from "react";
import { Box, Typography, Link } from "@mui/material";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 3, textAlign: "center", bgcolor: "#f5f5f5" }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Baseball Player Tracker
      </Typography>
      <Typography variant="body2">
        Built with ❤️ using React | <Link href="/privacy">Privacy Policy</Link>
      </Typography>
    </Box>
  );
};

export default Footer;