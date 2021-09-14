import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Badge } from "reactstrap";

// Import images
import falcaoImage from "../../assets/images/app/falcao.png";

class Falcao extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100 pt-0" id="home">
                    <Container>
                        <Row className="mt-5 align-items-center">
                            <Col>
                                <div className="title-heading">
                                    <h1 className="heading mb-3 text-center">
                                        nascemos para otimizar {" "}
                                        <span className="text-primary" style={{ fontSize: '64px' }}><br></br>informação com tecnologia</span>
                                    </h1>

                                    <div className="mt-5">
                                        <div className="falcao-container">
                                            <Col lg="8" md="12" className="falcao-texts">
                                                <div className="falcao-badges">
                                                    <Badge color="white"> MD. </Badge>
                                                    <Badge color="white"> MBA. </Badge>
                                                    <Badge color="white"> PHD. </Badge>
                                                    <Badge color="white"> TSA. </Badge>
                                                </div>
                                                <h1 className="mt-4 mb-0">
                                                    Prof. Dr. Luiz Fernando Falcão
                                                </h1>
                                                <div className="mt-4">
                                                    <p className="mb-0">Professor da UNIFESP - Universidade Federal de São Paulo</p>
                                                    <p className="pt-0" style={{ fontSize: '20px' }}>Anestesiologia, dor e medicina intensiva</p>
                                                </div>
                                                <Link to="#" className="btn btn-outline-falcao mt-4"> VER VÍDEO </Link>
                                            </Col>
                                            <Col lg="4" md="12" className="falcao-image">
                                                <img src={falcaoImage} className="" alt="" />
                                            </Col>
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

export default Falcao;
