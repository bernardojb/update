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
    const { isSubmitting, handleChange, values, handlePress, errors, setValues, contactVisible } =
        useForm(validate);

    // function resetInfos() {
    //     setValues({
    //         ...values,
    //         name: '',
    //         email: '',
    //         subject: '',
    //         message: ''
    //     })
    // }

    // resetInfos();

    return (
        <div>
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
                      
                      {contactVisible ? (
                      <Alert
                      color="primary"
                    >
                      Contact details send successfully.
                    </Alert>
                    ) : (
                        <span></span>
                    )}
                    <div
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
                            {errors.name && <p className="validator-msg text-danger">{errors.name}</p>}
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
                            {errors.email && <p className="validator-msg text-danger">{errors.email}</p>}
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">Assunto<span className="text-danger"> *</span></Label>
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
                              value={values.subject}
                              required
                              onChange={handleChange}
                            />
                            {errors.subject && <p className="validator-msg text-danger">{errors.subject}</p>}
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div className="mb-3">
                            <Label className="form-label">Mensagem<span className="text-danger"> *</span></Label>
                            <Input
                              name="message"
                              id="message"
                              className="form-control"
                              placeholder="Qual a sua dificuldade?"
                              required
                              value={values.message}
                              onChange={handleChange}
                            />
                            {errors.message && <p className="validator-msg text-danger">{errors.message}</p>}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12" className="text-center">
                          <div className="d-grid">
                            <input
                              type="submit"
                              id="submit"
                              name="submit"
                              className="submitBnt btn btn-primary btn-block"
                              value="Enviar Mensagem"
                              disabled={isSubmitting}
                              onClick={handlePress}
                            />
                          </div>
                          <div id="simple-msg"></div>
                        </Col>
                      </Row>
                    </div>
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
                      <a
                        href="https://goo.gl/maps/u4TcwJZtMfisZWXM6"
                        className="video-play-icon text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver no Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
};

export default Contato;
