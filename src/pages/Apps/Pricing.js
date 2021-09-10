// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import PricingBox from "../../components/Shared/PricingBox2";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings: [
        {
          id: 1,
          title: "plano anual",
          price: "39,99",
          duration: "por mês",
          buttonText: "TESTAR 7 DIAS GRÁTIS",
          btnLink: "",
          features: [
            { title: "Liberação instantânea" },
            { title: "Acesso ilimitado a todos os conteúdos" },
            { title: "Novos conteúdos adicionados semanalmente" },
            { title: "Eventos exclusivos para usuários" },
            { title: "Suporte técnico" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <div style={{ textAlign: 'center' }}>
              <h1>
                Não perca tempo, <span className="text-primary">registre-se agora!</span>
              </h1>
              <p>Escolha seu plano e aproveite agora mesmo todos os benefícios disponíveis:</p>
            </div>
            <div className="pricing-selector">
              <ul>
                <li className="price-selected">
                  <p style={{ paddingRight: '10px' }}>Anual</p>
                  <p className="price-discount">34% Off</p>
                </li>
                <li>
                  <p style={{ paddingRight: '10px' }}>Semestral</p>
                  <p className="price-discount">17% Off</p>
                </li>
                <li>Mensal</li>
              </ul>
            </div>
            <Row className="align-items-center justify-content-center">
              {/* pricing */}
              <PricingBox pricings={this.state.pricings} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default Pricing;
