import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Container, Button } from "reactstrap";
//Import images
import logoUpdate from "../../assets/images/LogoUpdate.svg";
//Auth
import authService from "../../services/auth.service";
import FeatherIcon from "feather-icons-react";
import axios from "axios";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isLogged: false,
      profile: {},
      dropdownOpenShop: false,
      navLinks: [
        //Note : each child and nested child must have unique id
        { id: 1, title: "Login", link: "/login", class: "login-header" },
        { id: 2, title: "Registrar", link: "/registro", class: "registro-header" },
      ]
    };
    this.toggleLine = this.toggleLine.bind(this);
    this.toggleDropdownIsOpen.bind(this);
  }

  toggleDropdownIsOpen = () => {
    this.setState({
      dropdownIsOpen: !this.state.dropdownIsOpen,
    });
  };

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("top-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }

    authService.getSelf().then(data => {
      this.setState({
        ...this.state, profile: data.data
      })
    })

    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      this.setState({
        isLogged: true
      })
    } else {
      this.setState({
        isLogged: false
      })
    }
  }

  render() {

    const { profile } = this.state

    return (
      <React.Fragment>
        {/* {this.props.tagline ? this.props.tagline : null} */}

        <header id="topnav" className="defaultscroll sticky">
          {this.state.isLogged ? (
            <Container className="d-flex justify-content-between" style={{ width: "100%" }}>
              <div>
                {this.props.hasDarkTopBar ? (
                  <a className="logo" href="/">
                    <img src={logoUpdate} height="24" className="logo-light-mode" alt="" />
                    <img src={logoUpdate} height="24" className="logo-dark-mode" alt="" />
                  </a>
                ) :
                  <span></span>
                }
              </div>
              <div className="d-flex justify-content-end align-items-center header-profile">
                <Link
                  to="/perfil"
                  className="d-flex flex-row justify-content-center align-items-center profile-link"
                  // style={{ color: "white", background:"none !important", backgroundColor:"none !important", transition:"none !important" }}
                >
                  <FeatherIcon
                    icon="user"
                    className="fea icon-sm me-1"
                  />
                  <p className="mb-0">{profile.full_name}</p>
                </Link>
                <Button
                  className="logout-btn"
                  onClick={() => {
                    authService.logout()
                    if (window.location.pathname === "/") {
                      window.location.reload()
                    } else {
                      this.props.history.push("/");
                    }
                  }}>
                  <FeatherIcon
                    icon="log-out"
                    className="fea icon-sm ms-4"
                    style={{ color: "red" }}
                  />
                </Button>
              </div>
              <div className="header-profile-mobile">
                <div className="menu-extras">
                  <div className="menu-item">
                    <Link
                      to="#"
                      onClick={this.toggleLine}
                      className={
                        this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"
                      }
                    >
                      <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </Link>
                  </div>
                </div>

                <div
                  id="navigation"
                  className="navigation-menu-mobile"
                  style={{ display: this.state.isOpen ? "block" : "none" }}
                >
                  <ul className="navigation-menu" id="top-menu">
                    <li>
                      {this.props.hasDarkTopBar ? (
                        <>
                          <div className="d-flex flex-row justify-content-start align-items-center mt-2">
                            <FeatherIcon
                              icon="user"
                              className="fea me-3"
                              width="20px"
                              height="20px"
                            />
                            <Link style={{}} className="" to="/perfil">
                              <p className="my-3" style={{ fontWeight: "bold", color: "white" }}>
                                Informações Pessoais
                              </p>
                            </Link>
                          </div>
                          <div className="d-flex flex-row justify-content-start align-items-center">
                            <FeatherIcon
                              icon="shopping-cart"
                              className="fea me-3"
                              width="20px"
                              height="20px"
                            />
                            <Link style={{}} className="" to="/assinatura">
                              <p className="my-3" style={{ fontWeight: "bold", color: "white" }}>
                                Assinatura
                              </p>
                            </Link>
                          </div>
                          <div className="d-flex flex-row justify-content-start align-items-center">
                            <i className="uil uil-apple me-3" style={{fontSize:"20px"}}></i>
                            <Link style={{}} className="" to="/">
                              <p className="my-3" style={{ fontWeight: "bold", color: "white" }}>
                                Download App Store
                              </p>
                            </Link>
                          </div>
                          <div className="d-flex flex-row justify-content-start align-items-center">
                            <i className="uil uil-google-play me-3" style={{fontSize:"20px"}}></i>
                            <Link style={{}} className="" to="/">
                              <p className="my-3" style={{ fontWeight: "bold", color: "white" }}>
                                Download Google Play
                              </p>
                            </Link>
                          </div>
                          <div className="d-flex flex-row justify-content-start align-items-center">
                            <FeatherIcon
                              icon="help-circle"
                              className="fea me-3"
                              width="20px"
                              height="20px"
                            />
                            <Link style={{}} className="" to="/ajuda">
                              <p className="my-3" style={{ fontWeight: "bold", color: "white" }}>
                                Ajuda
                              </p>
                            </Link>
                          </div>
                          <div className="d-flex flex-row justify-content-start align-items-center">
                            <FeatherIcon
                              icon="mail"
                              className="fea me-3"
                              width="20px"
                              height="20px"
                            />
                            <Link style={{}} className="" to="/auth-login-three">
                              <p className="my-3" style={{ fontWeight: "bold", color: "white" }}>
                                Contato
                              </p>
                            </Link>
                          </div>
                          <div className="d-flex flex-row justify-content-start align-items-center">
                            <FeatherIcon
                              icon="info"
                              className="fea me-3"
                              width="20px"
                              height="20px"
                            />
                            <Link style={{}} className="" to="/sobre">
                              <p className="my-3" style={{ fontWeight: "bold", color: "white" }}>
                                Sobre o Update
                              </p>
                            </Link>
                          </div>
                          <div className="d-flex flex-row justify-content-start align-items-center">
                            <FeatherIcon
                              icon="shield"
                              className="fea me-3"
                              width="20px"
                              height="20px"
                            />
                            <Link style={{}} className="" to="/politica-de-privacidade">
                              <p className="my-3" style={{ fontWeight: "bold", color: "white" }}>
                                Política de privacidade
                              </p>
                            </Link>
                          </div>
                          <div className="d-flex flex-row justify-content-start align-items-center">
                            <FeatherIcon
                              icon="book"
                              className="fea me-3"
                              width="20px"
                              height="20px"
                            />
                            <Link style={{}} className="" to="/termos-de-uso">
                              <p className="my-3" style={{ fontWeight: "bold", color: "white" }}>
                                Termos de Uso
                              </p>
                            </Link>
                          </div>
                          <div className="d-flex flex-row justify-content-start align-items-center">
                            <FeatherIcon
                              icon="log-out"
                              className="fea me-3"
                              width="20px"
                              height="20px"
                              color="red"
                            />
                            <Button
                            className="logout-btn"
                            onClick={() => {
                              authService.logout()
                              if (window.location.pathname === "/") {
                                window.location.reload()
                              } else {
                                this.props.history.push("/");
                              }
                            }}
                            >
                              <p className="my-3" style={{ fontWeight: "bold", color: "red" }}>
                                Sair
                              </p>
                            </Button>
                          </div>

                        </>
                      ) : (
                        <span></span>
                      )
                      }
                    </li>
                  </ul>
                </div>
              </div>

            </Container>
          )
            :
            (
              <Container>
                <div>
                  {this.props.hasDarkTopBar ? (
                    <a className="logo" href="/">
                      <img src={logoUpdate} height="24" className="logo-light-mode" alt="" />
                      <img src={logoUpdate} height="24" className="logo-dark-mode" alt="" />
                    </a>
                  ) :
                    <span></span>
                  }
                </div>
                {(() => {
                  return (
                    <div className="buy-button">
                      {this.props.hasDarkTopBar ? (
                        <>
                          <Link
                            to="/registro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary header-btn"
                          >
                            Registrar
                          </Link>

                        </>
                      ) : <span></span>
                      }
                    </div>
                  );
                })()}

                {/* MOBILE HAMBURGER */}
                <div className="menu-extras">
                  <div className="menu-item">
                    <Link
                      to="#"
                      onClick={this.toggleLine}
                      className={
                        this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"
                      }
                    >
                      <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </Link>
                  </div>
                </div>

                <div
                  id="navigation"
                  style={{ display: this.state.isOpen ? "block" : "none" }}
                >
                  <ul className="navigation-menu" id="top-menu">
                    {this.state.navLinks.map((navLink, key) =>
                      navLink.child ? (
                        null
                      ) : (
                        <li key={key}>
                          {this.props.hasDarkTopBar ? (
                            <Link className={navLink.class} to={navLink.link}>{navLink.title}</Link>
                          ) : (
                            <span></span>
                          )
                          }
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </Container>
            )}
        </header>
      </React.Fragment>
    );
  }
}

export default withRouter(Topbar);
