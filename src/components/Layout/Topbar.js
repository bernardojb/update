import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Container, Button } from "reactstrap";
//Import images
import logoUpdate from "../../assets/images/LogoUpdate.svg";
//Auth
import authService from "../../services/auth.service";
import FeatherIcon from "feather-icons-react";

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

    // const logout = document.getElementById("ghostbusters");
    // if (logout) {
    //   logout.addEventListener('click', function (e) {
    //     authService.logout()
    //   })
    // }

    const user = JSON.parse(localStorage.getItem('user'))

    

    if (user) {
      authService.getSelf().then(data => {
        this.setState({
          ...this.state, profile: data.data
        })
      })
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
        {this.props.tagline ? this.props.tagline : null}

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
                  to="/page-profile"
                  className="d-flex flex-row justify-content-center align-items-center"
                  style={{ color: "white" }}
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
            </Container>
          ) : (
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

        {/* <Modal
          isOpen={this.state.wishlistModal}
          tabIndex="-1"
          centered
          contentClassName="rounded shadow-lg border-0 overflow-hidden"
          toggle={this.toggleWishlistModal}
        >
          <ModalBody className="py-5">
            <div className="text-center">
              <div
                className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto"
                style={{ height: "95px", width: "95px" }}
              >
                <h1 className="mb-0">
                  <i className="uil uil-heart-break align-middle"></i>
                </h1>
              </div>
              <div className="mt-4">
                <h4>Your wishlist is empty.</h4>
                <p className="text-muted">
                  Create your first wishlist request...
                </p>
                <div className="mt-4">
                  <Link to="#" className="btn btn-outline-primary">
                    + Create new wishlist
                  </Link>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal> */}
      </React.Fragment>
    );
  }
}

export default withRouter(Topbar);
