// React Basic and Bootstrap
import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Card,
    CardBody,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

class Price extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pricings1: [
                {
                    id: 1,
                    title: "PLANO ANUAL",
                    price: '39,99',
                    duration: "por mês",
                    buttonText: "TESTAR 7 DIAS GRÁTIS",
                    btnLink: "/registro",
                    features: [
                        { title: "Liberação instantânea" },
                        { title: "Acesso ilimitado a todos os conteúdos" },
                        { title: "Novos conteúdos adicionados semanalmente" },
                        { title: "Eventos exclusivos para usuários" },
                        { title: "Suporte técnico" },
                    ],
                }
            ],
            pricings2: [
                {
                    id: 1,
                    title: "PLANO SEMESTRAL",
                    price: '49,99',
                    duration: "por mês",
                    buttonText: "TESTAR 7 DIAS GRÁTIS",
                    btnLink: "/registro",
                    features: [
                        { title: "Liberação instantânea" },
                        { title: "Acesso ilimitado a todos os conteúdos" },
                        { title: "Novos conteúdos adicionados semanalmente" },
                        { title: "Eventos exclusivos para usuários" },
                        { title: "Suporte técnico" },
                    ],
                }
            ],
            pricings3: [
                {
                    id: 1,
                    title: "PLANO MENSAL",
                    price: '59,99',
                    duration: "por mês",
                    buttonText: "TESTAR 7 DIAS GRÁTIS",
                    btnLink: "/registro",
                    features: [
                        { title: "Liberação instantânea" },
                        { title: "Acesso ilimitado a todos os conteúdos" },
                        { title: "Novos conteúdos adicionados semanalmente" },
                        { title: "Eventos exclusivos para usuários" },
                        { title: "Suporte técnico" },
                    ],
                }
            ],
            activeTab: "1",
            activeIndex1: 1,
            activeIndex2: 5,
        };
        this.toggleTab.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        {/* section title */}
                        <div className="d-flex flex-column text-center">
                            <h1>não perca tempo, {" "}<span className="text-primary">registre-se agora!</span></h1>
                            <p>Escolha seu plano e aproveite agora mesmo todos os benefícios disponíveis:</p>
                        </div>

                        <Row className="align-items-center">
                            <Col xs="12" className="mt-4 pt-2">
                                <div className="text-center">
                                    <Nav
                                        pills
                                        justified
                                        className="rounded-pill justify-content-center d-inline-block border py-1 px-2"
                                    >
                                        <NavItem className="d-inline-block">
                                            <NavLink
                                                className={classnames(
                                                    { active: this.state.activeTab === "1" },
                                                    "px-3",
                                                    "rounded-pill",
                                                    "monthly"
                                                )}
                                                onClick={() => {
                                                    this.toggleTab("1");
                                                }}
                                            >
                                                Anual
                                                {" "}
                                                <span className="badge rounded-pill bg-bluepill">34% Off </span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="d-inline-block">
                                            <NavLink
                                                className={classnames(
                                                    { active: this.state.activeTab === "2" },
                                                    "px-3",
                                                    "rounded-pill",
                                                    "anual"
                                                )}
                                                onClick={() => {
                                                    this.toggleTab("2");
                                                }}
                                            >
                                                Semestral{" "}
                                                <span className="badge rounded-pill bg-bluepill">17% Off </span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="d-inline-block">
                                            <NavLink
                                                className={classnames(
                                                    { active: this.state.activeTab === "3" },
                                                    "px-3",
                                                    "rounded-pill",
                                                    "yearly"
                                                )}
                                                onClick={() => {
                                                    this.toggleTab("3");
                                                }}
                                            >
                                                Mensal
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>


                                <TabContent activeTab={this.state.activeTab} className="tab-content d-flex justify-content-center">
                                    <TabPane tabId="1">
                                        <Row>
                                            {this.state.pricings1.map((pricing, key) => (
                                                <Col
                                                    lg={12}
                                                    key={key}
                                                    md={12}
                                                    xs={12}
                                                    className="mt-4 pt-2"                        >
                                                    <Card className='pricing-rates rounded border-0 shadow'>
                                                        <CardBody className="py-5 d-flex flex-column justify-content-center align-items-center">
                                                            <h2 className="title text-uppercase mb-4 text-center">
                                                                {pricing.title}
                                                            </h2>


                                                            <ul className="list-unstyled mb-0 ps-0 text-center">
                                                                {pricing.features.map((feature, key) => (
                                                                    <li key={key} className="text-dark mb-4">
                                                                        <span className="text-primary h5 me-2">
                                                                            <i className="uil uil-check-circle align-middle"></i>
                                                                        </span>
                                                                        {feature.title}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <p className="text-center mt-3">apenas</p>
                                                            <div className="d-flex mb-1 justify-content-center">
                                                                <span className="price h1 mb-0">
                                                                    R${pricing.price}
                                                                </span>
                                                                <p className="align-self-end mb-1"> / {pricing.duration} </p>
                                                            </div>
                                                            <Link to={pricing.btnLink} className="btn btn-primary mt-4">
                                                                TESTAR 7 DIAS GRÁTIS
                                                            </Link>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="2">
                                        <Row>
                                            {this.state.pricings2.map((pricing, key) => (
                                                <Col
                                                    lg={12}
                                                    key={key}
                                                    md={12}
                                                    xs={12}
                                                    className="mt-4 pt-2"                        >
                                                    <Card className='pricing-rates rounded border-0 shadow'>
                                                        <CardBody className="py-5 d-flex flex-column justify-content-center align-items-center">
                                                            <h2 className="title text-uppercase mb-4 text-center">
                                                                {pricing.title}
                                                            </h2>


                                                            <ul className="list-unstyled mb-0 ps-0 text-center">
                                                                {pricing.features.map((feature, key) => (
                                                                    <li key={key} className="text-dark mb-4">
                                                                        <span className="text-primary h5 me-2">
                                                                            <i className="uil uil-check-circle align-middle"></i>
                                                                        </span>
                                                                        {feature.title}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <p className="text-center mt-3">apenas</p>
                                                            <div className="d-flex mb-1 justify-content-center">
                                                                <span className="price h1 mb-0">
                                                                    R${pricing.price}
                                                                </span>
                                                                <p className="align-self-end mb-1"> / {pricing.duration} </p>
                                                            </div>
                                                            <Link to={pricing.btnLink} className="btn btn-primary mt-4">
                                                                TESTAR 7 DIAS GRÁTIS
                                                            </Link>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="3">
                                        <Row>
                                            {this.state.pricings3.map((pricing, key) => (
                                                <Col
                                                    lg={12}
                                                    key={key}
                                                    md={12}
                                                    xs={12}
                                                    className="mt-4 pt-2"                        >
                                                    <Card className='pricing-rates rounded border-0 shadow'>
                                                        <CardBody className="py-5 d-flex flex-column justify-content-center align-items-center">
                                                            <h2 className="title text-uppercase mb-4 text-center">
                                                                {pricing.title}
                                                            </h2>


                                                            <ul className="list-unstyled mb-0 ps-0 text-center">
                                                                {pricing.features.map((feature, key) => (
                                                                    <li key={key} className="text-dark mb-4">
                                                                        <span className="text-primary h5 me-2">
                                                                            <i className="uil uil-check-circle align-middle"></i>
                                                                        </span>
                                                                        {feature.title}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <p className="text-center mt-3">apenas</p>
                                                            <div className="d-flex mb-1 justify-content-center">
                                                                <span className="price h1 mb-0">
                                                                    R${pricing.price}
                                                                </span>
                                                                <p className="align-self-end mb-1"> / {pricing.duration} </p>
                                                            </div>
                                                            <Link to={pricing.btnLink} className="btn btn-primary mt-4">
                                                                TESTAR 7 DIAS GRÁTIS
                                                            </Link>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </TabPane>

                                    {/* <TabPane tabId="2">
                    <Row>
                      {this.state.pricings2.map((pricing, key) => (
                        <Col
                          lg={12}
                          key={key}
                          md={12}
                          xs={12}
                          className="mt-4 pt-2"
                        >
                          <div
                            className={
                              pricing.isActive
                                ? "pricing-rates bg-white py-5 p-4 rounded"
                                : "pricing-rates bg-light py-5 p-4 rounded"
                            }
                          >
                            <h6
                              className={
                                pricing.isActive
                                  ? "title text-uppercase fw-bold mb-4 text-primary"
                                  : "title text-uppercase fw-bold mb-4"
                              }
                            >
                              {pricing.title}
                            </h6>
                            <div className="d-flex mb-4">
                              <span className="h4 mb-0 mt-2">$</span>
                              <span className="price h1 mb-0">
                                {pricing.price}
                              </span>
                              <span className="h4 align-self-end mb-1">
                                /{pricing.duration}
                              </span>
                            </div>

                            <ul className="list-unstyled mb-0 ps-0">
                              {pricing.features.map((feature, key) => (
                                <li key={key} className="text-muted mb-0">
                                  <span className="text-primary h5 me-2">
                                    <i className="uil uil-check-circle align-middle"></i>
                                  </span>
                                  {feature.title}
                                </li>
                              ))}
                            </ul>
                            <Link to="#" className="btn btn-primary mt-4">
                            TESTAR 7 DIAS GRÁTIS
                              </Link>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </TabPane>

                  <TabPane tabId="3">
                    <Row>
                      {this.state.pricings3.map((pricing, key) => (
                        <Col
                          lg={12}
                          key={key}
                          md={12}
                          xs={12}
                          className="mt-4 pt-2"
                        >
                          <div
                            className={
                              pricing.isActive
                                ? "pricing-rates bg-white py-5 p-4 rounded"
                                : "pricing-rates bg-light py-5 p-4 rounded"
                            }
                          >
                            <h6
                              className={
                                pricing.isActive
                                  ? "title text-uppercase fw-bold mb-4 text-primary"
                                  : "title text-uppercase fw-bold mb-4"
                              }
                            >
                              {pricing.title}
                            </h6>
                            <div className="d-flex mb-4">
                              <span className="h4 mb-0 mt-2">$</span>
                              <span className="price h1 mb-0">
                                {pricing.price}
                              </span>
                              <span className="h4 align-self-end mb-1">
                                /{pricing.duration}
                              </span>
                            </div>

                            <ul className="list-unstyled mb-0 ps-0">
                              {pricing.features.map((feature, key) => (
                                <li key={key} className="text-muted mb-0">
                                  <span className="text-primary h5 me-2">
                                    <i className="uil uil-check-circle align-middle"></i>
                                  </span>
                                  {feature.title}
                                </li>
                              ))}
                            </ul>
                            <Link to="#" className="btn btn-primary mt-4">
                            TESTAR 7 DIAS GRÁTIS
                              </Link>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </TabPane> */}
                                </TabContent>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </React.Fragment>
        );
    }
}

export default Price;
