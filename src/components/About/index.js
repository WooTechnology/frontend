import React from "react";
import {
  Typography,
  Card,
  Grid,
  CardHeader,
  CardContent
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit,
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
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
  image: {
    height: 80,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4
    //   alignItems:'center'
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

const About = props => {
  const { classes } = props;
  return (
    <Card
      className="classes.root"
      justify-xs-center="center"
      gutterBottom
      style={{ paddingTop: 40 }}
    >
      <CardHeader
        title="ABOUT"
        align="center"
        // style={{ paddingTop: 20 }}
      />
      <CardContent>
        <Grid container className={classes.root} justify="center" gutterBottom>
          <Grid item xs={10}>
            <Typography>
              WooTech, standing for "Women Wooing Technology" hopes to provide a
              mentorship platform to women in technology and guide them in their
              career. The mentorship platform is open to everyone including
              students, working professionals or just anyone curious about
              technology.
            </Typography>
          </Grid>
        </Grid>

        <CardHeader
          title="WOOTECH VISION"
          align="center"
          style={{ paddingTop: 40 }}
        />
        <Grid
          container
          className={classes.root}
          spacing={16}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <img
              src="../images/encourage_women.png"
              alt="encourage_women"
              className={classes.image}
            />
            <Typography paragraph className={classes.aboutText}>
              Encourage and involve more women in technological fields.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <img
              src="../images/mentoring_students.png"
              alt="mentoring_students"
              className={classes.image}
            />
            <Typography paragraph className={classes.aboutText}>
              Help students build careers by matching them with mentors in the
              professional fields.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <img
              src="../images/mentoring_professions.png"
              alt="mentoring_professions"
              className={classes.image}
            />
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
