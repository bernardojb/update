import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
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
import authService from "../../../services/auth.service";
import { mask, unMask } from 'remask'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashLink } from 'react-router-hash-link';


const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Esse campo é obrigatório!
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Sua senha precisa ter pelo menos 6 caracteres.
      </div>
    );
  }
};

const vyear = value => {
  if (value.length < 4 || value.length > 4) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Digite o ano completo!
      </div>
    );
  }
};

const vminyear = value => {
  if (value < 2021 || value.length > 3000) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Digite um ano válido!
      </div>
    );
  }
};

const vmonth = value => {
  if (value < 1 || value > 12) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Digite um mês válido!
      </div>
    );
  }
};

const vbirthday = value => {
  if (value.length < 10) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Digite sua data de nascimento completa!
      </div>
    );
  }
};

const vcep = value => {
  if (value.length < 9) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Digite um CEP válido!
      </div>
    );
  }
};

const isEqual = (value, props, components) => {
  const bothUsed = components.newPassword[0].isUsed && components.confirmNewPassword[0].isUsed;
  const bothChanged = components.newPassword[0].isChanged && components.confirmNewPassword[0].isChanged;

  if (bothChanged && bothUsed && components.newPassword[0].value !== components.confirmNewPassword[0].value) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        As senhas não coincidem
      </div>
    )
  }
};

class PageProfile extends Component {
  constructor(props) {
    super(props);
    //Handles
    this.handleProfile = this.handleProfile.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)

    //Informações pessoais
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
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
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleDeleteModalOpen = this.handleDeleteModalOpen.bind(this)
    this.handleDeleteModalClose = this.handleDeleteModalClose.bind(this)

    this.state = {
      modal: false,
      disabled: true,
      count: 10,
      message: "",
      loading: false,
      profile: {},
      plano: {},
      sub: {},
      conta: [
        {
          id: 1,
          icon: "user",
          className: "navbar-item account-menu px-0 active",
          title: "Informações Pessoais",
          link: "/perfil",
        },
        {
          id: 2,
          icon: "shopping-cart",
          className: "navbar-item account-menu px-0 mt-2",
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
          icon: "info",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Sobre o Update",
          link: "/sobre",
        },
        {
          id: 2,
          icon: "shield",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Política de Privacidade",
          link: "/politica-de-privacidade",
        },
        {
          id: 3,
          icon: "book",
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
      //senha
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      spinner: true
    };
  }

  onChangeFullName(e) {
    this.setState({
      fullName: e.target.value
    });
  }

  onChangeBirthday(e) {
    this.setState({
      birthday: mask(`${e.target.value}`, ['99/99/9999'])
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: mask(unMask(`${e.target.value}`), ['(99)9999-9999', '(99)99999-9999'])
    });
  }

  onChangeCrm(e) {
    this.setState({
      crm: e.target.value
    });
  }

  onChangeCep(e) {
    this.setState({
      cep: mask(`${e.target.value}`, ['99999-999'])
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
  onChangeCurrentPassword(e) {
    this.setState({
      currentPassword: e.target.value
    });
  }

  onChangeNewPassword(e) {
    this.setState({
      newPassword: e.target.value
    });
  }

  onChangeConfirmNewPassword(e) {
    this.setState({
      confirmNewPassword: e.target.value
    });
  }

  handleProfile(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    // this.form.validateAll();

    // if (this.checkBtn.context._errors.length === 0) {

    authService.updateProfile(
      this.state.fullName,
      this.state.birthday,
      // this.state.cpf,
      this.state.phone,
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
          loading: false
        });
        toast.success("Perfil alterado com sucesso!", {
          autoClose: 2000,
        })
        setTimeout(() => {
          window.location.reload();
        }, 2000);
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
          loading: false
        });
        toast.error("Tente novamente mais tarde!", {
          autoClose: 2000,
        })
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    );
    // }
  }

  handleDeleteUser(e) {
    e.preventDefault();
    authService.deleteUser()
      .then(response => {
        toast.success("Conta deletada com sucesso!", {
          autoClose: 2000,
        })
        setTimeout(() => {
          authService.logout();
          window.location.replace("http://www.grupoupdate.com.br/")
        }, 2000);
      },
        error => {
          toast.error("Não foi possível deletar sua conta. Tente novamente mais tarde ou entre em contato.", {
            autoClose: 4000,
          })
          setTimeout(() => {
            window.location.reload()
          }, 4000);
        }
      )
  }

  handleDeleteModalOpen() {
    this.setState({
      ...this.state, modal: true
    })

    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }))
    }, 1000)

    setTimeout(() => {
      this.setState({
        ...this.state, disabled: false
      })
    }, 10000)
  }

  handleDeleteModalClose() {
    clearInterval(this.myInterval)
    this.setState({
      ...this.state, modal: false, disabled: true, count: 10
    })
  }


  handleChangePassword(e) {
    e.preventDefault();

    this.setState({
      message: "",
    });

    // this.form.validate("currentPassword", "newPassword", "confirmNewPassword");

    if (this.checkBtn.context._errors.length === 0) {
      authService.changeProfilePassword(
        this.state.currentPassword,
        this.state.newPassword,
        this.state.confirmNewPassword,
      ).then(
        response => {
          this.setState({
            message: response.data.message,
          });
          toast.success("Senha alterada com sucesso!", {
            autoClose: 2000,
          })
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        error => {
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

          this.setState({
            message: resMessage,
          });
        }
      );
    }
  }

  componentDidMount() {

    setTimeout(() => { 
      this.setState({
        spinner: false
      });
     }, 10000)

    // authService.verifyLogin()

    authService.getUpdatedUser()

    authService.getSelf().then(data => {
      data.data.birthday = new Date(data.data.birthday)
      this.setState({
        ...this.state, profile: data.data, user: data
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

    //Count

    //Header
    document.body.classList = "";
    document.getElementById("topnav").classList.add("nav-sticky");
  }

  componentWillUnmount() {
  }

  lepMonth(month) {
    return `${month < 10 ? '0' : ''}${month + 1}`
  }

  lepDay(day) {
    return `${day < 10 ? `0${day}` : day}`
  }

  render() {
    const { count } = this.state
    const { profile } = this.state
    const { plano } = this.state
    const { sub } = this.state
    const user = JSON.parse(localStorage.getItem('user'))
    if (user === null || user.data.access_until === null || user.data.access_until < new Date(Date.now())) return (
      <Redirect to={'/registro'}></Redirect>
    )
    user.data.access_until = new Date(user.data.access_until)

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
                            {console.log('PLANO', plano)}
                            <h3 className="title mb-2"> {profile.full_name} </h3>

                            {plano != null && plano.name ? (<p>{`Plano ${plano.name.charAt(0).toUpperCase()}${plano.name.slice(1)}`}</p>) :
                              (<>
                                {this.state.spinner === true ? (<span className="spinner-border spinner-border-sm" style={{marginBottom:'16px'}} />) :<p>Nenhum plano cadastrado</p>}
                              </>)
                            }
                            {user != null && user.data.access_until != null && user.data.access_until > new Date(Date.now()) ?
                              <p>Assinatura válida até: <span className="text-primary">{`${this.lepDay(user.data.access_until.getDate())}/${this.lepMonth(user.data.access_until.getMonth())}/${user.data.access_until.getFullYear()}`}</span></p>
                              :
                              <p>Assinatura válida até: <span className="spinner-border spinner-border-sm" /></p>
                            }
                            {/* {console.log("USER DATE NOW", new Date(Date.now()))}
                            {console.log("ACCESS UNTIL NOW", user.data.access_until)} */}
                          </Col>
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
                          <HashLink to={widget.link} className="navbar-link d-flex shadow align-items-center py-2 px-4">
                            <span className="h4 mb-0">
                              <FeatherIcon
                                icon={widget.icon}
                                className="fea"
                              />
                            </span>
                            <p className="mb-0 ms-2">{widget.title}</p>
                          </HashLink>
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
                    <h3>Informações Pessoais</h3>
                    <Form
                      onSubmit={this.handleProfile}
                      ref={i => {
                        this.form = i
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
                              maxLength="30"
                              validations={[]}
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
                              placeholder={profile != null && profile.birthday ? (`${this.lepDay(profile.birthday.getDate() + 1)}/${this.lepMonth(profile.birthday.getMonth())}/${profile.birthday.getFullYear()}`) : null}
                              value={this.state.birthday}
                              onChange={this.onChangeBirthday}
                              maxLength="10"
                              validations={[vbirthday]}
                            />
                          </div>
                        </Col>
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
                              maxLength="14"
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
                              maxLength="9"
                            // validations={[vcep]}
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
                              maxLength="5"
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
                              maxLength="25"
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
                              maxLength="20"
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
                              maxLength="20"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12">
                          <Button
                            color="primary"
                            disabled={this.state.loading}
                          >
                            Salvar alterações
                            {this.state.loading && (
                              <span className="spinner-border spinner-border-sm ms-2"></span>
                            )}
                          </Button>
                        </Col>
                      </Row>
                      {/* <CheckButton
                          style={{ display: "none" }}
                          ref={i => {
                            this.checkBtn = i;
                          }}
                        /> */}
                    </Form>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <Row>
                      <Col md="6" className="mt-5 pt-2">
                        <h3>Alterar Senha</h3>
                        <Form
                          onSubmit={this.handleChangePassword}
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
                                  validations={[vpassword, isEqual]}
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
                                  validations={[vpassword, isEqual]}
                                />
                              </div>
                            </Col>
                            <Col lg="12" className="mt-2 mb-0">
                              <Button
                                color="primary"
                                disabled={this.state.loading}
                              >
                                Salvar Senha
                                {this.state.loading && (
                                  <span className="spinner-border spinner-border-sm ms-2"></span>
                                )}
                              </Button>
                            </Col>
                          </Row>
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
                      <button className="btn btn-danger"
                        onClick={this.handleDeleteModalOpen}
                      >
                        Excluir Conta</button>
                    </div>
                  </div>
                  <Modal
                    isOpen={this.state.modal}
                    toggle={this.handleDeleteModalClose}
                    modalTransition={{ timeout: 500 }}
                    centered
                  >
                    <ModalHeader>
                      <h1>Excluir conta</h1>
                    </ModalHeader>
                    <ModalBody>
                      <span className="pb-3">
                        Você tem certeza que deseja excluir essa conta?
                      </span>

                      <div style={{ backgroundColor: '#e91e361a', display: 'flex', flexDirection: 'column', padding: '20px', borderRadius: '15px', marginTop: '20px' }}>
                        <FeatherIcon
                          icon='alert-triangle'
                          className="fea mb-2"
                          color='#e91e35' />
                        <span className="mb-3" style={{ color: '#e91e35' }}>Atenção!</span>
                        <span style={{ color: '#e91e35' }}>
                          Esta opção é irreversível e todos os dados desta conta serão perdidos, seguindo as diretrizes previstas na LGPD.
                        </span>

                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        onClick={this.handleDeleteModalClose}>
                        Voltar
                      </Button>
                      <Button
                        className="btn-danger"
                        disabled={this.state.disabled}
                        onClick={this.handleDeleteUser}>
                        {count > 0 ? (`${count}`) : ('Deletar Conta')}
                      </Button>
                    </ModalFooter>
                  </Modal>
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
