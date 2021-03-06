import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import HelpIcon from "@material-ui/icons/Help";
import Fab from "@material-ui/core/Fab";

import { useStyles } from "./styles.js";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Help = ({ msg = null }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Fab
        color="default"
        aria-label="add"
        className={classes.helpButton}
        onClick={handleClick}
      >
        <HelpIcon />
      </Fab>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          {msg ? msg : "Press anywhere in the map to add a new car"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export { Help };
