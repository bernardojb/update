// React Basic and Bootstrap
import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Label,
  Card,
  CardBody,
} from "reactstrap";
//Form
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import authService from "../../../services/auth.service";
//Import Icons
import FeatherIcon from "feather-icons-react";
// import images
import user03 from "../../../assets/images/user/03.jpg";

class PageCoverRePassword extends Component {

  constructor(props) {
    super(props);

    this.handleForgotPasswordRedefine = this.handleForgotPasswordRedefine.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this)

    this.state = {
      signature: props.location.search.replace(/\?signature=(.*)/gi, '$1').replace(/&.*/gi, ''),
      email: props.location.pathname.replace('/redefinir-senha/', ''),
      password: "",
      confirmPassword: "",
      message: ""
    }

    console.log(this.state)
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    });
  }

  handleForgotPasswordRedefine(e) {
    e.preventDefault();

    this.setState({
      message: "",
    });

    this.form.validateAll();

    authService.forgotPasswordRedefine(
      this.state.email,
      this.state.signature,
      this.state.password,
      this.state.confirmPassword,
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
          <Link to="/" className="btn btn-icon btn-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>

        <section className="cover-user bg-home bg-white">
          <Container fluid className="px-0">
            <Row className="g-0 position-relative">
              <Col lg={4} xs={{ order: 2 }} className="cover-my-30">
                <div className="cover-user-img d-flex align-items-center">
                  <Row>
                    <Col xs={12}>
                      <Card
                        className="border-0"
                        style={{ zIndex: 1 }}
                      >
                        <CardBody className="p-0">
                          <h1 className="card-title text-center">
                            Recuperação de senha
                          </h1>
                          <Form
                            className="login-form mt-4"
                            onSubmit={this.handleForgotPasswordRedefine}
                            ref={c => {
                              this.form = c
                            }}
                          >
                            <Row>
                              <Col lg="12">
                                <p className="etapa" style={{ fontSize: "14px" }}>
                                  Por favor insira as informações abaixo para concluir o processo de redefinição de senha.
                                </p>
                              </Col>
                              <Col lg="12">
                                <div className="mb-3">
                                  <Label className="form-label" for="password">
                                    Senha{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="password"
                                    className="form-control ps-3"
                                    name="password"
                                    id="password"
                                    placeholder="Senha"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                  />
                                </div>
                              </Col>
                              <Col lg="12">
                                <div className="mb-3">
                                  <Label className="form-label" for="confirmPassword">
                                    Confirmação de senha{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="password"
                                    className="form-control ps-3"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Senha"
                                    value={this.state.confirmPassword}
                                    onChange={this.onChangeConfirmPassword}
                                  />
                                </div>
                              </Col>
                              <Col lg="12">
                                <div className="d-grid">
                                  <Button color="primary">
                                    Enviar
                                  </Button>
                                </div>
                              </Col>
                              <div className="mx-auto">
                                <p className="mb-0 mt-3">
                                  <small className="text-dark me-2">
                                    Já recuperou a sua senha?
                                  </small>{" "}
                                  <Link
                                    to="/login"
                                    className="text-dark fw-bold text-primary"
                                  >
                                    Login
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
                </div>
              </Col>
              <Col
                lg={{ size: 8, offset: 4 }}
                xs={{ order: 1 }}
                className="padding-less img"
                style={{ backgroundImage: `url(${user03})` }}
              ></Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageCoverRePassword;
