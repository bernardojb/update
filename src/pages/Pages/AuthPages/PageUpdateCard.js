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
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import control from "react-validation"

import { isEmail } from "validator";
import authService from "../../../services/auth.service";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mask, unMask } from 'remask'

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Esse campo é obrigatório!
      </div>
    );
  }
};

const vyear = value => {
  if (value.length < 4 || value.length > 4) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Digite o ano completo!
      </div>
    );
  }
};

const vminyear = value => {
  if (value < 2021 || value.length > 3000) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Digite um ano válido!
      </div>
    );
  }
};

const vmonth = value => {
  if (value < 1 || value > 12) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Digite um mês válido!
      </div>
    );
  }
};

const vcvv = value => {
  if (value.length < 3) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Digite um CVV válido!
      </div>
    );
  }
};


export default class PageCoverSignup extends Component {
  constructor(props) {
    super(props);
    //Cobrança
    this.handlePayment = this.handlePayment.bind(this);
    this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
    this.onChangeVerificationValue = this.onChangeVerificationValue.bind(this);
    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);


    this.state = {
      //Pagamento
      card_number: "",
      verification_value: "",
      month: "",
      year: "",
      first_name: "",
      last_name: "",
      // identifier:"mensal",

      message: "",
    };
  }

  onChangeCardNumber(e) {
    this.setState({
      card_number: mask(`${e.target.value}`, ['9999-9999-9999-9999'])
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

  handlePayment(e) {
    e.preventDefault();

    this.setState({
      message: "",
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      authService.registerCard(
        this.state.card_number,
        this.state.verification_value,
        this.state.month,
        this.state.year,
        this.state.first_name,
        this.state.last_name,

        // this.state.identifier

      ).then(
        response => {
          this.setState({
            message: response.data.message,
          })
          toast.success("Cartão alterado com sucesso!", {
            autoClose: 2000,
          })
          setTimeout(() => {
            this.props.history.push("/assinatura");
          }, 2000);
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          toast.error("Tente novamente mais tarde!", {
            autoClose: 2000,
          })
          setTimeout(() => {
            window.location.reload();
          }, 2000);

          this.setState({
            message: resMessage,
          });
        }
      );
    }

  }


  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'))

    // if (user) {

    //  } else {

    // }
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Registro | Update Anestesiologia</title>
          <link rel="canonical" href="https://www.grupoupdate.com.br/registro" />
        </Helmet>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
                        <h1 className="card-title text-center">ADICIONAR CARTÃO</h1>
                        <Form
                          className="login-form mt-4"
                          onSubmit={this.handlePayment}
                          ref={c => {
                            this.form = c;
                          }}>
                          <Row className="px-2">


                            <div className="passo-5">
                              <div className="etapas-registro mb-3">
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
                                    maxLength="19"
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
                                    validations={[required, vmonth]}
                                    maxLength="2"
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
                                    validations={[required, vyear, vminyear]}
                                    maxLength="4"
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
                                    validations={[required, vcvv]}
                                    maxLength="3"
                                  />
                                </div>
                              </Col>
                              {/* <Col md="12">
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
                              </Col> */}
                              {/* <Col md="12">
                                <div className="plano-privacy mb-4">
                                  <p>
                                    Ao clicar no botão "Iniciar assinatura" abaixo, você concorda com nossos <Link to="termos-de-uso" className="text-primary">Termos de uso</Link> e com nossa <Link to="/politica-de-privacidade" className="text-primary">Política de Privacidade</Link>, confirma ter mais de 18 anos e aceita que o Update renovará automaticamente sua assinatura através da sua forma de pagamento. Você pode cancelar sua assinatura quando quiser para evitar novas cobranças. Para cancelar, acesse “Conta” e clique em "Cancelar assinatura".
                                  </p>
                                </div>
                              </Col> */}
                              <div className="d-grid">
                                <Button color="primary">
                                  Salvar cartão
                                </Button>
                              </div>
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

