import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { ToolbarGroup } from "material-ui";
import styles from './style';

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
                WOOTECH
              </Link>
              <Link
                variant="h6"
                color="inherit"
                to="/faq"
                style={{ textDecoration: "none" }}
                className={classes.leftLink}
              >
                FAQ
              </Link>
              <Link
                variant="h6"
                color="inherit"
                to="/mentors"
                style={{ textDecoration: "none" }}
                className={classes.leftLink}
              >
                MENTORS
              </Link>
              <Link
                variant="h6"
                color="inherit"
                to="/contact"
                style={{ textDecoration: "none" }}
                className={classes.leftLink}
              >
                CONTACT
              </Link>
            </ToolbarGroup>
          </div>
          <div className={classes.right}>
            <Link to="/account/#login" color="inherit" style={{ textDecoration: "none" }}>
              <Button className={classes.rightLink} color="inherit">LOGIN</Button>
            </Link>
            <Link to="/account/#signup" color="inherit" style={{ textDecoration: "none" }}>
              <Button className={classes.rightLink} color="inherit">SIGN UP</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
