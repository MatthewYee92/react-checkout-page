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

class Payment extends React.Component {

    render() {
    return (
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" icon color="orange" textAlign="center">
              <Icon name="credit card" color="orange" />
              Enter your payment info!
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  name="username"
                  icon="user"
                  iconPosition="left"
                  placeholder="Full Name"
                  onChange={this.handleChange}
                  type="text"
                />
  
                <Form.Input
                  fluid
                  name="email"
                  icon="credit card"
                  iconPosition="left"
                  placeholder="Credit Card #"
                  onChange={this.handleChange}
                  type="email"
                />
  
                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="EXP Date"
                  onChange={this.handleChange}
                  type="password"
                />
  
                <Form.Input
                  fluid
                  name="passwordConfirmation"
                  icon="repeat"
                  iconPosition="left"
                  placeholder="CVV"
                  onChange={this.handleChange}
                  type="password"
                />
  
              <Link to='/app' > <Button color="orange" fluid size="large">
                 Submit
                </Button> </Link> 
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      );
    }
}

export default Payment;