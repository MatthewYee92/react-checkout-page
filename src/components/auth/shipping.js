import React from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Icon
} from "semantic-ui-react";
import { Link } from 'react-router-dom'

class Shipping extends React.Component {

    render() {
    return (
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="envelope open" color="orange" />
              Shipping!
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  name="address"
                  icon="address book"
                  iconPosition="left"
                  placeholder="Address"
                  onChange={this.handleChange}
                  type="text"
                />
  
                <Form.Input
                  fluid
                  name="email"
                  icon="map"
                  iconPosition="left"
                  placeholder="State"
                  onChange={this.handleChange}
                  type="email"
                />
  
                <Form.Input
                  fluid
                  name="password"
                  icon="map"
                  iconPosition="left"
                  placeholder="Zip Code"
                  onChange={this.handleChange}
                  type="password"
                />
  
                <Form.Input
                  fluid
                  name="passwordConfirmation"
                  icon="phone square"
                  iconPosition="left"
                  placeholder="Phone number"
                  onChange={this.handleChange}
                  type="password"
                />
  
               <Link to='/payment'> <Button color="orange" fluid size="large">
                 Submit
                </Button> </Link>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      );
    }
}

export default Shipping;