// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, CardBody, Card } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
// import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";

class Sobre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathItems: [
                //id must required
                { id: 1, name: "HOME", link: "/" },
                { id: 2, name: "SOBRE", link: "/sobre" },
            ],
        };
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
                {/* breadcrumb */}
                <PageBreadcrumb pathItems={this.state.pathItems}>
                    <h1>SOBRE O UPDATE</h1>
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
                                <Card className="card shadow rounded border-0">
                                    <CardBody>
                                        <h3 className="card-title info-bar">QUEM SOMOS</h3>
                                        <p className="">
                                            Somos apaixonados pelo que há de novo e atualizado, com visão crítica e sem tendenciosidades.
                                            <br />
                                            <br />
                                            Uma plataforma digital com os mais recentes e importantes artigos médicos apresentados de forma fácil, rápida e didática. Estamos aqui porque acreditamos que a atualização deve estar ao alcance de todos.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">QUEM FAZ?</h3>
                                        <p className="">
                                            Prof. Dr. Luiz Fernando R. Falcão
                                            <br />
                                            <br />
                                            Falcão é professor da Escola Paulista de Medicina da Universidade Federal de São Paulo. Fez sua residência médica e doutorado em Anestesiologia pela UNIFESP. Em 2012, completou sua formação acadêmica com pós-doutorado pela Universidade de Harvard, onde viveu por 2 anos. Falcão possui 32 artigos publicados em revistas médicas peer-review nacionais e internacionais, 25 livros, 177 capítulos de livros e já ministrou mais de 350 palestras em eventos médicos científicos. É orientador de mestrado, doutorado e pós-doutorado pela Universidade Federal de São Paulo. Em 2020, Falcão foi eleito para integrar ao Programa de Jovens Líderes Médicos da Academia Nacional de Medicina.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">CRENÇAS</h3>
                                        <p className="">
                                            Promover acesso fácil, rápido e didático às últimas evidências científicas.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">VALORES</h3>
                                        <ul className="sobre-list">
                                            <li><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Busca constante pela atualização. </li>
                                            <li><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Pensamento crítico e independente. </li>
                                            <li><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Visão pragmática e livre de viés. </li>
                                            <li><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Comunicação assertiva e objetiva. </li>
                                            <li><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Perseguir a excelência. </li>
                                            <li><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Paixão pelo que faz. </li>
                                        </ul>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">MISSÃO</h3>
                                        <p className="">
                                            Entregar atualização médica de forma rápida e didática, livre de viés, proporcionando atualização para todos.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">VISÃO</h3>
                                        <p className="">
                                            Ser a ferramenta fundamental a todos que desejam se manter no estado da arte da atualização médica.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default Sobre;
