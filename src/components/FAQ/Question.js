import React, { Component } from 'react';
import {Grid, Typography} from "@material-ui/core";
import { Paper } from 'material-ui';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  aboutText: {
    fontSize: 14,
    flexWrap: "wrap"
  }
});

class Question extends Component {
  render() {
    return (
      <Grid container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} wrap>
          <Paper style={{ width: 960, padding: 20 }}>
            <Typography variant="headline" paragraph className={styles.aboutText}>{this.props.questionText}</Typography>
            <Typography variant="body1" paragraph className={styles.aboutText}>{this.props.answerText}</Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Question);
