// React Basic and Bootstrap
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Label,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { Helmet } from "react-helmet";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import user02 from "../../../assets/images/user/Registro5.png";
import payment from "../../../assets/images/app/payment.png";

//Mask
import { mask, unMask } from 'remask'

//new imports
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import authService from "../../../services/auth.service";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class PageCoverSignup extends Component {
  constructor(props) {
    super(props);

    this.onChangeIdentifier = this.onChangeIdentifier.bind(this);
    this.onChangeCoupon = this.onChangeCoupon.bind(this)
    this.handleCouponCheck = this.handleCouponCheck.bind(this);

    this.state = {
      code: "",
      identifier: "",
      plano_month: "",
      plano_half: "",
      plano_year: "",
      plano_price: "",
      plano_name: "",
      message: "",
      loading: false
    };
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
  handleCouponCheck(e) {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user.data.has_subs && this.state.code != "") {
      // alert('has subs + has cupom')
      authService.checkCoupon(
        this.state.code,
      ).then(
        response => {
          toast.success("Cupom válido!", {
            autoClose: 2000,
          })
          authService.updatePlanoCoupon(
            this.state.identifier,
            this.state.code
          ).then(
            response => {
              console.log('RESPONSE PLANO CUPOM', response);
              toast.success("Atualização de plano concluída com sucesso!", {
                autoClose: 2000,
              })
              setTimeout(() => {
                this.props.history.push("/perfil")
              }, 2000);
            },
            error => {
              console.log('ERROR PLANO CUPOM', error);
              this.setState({
                // message: error.data.message,
                loading: false
              })
              toast.error("Não foi possível atualizar o plano, tente novamente mais tarde!", {
                autoClose: 2000,
              })
              setTimeout(() => {
                this.props.history.push("/perfil")
              }, 2000);
            }
          )
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          toast.error("Cupom inválido!", {
            autoClose: 2000,
          })
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      );
    } else if (user.data.has_subs && this.state.code === "") {
      // alert('has subs + no cupom')
      authService.updatePlano(
        this.state.identifier
      ).then(
        response => {
          toast.success("Atualização de plano concluída com sucesso!", {
            autoClose: 2000,
          })
          setTimeout(() => {
            this.props.history.push("/perfil")
          }, 2000);
          // console.log('RESPONSE PLANO', response);
        },
        error => {
          console.log('ERROR PLANO', error);
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          if (error.message === "Request failed with status code 422") {
            this.setState({
              message: "Selecione um novo plano!",
              loading: false
            });
          }
        }
      )
    } else if (user.data.has_subs === false && this.state.code != "") {
      // alert('no subs + has cupom')

      authService.checkCoupon(
        this.state.code,
      ).then(
        response => {
          toast.success("Cupom válido!", {
            autoClose: 2000,
          })

          authService.registerPlanoCoupon(
            this.state.identifier,
            this.state.code
          ).then(
            response => {
              // console.log('RESPONSE PLANO CUPOM', response);
              toast.success("Atualização de plano concluída com sucesso!", {
                autoClose: 2000,
              })
              setTimeout(() => {
                this.props.history.push("/perfil")
              }, 2000);
            },
            error => {
              // console.log('ERROR PLANO CUPOM', error);
              toast.error("Não foi possível atualizar o plano, tente novamente mais tarde!", {
                autoClose: 2000,
              })
              this.setState({
                message: error.data.message,
                loading: false
              })
              setTimeout(() => {
                this.props.history.push("/perfil")
              }, 2000);
            }
          )
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          toast.error("Cupom inválido!", {
            autoClose: 2000,
          })
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      );
    } else if (user.data.has_subs === false && this.state.code === "") {
      // alert('no subs + no cupom')
      authService.registerPlano(
        this.state.identifier
      ).then(
        response => {
          toast.success("Atualização de plano concluída com sucesso!", {
            autoClose: 2000,
          })
          setTimeout(() => {
            this.props.history.push("/perfil")
          }, 2000);
        },
        error => {
          console.log('ERROR PLANO', error);
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          if (error.message === "Request failed with status code 422") {
            this.setState({
              message: "Selecione um novo plano!",
              loading: false
            });
          }
        }
      )
    }

    e.preventDefault();

    this.form.validateAll();

    this.setState({
      loading: true
    })

    // if (this.state.code != "") {
    //   authService.checkCoupon(
    //     this.state.code,
    //   ).then(
    //     response => {
    //       toast.success("Cupom válido!", {
    //         autoClose: 2000,
    //       })

    //       authService.updatePlanoCoupon(
    //         this.state.identifier,
    //         this.state.code
    //       ).then(
    //         response => {
    //           console.log('RESPONSE PLANO CUPOM', response);
    //           this.props.history.push("/perfil")
    //         },
    //         error => {
    //           console.log('ERROR PLANO CUPOM', error);
    //           const resMessage =
    //           (error.response &&
    //             error.response.data &&
    //             error.response.data.message) ||
    //           error.message ||
    //           error.toString();

    //           this.setState({
    //             message: resMessage,
    //             loading: false
    //           })
    //         }
    //       )
    //     },
    //     error => {
    //       const resMessage =
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString();

    //         this.setState({
    //           message: resMessage,
    //           loading: false
    //         })

    //       toast.error("Cupom inválido!", {
    //         autoClose: 2000,
    //       })
    //       setTimeout(() => {
    //         window.location.reload();
    //       }, 2000);
    //     }
    //   );
    // } else {
    //   authService.updatePlano(
    //     this.state.identifier
    //   ).then(
    //     response => {
    //       this.props.history.push("/perfil")
    //       console.log('RESPONSE PLANO', response);
    //     },
    //     error => {
    //       console.log('ERROR PLANO', error);
    //       const resMessage =
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString();

    //       if (error.message === "Request failed with status code 422") {
    //         this.setState({
    //           message: "Selecione um novo plano!",
    //           loading: false
    //         });
    //       }
    //     }
    //   )
    // }
  }

  componentDidMount() {
    authService.getUpdatedUser()
    const user = JSON.parse(localStorage.getItem('user'))
    console.log("USER", user.data);

  }

  render() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) return (
      <Redirect to={'/login'}></Redirect>
    )

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
                        <h1 className="card-title text-center">Alterar Plano</h1>
                        <Form
                          className="login-form mt-4"
                          onSubmit={this.handleCouponCheck}
                          ref={c => {
                            this.form = c;
                          }}>
                          <Row className="px-2">
                            <>
                              <div className="etapas-registro">
                                {/* <p className="etapa">Passo 4 de 5</p> */}
                                <p className="etapa-title" >Escolha seu novo plano</p>
                              </div>
                              <Col md="12">
                                <a
                                  className={`etapa-plano-button mb-3 ${this.state.plano_year}`}
                                  type="button"
                                  value={this.state.identifier}
                                  onClick={() => {
                                    this.setState({
                                      identifier: "anual",
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
                                      identifier: "semestral",
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
                              <Col md="12">
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
                                  {/* <a onClick={this.handleCouponCheck} style={{ backgroundColor: "white", color: "black" }}>
                                        check
                                      </a> */}
                                </div>
                              </Col>
                              <Button
                                color="primary"
                                disabled={this.state.loading}
                              >
                                Registrar plano
                              </Button>
                            </>

                            {/* {this.state.passo5 ? (
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
                                      validations={[required, vcard]}
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
                            ) : (null)} */}
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

