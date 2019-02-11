import React, { Component } from 'react';
import {Grid, Typography} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  
});

class Signup extends Component {

    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            password: '',
        }
    }

  render() {
    return (
      <Grid container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <TextField
            hintText="Enter your Name"
            floatingLabelText="Full Name"
            onChange = {(event, newValue) => this.setState({name:newValue})}
            />
        <TextField
            hintText="Enter your Email"
            type="email"
            floatingLabelText="Email"
            onChange = {(event, newValue) => this.setState({email:newValue})}
            />
        <TextField
            type = "password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange = {(event, newValue) => this.setState({password:newValue})}
            />
        <RaisedButton label="Create Account" primary={true} onClick={(event) => this.handleClick(event)}/>
      </Grid>
    );
  }
}

export default withStyles(styles)(Signup);
