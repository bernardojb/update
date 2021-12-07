import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Label,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import imgbg from "../../../assets/images/account/bg.png";
import profileImg from "../../../assets/images/client/profile.png";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
//New
import AuthService from "../../../services/auth.service";
import authService from "../../../services/auth.service";


class PageProfile extends Component {
  constructor(props) {
    super(props);
    this.handleProfile = this.handleProfile.bind(this);

    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    // this.onChangeCpf = this.onChangeCpf.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeCrm = this.onChangeCrm.bind(this);
    //Endereço
    this.onChangeCep = this.onChangeCep.bind(this);
    this.onChangeStreet = this.onChangeStreet.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeNeighborhood = this.onChangeNeighborhood.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    //Senha
    this.onChangeCurrentPassword = this.onChangeCurrentPassword.bind(this);
    this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
    this.onChangeConfirmNewPassword = this.onChangeConfirmNewPassword.bind(this);


    this.state = {
      profile: {},
      plano: {},
      sub: {},
      conta: [
        {
          id: 1,
          icon: "user",
          className: "navbar-item account-menu px-0 active",
          title: "Informações Pessoais",
          link: "/page-profile",
        },
        {
          id: 2,
          icon: "shopping-cart",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Assinatura",
          link: "/page-payments",
        },
        // {
        //   id: 3,
        //   icon: "settings",
        //   className: "navbar-item account-menu px-0 mt-2",
        //   title: "Configuração",
        //   link: "/page-works",
        // },
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
      fullName: "",
      birthday: "",
      // cpf: "",
      // email: "",
      phone: "",
      crm: "",
      cep: "",
      street: "",
      number: "",
      neighborhood: "",
      state: "",
      city: "",
      message: "",
      //senha
      currentPassword:"",
      newPassword:"",
      confirmNewPassword:"",
    };
  }

  onChangeFullName(e) {
    this.setState({
      fullName: e.target.value
    });
  }

  onChangeBirthday(e) {
    this.setState({
      birthday: e.target.value
    });
  }

  // onChangeCpf(e) {
  //   this.setState({
  //     cpf: e.target.value
  //   });
  // }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });

  }

  onChangeCrm(e) {
    this.setState({
      crm: e.target.value
    });
  }

  onChangeCep(e) {
    this.setState({
      cep: e.target.value
    });

  }

  onChangeStreet(e) {
    this.setState({
      street: e.target.value
    });
  }

  onChangeNumber(e) {
    this.setState({
      number: e.target.value
    });
  }

  onChangeNeighborhood(e) {
    this.setState({
      neighborhood: e.target.value
    });
  }

  onChangeState(e) {
    this.setState({
      state: e.target.value
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  //senha
  onChangeCurrentPassword(e){
    this.setState({
      currentPassword: e.target.value
    });
  }

  onChangeNewPassword(e){
    this.setState({
      newPassword: e.target.value
    });
  }

  onChangeConfirmNewPassword(e){
    this.setState({
      confirmNewPassword: e.target.value
    });
  }

  handleProfile(e) {
    e.preventDefault();

    this.setState({
      message: "",
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.updateProfile(
        this.state.fullName,
        this.state.birthday,
        // this.state.cpf,
        // this.state.phone,
        this.state.crm,
        //endereço
        this.state.cep,
        this.state.street,
        this.state.number,
        this.state.neighborhood,
        this.state.state,
        this.state.city,
      ).then(
        response => {
          this.setState({
            message: response.data.message,
          });
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            message: resMessage,
          });
        }
      );
    }
  }

  handleDeleteUser() {
    authService.deleteUser()
      .then(() => {
        authService.logout();
        this.props.history.push("/");
        window.location.reload()
      })
  }

  changePassword(e) {
    e.preventDefault();

    this.setState({
      message: "",
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.changeProfilePassword(
        this.state.currentPassword,
        this.state.newPassword,
        this.state.confirmNewPassword,

      ).then(
        response => {
          this.setState({
            message: response.data.message,
          });
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            message: resMessage,
          });
        }
      );
    }
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
      console.log(">>>>>>>>>>>>>>>> sub", this.state.sub)
      authService.getPlan().then(dt => {
        this.setState({
          ...this.state, plano: dt.data.data.find(d => d.identifier == data.data.data.planIdentifier)
        })
      })
    })

    //Header
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
              <Col lg="8" xs="12">
                <Card className="border-0 rounded shadow">
                  <CardBody>
                    {/* <h3 className="text-md-start text-center">
                      Informações Pessoais
                    </h3>
                    <div className="mt-3 text-md-start text-center d-sm-flex">
                      <img
                        src={profileImg}
                        className="avatar float-md-left avatar-medium rounded-circle shadow me-md-4"
                        alt=""
                      />
                      <div className="mt-md-4 mt-3 mt-sm-0">
                        <Link to="#" className="btn btn-primary mt-2">
                          {" "}
                          Alterar foto{" "}
                        </Link>{" "}
                        <Link
                          to="#"
                          className="mt-2 ms-5 text-danger"
                        >
                          Remover
                        </Link>
                      </div>
                    </div> */}
                    {/* <Alert
                      color="primary"
                      isOpen={this.state.successMsg}
                      toggle={() => {
                        this.setState({ successMsg: !this.state.successMsg });
                      }}
                    >
                      Data sended successfully.
                    </Alert> */}
                    <Form
                      onSubmit={this.handleProfile}
                      ref={c => {
                        this.form = c
                      }}
                    >
                      <Row className="mt-4">
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">Seu nome</Label>
                            <Input
                              name="name"
                              id="first"
                              type="text"
                              className="form-control ps-2"
                              placeholder={profile.full_name}
                              value={this.state.fullName}
                              onChange={this.onChangeFullName}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">Data de Nascimento</Label>
                            <Input
                              name="birthday"
                              id="birthday"
                              type="text"
                              className="form-control ps-2"
                              // placeholder={profile.birthday}
                              placeholder={profile != null && profile.birthday ? (`${this.lepDay(profile.birthday.getDate())}/${this.lepMonth(profile.birthday.getMonth())}/${profile.birthday.getFullYear()}`) : null}
                              value={this.state.birthday}
                              onChange={this.onChangeBirthday}
                            />
                          </div>
                        </Col>
                        {/* <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">CPF</Label>
                            <Input
                              name="cpf"
                              id="cpf"
                              type="text"
                              className="form-control ps-2"
                              placeholder={profile.cpf}
                              value={this.state.cpf}
                              onChange={this.onChangeCpf}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">Email</Label>
                            <Input
                              name="email"
                              id="email"
                              type="email"
                              className="form-control ps-2"
                              placeholder="Email"
                            />
                          </div>
                        </Col> */}
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">Telefone</Label>
                            <Input
                              name="phone"
                              id="phone"
                              type="phone"
                              className="form-control ps-2"
                              placeholder={profile.phone}
                              value={this.state.phone}
                              onChange={this.onChangePhone}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">CRM</Label>
                            <Input
                              name="crm"
                              id="crm"
                              type="text"
                              className="form-control ps-2"
                              placeholder={profile.crm}
                              value={this.state.crm}
                              onChange={this.onChangeCrm}
                            />
                          </div>
                        </Col>
                        {/* Here*/}
                        <h3 className="text-md-start text-center mt-5">
                          Endereço de cobrança
                        </h3>
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">CEP</Label>
                            <Input
                              name="cep"
                              id="cep"
                              type="text"
                              className="form-control ps-2"
                              placeholder={profile.cep}
                              value={this.state.cep}
                              onChange={this.onChangeCep}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">Endereço</Label>
                            <Input
                              name="street"
                              id="street"
                              type="text"
                              className="form-control ps-2"
                              placeholder={profile.street}
                              value={this.state.street}
                              onChange={this.onChangeStreet}
                            />
                          </div>
                        </Col>
                        <Col md="4">
                          <div className="mb-3">
                            <Label className="form-label">Número</Label>
                            <Input
                              name="number"
                              id="number"
                              type="text"
                              className="form-control ps-2"
                              placeholder={profile.number}
                              value={this.state.number}
                              onChange={this.onChangeNumber}
                            />
                          </div>
                        </Col>
                        <Col md="8">
                          <div className="mb-3">
                            <Label className="form-label">Bairro</Label>
                            <Input
                              name="neighborhood"
                              id="neighborhood"
                              type="text"
                              className="form-control ps-2"
                              placeholder={profile.neighborhood}
                              value={this.state.neighborhood}
                              onChange={this.onChangeNeighborhood}
                            />
                          </div>
                        </Col>
                        <Col md="4">
                          <div className="mb-3">
                            <Label className="form-label">Estado</Label>
                            <Input
                              name="state"
                              id="state"
                              type="text"
                              className="form-control ps-2"
                              placeholder={profile.state}
                              value={this.state.state}
                              onChange={this.onChangeState}
                            />
                          </div>
                        </Col>
                        <Col md="8">
                          <div className="mb-3">
                            <Label className="form-label">Cidade</Label>
                            <Input
                              name="city"
                              id="city"
                              type="text"
                              className="form-control ps-2"
                              placeholder={profile.city}
                              value={this.state.city}
                              onChange={this.onChangeCity}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12">
                          <Button color="primary">
                            Salvar alterações
                          </Button>
                        </Col>
                      </Row>
                      {this.state.message && (
                        <div className="form-group">
                          <div
                            className={
                              this.state.successful
                                ? "alert alert-success"
                                : "alert alert-danger"
                            }
                            role="alert"
                          >
                            {this.state.message}
                          </div>
                        </div>
                      )}
                      <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                          this.checkBtn = c;
                        }}
                      />
                    </Form>

                    <Row>
                      <Col md="6" className="mt-5 pt-2">
                        <h3>Alterar Senha</h3>
                        <Form
                          onSubmit={this.changePassword}
                          ref={c => { this.form = c }}
                        >
                          <Row className="mt-4">
                            <Col lg="12">
                              <div className="mb-3">
                                <Label className="form-label">Senha Atual</Label>
                                <Input
                                  type="password"
                                  name="currentPassword"
                                  className="form-control ps-2"
                                  placeholder="Senha atual"
                                  value={this.state.currentPassword}
                                  onChange={this.onChangeCurrentPassword}
                                />
                              </div>
                            </Col>

                            <Col lg="12">
                              <div className="mb-3">
                                <Label className="form-label">Nova Senha</Label>
                                <Input
                                  type="password"
                                  className="form-control ps-2"
                                  name="newPassword"
                                  placeholder="Nova senha"
                                  value={this.state.newPassword}
                                  onChange={this.onChangeNewPassword}
                                />
                              </div>
                            </Col>

                            <Col lg="12">
                              <div className="mb-3">
                                <Label className="form-label">Confirme a senha nova</Label>
                                <Input
                                  type="password"
                                  className="form-control ps-2"
                                  placeholder="Confirme a senha nova"
                                  name="confirmNewPassword"
                                  value={this.state.confirmNewPassword}
                                  onChange={this.onChangeConfirmNewPassword}
                                />
                              </div>
                            </Col>
                            <Col lg="12" className="mt-2 mb-0">
                              <Button color="primary">Salvar Senha</Button>
                            </Col>
                          </Row>
                          {this.state.message && (
                            <div className="form-group">
                              <div
                                className={
                                  this.state.successful
                                    ? "alert alert-success"
                                    : "alert alert-danger"
                                }
                                role="alert"
                              >
                                {this.state.message}
                              </div>
                            </div>
                          )}
                          <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                              this.checkBtn = c;
                            }}
                          />
                        </Form>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>

                <div className="rounded shadow mt-4">
                  <div className="p-4">
                    <h3 className="mb-0 text-danger">Excluir Conta</h3>
                  </div>
                  <div className="p-4 pt-0">
                    <p className="mb-0">
                      Você deseja excluir essa conta? Atenção: Essa opção é irreversível
                    </p>
                    <div className="mt-4">
                      <button className="btn btn-danger" onClick={this.handleDeleteUser}>Excluir Conta</button>
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

export default PageProfile;
