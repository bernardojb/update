import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
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
import logoUpdate from "../../../assets/images/LogoUpdate.svg";

//Modal


//Input mask
import { mask, unMask } from 'remask'

let creditCardArr

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
      modal: {},
      conta: [
        {
          id: 1,
          icon: "user",
          className: "navbar-item account-menu px-0",
          title: "Informações Pessoais",
          link: "/perfil",
        },
        {
          id: 2,
          icon: "shopping-cart",
          className: "navbar-item account-menu px-0 mt-2 active",
          title: "Assinatura",
          link: "/assinatura",
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
          link: "/ajuda#contato",
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
    this.togglemodal.bind(this);
  }

  togglemodal = (id) => {

    const obj = {
      ...this.state,
      modal: {
        ...this.state.modal,
      },
    };

    console.log(obj)

    obj.modal[id] = !obj.modal[id]

    this.setState(obj);

    console.log("MODAL IS:", this.state.modal)
  };

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

    authService.verifyLogin()

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
      this.setState({
        ...this.state,
        invoice: data.data.inv.items
      })
    })

    document.body.classList = "";
    document.getElementById("topnav").classList.add("nav-sticky");
  }

  componentWillUnmount() {
    this.state.modal = false
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
                  <Row className="d-flex justify-content-between">
                    <Col sm={6} className="mb-sm-0 mb-5">
                      <p style={{ fontSize: "21px", fontWeight: "600" }}>{plano != null && plano.name ? `Plano ${plano.name.charAt(0).toUpperCase()}${plano.name.slice(1)}` : null}</p>
                      <p className="text-muted">{`R$${parseInt(plano.value_cents) / 100}0`}</p>
                      <Link to="/registro" className="btn btn-primary disabled">Alterar Plano</Link>
                    </Col>
                    <Col sm={6}>
                      <p style={{ fontSize: "21px", fontWeight: "600" }}>Assinatura válida até</p>
                      {sub != null && sub.expiresAt ?
                        <p>{`${this.lepDay(sub.expiresAt.getDate())}/${this.lepMonth(sub.expiresAt.getMonth())}/${sub.expiresAt.getFullYear()}`}</p>
                        : null
                      }
                      <button className="btn btn-danger" onClick={this.handleCancelSub}>Cancelar Assinatura</button>
                    </Col>
                  </Row>
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
                        <div className="detalhes-cobranca">
                          <Row className="detalhes-header">
                            <Col sm={2}>
                              <p className="mb-2">Data</p>
                            </Col>
                            <Col sm={4}>
                              <p className="mb-2">Período</p>
                            </Col>
                            <Col sm={4}>
                              <p className="mb-2">Forma de Pagamento</p>
                            </Col>
                            <Col sm={2}>
                              <p className="mb-2">Total</p>
                            </Col>
                          </Row>
                          <div className="detalhes-line" />
                        </div>
                        {/* {faturaArr} */}
                        {'invoice' in this.state && this.state.invoice != null ? this.state.invoice.map((invoice, index) => ([
                          <div key={`invoiceModal-${new Date().getTime()}${index}`}>
                            <div className="detalhes-cobranca"
                              key={index}
                            >
                              <div>
                                <Link
                                  to="#"
                                  onClick={() => this.togglemodal(index)}>
                                  <Row>
                                    <Col md={2} className="d-flex justify-content-start align-items-center">
                                      <li className="d-flex flex-row" style={{ color: "white", fontSize: "14px", margin: "8px 0px", listStyle: "none" }}>
                                        <span className="detalhes-mobile me-1">Data:</span>
                                        <span className="text-primary">
                                          {`${this.lepDay((new Date(invoice.created_at_iso)).getDate())}/${this.lepMonth((new Date(invoice.created_at_iso)).getMonth())}/${new Date(invoice.created_at_iso).getFullYear()}`}
                                        </span>
                                      </li>
                                    </Col>
                                    <Col md={4} className="d-flex justify-content-start align-items-center">
                                      <li className="d-flex flex-row" style={{ color: "white", fontSize: "14px", margin: "8px 0px", listStyle: "none" }}>
                                        <span className="detalhes-mobile me-1">Período:</span>
                                        <span>
                                          {`${this.lepDay((new Date(invoice.created_at_iso)).getDate())}/${this.lepMonth((new Date(invoice.created_at_iso)).getMonth())}/${new Date(invoice.created_at_iso).getFullYear()} - ${this.lepDay((new Date(parseInt(invoice.variables.find((ele) => ele.variable === "update_subscription.expires_at").value) * 1000).getDate()))}/${this.lepMonth((new Date(parseInt(invoice.variables.find((ele) => ele.variable === "update_subscription.expires_at").value) * 1000).getMonth()))}/${new Date(parseInt(invoice.variables.find((ele) => ele.variable === "update_subscription.expires_at").value) * 1000).getFullYear()}`}
                                        </span>
                                      </li>
                                    </Col>
                                    <Col md={4} className="d-flex justify-content-start align-items-center">
                                      <li className="d-flex flex-row" style={{ color: "white", fontSize: "14px", margin: "8px 0px", listStyle: "none" }}>
                                        <span className="detalhes-mobile me-1">Pagamento:</span>
                                        <span>
                                          {`${invoice.variables.find((ele) => ele.variable === "payment_data.display_number").value}`}
                                        </span>
                                      </li>
                                    </Col>
                                    <Col md={2} className="d-flex justify-content-start align-items-center">
                                      <li className="d-flex flex-row" style={{ color: "white", fontSize: "14px", margin: "8px 0px", listStyle: "none" }}>
                                        <span className="detalhes-mobile me-1">Total:</span>
                                        {`${invoice.total_paid}`}
                                      </li>
                                    </Col>
                                  </Row>
                                </Link>
                                <div className="detalhes-line" />
                              </div>
                            </div>
                          </div>
                          ,
                          <Modal
                            isOpen={this.state.modal[index]}
                            role="dialog"
                            autoFocus={true}
                            centered={true}
                            size="xl"
                            className="modal-fatura">
                            <ModalBody className="modal-fatura">
                              <Container>
                                <Row className="mt-5 pt-4 pt-sm-0 justify-content-center">
                                  <Col lg="12">
                                    <Card className="shadow rounded border-0" style={{ width: "100%" }}>
                                      <CardBody>
                                        <div className="invoice-top pb-4 border-bottom">
                                          <Row>
                                            <div>
                                              <Link
                                                to='#'
                                                onClick={() => { this.togglemodal(index) }}
                                              >
                                                <FeatherIcon
                                                  icon="x"
                                                  className="fea icon-sm modal-icon"
                                                />
                                              </Link>
                                            </div>
                                            <Col lg="8">
                                              <div className="logo-invoice mb-4" style={{ maxWidth: "88px" }}>
                                                <img src={logoUpdate} />
                                              </div>
                                              <p className="text-muted" style={{ fontSize: "14px" }}>LIFESAVERS TREINAMENTO PROFISSIONAL E GERENCIAL LTDA CNPJ - 10.535.504/0001-60</p>
                                            </Col>

                                            <Col lg="4" className="mt-4 mt-sm-0">
                                              <h3>CONTATO</h3>
                                              <dl className="row mb-0">
                                                <dt className="col-2 text-muted">
                                                  <i>
                                                    <FeatherIcon
                                                      icon="map-pin"
                                                      className="fea icon-sm"
                                                    />
                                                  </i>
                                                </dt>
                                                <dd className="col-10 text-muted">
                                                  <a
                                                    href="https://www.google.com.br/maps/place/Medicine+Cursos/@-23.5997646,-46.6522202,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce5a2294aa820d:0x95ef4b47d0c9ab0c!8m2!3d-23.5997774!4d-46.6500333?shorturl=1"
                                                    target="_blank"
                                                    className="video-play-icon text-muted lightbox"
                                                  >
                                                    <p className="mb-0">Rua Marcos Lopes, 272, Vila Nova Conceição, CEP 04.513-080 São Paulo - SP</p>
                                                  </a>
                                                </dd>

                                                <dt className="col-2 text-muted">
                                                  <i>
                                                    <FeatherIcon
                                                      icon="phone"
                                                      className="fea icon-sm"
                                                    />
                                                  </i>
                                                </dt>
                                                <dd className="col-10 text-muted">
                                                  <a
                                                    href="tel:+5511999998181"
                                                    className="text-muted "
                                                  >
                                                    +55 (11) 9 9999-8181
                                                  </a>
                                                </dd>
                                                <dt className="col-2 text-muted">
                                                  <i className="uil uil-envelope"></i>
                                                </dt>
                                                <dd className="col-10 text-muted">
                                                  <a
                                                    href="mailto:contato@grupoupdate.com.br"
                                                    className="text-muted"
                                                  >
                                                    contato@grupoupdate.com.br
                                                  </a>
                                                </dd>
                                              </dl>
                                            </Col>
                                          </Row>
                                        </div>
                                        <div className="invoice-middle py-4">
                                          <h3 className="mb-5">DETALHES DA COMPRA:</h3>
                                          <Row className="mb-0">
                                            <Col lg={{ size: 8, order: 1 }} xs={{ order: 2 }}>
                                              <dl className="row">
                                                <dt className="col-md-3 col-5 fw-normal">
                                                  Código:
                                                </dt>
                                                <dd className="col-md-9 col-7 text-muted">
                                                  {`${invoice.id}`}
                                                </dd>
                                                <dt className="col-md-3 col-5 fw-normal">
                                                  Nome:
                                                </dt>
                                                <dd className="col-md-9 col-7 text-muted">
                                                  {`${invoice.payer_name}`}
                                                </dd>
                                                <dt className="col-md-3 col-5 fw-normal">
                                                  Endereço:
                                                </dt>
                                                <dd className="col-md-9 col-7 text-muted">
                                                  <p className="mb-0">
                                                    {`${invoice.payer_address_street},`}
                                                  </p>
                                                  <p className="mb-0">
                                                    {`${invoice.payer_address_zip_code}`}
                                                  </p>
                                                </dd>
                                                <dt className="col-md-3 col-5 fw-normal">
                                                  Email:
                                                </dt>
                                                <dd className="col-md-9 col-7 text-muted">
                                                  {invoice.payer_email}
                                                </dd>
                                                <dt className="col-md-3 col-5 fw-normal">
                                                  Data:
                                                </dt>
                                                <dd className="col-md-9 col-7 text-muted">
                                                  {`${this.lepDay((new Date(invoice.created_at_iso)).getDate())}/${this.lepMonth((new Date(invoice.created_at_iso)).getMonth())}/${new Date(invoice.created_at_iso).getFullYear()}`}
                                                </dd>
                                                <dt className="col-md-3 col-5 fw-normal">
                                                  Cartão:
                                                </dt>
                                                <dd className="col-md-9 col-7 text-muted">
                                                  {`${invoice.variables.find((ele) => ele.variable === "payment_data.display_number").value}`}
                                                </dd>
                                              </dl>
                                            </Col>
                                          </Row>
                                        </div>
                                        <div className="invoice-table pb-4">
                                          <Col>
                                            <div className="rounded shadow mb-5">
                                              <div className="detalhes-invoice p-4">
                                                <Row>
                                                  <Col lg={4}>
                                                    <p className="mb-0">Tipo</p>
                                                  </Col>
                                                  <Col lg={3}>
                                                    <p className="mb-0">Preço</p>
                                                  </Col>
                                                  <Col lg={3}>
                                                    <p className="mb-0">Cupom</p>
                                                  </Col>
                                                  <Col lg={2}>
                                                    <p className="mb-0">Total</p>
                                                  </Col>
                                                </Row>
                                              </div>
                                              <div className="px-4">
                                                <Row>
                                                  <Col lg={4} className="d-flex flex-row" style={{margin:"8px 0"}}>
                                                    <span className="detalhes-mobile me-1">Tipo - </span>
                                                    <span>{`${invoice.items.find((ele) => ele.price_cents > 0).description}`}</span>
                                                  </Col>
                                                  <Col lg={3} className="d-flex flex-row" style={{margin:"8px 0"}}>
                                                    <span className="detalhes-mobile me-1">Preço - </span>
                                                    <span>{`R$${invoice.items.find((ele) => ele.price_cents > 0).price_cents / 100}0`}</span>
                                                  </Col>
                                                  <Col lg={3} className="d-flex flex-row" style={{margin:"8px 0"}}>
                                                    <span className="detalhes-mobile me-1">Cupom - </span>
                                                    <span>{`${invoice.items.find((ele) => ele.price_cents < 0).description}`}</span>
                                                  </Col>
                                                  <Col lg={2} className="d-flex flex-row" style={{margin:"8px 0"}}>
                                                    <span className="detalhes-mobile me-1">Total - </span>
                                                    <span>{`${invoice.total_paid}`}</span>
                                                  </Col>
                                                </Row>
                                              </div>
                                            </div>
                                          </Col>
                                        </div>
                                        <div className="invoice-footer pt-4">
                                          <Row>
                                            <Col sm="6">
                                              <div className="text-sm-start text-muted text-center">
                                                <p className="mb-0" style={{ fontSize: "14px" }}>
                                                  Está com problemas?{" "}
                                                  <Link
                                                    to="/ajuda"
                                                    className="text-primary"
                                                  >
                                                    Ajuda
                                                  </Link>
                                                </p>
                                              </div>
                                            </Col>
                                            <Col sm="6">
                                              <div className="text-sm-end text-primary text-center">
                                                <p className="mb-0" style={{ fontSize: "14px" }}>
                                                  <Link
                                                    to="/termos-de-uso"
                                                    className="text-primary"
                                                  >
                                                    Termos e Condições
                                                  </Link>
                                                </p>
                                              </div>
                                            </Col>
                                          </Row>
                                        </div>
                                      </CardBody>
                                    </Card>
                                  </Col>
                                </Row>
                              </Container>
                            </ModalBody>
                          </Modal>
                        ])) : ''}
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