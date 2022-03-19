import React from "react";
import { Box, Input, InputLabel, MenuItem, Button, Card } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Home = () => {
  return (
    <Card>
      <form>
        <Input
          type="text"
          required
          className="form-control"
          placeholder="Name"
          name="username"
        />
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Gender"
          required
        >
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          <MenuItem value={30}>Other</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="language"
          required
        >
          <MenuItem value="english">English</MenuItem>
        </Select>
        <br />
        <Button type="submit" variant="contained" color="primary">
          Start MCQ
        </Button>
      </form>
    </Card>
  );
};

export default Home;
