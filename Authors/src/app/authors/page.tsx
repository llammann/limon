"use client";
import Cards from "../components/Card";
import Navbar from "../components/Navbar";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export default function Authors() {
  const [gender, setGender] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  return (
    <>
      <Navbar />
      <div className="inp" style={{ display: "flex" }}>
        <Box
          component="form"
          sx={{ minWidth: 220, margin: "20px" }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Search Authors"
            variant="outlined"
          />
        </Box>

        <FormControl sx={{ minWidth: 220, margin: "20px" }}>
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
      </div>
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="imgwrapper"
            style={{ width: "300px", margin: "10px" }}
          >
            <div
              className="container"
              style={{
                width: "300px",
                border: "1px solid black",
                margin: "10px",
              }}
            >
              <div className="img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSpj56ZHu--rSzpHSGEUbJUCshy14wtFw3Tn-UcpsKCcx1w4cboDRAWB2diZb3fVJTTDYObrpzqi5qWe8Y"
                  alt=""
                  style={{ width: "300px" }}
                />
              </div>

              <div className="text" style={{ margin: "10px" }}>
                <h1 style={{ marginBottom: "10px" }}>Joanne Rowling</h1>
                <div
                  className="textt"
                  style={{
                    gap: "30px",
                    marginLeft: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <p
                    style={{
                      gap: "30px",
                      paddingBottom: "10px",
                    }}
                  >
                    59 years old
                  </p>
                  <p
                    style={{
                      gap: "30px",
                      paddingBottom: "10px",
                    }}
                  >
                    Genre: Fantasy
                  </p>
                  <p
                    style={{
                      gap: "30px",
                      paddingBottom: "10px",
                    }}
                  >
                    Gender: Female
                  </p>
                </div>
              </div>
              <button
                style={{
                  width: "190px",
                  height: "50px",
                  borderRadius: "7px",
                  backgroundColor: "#7D0A0A",
                  color: "white",
                  margin: "0 50px 20px 50px",
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
