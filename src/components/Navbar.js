import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { ToolbarGroup } from "material-ui";

const styles = theme => ({
  title: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginRight: theme.spacing.unit * 3
  },
  left: {
    flex: 1,
    display: "flex"
  },
  leftLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginRight: theme.spacing.unit * 3
  },
  toolbar: {
    justifyContent: "space-between"
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit * 3
  }
});
const Navbar = props => {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            <ToolbarGroup>
              <Link
                variant="h6"
                color="inherit"
                to="/"
                style={{ textDecoration: "none" }}
                className={classNames(classes.title)}
              >
                {"WOOTECH"}
              </Link>
              <Link
                variant="h6"
                color="inherit"
                to="/faq"
                style={{ textDecoration: "none" }}
                className={classes.leftLink}
              >
                {"FAQ"}
              </Link>
              <Link
                variant="h6"
                color="inherit"
                to="/mentors"
                style={{ textDecoration: "none" }}
                className={classes.leftLink}
              >
                {"MENTORS"}
              </Link>
            </ToolbarGroup>
          </div>
          <div className={classes.right}>
            <Button className={classes.rightLink} color="inherit">
              SIGN IN
            </Button>
            <Button color="inherit">SIGN UP</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
