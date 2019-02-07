import React, { Component } from 'react';
import Question from "./Question"
import Navbar from "../Navbar/index";
import {Typography} from "@material-ui/core";

  class Faq extends Component {
    render() {
      const questionText = "Will a beginner, with absolutely no knowledge of github, gain anything fruitful?";
      const answerText = "Yeah,definitely. The organization is meant to assist the beginners grow in the field of development. We’ll have distinct projects appropriate both for beginners as well as the accolades and thereby we’ll make sure that each and every participant gets to learn something new from the projects he or she is contributing for.";
  
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Navbar />
          <div style={{ marginTop: 100 }}>
            <Typography variant="h3" style={{ marginLeft: 350 , marginBottom: 70 }} gutterBottom>Frequently Asked Questions</Typography>
            <Question questionText={questionText} answerText={answerText} />
            <Question questionText={questionText} answerText={answerText} />
            <Question questionText={questionText} answerText={answerText} />
            <Question questionText={questionText} answerText={answerText} />
            <Question questionText={questionText} answerText={answerText} />
          </div>
        </div>
      );
    }
  }
  export default Faq;              