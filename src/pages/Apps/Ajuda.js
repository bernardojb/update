// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Collapse,
} from "reactstrap";
import {Helmet} from "react-helmet";

import Contact from './PageContactTwo2'

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";

class PageTerms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "HOME", link: "/" },
        { id: 2, name: "AJUDA", link: "/ajuda" },
      ],
      col1: true,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
    };
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col4 = this.t_col4.bind(this);
    this.t_col5 = this.t_col5.bind(this);
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col4: false,
      col5: false,
    });
  }
  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col2: false,
      col1: false,
      col4: false,
      col5: false,
    });
  }
  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col2: false,
      col3: false,
      col1: false,
      col5: false,
    });
  }
  t_col5() {
    this.setState({
      col5: !this.state.col5,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
    });
  }

  componentDidMount() {
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
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ajuda | Update Anestesiologia</title>
                <link rel="canonical" href="https://www.grupoupdate.com.br/sobre" />
                </Helmet>
        {/* breadcrumb */}
        <PageBreadcrumb pathItems={this.state.pathItems} >
            <h1>perguntas frequentes</h1>
        </PageBreadcrumb>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={9}>
                <Card className="shadow border-0 rounded">
                  <CardBody>
                    <div className="faq-content mt-4">
                      <div className="accordion" id="accordionExample">
                        <Card className="border-0 rounded mb-2">
                          <Link
                            to="#"
                            onClick={this.t_col1}
                            className={
                              this.state.col1
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-custom p-3"
                              id="headingOne"
                            >
                              <h6 className="title mb-0">
                              Onde posso fazer o download do app?
                                <i
                                  className={
                                    this.state.col1
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col1}>
                            <CardBody>
                              <p className="mb-0 faq-ans">
                              Nosso app ainda está em desenvolvimento! Acompanhe nossas redes sociais para ficar por dentro das novidades. <a className="text-primary" target="_blank" href="https://www.instagram.com/update.anestesiologia/">@update.anestesiologia</a>
                              </p>
                              <br/>
                              <div className="d-flex flex-column">
                              {/* <a className="text-primary">{'>'} Download iOS </a>
                              <a className="text-primary">{'>'} Download Android </a> */}
                              </div>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded mb-2">
                          <Link
                            to="#"
                            onClick={this.t_col2}
                            className={
                              this.state.col2
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-custom p-3"
                              id="headingTwo"
                            >
                              <h6 className="title mb-0">
                                Quais as formas de pagamento?
                                <i
                                  className={
                                    this.state.col2
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col2}>
                            <CardBody>
                              <p className="mb-0 faq-ans">
                              Aceitamos os seguintes cartões de crédito: American Express, Diners, Elo, MasterCard, Visa.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded mb-2">
                          <Link
                            to="#"
                            onClick={this.t_col3}
                            className={
                              this.state.col3
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-custom p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                              Quais planos disponíveis?
                                <i
                                  className={
                                    this.state.col3
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col3}>
                            <CardBody>
                              <p className="mb-0 faq-ans">
                              Plano mensal, Semestral e Anual!
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded mb-2">
                          <Link
                            to="#"
                            onClick={this.t_col4}
                            className={
                              this.state.col4
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-custom p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                              O app está disponível em quais plataformas?
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col4}>
                            <CardBody>
                              <p className="mb-0 faq-ans">
                              O app será disponibilizado para iOS e Android!
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>
                      </div>
                    </div>

                    {/* <div className="mt-3">
                      <Link to="#" className="btn btn-primary mt-2 me-2">
                        Accept
                      </Link>
                      <Link to="#" className="btn btn-outline-primary mt-2">
                        Decline
                      </Link>
                    </div> */}
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Contact></Contact>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageTerms;
