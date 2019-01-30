import React from "react";
import { Typography, Card, Grid, CardContent, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    padding: theme.spacing.unit * 2
  },
  card: {
    minWidth: 200,
    raised: true,
    height: 140,
    width: 100,
    margin: 20
  },
  cardText: {
    fontSize: 12,
    fontWeight: "bold"
  }
});

const Mentorship = props => {
  const { classes } = props;
  return (
    <Paper
      className="classes.root"
      justify-xs-center="center"
      elevation={4}
      gutterBottom
    >
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={16} direction="row">
            <Card className={classes.card} gutterBottom>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  component="h1"
                  className={classes.cardText}
                >
                  GENERAL MENTORSHIP
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card} gutterBottom>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  className={classes.cardText}
                  component="h1"
                >
                  STUDENT MENTEES TO PROFESSIONAL MENTORS
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card} gutterBottom>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  className={classes.cardText}
                  component="h1"
                >
                  PROFESSIONAL MENTEES TO STUDENT MENTORS
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

Mentorship.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Mentorship);
