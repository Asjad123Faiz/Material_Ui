import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../image/avatar.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tan",
  },
  subTitle: {
    color: "green",
    marginBottom: "3rem",
  },
  typeContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    // width: "100vw",
    zIndex: 1,
    textAlign: "center",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typeContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Asjad" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Asjad faiz is working"]} typeSpeed={48} />
      </Typography>
      <br />
      <Typography className={classes.subTitle} variant="h5">
        <Typed
          strings={["Asjad faiz is working", "mohammed Azmat", "Asad reza"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};
export default Header;
