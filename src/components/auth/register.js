import React from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Register extends React.Component {

    render() {
    return (
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" icon color="orange" textAlign="center">
              <Icon name="handshake" color="orange" />
              It's time to register!
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  name="username"
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  onChange={this.handleChange}
                  type="text"
                />
  
                <Form.Input
                  fluid
                  name="email"
                  icon="mail"
                  iconPosition="left"
                  placeholder="Email Address"
                  onChange={this.handleChange}
                  type="email"
                />
  
                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  onChange={this.handleChange}
                  type="password"
                />
  
                <Form.Input
                  fluid
                  name="passwordConfirmation"
                  icon="repeat"
                  iconPosition="left"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                  type="password"
                />
  
              <Link to='/shipping' > <Button color="orange" fluid size="large">
                 Submit
                </Button> </Link> 
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      );
    }
}

export default Register;