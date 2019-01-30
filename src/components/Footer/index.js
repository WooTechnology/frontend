import React from "react";
import { Typography, Grid, SvgIcon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.backgroundColor,
    padding: theme.spacing.unit * 2
  },
  footerText: {
    fontSize: 12,
    color: theme.palette.common.blue,
    fontWeight: "bold"
  }
});
const Footer = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Typography
          variant="h6"
          align="center"
          className={classes.footerText}
          gutterBottom
        >
          wootech7@gmail.com
        </Typography>
        <Typography
          variant="h6"
          align="center"
          className={classes.footerText}
          gutterBottom
        >
          Singapore
        </Typography>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <SvgIcon>
                <path
                  fill="#000000"
                  d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"
                />{" "}
              </SvgIcon>
              <SvgIcon>
                <path
                  fill="#000000"
                  d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"
                />
              </SvgIcon>
              <SvgIcon>
                <path
                  fill="#000000"
                  d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z"
                />
              </SvgIcon>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </React.Fragment>
  );
};

export default withStyles(styles)(Footer);