import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import homeImage from "../../assets/images/app/phone.png";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-half-170 d-table" id="home">
          <Container>
            <Row className="mt-5 align-items-center">
              <Col lg={7} md={7}>
                <div className="font-size-important">
                  <h1 className="mb-3 font-size-important" style={{ textTransform: 'uppercase', maxWidth: '550px' }}>
                    Em breve {" "} <br /><span className="text-primary">APP UPDATE!</span></h1>
                </div>
              </Col>
              <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="text-md-end text-center ms-lg-4">
                  <img src={homeImage} className="img-fluid" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="footerzinho">
              <span>© LIFESAVERS TREINAMENTO PROFISSIONAL E GERENCIAL LTDA - 10.535.504/0001-60 - Todos os direitos reservados</span>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Landing;
