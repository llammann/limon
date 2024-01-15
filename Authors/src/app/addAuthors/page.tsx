"use client";
import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function AddAuthors() {
  const [gender, setGender] = React.useState("");
  const [isDead, setIsDead] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
    setIsDead(event.target.value as string);
  };

  return (
    <>
      <Navbar />
      <h1 style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        Add Authors
      </h1>
      <div
        className="formm"
        style={{
          width: "400px",
          //   border: "1px solid red",
          margin: "50px 300px",
        }}
      >
        <TextField
          required
          id="margin-normal"
          margin="normal"
          label="Name"
          variant="standard"
          sx={{ minWidth: 390, margin: "20px" }}
        />
        <br />
        <TextField
          required
          id="margin-normal"
          margin="normal"
          label="Birth Year"
          variant="standard"
          sx={{ minWidth: 390, margin: "20px" }}
        />
        <br />
        <TextField
          required
          id="margin-normal"
          margin="normal"
          label="Genre"
          variant="standard"
          sx={{ minWidth: 390, margin: "20px" }}
        />
        <FormControl sx={{ minWidth: 390, margin: "20px" }}>
          <InputLabel id="demo-simple-select-label">is Dead</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={isDead}
            label="Is Dead"
            onChange={handleChange}
          >
            <MenuItem value={10}>Yes</MenuItem>
            <MenuItem value={20}>No</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 390, margin: "20px" }}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            onChange={handleChange}
          >
            <MenuItem value={10}>Gender</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
            <MenuItem value={30}>Male</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          id="margin-normal"
          margin="normal"
          label="ImageURL"
          variant="standard"
          sx={{ minWidth: 390, margin: "20px" }}
        />
        <br />

        <button
          style={{
            width: "390px",
            height: "50px",
            borderRadius: "7px",
            backgroundColor: "#74c69d",
            color: "white",
            margin: "20px",
          }}
        >
          ADD
        </button>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
      </div>
    </>
  );
}
