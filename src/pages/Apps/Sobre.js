// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, CardBody, Card } from "reactstrap";
import {Helmet} from "react-helmet";

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
                <Helmet>
                <meta charSet="utf-8" />
                <title>Sobre | Update Anestesiologia</title>
                <link rel="canonical" href="https://www.grupoupdate.com.br/sobre" />
                </Helmet>
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
                                            Somos apaixonados pelo que h?? de novo e atualizado, com vis??o cr??tica e sem tendenciosidades.
                                            <br />
                                            <br />
                                            Uma plataforma digital com os mais recentes e importantes artigos m??dicos apresentados de forma f??cil, r??pida e did??tica. Estamos aqui porque acreditamos que a atualiza????o deve estar ao alcance de todos.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">QUEM FAZ?</h3>
                                        <p className="">
                                            Prof. Dr. Luiz Fernando R. Falc??o
                                            <br />
                                            <br />
                                            Falc??o ?? professor da Escola Paulista de Medicina da Universidade Federal de S??o Paulo. Fez sua resid??ncia m??dica e doutorado em Anestesiologia pela UNIFESP. Em 2012, completou sua forma????o acad??mica com p??s-doutorado pela Universidade de Harvard, onde viveu por 2 anos. Falc??o possui 32 artigos publicados em revistas m??dicas peer-review nacionais e internacionais, 25 livros, 177 cap??tulos de livros e j?? ministrou mais de 350 palestras em eventos m??dicos cient??ficos. ?? orientador de mestrado, doutorado e p??s-doutorado pela Universidade Federal de S??o Paulo. Em 2020, Falc??o foi eleito para integrar ao Programa de Jovens L??deres M??dicos da Academia Nacional de Medicina.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">CREN??AS</h3>
                                        <p className="">
                                            Promover acesso f??cil, r??pido e did??tico ??s ??ltimas evid??ncias cient??ficas.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">VALORES</h3>
                                        <ul className="sobre-list">
                                            <li><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Busca constante pela atualiza????o. </li>
                                            <li><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Pensamento cr??tico e independente. </li>
                                            <li><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Vis??o pragm??tica e livre de vi??s. </li>
                                            <li><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Comunica????o assertiva e objetiva. </li>
                                            <li><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Perseguir a excel??ncia. </li>
                                            <li><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Paix??o pelo que faz. </li>
                                        </ul>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">MISS??O</h3>
                                        <p className="">
                                            Entregar atualiza????o m??dica de forma r??pida e did??tica, livre de vi??s, proporcionando atualiza????o para todos.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">VIS??O</h3>
                                        <p className="">
                                            Ser a ferramenta fundamental a todos que desejam se manter no estado da arte da atualiza????o m??dica.
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
