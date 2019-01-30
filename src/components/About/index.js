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
    marginTop: 0
  },

  card: {
    minWidth: 275
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
  const bullet = <span className={classes.bullet} />;

  return (
    <div>
      <Card className="classes.root" elevation={4}>
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
            variant="h6"
            component="h3"
            className={classes.headerText}
            allign
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
          <Paper className="classes.root" elevation={6}>
            <Grid container spacing={16}>
              <Grid item xs={8}>
                <Grid container justify={"center"} spacing={16} direction="row">
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography
                        className={classes.aboutText}
                        gutterBottom
                        variant="headline"
                        component="h6"
                      >
                        GENERAL MENTORSHIP
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        className={classes.aboutText}
                        component="h6"
                      >
                        STUDENT MENTEES TO PROFESSIONAL MENTORS
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        className={classes.aboutText}
                        component="h6"
                      >
                        PROFESSIONAL MENTEES TO STUDENT MENTORS
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </CardContent>
      </Card>
    </div>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(About);
