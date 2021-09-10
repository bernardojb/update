import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import americanEx from "../../assets/images/payments/american-ex.png";
import discover from "../../assets/images/payments/discover.png";
import masterCard from "../../assets/images/payments/master-card.png";
import paypal from "../../assets/images/payments/paypal.png";
import visa from "../../assets/images/payments/visa.png";

//Import Images
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: "Como funciona", link: "/" },
        { title: "Planos", link: "/" },
        { title: "Login", link: "/" },
        { title: "Registrar", link: "/" },
      ],
      grid2: [
        { title: "Android", link: "/" },
        { title: "iOS", link: "/" },
      ],
      grid3: [
        { title: "Sobre o UPDATE", link: "/" },
        { title: "Termos de Uso", link: "/" },
        { title: "Política de Privacidade", link: "/" },
        { title: "Ajuda", link: "/" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* <footer className={this.props.isLight ? "footer bg-light" : "footer"}>
          <Container>
            <Row>
              <Col
                lg="4"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <Link to="#" className="logo-footer">
                  <img
                    src={this.props.isLight ? logodark : logolight}
                    height="24"
                    alt=""
                  />
                </Link>
                <p className={this.props.isLight ? "mt-4 text-muted" : "mt-4"}>
                  Uma plataforma digital com os mais recentes e importantes artigos médicos apresentados de forma fácil, rápida e didática. Acreditamos que a atualização deve estar ao alcance de todos.
                </p>
                <ul className={this.props.isLight ? "list-unstyled social-icon social mb-0 m t-4" : "list-unstyled social-icon foot-social-icon mb-0 mt-4"}>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="facebook"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="instagram"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="twitter"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="linkedin"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col
                lg="2"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Company
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid1.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>{" "}
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="3"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Usefull Links
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid2.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="3"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Usefull Links
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid3.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </footer> */}
        {/* <footer className="footer footer-bar">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="6">
                <div className="text-sm-start">
                  <p className="mb-0">
                    © 2020-21 Landrick. Develop by{" "}
                    <i className="mdi mdi-heart text-danger"></i>{" "}
                    <a
                      href="https://themesbrand.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-reset"
                    >
                      Themesbrand
                    </a>
                    .
                  </p>
                </div>
              </Col>

              <Col sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled text-sm-end mb-0">
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={americanEx}
                        className="avatar avatar-ex-sm"
                        title="American Express"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={discover}
                        className="avatar avatar-ex-sm"
                        title="Discover"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={masterCard}
                        className="avatar avatar-ex-sm"
                        title="Master Card"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={paypal}
                        className="avatar avatar-ex-sm"
                        title="Paypal"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={visa}
                        className="avatar avatar-ex-sm"
                        title="Visa"
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer> */}
      </React.Fragment>
    );
  }
}

export default Footer;
