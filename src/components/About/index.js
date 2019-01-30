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
import { typography } from "material-ui/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit,
    margin: "auto"
  },

  card: {
    minWidth: 200
  },
  paper: {
    height: 140,
    width: 100
  },
  aboutText: {
    fontSize: 14
  },
  headerText: {
    fontSize: 14
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  }
});
const About = props => {
  const { classes } = props;
  const bullet = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root} elevation={4}>
      <CardContent>
        <Typography
          variant="h6"
          component="h3"
          className={classes.headerText}
          gutterBottom
          align="center"
        >
          WooTech, standing for "Women Wooing Technology" hopes to provide a
          mentorship platform to women in technology and guide them in their
          career. The mentorship platform is open to everyone including
          students, working professionals or just anyone curious about
          technology.
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          className={classes.headerText}
          align="center"
        >
          Woo-Tech aims to:
        </Typography>
        <Typography variant="h6" className={classes.aboutText}>
          {bullet}Encourage and involve more women in technological fields.
          <br />
          {bullet}Helpstudents build careers by matching them with mentors in
          the professional fields.
          <br />
          {bullet}Help professions/non-students seeking to move into technical
          career by matching them with students
        </Typography>
      </CardContent>
    </Card>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(About);
