// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import FeatureBox from "./feature-box";

//import images
import featureImg from "../../assets/images/app/feature.png";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          icon: "monitor",
          title: "Use On Any Device",
          desc:
            "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
        },
        {
          icon: "feather",
          title: "Feather Icons",
          desc:
            "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
        },
        {
          icon: "eye",
          title: "Retina Ready",
          desc:
            "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
        },
        {
          icon: "user-check",
          title: "W3c Valid Code",
          desc:
            "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
        },
        {
          icon: "smartphone",
          title: "Fully Responsive",
          desc:
            "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
        },
        {
          icon: "heart",
          title: "Browser Compatibility",
          desc:
            "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            {/* <SectionTitle
              title="App Features"
              desc="that can provide everything you need to generate awareness, drive traffic, connect."
            /> */}

            <Row className="justify-content-center align-items-center">
              <Col lg="8" md="8">
                <Row>
                  <p className="text-muted mb-0"><span className="text-primary">IDEALIZADOR DO PROJETO</span></p>
                  <h1 className="heading mb-5">PROF. DR. LUIZ FERNANDO <span className="text-primary">FALCÃO</span></h1>
                  <h1 className="heading mb-0"><span className="text-primary">MD. MBA. PHD. TSA</span></h1>
                  <p style={{fontSize:'16px'}} className="mb-0">Professor da disciplina</p>
                  <p style={{fontSize:'20px'}} className="mb-5"><span className="text-primary">Anestesiologia, dor e medicina intensiva</span></p>
                  <h4>unifesp - universidade federal de são paulo</h4>
                </Row>
              </Col>
              <Col
                lg="4"
                md="4"
                xs="12"
                className="mt-4 pt-2 text-center text-md-end"
              >
                <img src={featureImg} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
