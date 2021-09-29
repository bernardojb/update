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
import FeatherIcon from "feather-icons-react";
import useForm from './useForm';
import validate from './validateInfo';

const Contato = () => {
    const { isSubmitting, handleChange, values, handlePress, errors, setValues } =
        useForm(validate);


    function resetInfos() {
        setValues({
            ...values,
            //solução
            app: null,
            website: null,
            branding: null,
            uiux: null,

            //orcamento
            orcamento: '',

            //inputs
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    }

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
                              value={values.name}
                              onChange={handleChange}
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
                              value={values.email}
                              onChange={handleChange}
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
                              value={values.subject}
                              onChange={handleChange}
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
                              value={values.message}
                              onChange={handleChange}
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
                      <Link
                        to=""
                        onClick={this.sendMail}
                        className="text-primary"
                      >
                        contato@grupoupdate.com.br
                      </Link>
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
                      <Link
                        to="#"
                        onClick={this.callNumber}
                        className="text-primary "
                      >
                        +55 (11) 9 9999-8181
                      </Link>
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
    )
};

export default Contato;
