// React Basic and Bootstrap
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

//Import Components
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

//import images
import phone2Image from "../../assets/images/app/phone-02-web.png";


class ShowCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        { title: "Focado 100% em anestesiologia", icon: "crosshair" },
        { title: "Didático, prático, rápido", icon: "clock" },
        { title: "Conteúdo próprio e exclusivo", icon: "award" },
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
        <section className="section pt-0 showcase">
          <Container>
            {/* section title */}
            {/* <SectionTitle
              title="How Can We Help You ?"
              desc="that can provide everything you need to generate awareness, drive traffic, connect."
            /> */}

            <Row className="align-items-center">
              <Col lg="5" md="6" className="mt-4 pt-2 order-md-1 order-2">
                {/* <img src={phone2Image} className="img-fluid mx-auto d-block" alt="" /> */}
                <div className="classic-app-image position-relative">
                  <div className="bg-app-shape position-relative">
                    <img
                      src={phone2Image}
                      className="img-fluid mx-auto d-block"
                      alt=""
                    />
                  </div>
                </div>
              </Col>

              <Col lg={7} md={6} className="mt-4 pt-2 order-md-2 order-1">
                <div className="section-title ms-lg-5">
                  <SectionTitleLeft
                    desc="Faça o download do UPDATE e veja na prática como a nossa ferramenta pode te ajudar com um conteúdo prático."
                    features={this.state.features}
                  >
                    <h1 className="mb-4">
                      artigos, matérias e novidades <span className="text-primary">em formato de vídeos didáticos!</span>
                    </h1>
                  </SectionTitleLeft>
                  <p className="mt-5 mb-0">Baixe Agora:</p>
                  <a href="https://apps.apple.com/us/app/update-anestesiologia/id1583086674" target="_blank" rel="noreferrer" className="btn btn-primary mt-2 me-2">
                    <i className="uil uil-apple"></i>
                    App Store
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.grupoupdate.anestesiologia" target="_blank" rel="noreferrer" className="btn btn-primary mt-2 me-2">
                    <i className="uil uil-google-play"></i> Play Store
                  </a>
                </div>
              </Col>
            </Row>
          </Container>

          {/* <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs="12" className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">
                    <span className="text-primary">Landrick</span> App Showcase
                  </h4>
                  <p className="text-muted para-desc mb-0 mx-auto">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg={8} md={12} className="mt-4 pt-2 text-center">
                <Nav
                  pills
                  justified
                  id="pills-tab"
                  className="flex-column flex-sm-row rounded"
                >
                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "1" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      <div className="text-center py-2">
                        <h6 className="mb-0">
                          High Performance
                        </h6>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "2" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      <div className="text-center py-2">
                        <h6 className="mb-0">
                          Creative Design
                        </h6>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "3" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("3");
                      }}
                    >
                      <div className="text-center py-2">
                        <h6 className="mb-0">
                          24 / 7 Support
                        </h6>
                      </div>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>

            <Row>
              <Col xs="12" className="mt-4 pt-2">
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={app2}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />
                      </Col>

                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <SectionTitleLeft
                            desc="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                            features={this.state.features1}
                            className=""
                          >
                            <h4 className="title mb-4">
                              <i className="uil uil-angle-double-right text-primary"></i>{" "}
                              High Performing Landing App
                            </h4>
                          </SectionTitleLeft>
                          <Link to="#" className="mt-3 h6 text-primary">
                            Find Out More{" "}
                            <i className="uil uil-angle-right-b"></i>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={app3}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />
                      </Col>

                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <SectionTitleLeft
                            desc="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                            features={this.state.features2}
                            className=""
                          >
                            <h4 className="title mb-4">
                              <i className="uil uil-angle-double-right text-primary"></i>{" "}
                              Creative Design and Clean Code
                            </h4>
                          </SectionTitleLeft>
                          <Link to="#" className="mt-3 h6 text-primary">
                            Find Out More{" "}
                            <i className="uil uil-angle-right-b"></i>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={app4}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />
                      </Col>

                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <SectionTitleLeft
                            desc="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                            features={this.state.features3}
                            className=""
                          >
                            <h4 className="title mb-4">
                              <i className="uil uil-angle-double-right text-primary"></i>
                              24 / 7 App Supports and Responsive
                            </h4>
                          </SectionTitleLeft>
                          <Link to="#" className="mt-3 h6 text-primary">
                            Find Out More{" "}
                            <i className="uil uil-angle-right-b"></i>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container> */}
        </section>
      </React.Fragment>
    );
  }
}

export default ShowCase;
