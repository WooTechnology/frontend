import React, { Component } from 'react';
import Header from "./Header"
import Question from "./Question"
import './faq-style.css';

class Faq extends Component {
   
    render() {
      return (
        <div >
             <Header />
             <h1>Frequently Asked Questions</h1>
             <br />
             <Question />
             <br />
             <Question />
             <br />
             <Question />
             <br />
             <Question />
             <br />
             <Question />
        </div>
      );
    }
  }
  
  export default Faq;              
  
 


          
        
