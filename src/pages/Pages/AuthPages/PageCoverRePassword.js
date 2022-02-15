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
//Form
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import authService from "../../../services/auth.service";
//Import Icons
import FeatherIcon from "feather-icons-react";
// import images
import user03 from "../../../assets/images/user/03.jpg";

//teste
class PageCoverRePassword extends Component {

  constructor(props) {
    super(props);

    this.handleForgotPassword = this.handleForgotPassword.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)

    this.state = {
      email: "",
      passo1: true,
      passo2: false,
      message: ""
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
          passo1: false,
          passo2: true,
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

                  {this.state.passo1 ? (<Row>
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
                            onSubmit={this.handleForgotPassword}
                            ref={c => {
                              this.form = c
                            }}
                          >
                            <Row>
                              <Col lg="12">
                                <p className="etapa" style={{ fontSize: "14px" }}>
                                  Por favor insira seu email em que sua conta Update foi criada. Você receberá um link para criar uma nova senha.
                                </p>
                                <div className="mb-3">
                                  <Label className="form-label" for="email">
                                    Seu email{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control ps-3"
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
                  </Row>) : null}
                  {this.state.passo2 ? (
                    <Row>
                      <Col xs={12}>
                        <Card
                          className="border-0"
                          style={{ zIndex: 1 }}
                        >
                          <CardBody className="p-0">
                            <h1 className="card-title text-center mb-3">
                              Email enviado!
                            </h1>
                            <p className="etapa mb-5" style={{ fontSize: "14px" }}>
                              Acesse o link que enviamos em seu email para redefinir a sua senha. Certifique-se de conferir a caixa de SPAM.                            </p>
                            <a className="btn btn-primary w-100" onClick={()=>{
                              this.setState({
                                passo1: true,
                                passo2: false
                              })
                            }}>Não recebi o email</a>
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
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>) : null}
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
