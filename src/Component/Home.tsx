import React from "react";
import {
  Input,
  InputLabel,
  MenuItem,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import { Label } from "@mui/icons-material";

export const useStyles = makeStyles({
  headerText: {
    textAlign: "center",
  },
  body: {
    marginLeft: "2rem",
    marginRight: "2rem",
    backgroundColor: "#009688",
    color: "white",
  },
  pointer: {
    cursor: "pointer",
  },
  card: {
    width: "60rem",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "4rem",
  },
  form: {
    color: "white",
  },
  input: {
    width: "25rem",
    marginBottom: "1rem",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent style={{ backgroundColor: "#b39ddb" }}>
        <h1 className={classes.headerText}>MCQ APP</h1>
        <form>
          <label>Name</label>
          <br />
          <Input
            type="text"
            required
            className={classes.input}
            placeholder="Please Enter Your Name"
            name="username"
          />
          <br />
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
            className={classes.input}
            required
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
          <br />
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="language"
            className={classes.input}
            required
          >
            <MenuItem value="english">English</MenuItem>
          </Select>
          <br />
          <Button type="submit" variant="contained" color="primary">
            Start
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Home;
