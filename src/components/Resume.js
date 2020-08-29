import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainConainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    background: "#233",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },

    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "#fff",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
}));

function Resume() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainConainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          working exprience
        </Typography>
      </Box>
      <Box className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2015
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            web design
          </Typography>
          <Typography
            variant="body2"
            align="center"
            style={{ color: "tomato" }}
          >
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ color: "tan" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisi9cing elit.
            Similiquead,eaque fuga incidunt blanditiis consectetur soluta.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            HTML & CSS
          </Typography>
          <Typography
            variant="body2"
            align="center"
            style={{ color: "tomato" }}
          >
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ color: "tan" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisi9cing elit.
            Similiquead,eaque fuga incidunt blanditiis consectetur soluta.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Javascript
          </Typography>
          <Typography
            variant="body2"
            align="center"
            style={{ color: "tomato" }}
          >
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ color: "tan" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisi9cing elit.
            Similiquead,eaque fuga incidunt blanditiis consectetur soluta.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            React-Redux
          </Typography>
          <Typography
            variant="body2"
            align="center"
            style={{ color: "tomato" }}
          >
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ color: "tan" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisi9cing elit.
            Similiquead,eaque fuga incidunt blanditiis consectetur soluta.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            mern stark
          </Typography>
          <Typography
            variant="body2"
            align="center"
            style={{ color: "tomato" }}
          >
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ color: "tan" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisi9cing elit.
            Similiquead,eaque fuga incidunt blanditiis consectetur soluta.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020-5month
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            company working
          </Typography>
          <Typography
            variant="body2"
            align="center"
            style={{ color: "tomato" }}
          >
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ color: "tan" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisi9cing elit.
            Similiquead,eaque fuga incidunt blanditiis consectetur soluta.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Resume;
