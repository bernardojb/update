// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Label,
  Card,
  CardBody,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

class PageContactTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Contactvisible: false,
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.sendMail.bind(this);
    this.callNumber.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
    alert('Um nome foi enviado: ' + this.state.value);
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidMount() {
    document.getElementById("topnav").classList.add("bg-white");
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentDidUpdate() {
    console.log('nome >>>>>' + this.state.name);
    console.log('email >>>>>' + this.state.email);
    console.log('assunto >>>>>' +this.state.subject);
    console.log('mensagem >>>>>' +this.state.message);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  sendMail() {
    window.location.href = "mailto:contato@grupoupdate.com.br";
  }

  callNumber() {
    window.location.href = "tel:+5511999998181";
  }

  openMap() {
    window.location.href = "https://goo.gl/maps/u4TcwJZtMfisZWXM6";
  }

  render() {

    return (
      <React.Fragment>
        <section className="section pt-5 mt-4">

          <h1 className="text-center">Contato</h1>

          <Container className="mt-5">
            <Row className="align-items-center">
              <Col
                lg={5}
                md={{ size: 6, order: 1 }}
                xs={{ order: 2 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <Card className="custom-form rounded shadow border-0">
                  <CardBody>
                    <Alert
                      color="primary"
                      isOpen={this.state.Contactvisible}
                      toggle={() => {
                        this.setState({
                          Contactvisible: !this.state.Contactvisible,
                        });
                      }}
                    >
                      Contact details send successfully.
                    </Alert>
                    <Form
                      method="post"
                      onSubmit={this.handleSubmit}
                      name="contact-form"
                      id="contact-form"
                    >
                      <Row>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Seu nome <span className="text-danger">*</span>
                            </Label>
                            <Input
                              name="name"
                              id="name"
                              type="text"
                              className="form-control "
                              placeholder="Primeiro Nome"
                              value={this.state.name}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Seu email <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              {/* <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i> */}
                            </div>
                            <Input
                              name="email"
                              id="email"
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              required
                              value={this.state.email}
                              onChange={this.handleChange}
                            />
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">Assunto</Label>
                            <div className="form-icon position-relative">
                              {/* <i>
                                <FeatherIcon
                                  icon="book"
                                  className="fea icon-sm icons"
                                />
                              </i> */}
                            </div>
                            <Input
                              name="subject"
                              id="subject"
                              className="form-control"
                              placeholder="Como podemos te ajudar?"
                              required
                              value={this.state.subject}
                              onChange={this.handleChange}
                            />
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div className="mb-3">
                            <Label className="form-label">Mensagem</Label>
                            <Input
                              name="message"
                              id="message"
                              className="form-control"
                              placeholder="Qual a sua dificuldade?"
                              required
                              value={this.state.message}
                              onChange={this.handleChange}
                              style={{display:'flex', flexDirection:'column', alignItems:'start', justifyContent:'start'}}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12" className="text-center">
                          <div className="d-grid">
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-primary btn-block"
                              value="Enviar Mensagem"
                            />
                          </div>
                          <div id="simple-msg"></div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={7} md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                <div className="title-heading ms-lg-4">
                  <p className="text-dark">
                    Você pode entrar em contato com nosso suporte caso esteja com dúvidas sobre o app Update!
                    <br /><br />Também temos uma página de <Link to="/ajuda"><span className="text-primary fw-bold">
                      Perguntas Frequentes
                    </span></Link>
                  </p>
                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="mail"
                          className="fea icon-m-md text-dark me-3"
                        />
                      </i>
                    </div>
                    <div className="flex-1 content">
                      <h6 className="title mb-0">Email</h6>
                      <a
                      href="mailto:contato@grupoupdate.com.br"
                      className="text-primary"
                    >
                      contato@grupoupdate.com.br
                    </a>
                    </div>
                  </div>

                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="phone"
                          className="fea icon-m-md text-dark me-3"
                        />
                      </i>
                    </div>
                    <div className="flex-1 content">
                      <h6 className="title mb-0">Telefone</h6>
                      <a
                      href="tel:+5511999998181"
                      className="text-primary "
                    >
                      +55 (11) 9 9999-8181
                    </a>
                    </div>
                  </div>

                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="map-pin"
                          className="fea icon-m-md text-dark me-3"
                        />
                      </i>
                    </div>
                    <div className="flex-1 content">
                      <h6 className="title mb-0">Endereço</h6>
                      <Link
                        to=""
                        onClick={this.openMap}
                        className="video-play-icon  text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver no Google Maps
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PageContactTwo;