import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Input } from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      errors: "",
    };
  }
  render() {
    return (
      <Container>
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2} size="lg">
              Email
            </Label>
            <Col sm={10}>
              <Input type="email" name="email" placeholder="lg" bsSize="lg" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail2" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input type="password" name="password" placeholder="password" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail2" sm={2}>
              Confirm password
            </Label>
            <Col sm={10}>
              <Input type="password" name="password" placeholder="password" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail2" sm={2}>
              Write pin number
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                placeholder="example 123456789"
              />
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default Signup;
