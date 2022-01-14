import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Modal,
    ModalBody,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images

//Auth
import authService from "../../../services/auth.service";

//Tosty
import 'react-toastify/dist/ReactToastify.css';

//Image
import logoUpdate from "../../../assets/images/LogoUpdate.svg";

//Input mask
import { mask, unMask } from 'remask'

let creditCardArr
let faturaArr

// export default class Faturas extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             fatura: [],
//             modal: false,
//         }
//     }

//     componentDidMount() {
//         authService.getFaturas().then(data => {
//             this.setState({
//                 ...this.state,
//                 invoice: data.data.inv.items
//             })

//             const invoice = this.state.invoice

//             console.log("getFatura", this.state.invoice);

//             if (invoice != null) {
//                 console.log("invoice != null", invoice)
//                 faturaArr = invoice.map((invoice, index) => (
//                     <div className="detalhes-cobranca" key={index}>
//                         <Link
//                             to="#"
//                             onClick={this.togglemodal}>
//                             <Row>
//                                 <Col sm={2}>
//                                     <li className="text-primary" style={{ color: "white", fontSize: "14px", marginBottom: "16px", listStyle: "none" }}>{`${this.lepDay((new Date(invoice.created_at_iso)).getDate())}/${this.lepMonth((new Date(invoice.created_at_iso)).getMonth())}/${new Date(invoice.created_at_iso).getFullYear()}`}</li>
//                                 </Col>
//                                 <Col sm={4}>
//                                     <li style={{ color: "white", fontSize: "14px", marginBottom: "16px", listStyle: "none" }}>{`${this.lepDay((new Date(invoice.created_at_iso)).getDate())}/${this.lepMonth((new Date(invoice.created_at_iso)).getMonth())}/${new Date(invoice.created_at_iso).getFullYear()} - ${this.lepDay((new Date(parseInt(invoice.variables.find((ele) => ele.variable === "update_subscription.expires_at").value) * 1000).getDate()))}/${this.lepMonth((new Date(parseInt(invoice.variables.find((ele) => ele.variable === "update_subscription.expires_at").value) * 1000).getMonth()))}/${new Date(parseInt(invoice.variables.find((ele) => ele.variable === "update_subscription.expires_at").value) * 1000).getFullYear()}`}</li>
//                                 </Col>
//                                 <Col sm={4}>
//                                     <li style={{ color: "white", fontSize: "14px", marginBottom: "16px", listStyle: "none" }}>{`${invoice.variables.find((ele) => ele.variable === "payment_data.display_number").value}`}</li>
//                                 </Col>
//                                 <Col sm={2}>
//                                     <li style={{ color: "white", fontSize: "14px", marginBottom: "16px", listStyle: "none" }}>{`${invoice.total}`}</li>
//                                 </Col>
//                             </Row>
//                         </Link>
//                         {/* MODAL */}
//                         <Modal
//                             isOpen={this.state.modal}
//                             role="dialog"
//                             autoFocus={true}
//                             centered={true}
//                             size="xl"
//                             className="modal-fatura"
//                         >
//                             <ModalBody
//                                 className="modal-fatura"
//                             >
//                                 <Container>
//                                     <Row className="mt-5 pt-4 pt-sm-0 justify-content-center">
//                                         <Col lg="12">
//                                             <Card className="shadow rounded border-0" style={{ width: "100%" }}>
//                                                 <CardBody>
//                                                     <div className="invoice-top pb-4 border-bottom">
//                                                         <Row>
//                                                             <div>
//                                                                 <Link
//                                                                     to='#'
//                                                                     onClick={this.togglemodal}
//                                                                 >
//                                                                     <FeatherIcon
//                                                                         icon="x"
//                                                                         className="fea icon-sm modal-icon"
//                                                                     />
//                                                                 </Link>
//                                                             </div>
//                                                             <Col lg="8">
//                                                                 <div className="logo-invoice mb-4" style={{ maxWidth: "88px" }}>
//                                                                     <img src={logoUpdate} />
//                                                                 </div>
//                                                                 <p className="text-muted" style={{ fontSize: "14px" }}>LIFESAVERS TREINAMENTO PROFISSIONAL E GERENCIAL LTDA CNPJ - 10.535.504/0001-60</p>
//                                                             </Col>

//                                                             <Col lg="4" className="mt-4 mt-sm-0">
//                                                                 <h3>CONTATO</h3>
//                                                                 <dl className="row mb-0">
//                                                                     <dt className="col-2 text-muted">
//                                                                         <i>
//                                                                             <FeatherIcon
//                                                                                 icon="map-pin"
//                                                                                 className="fea icon-sm"
//                                                                             />
//                                                                         </i>
//                                                                     </dt>
//                                                                     <dd className="col-10 text-muted">
//                                                                         <a
//                                                                             href="https://www.google.com.br/maps/place/Medicine+Cursos/@-23.5997646,-46.6522202,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce5a2294aa820d:0x95ef4b47d0c9ab0c!8m2!3d-23.5997774!4d-46.6500333?shorturl=1"
//                                                                             target="_blank"
//                                                                             className="video-play-icon text-muted lightbox"
//                                                                         >
//                                                                             <p className="mb-0">Rua Marcos Lopes, 272, Vila Nova Conceição, CEP 04.513-080 São Paulo - SP</p>
//                                                                         </a>
//                                                                     </dd>

//                                                                     <dt className="col-2 text-muted">
//                                                                         <i>
//                                                                             <FeatherIcon
//                                                                                 icon="phone"
//                                                                                 className="fea icon-sm"
//                                                                             />
//                                                                         </i>
//                                                                     </dt>
//                                                                     <dd className="col-10 text-muted">
//                                                                         <a
//                                                                             href="tel:+5511999998181"
//                                                                             className="text-muted "
//                                                                         >
//                                                                             +55 (11) 9 9999-8181
//                                                                         </a>
//                                                                     </dd>
//                                                                     <dt className="col-2 text-muted">
//                                                                         <i className="uil uil-envelope"></i>
//                                                                     </dt>
//                                                                     <dd className="col-10 text-muted">
//                                                                         <a
//                                                                             href="mailto:contato@grupoupdate.com.br"
//                                                                             className="text-muted"
//                                                                         >
//                                                                             contato@grupoupdate.com.br
//                                                                         </a>
//                                                                     </dd>
//                                                                 </dl>
//                                                             </Col>
//                                                         </Row>
//                                                     </div>
//                                                     <div className="invoice-middle py-4">
//                                                         <h3 className="mb-5">DETALHES DA COMPRA:</h3>
//                                                         <Row className="mb-0">
//                                                             <Col lg={{ size: 8, order: 1 }} xs={{ order: 2 }}>
//                                                                 <dl className="row">
//                                                                     <dt className="col-md-3 col-5 fw-normal">
//                                                                         Código:
//                                                                     </dt>
//                                                                     <dd className="col-md-9 col-7 text-muted">
//                                                                         {`${invoice.id}`}
//                                                                     </dd>
//                                                                     <dt className="col-md-3 col-5 fw-normal">
//                                                                         Nome:
//                                                                     </dt>
//                                                                     <dd className="col-md-9 col-7 text-muted">
//                                                                         {`${invoice.payer_name}`}
//                                                                     </dd>
//                                                                     <dt className="col-md-3 col-5 fw-normal">
//                                                                         Endereço:
//                                                                     </dt>
//                                                                     <dd className="col-md-9 col-7 text-muted">
//                                                                         <p className="mb-0">
//                                                                             {`${invoice.payer_address_street},`}
//                                                                         </p>
//                                                                         <p className="mb-0">
//                                                                             {`${invoice.payer_address_zip_code}`}
//                                                                         </p>
//                                                                     </dd>
//                                                                     <dt className="col-md-3 col-5 fw-normal">
//                                                                         Email:
//                                                                     </dt>
//                                                                     <dd className="col-md-9 col-7 text-muted">
//                                                                         {invoice.payer_email}
//                                                                     </dd>
//                                                                     <dt className="col-md-3 col-5 fw-normal">
//                                                                         Data:
//                                                                     </dt>
//                                                                     <dd className="col-md-9 col-7 text-muted">
//                                                                         {`${this.lepDay((new Date(invoice.created_at_iso)).getDate())}/${this.lepMonth((new Date(invoice.created_at_iso)).getMonth())}/${new Date(invoice.created_at_iso).getFullYear()}`}
//                                                                     </dd>
//                                                                     <dt className="col-md-3 col-5 fw-normal">
//                                                                         Cartão:
//                                                                     </dt>
//                                                                     <dd className="col-md-9 col-7 text-muted">
//                                                                         {`${invoice.variables.find((ele) => ele.variable === "payment_data.display_number").value}`}
//                                                                     </dd>
//                                                                 </dl>
//                                                             </Col>
//                                                         </Row>
//                                                     </div>
//                                                     <div className="invoice-table pb-4">
//                                                         <Col>
//                                                             <div className="rounded shadow mb-5">
//                                                                 <div className="detalhes-invoice p-4">
//                                                                     <Row>
//                                                                         <Col lg={4}>
//                                                                             <p>Tipo</p>
//                                                                         </Col>
//                                                                         <Col lg={3}>
//                                                                             <p>Preço</p>
//                                                                         </Col>
//                                                                         <Col lg={3}>
//                                                                             <p>Cupom</p>
//                                                                         </Col>
//                                                                         <Col lg={2}>
//                                                                             <p>Total</p>
//                                                                         </Col>
//                                                                     </Row>
//                                                                 </div>
//                                                                 <div className="px-4">
//                                                                     <Row>
//                                                                         <Col lg={4}>
//                                                                             <p>{`${invoice.items.find((ele) => ele.price_cents > 0).description}`}</p>
//                                                                         </Col>
//                                                                         <Col lg={3}>
//                                                                             <p>{`R$${invoice.items.find((ele) => ele.price_cents > 0).price_cents / 100}0`}</p>
//                                                                         </Col>
//                                                                         <Col lg={3}>
//                                                                             <p>{`${invoice.items.find((ele) => ele.price_cents < 0).description}`}</p>
//                                                                         </Col>
//                                                                         <Col lg={2}>
//                                                                             <p>{`${invoice.total_paid}`}</p>
//                                                                         </Col>
//                                                                     </Row>
//                                                                 </div>
//                                                             </div>
//                                                         </Col>
//                                                     </div>
//                                                     <div className="invoice-footer pt-4">
//                                                         <Row>
//                                                             <Col sm="6">
//                                                                 <div className="text-sm-start text-muted text-center">
//                                                                     <p className="mb-0" style={{ fontSize: "14px" }}>
//                                                                         Está com problemas?{" "}
//                                                                         <Link
//                                                                             to="/ajuda"
//                                                                             className="text-primary"
//                                                                         >
//                                                                             Ajuda
//                                                                         </Link>
//                                                                     </p>
//                                                                 </div>
//                                                             </Col>
//                                                             <Col sm="6">
//                                                                 <div className="text-sm-end text-primary text-center">
//                                                                     <p className="mb-0" style={{ fontSize: "14px" }}>
//                                                                         <Link
//                                                                             to="/termos-de-uso"
//                                                                             className="text-primary"
//                                                                         >
//                                                                             Termos e Condições
//                                                                         </Link>
//                                                                     </p>
//                                                                 </div>
//                                                             </Col>
//                                                         </Row>
//                                                     </div>
//                                                 </CardBody>
//                                             </Card>
//                                         </Col>
//                                     </Row>
//                                 </Container>
//                             </ModalBody>
//                         </Modal>
//                     </div>
//                 ))
//             }
//         })
//     }

//     lepMonth(month) {
//         return `${month < 10 ? '0' : ''}${month + 1}`
//       }
    
//       lepDay(day) {
//         return `${day < 10 ? `0${day}` : day + 1}`
//       }

//     render() {
//         return (
//             <div className="rounded shadow p-4 mb-5">
//                 <h3>
//                     Detalhes da cobrança
//                 </h3>
//                 <div>
//                     <div className="detalhes-cobranca">
//                         <Row>
//                             <Col sm={2}>
//                                 <p>Data</p>
//                             </Col>
//                             <Col sm={4}>
//                                 <p>Período</p>
//                             </Col>
//                             <Col sm={4}>
//                                 <p>Forma de Pagamento</p>
//                             </Col>
//                             <Col sm={2}>
//                                 <p>Total</p>
//                             </Col>
//                         </Row>
//                     </div>
//                     {faturaArr}
//                 </div>
//             </div>
//         )
//     }
// }


import React from 'react'

export default function Faturas() {
    return (
        <div>
            
        </div>
    )
}
