import React, { useState, useCallback, useEffect } from "react";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import questions from "./Questions";
import Input from "./Input";
import { jssPreset, Slide } from "@material-ui/core";
import { Paper } from "@mui/material";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRight";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Submit from "../../utilities/submit";
// Import auth from firebase-config (DO NOT call getAuth() here)
import { auth } from "../../firebase-config";
import Loader from "../loader/loader";

function Form() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const routeChange = () => {
    let path = `/success`;
    navigate(path);
  };

  // Use the imported auth instance
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
      setLoading(false);
    });

    if (loading) {
      return <Loader />;
    }
    // Cleanup subscription
    return () => unsubscribe();
  }, [auth, navigate]);
  const [index, setIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("down");
  let error = false;
  const onSubmit = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 60,
    });
  }, []);
  const boolcheck = () => {
    if (
      data[0][0].length !== 0 &&
      data[0][2].length !== 0 &&
      data[0][2].length !== 0 &&
      (data[3][0] === true ||
        data[3][1] === true ||
        data[3][2] === true ||
        data[3][3] === true ||
        data[3][4] === true) &&
      data[1] !== "" &&
      data[4].replace(" ", "") !== "" &&
      data[5].replace(" ", "") !== "" &&
      data[6].replace(" ", "") !== "" &&
      data[7].replace(" ", "") !== "" &&
      data[8].replace(" ", "") !== "" &&
      data[9].replace(" ", "") !== "" &&
      data[10].replace(" ", "") !== "" &&
      data[11].replace(" ", "") !== ""
    )
      error = true;
  };
  const errror_messsage = () => {
    if (!error)
      alert(
        "please fill the form completely which is mandatory for submitting the form !"
      );
    error = true;
  };
  const onArrowClick = (direction, error) => {
    const oppDirection = direction === "left" ? "right" : "left";
    const incr = direction === "left" ? -1 : 1;
    setSlideDirection(direction);
    setSlideIn(false);
    setTimeout(() => {
      setSlideDirection(oppDirection);
      setSlideIn(true);
      setIndex(index + incr);
    }, 400);
  };

  const submit = () => {
    localStorage.setItem("Submitted", 1);

    let interests = [];
    data[3].forEach((ele, i) => {
      if (ele) {
        if (i === 0) {
          interests.push("Graphic Design");
        }
        if (i === 1) {
          interests.push("Event Management");
        }
        if (i === 2) {
          interests.push("Web Dev");
        }
        if (i === 3) {
          interests.push("Robotics");
        }
        if (i === 4) {
          interests.push("Data Science");
        }
        if (i === 5) {
          interests.push("Video Editing");
        }
        if (i === 6) {
          interests.push("Speaker/Presenter");
        }
        if (i === 7) {
          interests.push("Content Writing");
        }
      } else {
      }
      data[12] = new Date();
    });

    const n_data = {
      Name: data[0][0],
      Dept: data[1],
      Year: data[0][1],
      Wp_number: data[0][2],
      Rating: {
        "Time Management": data[2][0],
        Confidence: data[2][1],
        Ego: data[2][2],
        Hardwork: data[2][3],
        Creativity: data[2][4],
        Teamwork: data[2][5],
        Leadership: data[2][6],
        Intelligence: data[2][7],
      },
      Interested: interests,
      Q1: data[4],
      // Q2: data[5],
      // Q3: data[6],
      Q2: data[5],
      Q3: data[6],
      Q4: data[7],
      Q5: data[8],
      // Q8: data[11],
      Q6: data[9],
      Q7: data[10],
      Q8: data[11],
      Date: data[12],
    };
    console.log(n_data);
    Submit(n_data);
  };
  // {console.log(typeof(data[5]))}
  const [data, setData] = useState([
    ["", "", ""],
    "",
    [5, 5, 5, 5, 5, 5, 5, 5],
    [false, false, false, false, false],
    "",
    // "",
    // "",
    // "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  return (
    <div id="form-page">
      <Paper elevation={3} className="form">
        <Box sx={{ width: "90%", padding: "20px 0 0 0" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress variant="determinate" value={(index * 100) / 11} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.light">{`${Math.round(
                (index * 100) / 11
              )}%`}</Typography>
            </Box>
          </Box>
        </Box>

        <Slide in={slideIn} direction={slideDirection}>
          <div className="form-content-scrollable">
            <div className="input-container-wrapper input-container">
              <Input
                object={questions[index]}
                data={data}
                setData={setData}
                index={index}
              />
            </div>
          </div>
        </Slide> <div className="arrows">
          {index > 0 && (
            <ArrowCircleLeftTwoToneIcon
              fontSize="large"
              onClick={() => {
                onArrowClick("left");
              }}
            />
          )}

          {boolcheck()}
          {index < 11 && (
            <ArrowCircleRightTwoToneIcon
              fontSize="large"
              onClick={
                () => {
                  onArrowClick("right");
                }
                //  else alert("please complete it to procced")
              }
            />
          )}

          {index === 11 && error && (
            <button
              className="button"
              onClick={() => {
                onSubmit();
                submit();
                setTimeout(() => routeChange(), 300);
              }}
            >
              <span>Submit</span>
            </button>
          )}
          {index === 11 && !error && (
            <button className="button">
              <span>
                Please complete the form and answer every question to activate
                this submit button
              </span>
            </button>
          )}
          {/* {index==11&&errror_messsage()
			} */}
        </div>
      </Paper>
    </div>
  );
}

export default Form;
