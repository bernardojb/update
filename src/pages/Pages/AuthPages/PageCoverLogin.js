// React Basic and Bootstrap
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Label,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Helmet } from "react-helmet";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import user01 from "../../../assets/images/user/01.jpg";

//New Imports
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../../services/auth.service";
import authService from "../../../services/auth.service";
import { isEmail } from "validator";


const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Esse campo é obrigatório!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Este não é um email válido!
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Sua senha precisa ter pelo menos 6 caracteres.
      </div>
    );
  }
};

const vconfirmpassword = value => {
  if (value != this.state.password.value) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Sua senhas não coincidem
      </div>
    );
  }
};

class PageCoverLogin extends Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      login: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      login: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.login, this.state.password).then(
        (user) => {
          // const hasProfile = user.data.has_profile
          const hasCard = user.data.has_card
          const hasSubs = user.data.has_subs
          
          if (hasCard && hasSubs) {
            console.log("REDIRECT TO PROFILE (Login)")
            this.props.history.push("/perfil");
            window.location.reload();
          } else {
            console.log("REDIRECT TO REGISTRO (Login)")
            this.props.history.push("/registro");
            window.location.reload();
          }
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          // this.props.history.push("/registro");
          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentDidMount() {
    // authService.isLogged()
    //   .then((logged) => {
    //     console.log("LOGGED >>>>>>>>", logged)
    //     if (logged) {
    //       const { hasProfile } = authService.getCurrentUser().data.has_profile
    //       console.log("has profile login", hasProfile)

    //       if (hasProfile) {
    //         this.props.history.push("/page-profile");
    //         window.location.reload();
    //       } else {
    //         console.log("HAS NO PROFILE >>>>>>>>>>>> REDIRECT REGISTRO")
    //         this.props.history.push("/registro");
    //         window.location.reload();
    //       }
    //     }
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login | Update Anestesiologia</title>
          <link rel="canonical" href="https://www.grupoupdate.com.br/login" />
        </Helmet>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/" className="btn btn-icon btn-soft-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>

        <section className="cover-user bg-white">
          <Container fluid className="px-0">
            <Row className="g-0 position-relative">
              <Col lg={4} xs={{ order: 2 }} className="cover-my-30">
                <div className="cover-user-img d-flex align-items-center">
                  <Row>
                    <Col xs={12}>
                      <Card
                        className="login-page border-0"
                        style={{ zIndex: "1" }}
                      >
                        <CardBody className="p-0">
                          <h4 className="card-title text-center">Login</h4>


                          <Form
                            className="login-form mt-4"
                            onSubmit={this.handleLogin}
                            ref={c => {
                              this.form = c;
                            }}
                          >
                            <Row>
                              <Col lg={12}>
                                <div className="mb-3">
                                  <Label className="form-label" htmlFor="email">
                                    Email{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control ps-3"
                                    name="username"
                                    id="email"
                                    placeholder="Seu email"
                                    value={this.state.login}
                                    onChange={this.onChangeUsername}
                                    validations={[required, email]}
                                  />
                                </div>
                              </Col>
                              <Col lg={12}>
                                <div className="mb-3">
                                  <Label className="form-label" htmlFor="password">
                                    Senha
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="password"
                                    className="form-control ps-3"
                                    name="password"
                                    id="password"
                                    placeholder="Sua senha"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required, vpassword]}
                                  />
                                </div>
                              </Col>
                              <Col lg="12">
                                <div className="d-flex justify-content-between">
                                  <div className="mb-3">
                                    <div className="form-check">
                                      <Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customCheck1"
                                      />
                                      <Label
                                        className="form-check-label"
                                        htmlFor="customCheck1"
                                      >
                                        Manter conectado
                                      </Label>
                                    </div>
                                  </div>
                                  <p className="forgot-pass mb-0">
                                    <Link
                                      to="auth-cover-re-password"
                                      className="text-dark fw-bold"
                                    >
                                      Esqueci minha senha
                                    </Link>
                                  </p>
                                </div>
                              </Col>
                              <Col lg={12} className="mb-0">
                                <div className="d-grid">
                                  <Button
                                    color="primary"
                                    disabled={this.state.loading}
                                  >
                                    {this.state.loading && (
                                      <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    <span>Entrar</span>
                                  </Button>
                                </div>
                              </Col>
                              {this.state.message && (
                                <div className="form-group">
                                  <div className="alert alert-danger" role="alert">
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
                              <Col className="text-center">
                                <p className="mb-0 mt-3">
                                  <small className="text-dark me-2">
                                    Não possui uma conta?
                                  </small>{" "}
                                  <Link
                                    to="/registro"
                                    className="text-dark fw-bold"
                                  ><span className="text-primary">
                                      Registrar
                                    </span>
                                  </Link>
                                </p>
                              </Col>
                            </Row>
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
                className="padding-less img "
                style={{ backgroundImage: `url(${user01})` }}
              ></Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageCoverLogin;
