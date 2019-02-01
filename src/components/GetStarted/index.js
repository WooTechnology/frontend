import React from "react";
import { Link } from "react-router-dom";
import { Card } from "material-ui";
import { withStyles } from "@material-ui/core/styles";
import { Button, CardActionArea, CardActions } from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",

    justifyContent: "center"
  },
  button: {
    marginTop: theme.spacing.unit * 8
  }
});
const GetStarted = props => {
  const { classes } = props;

  return (
    <div>
      <Card>
        <CardActions className={classes.root}>
          <Button
            color="secondary"
            size="large"
            variant="contained"
            classes={classes.button}
            component={linkProps => (
              <Link {...linkProps} to="/account/#signup" variant="button" />
            )}
          >
            Get Started
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(GetStarted);
