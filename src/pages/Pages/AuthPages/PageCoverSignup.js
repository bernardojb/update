// React Basic and Bootstrap
import React, { Component } from "react";
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
// import { Formik, Form, Field } from 'formik';

import { Helmet } from "react-helmet";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import user02 from "../../../assets/images/user/Registro5.png";
import payment from "../../../assets/images/app/payment.png";

//new imports
import AuthService from "../../../services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import control from "react-validation"

import { isEmail } from "validator";
import authService from "../../../services/auth.service";

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
      <div className="alert alert-danger" role="alert">
        Este não é um email válido!
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Sua senha precisa ter pelo menos 6 caracteres.
      </div>
    );
  }
};

const isEqual = (value, props, components) => {
  const bothUsed = components.password[0].isUsed && components.confirmPassword[0].isUsed;
  const bothChanged = components.password[0].isChanged && components.confirmPassword[0].isChanged;

  if (bothChanged && bothUsed && components.password[0].value !== components.confirmPassword[0].value) {
    return (
      <div className="alert alert-danger" role="alert">
        As senhas não coincidem
      </div>
    )
  }
};

export default class PageCoverSignup extends Component {
  constructor(props) {
    super(props);

    this.handleRegister = this.handleRegister.bind(this);

    //Resgistro
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    //Profile
    this.handleProfile = this.handleProfile.bind(this);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.onChangeCpf = this.onChangeCpf.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeCrm = this.onChangeCrm.bind(this);
    //Endereço
    this.onChangeCep = this.onChangeCep.bind(this);
    this.onChangeStreet = this.onChangeStreet.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeNeighborhood = this.onChangeNeighborhood.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    //Cobrança
    this.handlePayment = this.handlePayment.bind(this);
    this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
    this.onChangeVerificationValue = this.onChangeVerificationValue.bind(this);
    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeIdentifier = this.onChangeIdentifier.bind(this);
    //Cupom
    this.onChangeCoupon = this.onChangeCoupon.bind(this)
    this.handleCouponCheck = this.handleCouponCheck.bind(this);

    this.state = {
      // REGISTRO
      email: "",
      password: "",
      confirmPassword: "",
      // PROFILE
      fullName: "",
      birthday: "",
      cpf: "",
      phone: "",
      crm: "",
      //Endereço
      cep: "",
      street: "",
      number: "",
      neighborhood: "",
      state: "",
      city: "",
      //Pagamento
      card_number: "",
      verification_value: "",
      month: "",
      year: "",
      first_name: "",
      last_name: "",
      //Cupom
      code: "",
      //Plano
      identifier: "",
      plano_month: "",
      plano_half: "",
      plano_year: "active",
      plano_price: "",
      plano_name: "",
      //States
      passo2: true,
      passo3: false,
      passo4: true,
      passo5: false,
      //VERIFICATION
      register: false,
      register_profile: false,
      register_plano: false,
      message: "",
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
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

  onChangeFullName(e) {
    this.setState({
      fullName: e.target.value
    });
  }

  onChangeBirthday(e) {
    this.setState({
      birthday: e.target.value
    });
  }

  onChangeCpf(e) {
    this.setState({
      cpf: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeCrm(e) {
    this.setState({
      crm: e.target.value
    });
  }

  onChangeCep(e) {
    this.setState({
      cep: e.target.value
    });

  }

  onChangeStreet(e) {
    this.setState({
      street: e.target.value
    });
  }

  onChangeNumber(e) {
    this.setState({
      number: e.target.value
    });
  }

  onChangeNeighborhood(e) {
    this.setState({
      neighborhood: e.target.value
    });
  }

  onChangeState(e) {
    this.setState({
      state: e.target.value
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeCardNumber(e) {
    this.setState({
      card_number: e.target.value
    });
  }

  onChangeVerificationValue(e) {
    this.setState({
      verification_value: e.target.value
    });
  }

  onChangeMonth(e) {
    this.setState({
      month: e.target.value
    });
  }

  onChangeYear(e) {
    this.setState({
      year: e.target.value
    });
  }

  onChangeFull_Name(e) {
    this.setState({
      full_name: e.target.value
    });
  }

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    });
  }

  onChangeIdentifier(e) {
    this.setState({
      identifier: e.target.value
    });
  }

  //Cupom
  onChangeCoupon(e) {
    this.setState({
      code: e.target.value
    });

    if (this.state.code.value != "") {
      console.log("COM CUPOM");
    }
  }

  ////////////////////////////////////////Handles

  handleRequired() {
    this.form.validateAll()

    if (this.checkBtn.context._errors.length === 0) {
      this.setState({
        passo2: false,
        passo3: true
      })
    } else {
      console.log("SUPER NICEEEEEEEEEEEE")
    }

  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      register: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.email,
        this.state.password,
        this.state.confirmPassword,
      ).then(
        response => {
          console.log(response, 'aaaaaaaaaaaaaaaaaaaaaaaa')
          this.setState({
            message: response.data.message,
            register: false,
            register_profile: true,
          });
          if(response.data.token) {
            console.log(response, '#############################')
            localStorage.setItem("user", JSON.stringify({ data: {
              access_token: response.data.token,
              refresh_token: response.data.token,
              "has_profile": false,
              "has_card": false,
              "has_subs": false
            } }));
          }
          // window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            register: true,
            message: resMessage,
          });
        }
      );
    }
  }

  handleProfile(e) {
    e.preventDefault();

    this.setState({
      message: "",
      register: false,
      register_profile: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.registerProfile(
        this.state.fullName,
        this.state.birthday,
        this.state.cpf,
        this.state.phone,
        this.state.crm,
        //endereço
        this.state.cep,
        this.state.street,
        this.state.number,
        this.state.neighborhood,
        this.state.state,
        this.state.city,
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            register_profile: false,
            register_plano: true
          });
          // window.location.reload();
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
            register: false,
            register_profile: true,
            register_plano: false
          });
        }
      );
    }
  }

  handlePayment(e) {
    e.preventDefault();

    this.setState({
      message: "",
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.registerCard(
        this.state.card_number,
        this.state.verification_value,
        this.state.month,
        this.state.year,
        this.state.first_name,
        this.state.last_name,

      ).then(
        response => {
          this.setState({
            message: response.data.message,
          })

          authService.registerPlano(
            this.state.identifier
          )

          this.props.history.push("/page-profile");
          // window.location.reload();
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

  }

  handleCouponCheck(e) {

    e.preventDefault();

    this.form.validateAll();

    AuthService.checkCoupon(
      this.state.code,
    ).then(
      response => {
        this.setState({
          message: response.data.message,
        })


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

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      if (user.data.has_card && user.data.has_subs) {
        console.log(">>>>> HAS CARD + HAS SUBS")
      } else if (user.data.has_profile) {
        this.setState({
          register: false,
          register_profile: false,
          register_plano: true,
        })
      } else {
        this.setState({
          register: false,
          register_profile: true,
          register_plano: false
        })
      }
    } else {
      this.setState({
        register: true,
        register_profile: false,
        register_plano: false
      })
    }


  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Registro | Update Anestesiologia</title>
          <link rel="canonical" href="https://www.grupoupdate.com.br/registro" />
        </Helmet>
        <div className="back-to-home rounded d-sm-block">
          <Link to="/" className="btn btn-icon btn-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>
        <section className="cover-user bg-white">
          <Container fluid className="px-0">
            <Row className="g-0 position-relative">
              <Col lg={4} xs={{ order: 2 }} className="cover-my-30 ">
                <div className="cover-user-img d-flex align-items-center">
                  <Row style={{ width: "100%" }} className="g-0 register-etapas">
                    <Card
                      className="login_page border-0"
                      style={{ zIndex: 1 }}
                    >
                      <CardBody className="p-0">
                        <h1 className="card-title text-center">REGISTRAR</h1>

                        {this.state.register ? (
                          <Form
                            className="login-form mt-4"
                            onSubmit={this.handleRegister}
                            ref={c => {
                              this.form = c;
                            }}>
                            <Row className="px-2">
                              <Col md="12">
                                <div className="mb-3">
                                  <Label className="form-label" for="email">
                                    Seu Email{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    validations={[required, email]}
                                  />
                                </div>
                              </Col>
                              <Col md="12">
                                <div className="mb-3">
                                  <Label className="form-label" for="password">
                                    Sua senha{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="password"
                                    placeholder="Senha"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required, isEqual]}
                                  />
                                </div>
                              </Col>
                              <Col md="12">
                                <div className="mb-3">
                                  <Label className="form-label" for="confirmPassword">
                                    Confirmação de senha{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="password"
                                    className="form-control"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Confirmação de senha"
                                    value={this.state.confirmPassword}
                                    onChange={this.onChangeConfirmPassword}
                                    validations={[required, isEqual]}
                                  />
                                </div>
                              </Col>
                              <>
                                <div className="d-grid">
                                  <Button color="primary">
                                    Criar conta
                                  </Button>
                                </div>
                                <div className="mx-auto">
                                  <p className="mb-0 mt-3">
                                    <small className="text-dark me-2">
                                      Já tem uma conta?
                                    </small>{" "}
                                    <Link
                                      to="/auth-cover-login"
                                      className="text-primary fw-bold"
                                    >
                                      Login
                                    </Link>
                                  </p>
                                </div>
                              </>
                            </Row>
                            {this.state.message && (
                              <div className="form-group">
                                <div
                                  className={
                                    this.state.successful
                                      ? "alert alert-success"
                                      : "alert alert-danger"
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
                        ) : (null)}

                        {this.state.register_profile ? (
                          <Form
                            className="login-form mt-4"
                            onSubmit={this.handleProfile}
                            ref={c => {
                              this.form = c;
                            }}
                          >
                            <Row className="px-2">
                              {this.state.passo2 ? (
                                <>
                                  <Col md="12">
                                    <div className="mb-3">
                                      <div className="etapas-registro">
                                        <p className="etapa">Passo 2 de 5</p>
                                        <p className="etapa-title" >Informações Pessoais</p>
                                      </div>
                                      <Label className="form-label" for="name">
                                        Seu Nome{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="fullName"
                                        id="fullName"
                                        placeholder="Nome completo"
                                        value={this.state.fullName}
                                        onChange={this.onChangeFullName}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="12">
                                    <div className="mb-3">
                                      <Label className="form-label" for="birthday">
                                        Data de nascimento{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="birthday"
                                        id="birthday"
                                        placeholder="dd/mm/aaaa"
                                        value={this.state.birthday}
                                        onChange={this.onChangeBirthday}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="12">
                                    <div className="mb-3">
                                      <Label className="form-label" for="cpf">
                                        CPF{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="cpf"
                                        id="cpf"
                                        placeholder="CPF"
                                        value={this.state.cpf}
                                        onChange={this.onChangeCpf}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="12">
                                    <div className="mb-3">
                                      <Label className="form-label" for="phone">
                                        Telefone{" "}
                                        {/* <span className="text-danger">*</span> */}
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        id="phone"
                                        placeholder="Telefone"
                                        value={this.state.phone}
                                        onChange={this.onChangePhone}
                                      // validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="12">
                                    <div className="mb-3">
                                      <Label className="form-label" for="crm">
                                        CRM{" "}
                                        {/* <span className="text-danger">*</span> */}
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="crm"
                                        id="crm"
                                        placeholder="CRM"
                                        value={this.state.crm}
                                        onChange={this.onChangeCrm}
                                      // validations={[required]}
                                      />
                                    </div>
                                  </Col>

                                  <div className="d-grid">
                                    <a
                                      className="btn-primary d-flex justify-content-center align-items-center"
                                      style={{ height: "42px" }}
                                      onClick={() => {
                                        this.handleRequired()
                                      }}>
                                      Próximo
                                    </a>
                                    {/* <CheckButton
                                      style={{ display: "none" }}
                                      ref={c => {
                                        this.checkBtn = c;
                                      }}
                                    /> */}
                                  </div>
                                </>) : null}

                              {/* /////////////////////// 3 */}
                              {this.state.passo3 ? (
                                <>
                                  <Col md="12">
                                    <div className="mb-3">
                                      <div className="etapas-registro">
                                        <p className="etapa">Passo 3 de 5</p>
                                        <p className="etapa-title" >Endereço de Cobrança</p>
                                      </div>
                                      <Label className="form-label" for="cep">
                                        CEP{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="cep"
                                        id="cep"
                                        placeholder="CEP"
                                        value={this.state.cep}
                                        onChange={this.onChangeCep}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="12">
                                    <div className="mb-3">
                                      <Label className="form-label" for="street">
                                        Endereço{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="street"
                                        id="street"
                                        placeholder="Endereço"
                                        value={this.state.street}
                                        onChange={this.onChangeStreet}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="4">
                                    <div className="mb-3">
                                      <Label className="form-label" for="number">
                                        Número{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="number"
                                        id="number"
                                        placeholder="Número"
                                        value={this.state.number}
                                        onChange={this.onChangeNumber}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="8">
                                    <div className="mb-3">
                                      <Label className="form-label" for="neighborhood">
                                        Bairro{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="neighborhood"
                                        id="neighborhood"
                                        placeholder="Bairro"
                                        value={this.state.neighborhood}
                                        onChange={this.onChangeNeighborhood}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="4">
                                    <div className="mb-3">
                                      <Label className="form-label" for="state">
                                        Estado{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="state"
                                        id="state"
                                        placeholder="Estado"
                                        value={this.state.state}
                                        onChange={this.onChangeState}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="8">
                                    <div className="mb-3">
                                      <Label className="form-label" for="city">
                                        Cidade{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="city"
                                        id="city"
                                        placeholder="Cidade"
                                        value={this.state.city}
                                        onChange={this.onChangeCity}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <div className="d-grid">
                                    <Button color="primary ">
                                      Próximo
                                    </Button>
                                  </div>
                                </>
                              ) : (null)}
                            </Row>
                            {this.state.message && (
                              <div className="form-group">
                                <div className={
                                  this.state.successful
                                    ? "alert alert-success"
                                    : "alert alert-danger"
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
                        ) : (null)}

                        {/* //////////////////////// */}
                        {this.state.register_plano ? (
                          <Form
                            className="login-form mt-4"
                            onSubmit={this.handlePayment}
                            ref={c => {
                              this.form = c;
                            }}>
                            <Row className="px-2">
                              {this.state.passo4 ? (
                                <>
                                  <div className="etapas-registro">
                                    <p className="etapa">Passo 4 de 5</p>
                                    <p className="etapa-title" >Escolha seu Plano</p>
                                  </div>
                                  <Col md="12">
                                    <a
                                      className={`etapa-plano-button mb-3 ${this.state.plano_year}`}
                                      type="button"
                                      value={this.state.identifier}
                                      onClick={() => {
                                        this.setState({
                                          identifier: "mensal",
                                          plano_year: "active",
                                          plano_half: "",
                                          plano_month: "",
                                          plano_price: "R$39,90/mês",
                                          plano_name: "Anual"
                                        })
                                      }}
                                    >
                                      <div className="plano-button-container">
                                        <div className="plano-radio-button"></div>
                                        <div className="plano-button-text">
                                          <p className="plano-title">Plano anual</p>
                                          <p className="plano-description text-primary">34% de desconto!</p>
                                        </div>
                                      </div>

                                      <div className="plano-button-price">
                                        <p>R$39,90/mês</p>
                                      </div>
                                    </a>
                                  </Col>
                                  <Col md="12">
                                    <a className={`etapa-plano-button mb-3 ${this.state.plano_half}`}
                                      type="button"
                                      value={this.state.identifier}
                                      onClick={() => {
                                        this.setState({
                                          identifier: "mensal",
                                          plano_year: "",
                                          plano_half: "active",
                                          plano_month: "",
                                          plano_price: "R$49,90/mês",
                                          plano_name: "Semestral"
                                        })
                                      }}
                                    >
                                      <div className="plano-button-container">
                                        <div className="plano-radio-button"></div>
                                        <div className="plano-button-text">
                                          <p className="plano-title">Plano semestral</p>
                                          <p className="plano-description text-primary">17% de desconto!</p>
                                        </div>
                                      </div>

                                      <div className="plano-button-price">
                                        <p>R$49,90/mês</p>
                                      </div>
                                    </a>
                                  </Col>
                                  <Col md="12">
                                    <a
                                      className={`etapa-plano-button mb-4 ${this.state.plano_month}`}
                                      type="button"
                                      value={this.state.identifier}
                                      onClick={() => {
                                        this.setState({
                                          identifier: "mensal",
                                          plano_year: "",
                                          plano_half: "",
                                          plano_month: "active",
                                          plano_price: "R$59,90/mês",
                                          plano_name: "Mensal"
                                        })
                                      }}
                                    >
                                      <div className="plano-button-container">
                                        <div className="plano-radio-button"></div>
                                        <div className="plano-button-text">
                                          <p className="plano-title">Plano mensal</p>
                                          {/* <p className="plano-description text-primary">34% de desconto!</p> */}
                                        </div>
                                      </div>
                                      <div className="plano-button-price">
                                        <p>R$59,90/mês</p>
                                      </div>
                                    </a>
                                  </Col>
                                  {/* <Col md="12">
                                    <div className="mb-4">
                                      <Label className="form-label" for="cupom">
                                        Cupom de desconto
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="cupom"
                                        id="cupom"
                                        placeholder="Código do cupom"
                                        value={this.state.code}
                                        onChange={this.onChangeCoupon}
                                      />
                                      <a onClick={this.handleCouponCheck} style={{ backgroundColor: "white", color: "black" }}>
                                        check
                                      </a>
                                    </div>
                                  </Col> */}
                                  <a
                                    className="btn-primary d-flex justify-content-center align-items-center"
                                    style={{ height: "42px" }}
                                    onClick={() => {
                                      this.setState({
                                        passo4: false,
                                        passo5: true
                                      })
                                    }}>
                                    Próximo
                                  </a>
                                </>) : (null)}

                              {this.state.passo5 ? (
                                <div className="passo-5">
                                  <div className="etapas-registro mb-3">
                                    <p className="etapa">Passo 5 de 5</p>
                                    <p className="etapa-title mb-0" >Informe os dados do seu cartão de crédito</p>
                                    <img src={payment} />
                                  </div>

                                  <Col md="12">
                                    <div className="mb-3">
                                      <Label className="form-label" for="card_number">
                                        Número do cartão{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="card_number"
                                        id="card_number"
                                        placeholder="0000-0000-0000-0000"
                                        value={this.state.card_number}
                                        onChange={this.onChangeCardNumber}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="12">
                                    <div className="mb-3">
                                      <Label className="form-label" for="first_name">
                                        Nome do proprietário{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="first_name"
                                        id="first_name"
                                        placeholder="Nome"
                                        value={this.state.first_name}
                                        onChange={this.onChangeFirstName}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="12">
                                    <div className="mb-3">
                                      <Label className="form-label" for="last_name">
                                        Último nome do proprietário{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="last_name"
                                        id="last_name"
                                        placeholder="Último nome"
                                        value={this.state.last_name}
                                        onChange={this.onChangeLastName}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="12">
                                    <Label className="form-label" for="month">
                                      Data de Validade{" "}
                                      <span className="text-danger">*</span>
                                    </Label>
                                  </Col>
                                  <Col md="4">
                                    <div className="mb-3">
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="month"
                                        id="month"
                                        placeholder="Mês"
                                        value={this.state.month}
                                        onChange={this.onChangeMonth}
                                        validations={[required]}

                                      />
                                    </div>
                                  </Col>
                                  <Col md="8">
                                    <div className="mb-3">
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="year"
                                        id="year"
                                        placeholder="Ano"
                                        value={this.state.year}
                                        onChange={this.onChangeYear}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="12">
                                    <div className="mb-3">
                                      <Label className="form-label" for="verification_value">
                                        Código de segurança (CVV){" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="verification_value"
                                        id="verification_value"
                                        placeholder="CVV"
                                        value={this.state.verification_value}
                                        onChange={this.onChangeVerificationValue}
                                        validations={[required]}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="12">
                                    <div className="selected-plano mb-4">
                                      <div className="selected-plano-container">
                                        <p className="selected-plano-title">{this.state.plano_name}</p>
                                        <p className="selected-plano-price">{this.state.plano_price}</p>
                                      </div>
                                      <div className="selected-plano-price">
                                        <a className="text-primary" onClick={() => {
                                          this.setState({
                                            passo4: true,
                                            passo5: false
                                          })
                                        }}>
                                          <p>Trocar</p>
                                        </a>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md="12">
                                    <div className="plano-privacy mb-4">
                                      <p>
                                        Ao clicar no botão "Iniciar assinatura" abaixo, você concorda com nossos <Link to="termos-de-uso" className="text-primary">Termos de uso</Link> e com nossa <Link to="/politica-de-privacidade" className="text-primary">Política de Privacidade</Link>, confirma ter mais de 18 anos e aceita que o Update renovará automaticamente sua assinatura através da sua forma de pagamento. Você pode cancelar sua assinatura quando quiser para evitar novas cobranças. Para cancelar, acesse “Conta” e clique em "Cancelar assinatura".
                                      </p>
                                    </div>
                                  </Col>
                                  <div className="d-grid">
                                    <Button color="primary">
                                      Próximo
                                    </Button>
                                  </div>
                                </div>
                              ) : (null)}
                            </Row>
                            {this.state.message && (
                              <div className="form-group">
                                <div
                                  className={
                                    this.state.successful
                                      ? "alert alert-success"
                                      : "alert alert-danger"
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
                        ) : (null)}
                      </CardBody>
                    </Card>
                  </Row>
                </div>
              </Col>
              <Col
                lg={8}
                className="offset-lg-4 padding-less img order-1"
                style={{ backgroundImage: `url(${user02})` }}
              ></Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

