import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import "./../components/style.css";
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Authors
          </Typography>
          <Link
            href="/home"
            style={{ textDecoration: "none", padding: "10px", color: "white" }}
          >
            Home
          </Link>
          <Link
            href="/authors"
            style={{ textDecoration: "none", padding: "10px", color: "white" }}
          >
            Authors
          </Link>
          <Link
            href="/addAuthors"
            style={{ textDecoration: "none", padding: "10px", color: "white" }}
          >
            Add Author
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
