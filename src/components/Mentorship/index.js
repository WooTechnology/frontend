import React from "react";
import {
  Typography,
  Card,
  Grid,
  CardContent,
  CardHeader,
  CardMedia
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2
  },
  card: {
    minWidth: 200,
    raised: true,
    height: 550,
    width: 350,
    margin: 20,
    display: "block"
  },
  cardText: {
    height: 20
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  }
});

const Mentorship = props => {
  const { classes } = props;
  return (
    <Card
      className="classes.root"
      justify-xs-center="center"
    >
      <CardHeader
        title="MENTORSHIP PROGRAM"
        align="center"
      />
      <Grid container spacing={16} wrap>
        <Grid item xs={12} wrap>
          <Grid container justify="center" spacing={16} direction="row">
            <Card shadow={0} className={classes.card}>
              <CardHeader
                expand
                gutterBottom
                variant="headline"
                title="GENERAL MENTORSHIP"
                component="h1"
                align="center"
                className={classes.cardText}
              />
              <CardMedia
                className={classes.media}
                image="../images/general_mentorship-laptop.jpg"
                title="xyz"
              />

              <CardContent>
                <Typography gutterBottom paragraph wrap>
                  Depending on the availability of mentors and interest of
                  mentees in field, we also do peer-to-peer and
                  professional-to-professional mentor-mentee matches in line
                  with a standard mentorship program.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card} gutterBottom>
              <CardHeader
                title="STUDENT MENTEES TO PROFESSIONAL MENTORS"
                gutterBottom
                variant="headline"
                className={classes.cardText}
                component="h1"
                align="center"
              />
              <CardMedia
                className={classes.media}
                image="../images/profession_to_student-laptop.jpg"
                title="xyz"
              />
              <CardContent>
                <Typography paragraph>
                  Experience and exposure to the technical industry is very
                  different from what happens in a university. Through the
                  student-senior mentorship we aim to connect freshmen/junior
                  level students with seniors or working professionals to help
                  them clarify their perspective. Seniors - Don’t you ever wish
                  there were things you knew, or things you could have done
                  better if you were to go back in time?
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card} gutterBottom>
              <CardHeader
                title="PROFESSIONAL MENTEES TO STUDENT MENTORS"
                gutterBottom
                variant="headline"
                className={classes.cardText}
                component="h1"
                align="center"
              />
              <CardMedia
                className={classes.media}
                image="images/student_to_professional-laptop.jpg"
                title="xyz"
              />
              <CardContent>
                <Typography paragraph>
                  There are many professionals who have no background in coding
                  but would like to get started. However, it is not as easy for
                  them as it is for students! They don’t know what online
                  courses are good, what are bad? What are the current trends?
                  But CS students have access and knowledge about many of these
                  resources and more. Through this unique reverse mentorship we
                  aim to provide professionals a fresh view of the industry
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

Mentorship.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Mentorship);
