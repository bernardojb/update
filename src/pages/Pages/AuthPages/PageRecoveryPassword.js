// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Label,
  Card,
  CardBody,
} from "reactstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import recoveryimg from "../../../assets/images/user/recovery.svg";

import authService from "../../../services/auth.service";

class PageRecoveryPassword extends Component {

  constructor(props){
    super(props);

    this.handleForgotPassword = this.handleForgotPassword.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)

    this.state = {
      email: "",
      message:""
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleForgotPassword(e) {
    e.preventDefault();

    this.setState({
      message: "",
    });

    this.form.validateAll();

    authService.forgotPassword(
      this.state.email,
    ).then(
      response => {
        this.setState({
          message: response.data.message,
        });
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          message: resMessage,
        });
      }
    );

  }

  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/" className="btn btn-icon btn-soft-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>
        <section className="bg-home d-flex align-items-center">
          <Container>
            <Row className="align-items-center">
              <Col lg="7" md="6">
                <div className="me-lg-5">
                  <img
                    src={recoveryimg}
                    className="img-fluid d-block mx-auto"
                    alt=""
                  />
                </div>
              </Col>
              <Col lg="5" md="6">
                <Card className="shadow rounded border-0">
                  <CardBody>
                    <h4 className="card-title text-center">RECUPERAÇÃO DE SENHA</h4>
                    <Form 
                    className="login-form mt-4"
                    onSubmit={this.handleForgotPassword}
                    ref={c => {
                      this.form = c
                    }}
                    >
                      <Row>
                        <Col lg="12">
                          <p className="text-muted">
                            Por favor insira seu email em que sua conta Update foi criada. Você receberá um link para criar uma nova senha.
                          </p>
                          <div className="mb-3">
                            <Label className="form-label" for="email">
                              Email address{" "}
                              <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              type="text"
                              className="form-control ps-5"
                              name="email"
                              id="email"
                              placeholder="Email"
                              value={this.state.email}
                              onChange={this.onChangeEmail}
                            />
                          </div>
                        </Col>
                        <Col lg="12">
                          <div className="d-grid">
                            <Button color="primary">
                              Send
                            </Button>
                          </div>
                        </Col>
                        <div className="mx-auto">
                          <p className="mb-0 mt-3">
                            <small className="text-dark me-2">
                              Remember your password ?
                            </small>{" "}
                            <Link
                              to="auth-login"
                              className="text-dark fw-bold"
                            >
                              Sign in
                            </Link>
                          </p>
                        </div>
                      </Row>
                      {this.state.message && (
                         <div className="form-group">
                         <div
                           className={
                             this.state.successful
                               ? "alert alert-success mt-2"
                               : "alert alert-danger mt-2"
                           }
                           role="alert"
                         >
                           {this.state.message}
                         </div>
                       </div>
                      )}
                      <CheckButton
                              style={{ display: "none" }}
                              ref={c => {
                                this.checkBtn = c;
                              }}
                            />
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageRecoveryPassword;
