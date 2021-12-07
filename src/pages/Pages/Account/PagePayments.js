import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Progress,
  Card,
  CardBody,
  Form,
  FormGroup,
  InputGroup,
  Input,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import imgbg from "../../../assets/images/account/bg.png";
import profile from "../../../assets/images/client/05.jpg";
import master from "../../../assets/images/payments/payment/master.png";
import visaa from "../../../assets/images/payments/payment/visaa.png";
import rupay from "../../../assets/images/payments/payment/rupay.png";
import paypals from "../../../assets/images/payments/payment/paypals.png";

//Auth
import authService from "../../../services/auth.service";

//Image
import profileImg from "../../../assets/images/client/05.jpg";

class PagePayments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      plano: {},
      sub: {},
      conta: [
        {
          id: 1,
          icon: "user",
          className: "navbar-item account-menu px-0",
          title: "Informações Pessoais",
          link: "/page-profile",
        },
        {
          id: 2,
          icon: "shopping-cart",
          className: "navbar-item account-menu px-0 mt-2 active",
          title: "Assinatura",
          link: "/page-payments",
        },
      ],
      download: [
        {
          id: 1,
          icon: "uil uil-apple",
          className: "navbar-item account-menu px-0 mt-2",
          title: "App Store",
          link: "https://apps.apple.com/us/app/update-anestesiologia/id1583086674",
        },
        {
          id: 2,
          icon: "uil uil-google-play",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Google Play",
          link: "https://play.google.com/store/apps/details?id=com.grupoupdate.anestesiologia",
        },
      ],
      suporte: [
        {
          id: 1,
          icon: "help-circle",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Ajuda",
          link: "/ajuda",
        },
        {
          id: 2,
          icon: "mail",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Contato",
          link: "/auth-login-three",
        },
      ],
      termos: [
        {
          id: 1,
          icon: "help-circle",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Sobre o Update",
          link: "/sobre",
        },
        {
          id: 2,
          icon: "mail",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Política de Privacidade",
          link: "/politica-de-privacidade",
        },
        {
          id: 3,
          icon: "mail",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Termos de Uso",
          link: "/termos-de-uso",
        }
      ],
    };
  }

  handleCancelSub() {
    authService.cancelSub()
  }

  componentDidMount() {
    authService.getSelf().then(data => {
      data.data.birthday = new Date(data.data.birthday)
      this.setState({
        ...this.state, profile: data.data
      })
    })


    authService.getSub().then(data => {
      data.data.data.expiresAt = new Date(data.data.data.expiresAt)
      this.setState({
        ...this.state, sub: data.data.data
      })

      authService.getPlan().then(dt => {
        this.setState({
          ...this.state, plano: dt.data.data.find(d => d.identifier == data.data.data.planIdentifier)
        })
      })
    })

    document.body.classList = "";
    document.getElementById("topnav").classList.add("nav-sticky");
  }

  lepMonth(month) {
    return `${month < 10 ? '0' : ''}${month + 1}`
  }

  lepDay(day) {
    return `${day < 10 ? `0${day}` : day + 1}`
  }

  render() {

    const { profile } = this.state
    const { plano } = this.state
    const { sub } = this.state

    return (
      <React.Fragment>
        <section
          className="bg-profile d-table w-100 bg-primary"
          style={{ background: `url(${imgbg}) center center` }}
        >
          <Container>
            <Row>
              <Col lg="12">
                <Card
                  className="public-profile border-0 rounded shadow"
                  style={{ zIndex: "1" }}
                >
                  <CardBody>
                    <Row className="align-items-center">
                      <Col lg="2" md="3" className="text-md-start text-center">
                        <img
                          src={profileImg}
                          className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                          alt=""
                        />
                      </Col>
                      <Col lg="10" md="9">
                        <Row className="align-items-end">
                          <Col
                            md="7"
                            className="text-md-start text-center mt-4 mt-sm-0 d-flex flex-column"
                          >
                            <h3 className="title mb-2"> {profile.full_name} </h3>
                            <p>{plano != null && plano.name ? `Plano ${plano.name.charAt(0).toUpperCase()}${plano.name.slice(1)}` : null}</p>
                            {/* {plano != null ? console.log(plano) : null} */}
                            {sub != null && sub.expiresAt ?
                              <p>Assinatura válida até: <span className="text-primary">{`${this.lepDay(sub.expiresAt.getDate())}/${this.lepMonth(sub.expiresAt.getMonth())}/${sub.expiresAt.getFullYear()}`}</span></p>
                              : null
                            }
                          </Col>
                          <Col md="5" className="text-md-end text-center">
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section mt-60">
          <Container className="mt-lg-3">
            <Row>
              <Col lg="4" md="6" xs="12" className="d-lg-block d-none">
                <div className="sidebar sticky-bar p-4 rounded shadow">
                  <div className="widget mt-4">
                    <h3 className="widget-title">Minha Conta</h3>
                    <ul className="list-unstyled sidebar-nav mb-4" id="navmenu-nav">
                      {this.state.conta.map((widget, key) => (
                        <li className={widget.className} key={key}>
                          <Link to={widget.link} className="navbar-link d-flex shadow align-items-center py-2 px-4">
                            <span className="h4 mb-0">
                              <FeatherIcon
                                icon={widget.icon}
                                className="fea"
                              />
                            </span>
                            <p className="mb-0 ms-2">{widget.title}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <h3 className="widget-title">Download</h3>
                    <ul className="list-unstyled sidebar-nav mb-4" id="navmenu-nav">
                      {this.state.download.map((widget, key) => (
                        <li className={widget.className} key={key}>
                          <a href={widget.link} target="_blank" className="navbar-link d-flex shadow align-items-center py-2 px-4">
                            <span className="h4 mb-0">
                              <i className={widget.icon}></i>
                            </span>
                            <p className="mb-0 ms-2">{widget.title}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <h3 className="widget-title">Suporte</h3>
                    <ul className="list-unstyled sidebar-nav mb-4" id="navmenu-nav">
                      {this.state.suporte.map((widget, key) => (
                        <li className={widget.className} key={key}>
                          <Link to={widget.link} className="navbar-link d-flex shadow align-items-center py-2 px-4">
                            <span className="h4 mb-0">
                              <FeatherIcon
                                icon={widget.icon}
                                className="fea"
                              />
                            </span>
                            <p className="mb-0 ms-2">{widget.title}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <h3 className="widget-title">Termos e Condições</h3>
                    <ul className="list-unstyled sidebar-nav mb-4" id="navmenu-nav">
                      {this.state.termos.map((widget, key) => (
                        <li className={widget.className} key={key}>
                          <Link to={widget.link} className="navbar-link d-flex shadow align-items-center py-2 px-4">
                            <span className="h4 mb-0">
                              <FeatherIcon
                                icon={widget.icon}
                                className="fea"
                              />
                            </span>
                            <p className="mb-0 ms-2">{widget.title}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>

              <Col lg="8" xs={12}>
                <div className="rounded shadow p-4 mb-5">
                  <h3>Assinatura</h3>
                  <div className="d-flex justify-content-between flex-row">
                    <Col lg={4}>
                      <p style={{ fontSize: "21px", fontWeight: "600" }}>{plano != null && plano.name ? `Plano ${plano.name.charAt(0).toUpperCase()}${plano.name.slice(1)}` : null}</p>
                      <p className="text-muted">{`R$${parseInt(plano.value_cents) / 100},00`}</p>
                      <button className="btn btn-primary disabled">Alterar Plano</button>
                    </Col>
                    <Col lg={4}>
                      <p style={{ fontSize: "21px", fontWeight: "600" }}>Assinatura válida até</p>
                      {sub != null && sub.expiresAt ?
                        <p>{`${this.lepDay(sub.expiresAt.getDate())}/${this.lepMonth(sub.expiresAt.getMonth())}/${sub.expiresAt.getFullYear()}`}</p>
                        : null
                      }
                      <button className="btn btn-danger" onClick={this.handleCancelSub}>Cancelar Assinatura</button>
                    </Col>
                  </div>
                </div>
                <div className="rounded shadow p-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="mb-0">Cartão registrado</h3>
                    <Link
                      to="#"
                      data-toggle="modal"
                      data-target="#addnewcard"
                      className="btn btn-primary"
                    >
                      {/* <FeatherIcon icon="plus" className="fea icon-sm" /> */}
                      Editar
                    </Link>
                  </div>

                  <Row>
                    <Col md={6} className="mt-4 pt-2 mb-5">
                      <Link to="#">
                        <Card className="rounded shadow bg-light border-0">
                          <CardBody>
                            <img
                              src={master}
                              height="60"
                              className="text-end"
                              alt=""
                            />
                            <div className="mt-4">
                              <h5 className="text-dark">•••• •••• •••• 5150</h5>
                              <div className="d-flex justify-content-between">
                                <p className="h6 text-muted mb-0">
                                  Bernardo Junqueira Braga
                                </p>
                                <h6 className="mb-0 text-dark">
                                  Exp: <span className="text-muted">06/2027</span>
                                </h6>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Link>
                    </Col>

                    {/* <Col md={6} className="mt-4 pt-2">
                      <Link to="#">
                        <Card className="rounded shadow bg-dark border-0">
                          <CardBody>
                            <img
                              src={visaa}
                              height="60"
                              className="text-end"
                              alt=""
                            />
                            <div className="mt-4">
                              <h5 className="text-light">
                                •••• •••• •••• 9856
                              </h5>
                              <div className="d-flex justify-content-between">
                                <p className="h6 text-muted mb-0">
                                  Calvin Carlo
                                </p>
                                <h6 className="mb-0 text-muted">
                                  Exp: <span className="text-muted">01/24</span>
                                </h6>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Link>
                    </Col> */}

                    {/* <Col md={6} className="mt-4 pt-2">
                      <Link to="#">
                        <Card className="rounded shadow bg-info border-0">
                          <CardBody>
                            <img
                              src={rupay}
                              height="60"
                              className="text-end"
                              alt=""
                            />
                            <div className="mt-4">
                              <h5 className="text-white">
                                •••• •••• •••• 5465
                              </h5>
                              <div className="d-flex justify-content-between">
                                <p className="h6 text-light mb-0">
                                  Miriam Jockky
                                </p>
                                <h6 className="mb-0 text-light">
                                  Exp: <span className="text-light">03/23</span>
                                </h6>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Link>
                    </Col> */}

                    {/* <Col md={6} className="mt-4 pt-2">
                      <Card className="rounded shadow bg-light border-0">
                        <CardBody>
                          <img
                            src={paypals}
                            height="60"
                            className="text-end"
                            alt=""
                          />
                          <div className="mt-4">
                            <Form>
                              <FormGroup className="mt-4 pt-3 mb-0">
                                <InputGroup>
                                  <Input
                                    name="email"
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Paypal Email :"
                                    required=""
                                  />
                                  <div className="input-group-append">
                                    <button
                                      className="btn btn-primary submitBnt"
                                      type="submit"
                                      id="paypalmail"
                                    >
                                      Send
                                    </button>
                                  </div>
                                </InputGroup>
                              </FormGroup>
                            </Form>
                          </div>
                        </CardBody>
                      </Card>
                    </Col> */}
                  </Row>
                  <Col>
                    <div className="rounded shadow p-4 mb-5">
                      <h3>
                        Detalhes da cobrança
                      </h3>
                      <div>
                        <div className="d-flex flex-row justify-content-between detalhes-cobranca">
                          <p>Data</p>
                          <p>Período</p>
                          <p>Forma de Pagamento</p>
                          <p>Total</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Row>

                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PagePayments;
