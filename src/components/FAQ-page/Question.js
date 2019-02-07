import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './faq-style.css';
import {Grid, Typography} from "@material-ui/core";

// class Question extends Component {
//     render() {
//       return (
//         <div >
//              <h2 >Will a beginner, with absolutely no knowledge of github, gain anything fruitful? &nbsp;&nbsp;
//                  &nbsp;&nbsp;
//                 <Fab size="small" color="secondary" aria-label="Add" onClick="myFunction()">
//                 <AddIcon />
//                 </Fab>
//                 <br />
//                  <h6 id="myDIV">Yeah,definitely. The organization is meant to assist the beginners grow in the field of development. We’ll have distinct projects appropriate both for beginners as well as the accolades and thereby we’ll make sure that each and every participant gets to learn something new from the projects he or she is contributing for.
//                  </h6>
//                 <hr />
//              </h2>
//         </div>
//       );
//     }
//   }

class Question extends Component {
  render() {
    return (
      <Grid container className={styles.root} spacing={16} wrap>
        <Grid item xs={12} wrap>
          <Typography paragraph className={styles.aboutText}>{this.props.questionText}</Typography>
          <Typography paragraph className={styles.aboutText}>{this.props.answerText}</Typography>
          <hr />
        </Grid>
      </Grid>
    );
  }
}

  export default Question;  