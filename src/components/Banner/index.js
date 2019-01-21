import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  bannerContainer: {
    width: "100%"
  },
  banner: {
      height: "80%",
      width: "100%"
  },
  bannerText: {
      marginTop: -500,
      color: 'white',
      fontWeight: 'bold'
  },
  helperText: {
    color: 'white'
  }
});

function Banner(props) {
  const { classes } = props;

  return (
    <Grid container>
      <Grid item className={classes.bannerContainer} elevation={1}>
        <img src="banner.jpg" alt="Banner" className={classes.banner} />
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Typography className={classes.bannerText} variant="h2" gutterBottom>WooTech</Typography>
            <Typography className={classes.helperText} variant="h4" gutterBottom>Women Wooing Technology</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);
