import React from "react";
import {
  Typography,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Paper
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit,
    margin: "auto"
  },

  paper: {
    height: 140,
    width: 100
  },
  aboutText: {
    fontSize: 14,
    flexWrap: "wrap"
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: theme.spacing.unit * 2
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  }
});
const About = props => {
  const { classes } = props;
  return (
    <Card className={classes.root} elevation={4}>
      <CardContent>
        <Typography
          variant="h6"
          component="h3"
          className={classes.headerText}
          gutterBottom
        >
          WooTech, standing for "Women Wooing Technology" hopes to provide a
          mentorship platform to women in technology and guide them in their
          career. The mentorship platform is open to everyone including
          students, working professionals or just anyone curious about
          technology.
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          marked="center"
          className={classes.headerText}
          align="center"
        >
          Woo-Tech aims to:
        </Typography>
        <Grid
          container
          className={classes.root}
          spacing={16}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Typography className={classes.aboutText} paragraph>
              Encourage and involve more women in technological fields.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography paragraph className={classes.aboutText}>
              Help students build careers by matching them with mentors in the
              professional fields.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography paragraph className={classes.aboutText}>
              Help professions/non-students seeking to move into technical
              career by matching them with students.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(About);
