import React, { useState } from "react";
import {
  Input,
  InputLabel,
  MenuItem,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import data from "../db/data";

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
  const [lan, setLan] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    data.forEach((ques: any) => {
      if (ques.language === lan) {
        navigate("question/1");
      }
    });
  };

  return (
    <Card className={classes.card} onSubmit={submitHandler}>
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
            value={lan}
            className={classes.input}
            onChange={(e) => setLan(e.target.value)}
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
