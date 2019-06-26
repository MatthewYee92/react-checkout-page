import React, { Component } from "react";
import {
  Grid,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
class App extends Component {
    render() {
        return (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" icon color="orange" textAlign="center">
                <Icon name="shopping cart" color="orange" />
                It's time to checkout!
              </Header>
              <Message>
                Not a user? <Link to="/register">Register</Link>
              </Message>
            </Grid.Column>
          </Grid>
        );
      }
    }

export default App;