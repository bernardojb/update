import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Table, Card, CardBody } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";
import logoUpdate from "../../../assets/images/LogoUpdate.svg";

class PageInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: "Inclusive Insights", qty: 2, rate: 2600 },
        { id: 2, name: "Handy Guide", qty: 1, rate: 3660 },
        { id: 3, name: "Premiere Product", qty: 3, rate: 4580 },
      ],
    };
    this.sendMail.bind(this);
    this.callNumber.bind(this);
  }

  sendMail() {
    window.location.href = "mailto:contact@example.com";
  }

  callNumber() {
    window.location.href = "tel:+152534-468-854";
  }

  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
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

  render() {
    return (
      <React.Fragment>
        <section className="bg-profile">
          <Container>
            <Row className="mt-5 pt-4 pt-sm-0 justify-content-center">
              <Col lg="10">
                <Card className="shadow rounded border-0">
                  <CardBody>
                    <div className="invoice-top pb-4 border-bottom">
                      <Row>
                        <Col md="8">
                          <div className="logo-invoice mb-4" style={{ maxWidth: "88px" }}>
                            <img src={logoUpdate} />
                          </div>
                          <p className="text-muted" style={{ fontSize: "14px" }}>LIFESAVERS TREINAMENTO PROFISSIONAL E GERENCIAL LTDA CNPJ - 10.535.504/0001-60</p>
                        </Col>

                        <Col md="4" className="mt-4 mt-sm-0">
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
                        <Col md={{ size: 8, order: 1 }} xs={{ order: 2 }}>
                          <dl className="row">
                            <dt className="col-md-3 col-5 fw-normal">
                              Código:
                            </dt>
                            <dd className="col-md-9 col-7 text-muted">
                              x
                            </dd>

                            <dt className="col-md-3 col-5 fw-normal">
                              Nome:
                            </dt>
                            <dd className="col-md-9 col-7 text-muted">
                              x
                            </dd>

                            <dt className="col-md-3 col-5 fw-normal">
                              Endereço:
                            </dt>
                            <dd className="col-md-9 col-7 text-muted">
                              <p className="mb-0">x</p>
                            </dd>

                            <dt className="col-md-3 col-5 fw-normal">
                              Telefone:
                            </dt>
                            <dd className="col-md-9 col-7 text-muted">
                              x
                            </dd>

                            <dt className="col-md-3 col-5 fw-normal">
                              Data:
                            </dt>
                            <dd className="col-md-9 col-7 text-muted">
                              x
                            </dd>

                            <dt className="col-md-3 col-5 fw-normal">
                              Cartão:
                            </dt>
                            <dd className="col-md-9 col-7 text-muted">
                              x
                            </dd>
                          </dl>
                        </Col>
                      </Row>
                    </div>

                    <div className="invoice-table pb-4">
                      {/* <div className="table-responsive bg-white shadow rounded">
                        <Table className="mb-0 table-center invoice-tb">
                          <thead className="bg-white">
                            <tr>
                              <th scope="col" className="border-bottom text-start">
                                Tipo
                              </th>
                              <th scope="col" className="border-bottom text-start">
                                Quantidade
                              </th>
                              <th scope="col" className="border-bottom">Preço</th>
                              <th scope="col" className="border-bottom">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.items.map((item, key) => (
                              <tr key={key}>
                                <th scope="row" className="text-start">
                                  {key + 1}
                                </th>
                                <td className="text-start">{item.name}</td>
                                <td>{item.qty}</td>
                                <td>$ {item.rate}</td>
                                <td>$ {item.qty * item.rate}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div> */}
                      <Col>
                        <div className="rounded shadow mb-5">
                          <div className="d-flex flex-row justify-content-between detalhes-invoice p-4">
                            <p>Tipo</p>
                            <p>Quantidade</p>
                            <p>Preço</p>
                            <p>Total</p>
                          </div>
                          <div className="d-flex flex-row justify-content-between px-4">
                            <p>x</p>
                            <p>x</p>
                            <p>x</p>
                            <p>x</p>
                          </div>
                        </div>

                      </Col>

                      {/* <Row>
                        <Col lg="4" md="5" className="ms-auto">
                          <ul className="list-unstyled h6 fw-normal mt-4 mb-0 ms-md-5 ms-lg-4">
                            <li className="text-muted d-flex justify-content-between">
                              Subtotal :<span>$ 22600</span>
                            </li>
                            <li className="text-muted d-flex justify-content-between">
                              Taxes :<span> 0</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              Total :<span>$ 22600</span>
                            </li>
                          </ul>
                        </Col>
                      </Row> */}
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
        </section>
      </React.Fragment>
    );
  }
}

export default PageInvoice;
