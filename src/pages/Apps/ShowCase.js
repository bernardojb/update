// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

//import images
import app1 from "../../assets/images/app/1.png";
import app2 from "../../assets/images/app/2.png";
import app3 from "../../assets/images/app/3.png";
import app4 from "../../assets/images/app/4.png";

class ShowCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        { title: "Focado 100% em anestesiologia" },
        { title: "Didático, prático, rápido" },
        { title: "Conteúdo próprio e exclusivo" },
      ],
      features1: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      features2: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      features3: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      activeTab: "1",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-0 bg-light">
          <Container>
            {/* section title */}
            {/* <SectionTitle
              title="How Can We Help You ?"
              desc="that can provide everything you need to generate awareness, drive traffic, connect."
            /> */}

            <Row className="align-items-center">
              <Col lg="5" md="6" className="mt-4 pt-2">
                <img src={app1} className="img-fluid mx-auto d-block" alt="" />
              </Col>

              <Col lg={7} md={6} className="mt-4 pt-2">
                <div className="section-title ms-lg-5">
                  <SectionTitleLeft
                    desc="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                    features={this.state.features}>
                    <h1 className="heading mb-4" style={{ textTransform: 'capitalize' }}>
                      nascemos para otimizar  <br /> <span className="text-primary">informação com tecnologia</span>
                    </h1>
                  </SectionTitleLeft>
                  <div className="buy-button btn-registrar">
                    <Link
                      to="/shop-myaccount"
                      // target="_blank"
                      rel="noopener noreferrer"
                      id="buyButton"
                      className="btn btn-primary"
                    >
                      REGISTRAR
                    </Link>
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

export default ShowCase;
