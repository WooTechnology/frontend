import React from "react";
import { Grid, SvgIcon, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <AppBar position="relative" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <IconButton color="inherit" target="_blank" href="https://www.facebook.com/wootechnology/">
                <SvgIcon>
                  <path fill="#fff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                </SvgIcon>
              </IconButton>
              <IconButton color="inherit" target="_blank" href="https://www.twitter.com/WooTechology">
                <SvgIcon>
                  <path fill="#fff" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                </SvgIcon>
              </IconButton>
              <IconButton color="inherit"  target="_blank" href="https://www.medium.com/@wootech7">
                <SvgIcon>
                  <path fill="#fff" d="M4.37,7.3C4.4,7.05 4.3,6.81 4.12,6.65L2.25,4.4V4.06H8.05L12.53,13.89L16.47,4.06H22V4.4L20.4,5.93C20.27,6.03 20.2,6.21 20.23,6.38V17.62C20.2,17.79 20.27,17.97 20.4,18.07L21.96,19.6V19.94H14.12V19.6L15.73,18.03C15.89,17.88 15.89,17.83 15.89,17.59V8.5L11.4,19.9H10.8L5.57,8.5V16.14C5.5,16.46 5.63,16.78 5.86,17L7.96,19.57V19.9H2V19.57L4.1,17C4.33,16.78 4.43,16.46 4.37,16.14V7.3Z" />
                </SvgIcon>
              </IconButton>
              <IconButton color="inherit"  target="_blank" href="https://join.slack.com/t/wootech/signup">
                <SvgIcon>
                <path fill="#fff" d="M6,15A2,2 0 0,1 4,17A2,2 0 0,1 2,15A2,2 0 0,1 4,13H6V15M7,15A2,2 0 0,1 9,13A2,2 0 0,1 11,15V20A2,2 0 0,1 9,22A2,2 0 0,1 7,20V15M9,7A2,2 0 0,1 7,5A2,2 0 0,1 9,3A2,2 0 0,1 11,5V7H9M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12H4A2,2 0 0,1 2,10A2,2 0 0,1 4,8H9M17,10A2,2 0 0,1 19,8A2,2 0 0,1 21,10A2,2 0 0,1 19,12H17V10M16,10A2,2 0 0,1 14,12A2,2 0 0,1 12,10V5A2,2 0 0,1 14,3A2,2 0 0,1 16,5V10M14,18A2,2 0 0,1 16,20A2,2 0 0,1 14,22A2,2 0 0,1 12,20V18H14M14,17A2,2 0 0,1 12,15A2,2 0 0,1 14,13H19A2,2 0 0,1 21,15A2,2 0 0,1 19,17H14Z" />
                </SvgIcon>
              </IconButton>
              <IconButton color="inherit"  target="_blank" href="mailto:wootech7@gmail.com">
                <SvgIcon>
                  <path fill="#fff" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                </SvgIcon>
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Typography paragraph color="inherit">
                Made with ❤️ by WooTech Team
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withStyles(styles)(Footer);
