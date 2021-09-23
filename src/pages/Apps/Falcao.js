import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Badge } from "reactstrap";
import FeatherIcon from "feather-icons-react";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

// Import images
import falcaoImage from "../../assets/images/app/falcao.png";

class Falcao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }

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
                                            <Col xl="8" lg="7" md="12" className="falcao-texts">
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
                                                <Link to="#" onClick={this.openModal} className="btn btn-outline-falcao lighttbox mt-4" style={{display:'flex', flexDirection:'row', justifyContent:'center'}} >
                                                    <FeatherIcon icon="video" size={20} style={{marginRight:'10px'}} /> VER VÍDEO 
                                                </Link>
                                            </Col>
                                            <Col xl="4" lg="5" md="12" className="falcao-image">
                                                <img src={falcaoImage} className="" alt="" />
                                            </Col>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="pjjK-E_QNBI"
                        onClose={() => this.setState({ isOpen: false })}
                    />
                </section>
            </React.Fragment>
        );
    }
}

export default Falcao;
