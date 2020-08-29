import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box, TextField, Typography, Button, Grid } from "@material-ui/core";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "& .Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contactes = () => {
  return (
    <Box component="div">
      <Grid container justify="center">
        <Box component="from">
          <Typography variant="h5">hire or contact me....</Typography>
          <InputField fullWidth={true} label="name" variant="outlined" />
        </Box>
      </Grid>
    </Box>
  );
};

export default Contactes;
