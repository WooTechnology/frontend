import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Grid, Typography} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import axios from 'axios';
import Navbar from '../../Navbar';
import Login from '../login'
import Signup from '../signup';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit,
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
});

function TabContainer(props) {
    return (
      <Typography style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class Account extends Component {

  constructor(props){
    super(props);

    this.state={
        value: 0
    }
  }

  handleTabs = () => {
    if(this.props.match.params.type === 'login' && this.state.value === 0) {
      this.setState({ value: 1 });
    }
    if(this.props.match.params.type === 'signup' && this.state.value === 1) {
      this.setState({ value: 0 });
    }
  }

  componentDidMount() {
    this.handleTabs();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const classes = this.props.classes;
    const { value } = this.state;

    return (
        <div>
            <Grid container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Navbar style={{marginBottom: 100}} />
                <Paper className={classes.root} style={{marginTop: 100}}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        centered={true}
                        variant="standard"
                        indicatorColor="primary"
                        textColor="primary"
                        >
                        <Tab icon={<PersonAddIcon />} label="SIGN UP" />
                        <Tab icon={<PersonIcon />} label="LOGIN" />
                    </Tabs>
                </Paper>
                {value === 0 && <TabContainer><Signup/></TabContainer>}
                {value === 1 && <TabContainer><Login/></TabContainer>}
            </Grid>
        </div>
    );
  }
}

export default withStyles(styles)(Account);
