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

//Cartões
import master from "../../../assets/images/payments/payment/master.png";
import visaa from "../../../assets/images/payments/payment/visaa.png";
import rupay from "../../../assets/images/payments/payment/rupay.png";
import paypals from "../../../assets/images/payments/payment/paypals.png";

//Auth
import authService from "../../../services/auth.service";

//Tosty
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Image
import profileImg from "../../../assets/images/client/profile.png";
import { mask, unMask } from 'remask'

let creditCardArr
let faturaArr

class PagePayments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      plano: {},
      sub: {},
      cards: [],
      fatura: [],
      cardIndex: null,
      message: "",
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
    authService.cancelSub().then(
      response => {
        toast.success("Assinatura cancelada!", {
          autoClose: 2000,
        })
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }, error => {
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
      }
    )
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

    /**
     * Map Cards
     */
    authService.getCard().then(data => {
      this.setState({
        ...this.state, cards: data.data.cards
      })

      const cards = this.state.cards
      if (cards.length > 0)
        creditCardArr = cards.map((card, index) => (
          <Col md={6} className={`mt-4 pt-2 mb-5 p-relative`} key={index} >
            <a className={`social-media-icons selected-default-icon ${card.paymentMethodId === data.data.deafultPayment ? ("selected-default-card") : ("")}`} style={{ zIndex: "2" }}
              onClick={() => {
                // console.log("paymentMethodId", card.paymentMethodId);
                authService.setDefaultCard(card).then(
                  response => {
                    toast.success("Cartão principal alterado com sucesso!", {
                      autoClose: 2000,
                    })
                    setTimeout(() => {
                      window.location.reload();
                    }, 2000);
                  }, error => {
                    toast.error("Tente novamente mais tarde!", {
                      autoClose: 2000,
                    })
                    setTimeout(() => {
                      window.location.reload();
                    }, 2000);
                  }
                )
              }}>
              <FeatherIcon
                icon="check-square"
                className="fea icon-sm" />
            </a>
            <a className="social-media-icons delete-card" style={{ zIndex: "2" }}
              onClick={() => {
                authService.deleteCard(card).then(
                  response => {
                    toast.success("Cartão deletado com sucesso!", {
                      autoClose: 2000,
                    })
                    setTimeout(() => {
                      window.location.reload();
                    }, 2000);
                  }, error => {
                    toast.error("Tente novamente mais tarde!", {
                      autoClose: 2000,
                    })
                    setTimeout(() => {
                      window.location.reload();
                    }, 2000);
                  }
                )
              }}>
              <FeatherIcon
                icon="trash-2"
                className="fea icon-sm" />
            </a>
            {/* <Link to="/update-card"> */}
            <Card className={`rounded shadow border-0 card-container ${card.paymentMethodId === data.data.deafultPayment ? ("default-card") : ("")}`}>
              <CardBody>
                <img
                  src={master}
                  height="60"
                  className="text-end"
                  alt=""
                />
                <div className="mt-4">
                  <p className="text-dark">{mask(`${card.number}`, ['AAAA AAAA AAAA 9999'])}</p>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">{card.name}</p>
                    <p className="mb-0 text-dark">Exp: <span className="">{card.month}/{card.year}</span></p>
                  </div>
                </div>
              </CardBody>
            </Card>
            {/* </Link> */}
          </Col>
        ))
    })

    /**
     * Map Faturas
     */

    authService.getFaturas().then(data => {
      data.data.inv.items[0].
      this.setState({
        ...this.state, faturas: data.data.inv.items
      })
      const faturas = this.state.faturas

      console.log("getFatura", this.state.faturas);

      if (faturas != null) {
        faturaArr = faturas.map((fatura, index) => (
          <div className="d-flex flex-row justify-content-between detalhes-cobranca" key={index}>
            <li style={{ color: "white", marginBottom: "16px", listStyle: "none" }}>{fatura.created_at_iso}</li>
            <li style={{ color: "white", marginBottom: "16px", listStyle: "none" }}>em aguardo</li>
            <li style={{ color: "white", marginBottom: "16px", listStyle: "none" }}>{fatura.variables.find((ele) => ele.variable === "payment_data.display_number").value}</li>
            <li style={{ color: "white", marginBottom: "16px", listStyle: "none" }}>{fatura.total_paid}</li>
          </div>
        ))
      }
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
                            {sub != null && sub.expiresAt ?
                              <p>Próximo pagamento: <span className="text-primary">{`${this.lepDay(sub.expiresAt.getDate())}/${this.lepMonth(sub.expiresAt.getMonth())}/${sub.expiresAt.getFullYear()}`}</span></p>
                              : null
                            }
                          </Col>
                          {/* <Col md="5" className="text-md-end text-center">
                          </Col> */}
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
                      <p className="text-muted">{`R$${parseInt(plano.value_cents) / 100}0`}</p>
                      <Link to="/registro" className="btn btn-primary">Alterar Plano</Link>
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
                    <h3 className="mb-0">MEUS CARTÕES</h3>
                    <Link
                      to="/update-card"
                      className="btn btn-primary"
                    >
                      Adicionar cartão
                    </Link>
                  </div>

                  <Row>
                    {creditCardArr}
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
                        {faturaArr}
                      </div>
                    </div>
                  </Col>
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